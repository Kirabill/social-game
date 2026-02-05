import './globals.css';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1b2934' }}>
        <HomeScreen />
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
