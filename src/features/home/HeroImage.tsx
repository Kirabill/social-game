import { View, Image } from 'react-native';
import { Text } from '../../components/ui/primitives/Text';

type HeroImageProps = {
  isTablet?: boolean;
};

export const HeroImage = ({ isTablet = false }: HeroImageProps) => {
  return (
    <View
      className={`relative mb-8 ${isTablet ? 'w-[30%] min-w-[280px] max-w-[380px]' : 'w-full max-w-[320px] self-center'}`}>
      {/* Glow effect */}
      <View className="absolute -inset-8 rounded-[32px] bg-terracotta-50 blur-2xl" />

      {/* Image Frame */}
      <View className="relative overflow-hidden rounded-3xl border border-cream-100 shadow-2xl">
        <Image
          source={{
            uri: 'https://img.freepik.com/vecteurs-libre/personnes-celebrant-illustration-du-festival-holi_23-2148865814.jpg',
          }}
          className="h-[200px] w-full md:h-[280px]"
          resizeMode="cover"
        />

        {/* Corner decorations */}
        <View className="absolute left-1 top-1 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-terracotta-200" />
        <View className="absolute right-1 top-1 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-terracotta-200" />
        <View className="absolute bottom-1 left-1 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-terracotta-200" />
        <View className="absolute bottom-1 right-1 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-terracotta-200" />
      </View>

      {/* Floating Badge */}
      <View className="absolute -right-3 bottom-4 flex-row items-center gap-2.5 rounded-xl border border-cream-100 bg-background/85 px-4 py-2.5 shadow-xl">
        <Text className="text-xl">🏆</Text>
        <View>
          <Text variant="body" color="default" className="text-base font-extrabold">
            +250 pts
          </Text>
          <Text variant="caption" color="muted" className="uppercase tracking-wider">
            Meilleur score
          </Text>
        </View>
      </View>
    </View>
  );
};
