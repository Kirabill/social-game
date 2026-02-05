import { View } from 'react-native';
import { Modal, ModalButton } from '../../components/ui/Modal';
import { Input } from '../../components/ui/Input';
import { Toggle } from '../../components/ui/Toggle';
import { Text } from '../../components/ui/primitives/Text';

export type SettingsState = {
  pseudo: string;
  notifications: boolean;
  sound: boolean;
  darkMode: boolean;
  vibrations: boolean;
};

type SettingsModalProps = {
  visible: boolean;
  onClose: () => void;
  settings: SettingsState;
  onSettingsChange: (settings: SettingsState) => void;
  onReset?: () => void;
};

export const SettingsModal = ({
  visible,
  onClose,
  settings,
  onSettingsChange,
  onReset,
}: SettingsModalProps) => {
  const handleChange = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="⚙️ Paramètres"
      footer={
        <>
          <ModalButton title="Annuler" variant="ghost" onPress={onClose} />
          {onReset && <ModalButton title="Réinitialiser" variant="secondary" onPress={onReset} />}
          <ModalButton title="Appliquer" variant="primary" onPress={onClose} />
        </>
      }>
      <Input
        label="Pseudo"
        value={settings.pseudo}
        onChangeText={(text) => handleChange('pseudo', text)}
      />

      <View className="mb-4">
        <Text variant="label" color="muted" className="mb-1.5">
          Langue
        </Text>
        <View className="rounded-xl border border-cream-100 bg-cream-50 px-3.5 py-2.5">
          <Text variant="body" color="default" className="text-sm">
            🇫🇷 Français
          </Text>
        </View>
      </View>

      <Toggle
        icon="bell"
        label="Notifications"
        value={settings.notifications}
        onValueChange={(v) => handleChange('notifications', v)}
      />
      <Toggle
        icon="volume-2"
        label="Son"
        value={settings.sound}
        onValueChange={(v) => handleChange('sound', v)}
      />
      <Toggle
        icon="moon"
        label="Mode sombre"
        value={settings.darkMode}
        onValueChange={(v) => handleChange('darkMode', v)}
      />
      <Toggle
        icon="smartphone"
        label="Vibrations"
        value={settings.vibrations}
        onValueChange={(v) => handleChange('vibrations', v)}
      />
    </Modal>
  );
};
