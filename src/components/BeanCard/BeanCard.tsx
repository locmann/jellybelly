import { Bean } from 'types/types.ts';
import { FC } from 'react';
import styles from './BeanCard.module.css';

type Props = {
  bean: Bean;
};

const BeanCard: FC<Props> = ({ bean }) => {
  return (
    <div className={styles.cardWrapper}>
      <h4>{bean.flavorName}</h4>
      <img
        src={bean.imageUrl}
        alt={bean.flavorName}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <p>{bean.description}</p>
    </div>
  );
};

export { BeanCard };
