import { Icon } from "types";

export function createIcon(
  icon: string | null | undefined,
  bg: string | null | undefined
): Icon | null {
  const iconObject: Icon | null = {
    icon: icon === undefined ? null : icon,
    background: bg === undefined ? null : bg,
  };
  return iconObject;
}
