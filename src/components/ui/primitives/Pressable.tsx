import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useHaptics, HapticType } from '../../../hooks/useHaptics';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type PressableProps = TouchableOpacityProps & {
  haptic?: HapticType | false;
  scaleOnPress?: boolean;
  scaleValue?: number;
};

export const Pressable = ({
  onPress,
  onPressIn,
  onPressOut,
  haptic = 'light',
  scaleOnPress = true,
  scaleValue = 0.97,
  style,
  ...props
}: PressableProps) => {
  const scale = useSharedValue(1);
  const { trigger } = useHaptics();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value, { damping: 15, stiffness: 300 }) }],
  }));

  const handlePressIn = (e: any) => {
    if (scaleOnPress) {
      scale.value = scaleValue;
    }
    onPressIn?.(e);
  };

  const handlePressOut = (e: any) => {
    if (scaleOnPress) {
      scale.value = 1;
    }
    onPressOut?.(e);
  };

  const handlePress = async (e: any) => {
    if (haptic) {
      await trigger(haptic);
    }
    onPress?.(e);
  };

  return (
    <AnimatedTouchable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
      style={[animatedStyle, style]}
      {...props}
    />
  );
};
