import { Bean } from 'types/types.ts';
import { FC } from 'react';
import styles from './BeanCard.module.css';
import { NavLink } from 'react-router-dom';

type Props = {
  bean: Bean;
};

const BeanCard: FC<Props> = ({ bean }) => {
  return (
    <div className={styles.cardWrapper}>
      <NavLink to={`/beans/${bean.beanId}`}>
        <h4>{bean.flavorName}</h4>
      </NavLink>
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
