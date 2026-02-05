import { View } from 'react-native';
import { Text } from '../../components/ui/primitives/Text';

type ProfileStatProps = {
  value: string;
  label: string;
};

export const ProfileStat = ({ value, label }: ProfileStatProps) => {
  return (
    <View className="items-center">
      <Text variant="h3" color="default" className="text-xl font-extrabold">
        {value}
      </Text>
      <Text variant="caption" color="muted" className="mt-0.5 uppercase tracking-wider">
        {label}
      </Text>
    </View>
  );
};
