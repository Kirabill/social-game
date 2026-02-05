import { View } from 'react-native';
import { Text } from '../../components/ui/primitives/Text';

type StatProps = {
  value: string;
  label: string;
};

export const Stat = ({ value, label }: StatProps) => {
  return (
    <View>
      <Text variant="h2" color="default" className="text-2xl font-extrabold">
        {value}
      </Text>
      <Text variant="caption" color="muted" className="mt-0.5 uppercase tracking-wider">
        {label}
      </Text>
    </View>
  );
};
