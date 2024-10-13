import React, { useState } from "react";
import Icons from "../../assets/profile-icons/icons/index";
import { Icon } from "types";
import { UserIcon } from "../UserIcon";

interface IconSelectionProps {
  onIconSelect: (selectedIcon: string) => void;
  onBackgroundSelect: (selectedBackground: string) => void;
  currentIcon?: Icon | null; // Optional: the currently selected icon
}

const backgroundColors = [
  "none",
  "bg-white hover:opacity-70",
  "bg-stone-950 hover:bg-stone-800",
  "bg-red-600 hover:bg-red-500",
  "bg-orange-500 hover:bg-orange-400",
  "bg-yellow-300 hover:bg-yellow-200",
  "bg-lime-400 hover:bg-lime-300",
  "bg-green-700 hover:bg-green-600",
  "bg-teal-500 hover:bg-teal-400",
  "bg-cyan-400 hover:bg-cyan-300",
  "bg-sky-500 hover:bg-sky-400",
  "bg-blue-600 hover:bg-blue-500",
  "bg-violet-600 hover:bg-violet-700",
  "bg-purple-400 hover:bg-purple-300",
  "bg-pink-300 hover:bg-pink-200",
  "bg-rose-600 hover:bg-rose-500",
  "bg-neutral-400 hover:bg-neutral-300",
];

const IconSelection = ({
  currentIcon,
  onIconSelect,
  onBackgroundSelect,
}: IconSelectionProps) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(
    currentIcon?.icon || null
  );
  const [selectedBackground, setSelectedBackground] = useState<string | null>(
    currentIcon?.background || null
  );

  // Handle icon selection
  const handleIconSelect = (iconKey: string) => {
    setSelectedIcon(iconKey);
    console.log("select", selectedIcon);
    onIconSelect(iconKey);
  };

  // Handle icon selection
  const handleBackgroundSelect = (bg: string) => {
    setSelectedBackground(bg);
    console.log("select", bg);
    onBackgroundSelect(bg);
  };

  return (
    <div>
      <div className="flex w-full mb-6">
        <UserIcon icon={selectedIcon} background={selectedBackground} />
      </div>
      <div>
        {Icons.map((categoryObj, index: number) => {
          const categoryName = Object.keys(
            categoryObj
          )[0] as keyof typeof categoryObj;

          const icons = categoryObj[categoryName] as JSX.Element[];

          return (
            <div key={index}>
              <h6>{categoryName}</h6>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  padding: "10px 0",
                }}
              >
                {icons.map((iconElement: JSX.Element) => {
                  const iconKey = iconElement.key as string; // Get the key from each icon
                  const iconClassNames = `max-w-16 max-h-16 flex justify-center items-center rounded-full p-4 hover:opacity-75 bg-slate-100 border-2 border-solid ${
                    selectedIcon === iconKey
                      ? "border-black"
                      : "border-transparent"
                  }`;
                  return (
                    <div
                      key={iconKey}
                      onClick={() => handleIconSelect(iconKey)}
                      onKeyDown={() => handleIconSelect(iconKey)}
                      tabIndex={0}
                      role="button"
                      className={iconClassNames}
                    >
                      {React.cloneElement(iconElement, {
                        width: "40",
                        height: "40",
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <h5>Background color:</h5>
        {/* Ensure we're properly typing the map function */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {backgroundColors.map((color: string, index) => {
            //   const additionalClass =
            //     color === "none"
            //       ? "pattern-rectangles pattern-gray-500 pattern-bg-white pattern-size-6 pattern-opacity-20"
            //       : "";
            return (
              <div
                key={index}
                onClick={() => handleBackgroundSelect(color)}
                onKeyDown={() => handleBackgroundSelect(color)}
                tabIndex={0}
                role="button"
                className={`max-w-16 max-h-16 flex justify-center items-center rounded-full p-4 ${color}  border-2 border-solid ${
                  selectedBackground === color
                    ? "border-black"
                    : color === "none"
                    ? "border-slate-400 "
                    : "border-transparent"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IconSelection;
