import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'error' | 'warning';

const hapticMap: Record<HapticType, () => Promise<void>> = {
  light: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
  medium: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
  heavy: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
  success: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
  error: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
  warning: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning),
};

export const useHaptics = () => {
  const trigger = async (type: HapticType = 'light') => {
    if (Platform.OS === 'web') return;

    try {
      await hapticMap[type]();
    } catch {
      // Silently fail if haptics not supported
    }
  };

  const selection = async () => {
    if (Platform.OS === 'web') return;

    try {
      await Haptics.selectionAsync();
    } catch {
      // Silently fail if haptics not supported
    }
  };

  return {
    trigger,
    selection,
    light: () => trigger('light'),
    medium: () => trigger('medium'),
    heavy: () => trigger('heavy'),
    success: () => trigger('success'),
    error: () => trigger('error'),
    warning: () => trigger('warning'),
  };
};
