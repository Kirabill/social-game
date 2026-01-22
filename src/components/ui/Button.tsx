import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-lg px-6 py-3 ${variantStyles[variant]}`}>
      <Text className="text-center font-semibold text-white">{title}</Text>
    </TouchableOpacity>
  );
};
