import { Combination } from 'types/types.ts';
import { FC } from 'react';

type Props = {
  combination: Combination;
};

const CombinationCard: FC<Props> = ({ combination }) => {
  return (
    <div>
      <h4>{combination.name}</h4>
      <p>{combination.tag?.map((comb) => comb)}</p>
    </div>
  );
};

export { CombinationCard };
