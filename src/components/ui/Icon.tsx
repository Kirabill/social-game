import { View, Text } from 'react-native';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export const Icon = ({ name, size = 24, color = '#000' }: IconProps) => {
  return (
    <View className="items-center justify-center">
      <Text style={{ fontSize: size, color }}>{name}</Text>
    </View>
  );
};
