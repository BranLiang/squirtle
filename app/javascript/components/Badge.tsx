import React, { useState } from "react";
import classNames from "classnames";

const theme = {
  base: 'inline-flex items-center font-medium',
  variant: {
    primary: 'indigo',
    success: 'green',
    danger: 'red',
    warning: 'yellow',
    neutral: 'gray',
  },
  size: {
    sm: 'px-2.5 py-0.5 text-xs',
    lg: 'px-3 py-0.5 text-sm',
  },
  removable: {
    sm: 'py-0.5 pl-2 pr-0.5 text-xs',
    lg: 'py-0.5 pl-2.5 pr-1 text-sm',
  },
  dot: {
    base: 'h-2 w-2',
    sm: '-ml-0.5 mr-1.5',
    lg: '-ml-1 mr-1.5',
  },
  rounded: 'rounded-md',
  full: 'rounded-full'
}

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'lg'
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral'
  rounded?: boolean
  dot?: boolean
  removable?: boolean
}

const Badge = ({
  children,
  size = 'sm',
  variant = 'neutral',
  rounded = false,
  dot = false,
  removable = false,
}: Props) => {
  const [removed, setRemoved] = useState(false);
  if (removed) {
    return <></>;
  }
  const color = theme.variant[variant];
  const styles = classNames(
    theme.base,
    `bg-${color}-100 text-${color}-800`,
    !removable && theme.size[size],
    removable && theme.removable[size],
    rounded ? theme.rounded : theme.full,
  )

  let Dot: JSX.Element | undefined = undefined;
  if (dot) {
    const dotStyles = classNames(
      theme.dot.base,
      theme.dot[size],
      `text-${color}-400`
    )
    Dot = (
      <svg className={dotStyles} fill="currentColor" viewBox="0 0 8 8">
        <circle cx={4} cy={4} r={3} />
      </svg>
    )
  }

  let removeElement: JSX.Element | undefined = undefined;
  if (removable) {
    const handleRemove = () => {
      setRemoved(true);
    }
    removeElement = (
      <button
        type="button"
        className={`flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-${color}-400 hover:bg-${color}-200 hover:text-${color}-500 focus:outline-none focus:bg-${color}-500 focus:text-white`}
        onClick={handleRemove}
      >
        <span className="sr-only">Remove</span>
        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    )
  }

  return (
    <span className={styles}>
      {dot && Dot}
      {children}
      {removable && removeElement}
    </span>
  )
}

export default Badge;