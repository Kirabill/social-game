import { View } from 'react-native';
import { Modal, ModalButton } from '../../components/ui/Modal';
import { Input } from '../../components/ui/Input';
import { Text } from '../../components/ui/primitives/Text';
import { Avatar } from '../../components/ui/Avatar';
import { ProfileStat } from './ProfileStat';

type ProfileModalProps = {
  visible: boolean;
  onClose: () => void;
  isConnected: boolean;
  onToggleConnect: () => void;
  userName?: string;
  userEmail?: string;
  userStats?: {
    points: number;
    victories: number;
    challenges: number;
  };
};

export const ProfileModal = ({
  visible,
  onClose,
  isConnected,
  onToggleConnect,
  userName = 'Lucas',
  userEmail = 'lucas@email.com',
  userStats = { points: 142, victories: 8, challenges: 23 },
}: ProfileModalProps) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={isConnected ? '👤 Profil' : '👤 Connexion'}
      footer={
        <>
          <ModalButton title="Annuler" variant="ghost" onPress={onClose} />
          {!isConnected && (
            <ModalButton title="Réinitialiser" variant="secondary" onPress={() => {}} />
          )}
          <ModalButton
            title={isConnected ? 'Déconnexion' : 'Connexion'}
            variant="primary"
            onPress={onToggleConnect}
          />
        </>
      }>
      {!isConnected ? (
        <>
          <Input label="Email" placeholder="vous@email.com" keyboardType="email-address" />
          <Input label="Mot de passe" placeholder="••••••••" secureTextEntry />
          <Text variant="body" color="muted" className="mt-2 text-[13px]">
            Pas de compte ?{' '}
            <Text variant="body" color="accent" className="font-semibold">
              {"S'inscrire"}
            </Text>
          </Text>
        </>
      ) : (
        <View className="items-center py-3.5">
          <Avatar name={userName} size="xl" status="online" className="mb-3" />
          <Text variant="h3" color="default">
            {userName}
          </Text>
          <Text variant="body" color="muted" className="mt-0.5 text-[13px]">
            {userEmail}
          </Text>

          <View className="mt-4 flex-row gap-7 border-t border-cream-50 pt-4">
            <ProfileStat value={String(userStats.points)} label="Points" />
            <ProfileStat value={String(userStats.victories)} label="Victoires" />
            <ProfileStat value={String(userStats.challenges)} label="Défis" />
          </View>
        </View>
      )}
    </Modal>
  );
};
