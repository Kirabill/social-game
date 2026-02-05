import { useWindowDimensions } from 'react-native';

export type Breakpoint = 'base' | 'sm' | 'md';

const BREAKPOINTS = {
  sm: 480,
  md: 768,
} as const;

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const breakpoint: Breakpoint =
    width >= BREAKPOINTS.md ? 'md' : width >= BREAKPOINTS.sm ? 'sm' : 'base';

  const isBase = breakpoint === 'base';
  const isSm = breakpoint === 'sm';
  const isMd = breakpoint === 'md';

  const isSmUp = width >= BREAKPOINTS.sm;
  const isMdUp = width >= BREAKPOINTS.md;

  const isTablet = isMdUp;
  const isMobile = !isTablet;

  return {
    width,
    height,
    breakpoint,
    isBase,
    isSm,
    isMd,
    isSmUp,
    isMdUp,
    isTablet,
    isMobile,
  };
};
