import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { Pressable } from './primitives/Pressable';
import { Text } from './primitives/Text';
import { Icon, IconName } from './Icon';

type ToggleProps = {
  label: string;
  icon?: IconName;
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
};

const TRACK_WIDTH = 46;
const TRACK_HEIGHT = 26;
const THUMB_SIZE = 20;
const THUMB_MARGIN = 3;
const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

export const Toggle = ({ label, icon, value, onValueChange, disabled = false }: ToggleProps) => {
  const progress = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(value ? 1 : 0, {
      damping: 15,
      stiffness: 200,
    });
  }, [value, progress]);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(253, 244, 229, 0.12)', '#b55447']
    );
    return { backgroundColor };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(progress.value * THUMB_TRAVEL, {
          damping: 15,
          stiffness: 200,
        }),
      },
    ],
  }));

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  return (
    <View className="flex-row items-center justify-between py-1.5">
      <View className="flex-row items-center gap-2">
        {icon && <Icon name={icon} size={16} color="rgba(253, 244, 229, 0.6)" />}
        <Text variant="body" color="muted" className="text-sm">
          {label}
        </Text>
      </View>
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        haptic="light"
        scaleOnPress={false}
        accessibilityRole="switch"
        accessibilityState={{ checked: value }}
        className={disabled ? 'opacity-50' : ''}>
        <Animated.View
          style={[trackAnimatedStyle, { width: TRACK_WIDTH, height: TRACK_HEIGHT }]}
          className="rounded-full">
          <Animated.View
            style={[
              thumbAnimatedStyle,
              {
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                top: THUMB_MARGIN,
                left: THUMB_MARGIN,
              },
            ]}
            className="absolute rounded-full bg-cream shadow"
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};
