import { Feather } from '@expo/vector-icons';
import { ComponentProps } from 'react';

export type IconName = ComponentProps<typeof Feather>['name'];

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};

export const Icon = ({ name, size = 24, color = '#fdf4e5' }: IconProps) => {
  return <Feather name={name} size={size} color={color} />;
};

// Common icon presets
export const icons = {
  settings: 'settings',
  user: 'user',
  close: 'x',
  check: 'check',
  plus: 'plus',
  minus: 'minus',
  chevronRight: 'chevron-right',
  chevronLeft: 'chevron-left',
  chevronDown: 'chevron-down',
  chevronUp: 'chevron-up',
  bell: 'bell',
  volume: 'volume-2',
  volumeOff: 'volume-x',
  moon: 'moon',
  sun: 'sun',
  smartphone: 'smartphone',
  helpCircle: 'help-circle',
  info: 'info',
  alertCircle: 'alert-circle',
  alertTriangle: 'alert-triangle',
  checkCircle: 'check-circle',
  xCircle: 'x-circle',
  play: 'play',
  pause: 'pause',
  users: 'users',
  trophy: 'award',
  target: 'target',
  star: 'star',
  heart: 'heart',
  share: 'share-2',
  edit: 'edit-2',
  trash: 'trash-2',
  copy: 'copy',
  link: 'link',
  externalLink: 'external-link',
  send: 'send',
  arrowRight: 'arrow-right',
  arrowLeft: 'arrow-left',
  arrowUp: 'arrow-up',
  arrowDown: 'arrow-down',
  refresh: 'refresh-cw',
  loader: 'loader',
  menu: 'menu',
  grid: 'grid',
  list: 'list',
} as const;
