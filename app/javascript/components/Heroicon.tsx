import * as OutlineIcons from '@heroicons/react/outline'
import * as SolidIcons from '@heroicons/react/solid'
import React from 'react';

export type IconNames = keyof typeof OutlineIcons

export interface Props extends React.SVGProps<SVGSVGElement> {
  icon: IconNames
  variant: 'solid' | 'outline'
}

const Heroicon = ({icon, variant, ...others}: Props) => {
  const Variants = variant === 'solid' ? SolidIcons : OutlineIcons
  const Icon = Variants[icon];
  return <Icon {...others} />
}

export default Heroicon;
