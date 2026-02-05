import { View } from 'react-native';

export const AmbientBlobs = () => {
  return (
    <>
      <View className="absolute -left-32 -top-28 h-[420px] w-[420px] rounded-full bg-terracotta opacity-[0.18] blur-3xl" />
      <View className="absolute -bottom-20 -right-24 h-[340px] w-[340px] rounded-full bg-terracotta-dark opacity-[0.18] blur-3xl" />
    </>
  );
};
