import React from 'react'
import classNames from 'classnames'

const theme = {
  base: 'inline-flex items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  block: 'w-full',
  size: {
    xl: 'px-6 py-3 rounded-md text-base',
    lg: 'px-4 py-2 rounded-md text-base',
    md: 'px-4 py-2 rounded-md text-sm',
    sm: 'px-3 py-2 rounded-md text-sm',
    xs: 'px-2.5 py-1.5 rounded text-xs',
  },
  icon: {
    xl: '-ml-1 mr-3 h-5 w-5',
    lg: '-ml-1 mr-3 h-5 w-5',
    md: '-ml-1 mr-2 h-5 w-5',
    sm: '-ml-0.5 mr-2 h-4 w-4',
  },
  primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
  secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  white: 'text-gray-700 bg-white hover:bg-gray-50',
  disabled: 'opacity-50 cursor-not-allowed',
}

interface Icon {
  name: string
  position?: 'leading' | 'tailing'
  variant?: 'outline' | 'solid'
}

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant: 'primary' | 'secondary' | 'white'
  disabled: Boolean
  block: boolean
  icon?: Icon
}

const Button = ({
  disabled = false,
  size = 'md',
  variant = 'primary',
  block = false,
  icon,
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
  )

  return (
    <button
      className={styles}
      {...others}
    >
      {children}
    </button>
  )
}

export default Button
