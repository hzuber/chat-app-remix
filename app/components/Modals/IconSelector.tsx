import { useState } from "react";
import Icons from "../../assets/icons/index"; // Adjust the path as necessary

interface IconSelectionProps {
  onSaveIcon: (selectedIcon: string) => void;
  currentIcon?: string | null; // Optional: the currently selected icon
}

const IconSelection = ({ onSaveIcon, currentIcon }: IconSelectionProps) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(
    currentIcon || null
  );

  // Handle icon selection
  const handleIconSelect = (iconKey: string) => {
    console.log("select", selectedIcon);
    setSelectedIcon(iconKey);
  };

  // Handle form submission or save action
  const handleSave = () => {
    console.log("save", selectedIcon);
    if (selectedIcon) {
      onSaveIcon(selectedIcon);
    }
  };

  return (
    <div>
      <h2>Select an Icon</h2>
      {/* Ensure we're properly typing the map function */}
      {Icons.map((categoryObj, index: number) => {
        // Get the category name and safely cast it to a string
        const categoryName = Object.keys(
          categoryObj
        )[0] as keyof typeof categoryObj;

        // Type cast to access the array of icons safely
        const icons = categoryObj[categoryName] as JSX.Element[];

        return (
          <div key={index}>
            <h3>{categoryName}</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {icons.map((iconElement: JSX.Element) => {
                const iconKey = iconElement.key as string; // Get the key from each icon
                return (
                  <div
                    key={iconKey}
                    onClick={() => handleIconSelect(iconKey)}
                    onKeyDown={() => handleIconSelect(iconKey)}
                    tabIndex={0}
                    role="button"
                    style={{
                      cursor: "pointer",
                      border:
                        selectedIcon === iconKey
                          ? "2px solid blue"
                          : "2px solid transparent",
                      padding: "5px",
                    }}
                  >
                    {iconElement}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <button onClick={handleSave} disabled={!selectedIcon}>
        Save Icon
      </button>
    </div>
  );
};

export default IconSelection;
