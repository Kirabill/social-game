import { Text, View } from 'react-native';
import { Button } from '../components/ui/Button';

export const HomeScreen = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <View className="mx-4 rounded-2xl bg-white p-8 shadow-xl">
        <Text className="mb-2 text-center text-4xl font-bold text-gray-900">Game Social</Text>
        <Text className="mb-6 text-center text-lg text-gray-600">Connecte-toi avec tes amis</Text>
        <Button title="Commencer" onPress={handlePress} variant="primary" />
      </View>
    </View>
  );
};
