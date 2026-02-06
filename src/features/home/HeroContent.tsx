import { View } from 'react-native';
import { Text } from '../../components/ui/primitives/Text';
import { PlayersOnlineBadge } from '../../components/ui/PlayersOnlineBadge';
import { Stat } from './Stat';
import { ActionButton } from './ActionButton';

type HeroContentProps = {
  isTablet?: boolean;
  onlinePlayersCount?: number;
  onCreateGame: () => void;
  onJoinGame: () => void;
};

export const HeroContent = ({
  isTablet = false,
  onlinePlayersCount = 0,
  onCreateGame,
  onJoinGame,
}: HeroContentProps) => {
  return (
    <View className={`${isTablet ? 'max-w-[420px]' : ''}`}>
      {/* Live Badge */}
      <PlayersOnlineBadge count={onlinePlayersCount} className="mb-4" />

      {/* Title */}
      <Text variant="h1" color="default" className="mb-2.5 text-3xl leading-tight md:text-4xl">
        Défie tes amis.{'\n'}Gagne la partie.
      </Text>

      {/* Subtitle */}
      <Text variant="body" color="muted" className="mb-7 max-w-[360px] text-[15px] leading-relaxed">
        Reçois des défis secrets, valide tes missions, monte au classement. Le jeu social qui crée
        des moments inoubliables.
      </Text>

      {/* Stats */}
      <View className="mb-8 flex-row items-center gap-7">
        <Stat value="24" label="Défis" />
        <View className="h-8 w-px bg-cream-100" />
        <Stat value="4" label="Niveaux" />
        <View className="h-8 w-px bg-cream-100" />
        <Stat value="∞" label="Plaisir" />
      </View>

      {/* Buttons */}
      <View className="w-full max-w-[320px] gap-3">
        <ActionButton
          icon="✦"
          label="Créer une partie"
          description="Inviter tes amis et lancer le défi"
          variant="primary"
          onPress={onCreateGame}
        />
        <ActionButton
          icon="⇪"
          label="Rejoindre une partie"
          description="Entrer un code pour participer"
          variant="secondary"
          onPress={onJoinGame}
        />
      </View>
    </View>
  );
};
