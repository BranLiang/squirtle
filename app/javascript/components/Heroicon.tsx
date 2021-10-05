import * as OutlineIcons from '@heroicons/react/outline'
import * as SolidIcons from '@heroicons/react/solid'
import React from 'react';

export type IconName = keyof typeof OutlineIcons
export type IconVariant = 'solid' | 'outline'

export interface Props extends React.SVGProps<SVGSVGElement> {
  icon: IconName
  variant: IconVariant
}

const Heroicon = ({icon, variant, ...others}: Props) => {
  const Variants = variant === 'solid' ? SolidIcons : OutlineIcons
  const Icon = Variants[icon];
  return <Icon {...others} />
}

export default Heroicon;
