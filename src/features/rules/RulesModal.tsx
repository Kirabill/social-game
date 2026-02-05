import { View } from 'react-native';
import { Modal, ModalButton } from '../../components/ui/Modal';
import { Text } from '../../components/ui/primitives/Text';

type RulesModalProps = {
  visible: boolean;
  onClose: () => void;
};

const RULES = [
  {
    icon: '🎯',
    title: 'Reçois des défis',
    desc: 'secrets via notification. Chaque défi a un niveau de difficulté unique.',
  },
  {
    icon: '✅',
    title: 'Valide tes défis',
    desc: 'et demande la validation à un autre joueur si nécessaire.',
  },
  {
    icon: '📢',
    title: 'Envoie des notifications',
    desc: 'à tes coéquipiers pour les alerter ou les provoquer.',
  },
  {
    icon: '⭐',
    title: 'Accumule des points.',
    desc: 'Plus le défi est difficile, plus les points sont élevés.',
  },
  {
    icon: '🏆',
    title: 'Le classement',
    desc: 'est mis à jour en temps réel — mais caché la plupart du temps !',
  },
  {
    icon: '⏸️',
    title: 'Pause possible',
    desc: "à tout moment. Le jeu reprend où vous l'avez laissé.",
  },
  {
    icon: '🤝',
    title: 'Défis collaboratifs',
    desc: '— parfois vous devrez vous allier pour relever un défi ensemble.',
  },
];

export const RulesModal = ({ visible, onClose }: RulesModalProps) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="🎮 Comment jouer ?"
      footer={<ModalButton title="Fermer" variant="ghost" onPress={onClose} />}>
      {RULES.map((rule, index) => (
        <View
          key={index}
          className={`flex-row gap-3 py-2.5 ${index < RULES.length - 1 ? 'border-b border-cream-50' : ''}`}>
          <Text className="text-xl">{rule.icon}</Text>
          <Text variant="body" color="muted" className="flex-1 text-[13px] leading-relaxed">
            <Text variant="body" className="font-bold text-cream-800">
              {rule.title}
            </Text>{' '}
            {rule.desc}
          </Text>
        </View>
      ))}
    </Modal>
  );
};
