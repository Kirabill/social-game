import {
  Modal as RNModal,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { ReactNode, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { Text } from './primitives/Text';
import { IconButton } from './IconButton';
import { Button, ButtonVariant } from './Button';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export const Modal = ({ visible, onClose, title, children, footer }: ModalProps) => {
  const backdropOpacity = useSharedValue(0);
  const translateY = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    if (visible) {
      backdropOpacity.value = withTiming(1, { duration: 180 });
      translateY.value = withSpring(0, {
        damping: 28,
        stiffness: 180,
        mass: 0.8,
      });
    } else {
      backdropOpacity.value = withTiming(0, { duration: 120 });
      translateY.value = withTiming(SCREEN_HEIGHT, { duration: 180 });
    }
  }, [visible, backdropOpacity, translateY]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  const modalStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleClose = () => {
    backdropOpacity.value = withTiming(0, { duration: 120 });
    translateY.value = withTiming(SCREEN_HEIGHT, { duration: 180 }, () => {
      runOnJS(onClose)();
    });
  };

  if (!visible) return null;

  return (
    <RNModal visible={visible} transparent statusBarTranslucent onRequestClose={handleClose}>
      <View className="flex-1 items-center justify-center">
        {/* Backdrop */}
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View style={backdropStyle} className="absolute inset-0 bg-black/60" />
        </TouchableWithoutFeedback>

        {/* Modal Content */}
        <Animated.View
          style={modalStyle}
          className="w-[90%] max-w-[390px] overflow-hidden rounded-2xl border border-cream-50 bg-surface/95">
          {/* Header */}
          <View className="flex-row items-center justify-between px-5 pb-2.5 pt-5">
            <Text variant="h3" color="default">
              {title}
            </Text>
            <IconButton
              icon="x"
              onPress={handleClose}
              variant="ghost"
              size="sm"
              accessibilityLabel="Fermer"
            />
          </View>

          {/* Body */}
          <ScrollView
            className="max-h-[300px] px-5 pb-3.5 pt-1.5"
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>

          {/* Footer */}
          {footer && (
            <View className="flex-row justify-end gap-2 border-t border-cream-50 px-5 pb-5 pt-4">
              {footer}
            </View>
          )}
        </Animated.View>
      </View>
    </RNModal>
  );
};

type ModalButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
};

export const ModalButton = ({ title, onPress, variant = 'primary' }: ModalButtonProps) => {
  return <Button title={title} onPress={onPress} variant={variant} size="sm" />;
};
