import { MileStone } from 'types/types.ts';
import { FC } from 'react';
import styles from './MileStoneCard.module.css';

type Props = {
  mileStone: MileStone;
};

const MileStoneCard: FC<Props> = ({ mileStone }) => {
  return (
    <div className={styles.cardWrapper}>
      <h4>{mileStone.year}</h4>
      <p>{mileStone.description}</p>
      <p>→</p>
    </div>
  );
};

export { MileStoneCard };
