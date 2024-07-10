import { Combination } from 'types/types.ts';
import { FC } from 'react';
import styles from './CombinationCard.module.css';

type Props = {
  combination: Combination;
};

const CombinationCard: FC<Props> = ({ combination }) => {
  return (
    <div className={styles.cardWrapper}>
      <h4>{combination.name}</h4>
      <p>{combination.tag?.map((comb) => comb)}</p>
    </div>
  );
};

export { CombinationCard };
