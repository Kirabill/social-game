import { useState } from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { Text } from './primitives/Text';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  helperText?: string;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const Input = ({ label, error, helperText, onFocus, onBlur, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusProgress = useSharedValue(0);

  const animatedBorderStyle = useAnimatedStyle(() => {
    const borderColor = error
      ? '#ef4444'
      : interpolateColor(focusProgress.value, [0, 1], ['rgba(253, 244, 229, 0.12)', '#b55447']);

    return {
      borderColor,
      borderWidth: 1,
    };
  });

  const handleFocus = (e: any) => {
    setIsFocused(true);
    focusProgress.value = withTiming(1, { duration: 200 });
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    focusProgress.value = withTiming(0, { duration: 200 });
    onBlur?.(e);
  };

  return (
    <View className="mb-4">
      {label && (
        <Text
          variant="label"
          color={error ? 'error' : isFocused ? 'accent' : 'muted'}
          className="mb-1.5">
          {label}
        </Text>
      )}
      <AnimatedView style={animatedBorderStyle} className="overflow-hidden rounded-xl bg-cream-50">
        <TextInput
          className="w-full px-3.5 py-2.5 text-sm text-cream-600"
          placeholderTextColor="rgba(253, 244, 229, 0.35)"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </AnimatedView>
      {error && (
        <Text variant="caption" color="error" className="mt-1">
          {error}
        </Text>
      )}
      {helperText && !error && (
        <Text variant="caption" color="muted" className="mt-1">
          {helperText}
        </Text>
      )}
    </View>
  );
};
