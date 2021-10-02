import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
  type?: "primary" | "secondary",
  size?: "xs" | "sm" | "md" | "lg" | "xl",
  label: String,
}

export function Button({
  label,
  type = "primary",
  size = "md",
}: Props) {
  let styles = [];
  const primaryColor = 'indigo';

  switch (type) {
    case "primary":
      styles.push('text-white', `bg-${primaryColor}-600`, `hover:bg-${primaryColor}-700`, `focus:ring-${primaryColor}-500`);
      break;
    case "secondary":
      styles.push(`text-${primaryColor}-700`, `bg-${primaryColor}-100`, `hover:bg-${primaryColor}-200`);
      break;
    default:
      throw new Error(`Unsupported button type: ${type}.`)
  }

  switch (size) {
    case "xs":
      styles.push('text-xs', 'px-2.5', 'py-1.5', 'rounded');
      break;
    case "sm":
      styles.push('text-sm', 'px-3', 'py-2', 'rounded-md');
      break;
    case "md":
      styles.push('text-sm', 'px-4', 'py-2', 'rounded-md');
      break;
    case 'lg':
      styles.push('text-base', 'px-4', 'py-2', 'rounded-md');
      break;
    case 'xl':
      styles.push('text-base', 'px-6', 'py-3', 'rounded-md');
      break;
    default:
      throw new Error(`Unsupported size: ${size}.`)
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.join(' ')}`}
    >
      {label}
    </button>
  )
}