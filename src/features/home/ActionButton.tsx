import { View } from 'react-native';
import { Pressable } from '../../components/ui/primitives/Pressable';
import { Text } from '../../components/ui/primitives/Text';

type ActionButtonProps = {
  icon: string;
  label: string;
  description: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
};

export const ActionButton = ({ icon, label, description, variant, onPress }: ActionButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      haptic="medium"
      className={`min-h-touch flex-row items-center gap-3 rounded-xl px-5 py-4 ${
        isPrimary
          ? 'bg-terracotta shadow-lg shadow-terracotta-200'
          : 'border border-cream-100 bg-cream-50'
      }`}>
      <View
        className={`h-9 w-9 items-center justify-center rounded-xl ${
          isPrimary ? 'bg-cream/20' : 'bg-cream-50'
        }`}>
        <Text className="text-lg">{icon}</Text>
      </View>
      <View className="flex-1">
        <Text
          variant="body"
          className={`text-[15px] font-bold ${isPrimary ? 'text-cream' : 'text-cream-800'}`}>
          {label}
        </Text>
        <Text
          variant="caption"
          className={`mt-0.5 ${isPrimary ? 'text-cream/60' : 'text-cream-400'}`}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
};
