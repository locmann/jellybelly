import { Fact } from 'types/types.ts';
import { FC } from 'react';
import styles from './FactCard.module.css';

type Props = {
  fact: Fact;
};

const FactCard: FC<Props> = ({ fact }) => {
  return (
    <div className={styles.cardWrapper}>
      <h4>
        {fact.factId}) {fact.title}
      </h4>
      <p>{fact.description}</p>
    </div>
  );
};

export { FactCard };
