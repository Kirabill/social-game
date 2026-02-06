import { Badge } from './Badge';

type PlayersOnlineBadgeProps = {
  count: number;
  className?: string;
};

export const PlayersOnlineBadge = ({ count, className = '' }: PlayersOnlineBadgeProps) => {
  const label = count === 1 ? '1 joueur en ligne' : `${count} joueurs en ligne`;

  return <Badge label={label} variant="accent" dot className={className} />;
};
