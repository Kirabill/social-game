import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import { Header } from '../components/layout/Header';
import { HelpButton } from '../components/ui/HelpButton';
import { AmbientBlobs, HeroImage, HeroContent } from '../features/home';
import { SettingsModal, SettingsState } from '../features/settings';
import { ProfileModal } from '../features/profile';
import { RulesModal } from '../features/rules';

export const HomeScreen = () => {
  const { isTablet } = useResponsive();

  // Modals state
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);

  // Settings state
  const [settings, setSettings] = useState<SettingsState>({
    pseudo: 'Lucas',
    notifications: true,
    sound: true,
    darkMode: true,
    vibrations: true,
  });

  // Auth state
  const [isConnected, setIsConnected] = useState(false);

  const handleCreateGame = () => {
    console.log('Create game');
  };

  const handleJoinGame = () => {
    console.log('Join game');
  };

  return (
    <View className="flex-1 bg-background">
      {/* Ambient Blobs */}
      <AmbientBlobs />

      {/* Header */}
      <Header
        onSettingsPress={() => setSettingsVisible(true)}
        onProfilePress={() => setProfileVisible(true)}
      />

      {/* Main Content */}
      <ScrollView className="flex-1" contentContainerClassName="flex-grow">
        <View
          className={`flex-1 px-4 py-6 md:px-8 md:py-12 ${
            isTablet ? 'flex-row items-center justify-center gap-12' : ''
          }`}>
          {/* Hero Image - First on mobile */}
          {!isTablet && <HeroImage isTablet={false} />}

          {/* Content */}
          <HeroContent
            isTablet={isTablet}
            onCreateGame={handleCreateGame}
            onJoinGame={handleJoinGame}
          />

          {/* Hero Image - Right on tablet */}
          {isTablet && <HeroImage isTablet />}
        </View>
      </ScrollView>

      {/* Helper Button */}
      <HelpButton onPress={() => setRulesVisible(true)} className="absolute bottom-7 right-7" />

      {/* Settings Modal */}
      <SettingsModal
        visible={settingsVisible}
        onClose={() => setSettingsVisible(false)}
        settings={settings}
        onSettingsChange={setSettings}
      />

      {/* Profile Modal */}
      <ProfileModal
        visible={profileVisible}
        onClose={() => setProfileVisible(false)}
        isConnected={isConnected}
        onToggleConnect={() => setIsConnected(!isConnected)}
      />

      {/* Rules Modal */}
      <RulesModal visible={rulesVisible} onClose={() => setRulesVisible(false)} />
    </View>
  );
};
