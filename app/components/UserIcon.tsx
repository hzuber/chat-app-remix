import React, { useEffect, useState } from "react";
import Icons from "../assets/profile-icons/icons/index";
import Person from "~/assets/svgs/person";

interface IconProps {
  icon: string | null;
  background: string | null;
  width?: string;
  height?: string;
  padding?: string;
}

export const UserIcon = ({
  icon,
  background,
  width,
  height,
  padding,
}: IconProps) => {
  const [userIcon, setUserIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    Icons.map((categoryObj) => {
      const categoryName = Object.keys(
        categoryObj
      )[0] as keyof typeof categoryObj;

      const icons = categoryObj[categoryName] as JSX.Element[];
      icons.map((iconElement: JSX.Element) => {
        const iconKey = iconElement.key as string;
        if (iconKey === icon) {
          setUserIcon(iconElement);
        }
      });
    });
  }, [icon, background]);
  return (
    <div
      className={` flex justify-center items-center rounded-full ${background} ${
        padding ? padding : "p-3"
      }`}
    >
      {userIcon ? (
        React.cloneElement(userIcon, {
          width: width,
          height: height,
        })
      ) : (
        <Person width={width} height={height} />
      )}
    </div>
  );
};
