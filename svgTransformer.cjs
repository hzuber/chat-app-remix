const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Directory paths for SVGs and output TSX files
const svgDirectory = "./app/assets/profile-icons/svgs"; // directory where your SVG files are located
const tsxDirectory = "./app/assets/profile-icons/icons"; // directory to save generated TSX files
const convertedSvgDirectory = "./app/assets/profile-icons/converted-svgs";
const iconsIndexFile = path.join(tsxDirectory, "index.tsx");

// Ensures output directory exists
if (!fs.existsSync(tsxDirectory)) {
  fs.mkdirSync(tsxDirectory);
}

if (!fs.existsSync(convertedSvgDirectory)) {
  fs.mkdirSync(convertedSvgDirectory);
}

// Helper function to convert camelCase to PascalCase for component names
const toPascalCase = (str) =>
  str.replace(/(^\w|-\w)/g, (clear) => clear.replace(/-/, "").toUpperCase());

// Function to convert style string into individual attributes
const convertStyleToAttributes = (styleString) => {
  if (!styleString) return "";

  const styles = styleString.split(";");
  const attributes = styles.map((style) => {
    const [key, value] = style.split(":");
    if (!key || !value) return null;

    const jsxKey = key
      .trim()
      .replace(/-(.)/g, (_, group1) => group1.toUpperCase());
    return `${jsxKey}="${value.trim()}"`;
  });

  return attributes.filter(Boolean).join(" ");
};

const wrapStyleContentInBackticks = (svgElement) => {
  svgElement.querySelectorAll("style").forEach((styleTag) => {
    const styleContent = styleTag.textContent || "";
    styleTag.textContent = `{ \`${styleContent.trim()}\` }`;
  });
};

// Function to convert SVG content into TSX component
const convertSVGtoTSX = (svgContent, componentName) => {
  const dom = new JSDOM(svgContent);
  const svgElement = dom.window.document.querySelector("svg");

  svgElement.removeAttribute("width");
  svgElement.removeAttribute("height");

  svgElement.querySelectorAll("[style]").forEach((el) => {
    const styleAttr = el.getAttribute("style");
    const jsxAttributes = convertStyleToAttributes(styleAttr);
    el.removeAttribute("style");

    jsxAttributes.split(" ").forEach((attribute) => {
      const [name, value] = attribute.split("=");
      el.setAttribute(name, value.replace(/['"]/g, ""));
    });
  });

  wrapStyleContentInBackticks(svgElement);

  const innerSVG = svgElement.outerHTML;

  return `
    interface SVGProps {
      width?: string;
      height?: string;
      fill?: string;
    }

    const ${componentName} = ({ width, height, fill }: SVGProps) => {
      return (
        ${innerSVG
          .replace(
            /<svg/g,
            `<svg width={width || "100"} height={height || "100"} fill={fill || "currentColor"} `
          )
          .replace(/class=/g, "className=")}
      );
    };

    export default ${componentName};
  `;
};

const moveConvertedSVG = (oldPath, relativeDir) => {
  const newDir = path.join(convertedSvgDirectory, relativeDir);
  const newPath = path.join(newDir, path.basename(oldPath));

  fs.mkdirSync(newDir, { recursive: true });

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error moving SVG file ${oldPath}:`, err);
    } else {
      console.log(`Successfully moved ${oldPath} to ${newPath}`);
    }
  });
};

// Function to update the `index.tsx` file
const updateIndexFile = (category, componentName, relativePath) => {
  let imports = "";
  let categories = {};

  // Initialize with an empty template if the file doesn't exist
  if (!fs.existsSync(iconsIndexFile)) {
    fs.writeFileSync(
      iconsIndexFile,
      `const Icons = [];\nexport default Icons;`
    );
  }

  const existingContent = fs.readFileSync(iconsIndexFile, "utf8");

  // Extract existing imports
  const importRegex = /import (.*?) from "(.*?)";/g;
  let match;

  while ((match = importRegex.exec(existingContent)) !== null) {
    imports += match[0] + "\n";
  }

  // Find or create the category block in the `Icons` array
  let categoriesBlock = existingContent.match(/const Icons = \[(.*?)\];/s);
  if (categoriesBlock) {
    categoriesBlock = categoriesBlock[1];
  } else {
    categoriesBlock = "";
  }

  // Add new import
  const newImport = `import ${componentName} from "${relativePath}";\n`;
  imports += newImport;

  // Check if the category exists
  let categoryExists = new RegExp(`\\{\\s*${category}:\\s*\\[`, "s").test(
    categoriesBlock
  );
  let newCategoryBlock = "";

  if (categoryExists) {
    // If category exists, add the new component within the existing category
    newCategoryBlock = categoriesBlock.replace(
      new RegExp(`(\\{\\s*${category}:\\s*\\[)([^\\]]*)`, "s"),
      (_, prefix, components) =>
        `${prefix}${components.trim()}, <${componentName} key="${componentName}" />`
    );
  } else {
    // If category doesn't exist, add a new category block
    newCategoryBlock = `${categoriesBlock}\n  { ${category}: [\n    <${componentName} key="${componentName}" />\n  ] },`;
  }

  // Build the updated content
  const updatedContent = `
${imports}

const Icons = [
${newCategoryBlock}
];

export default Icons;
  `;

  // Write the updated content back to the file
  fs.writeFileSync(iconsIndexFile, updatedContent.trim());
};

// Recursive function to process SVG files
const processSVGFiles = (dir, relativeDir = "") => {
  console.log(`Reading directory: ${dir}`); // Add logging here to see the directories being processed

  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dir, file.name);
      const relativeFilePath = path.join(relativeDir, file.name);

      if (file.isDirectory()) {
        console.log("Directory:", file.name, fullPath); // Logging the directory being processed
        processSVGFiles(fullPath, path.join(relativeDir, file.name));
      } else if (path.extname(file.name) === ".svg") {
        console.log("Processing SVG file:", file.name, fullPath); // Logging the file being processed
        const componentName = toPascalCase(path.basename(file.name, ".svg"));
        const category = toPascalCase(
          path.dirname(relativeFilePath).split(path.sep).pop()
        );

        // Read the SVG file content
        fs.readFile(fullPath, "utf8", (err, svgContent) => {
          if (err) {
            console.error(`Error reading SVG file ${file.name}:`, err);
            return;
          }

          // Convert SVG content to TSX component
          const tsxContent = convertSVGtoTSX(svgContent, componentName);

          // Define the path for the TSX file inside the output subfolder
          const outputDir = path.join(tsxDirectory, relativeDir);
          const tsxPath = path.join(outputDir, `${componentName}.tsx`);

          // Ensure the output subfolder exists
          fs.mkdirSync(outputDir, { recursive: true });

          // Save the TSX component to the output directory
          fs.writeFile(tsxPath, tsxContent, (err) => {
            if (err) {
              console.error(`Error writing TSX file ${tsxPath}:`, err);
            } else {
              console.log(
                `Successfully created ${componentName}.tsx in ${outputDir}`
              );

              // Move the original SVG file to the converted-svgs directory
              moveConvertedSVG(fullPath, relativeDir);

              // Update index.tsx file
              updateIndexFile(
                category,
                componentName,
                `./${relativeFilePath.replace(/\\/g, "/").replace(".svg", "")}`
              );
            }
          });
        });
      } else {
        console.log("Not an SVG file, skipping:", file.name); // Skipping non-SVG files
      }
    });
  });
};

processSVGFiles(svgDirectory);
