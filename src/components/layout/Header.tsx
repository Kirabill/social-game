import { View } from 'react-native';
import { Text } from '../ui/primitives/Text';
import { IconButton } from '../ui/IconButton';

type HeaderProps = {
  onSettingsPress: () => void;
  onProfilePress: () => void;
};

export const Header = ({ onSettingsPress, onProfilePress }: HeaderProps) => {
  return (
    <View className="flex-row items-center justify-between border-b border-cream-50 bg-background/75 px-4 py-4">
      {/* Logo */}
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-terracotta shadow-lg shadow-terracotta-200">
          <Text className="text-xl">🎯</Text>
        </View>
        <Text variant="h3" color="default" className="text-xl font-extrabold">
          ChallengO
        </Text>
      </View>

      {/* Right Buttons */}
      <View className="flex-row gap-2.5">
        <IconButton icon="settings" onPress={onSettingsPress} accessibilityLabel="Paramètres" />
        <IconButton icon="user" onPress={onProfilePress} accessibilityLabel="Profil" />
      </View>
    </View>
  );
};
