import React from 'react';
import classNames from 'classnames';
import Heroicon, { IconNames } from './Heroicon';

const theme = {
  base: 'inline-flex items-center justify-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  block: 'w-full',
  round: 'rounded-full',
  size: {
    xl: 'px-6 py-3 rounded-md text-base',
    lg: 'px-4 py-2 rounded-md text-base',
    md: 'px-4 py-2 rounded-md text-sm',
    sm: 'px-3 py-2 rounded-md text-sm',
    xs: 'px-2.5 py-1.5 rounded text-xs',
  },
  icon: {
    leading: {
      xl: '-ml-1 mr-3 h-5 w-5',
      lg: '-ml-1 mr-3 h-5 w-5',
      md: '-ml-1 mr-2 h-5 w-5',
      sm: '-ml-0.5 mr-2 h-4 w-4',
    },
    tailing: {
      xl: '-mr-1 ml-3 h-5 w-5',
      lg: '-mr-1 ml-3 h-5 w-5',
      md: '-mr-1 ml-2 h-5 w-5',
      sm: '-mr-0.5 ml-2 h-4 w-4',
    }
  },
  primary: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700',
  secondary: 'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  white: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  disabled: 'opacity-50 cursor-not-allowed',
}

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant: 'primary' | 'secondary' | 'white'
  disabled: boolean
  block: boolean
  round: boolean
  icon?: IconNames,
  iconPosition?: 'leading' | 'tailing',
  iconVariant?: 'outline' | 'solid'
}

const Button = ({
  disabled = false,
  size = 'md',
  variant = 'primary',
  block = false,
  round = false,
  icon,
  iconPosition = 'leading',
  iconVariant = 'solid',
  children,
  ...others
}: Props) => {
  const styles = classNames(
    theme.base,
    block && theme.block,
    variant === 'primary' && theme.primary,
    variant === 'secondary' && theme.secondary,
    size === 'xs' && theme.size.xs,
    size === 'sm' && theme.size.sm,
    size === 'md' && theme.size.md,
    size === 'lg' && theme.size.lg,
    size === 'xl' && theme.size.xl,
    disabled && theme.disabled,
    round && theme.round,
  )

  let iconElement: undefined | JSX.Element = undefined;
  if (size !== 'xs' && icon) {
    const iconStyle = classNames(
      size === 'sm' && theme.icon[iconPosition].sm,
      size === 'md' && theme.icon[iconPosition].md,
      size === 'lg' && theme.icon[iconPosition].lg,
      size === 'xl' && theme.icon[iconPosition].xl,
    )
    iconElement = (
      <Heroicon
        icon={icon}
        variant={iconVariant}
        className={iconStyle}
      />
    )
  }

  return (
    <button
      className={styles}
      {...others}
    >
      {icon && iconPosition === 'leading' && iconElement}
      {children}
      {icon && iconPosition === 'tailing' && iconElement}
    </button>
  )
}

export default Button
