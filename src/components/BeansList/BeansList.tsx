import { useAppContext } from 'context/context.ts';
import { BeanCard } from 'components/BeanCard';
import styles from './BeansList.module.css';
const BeansList = () => {
  const { beans } = useAppContext();

  return (
    <div className={styles.list}>
      {beans.map((bean) => (
        <BeanCard
          bean={bean}
          key={bean.beanId}
        />
      ))}
    </div>
  );
};

export { BeansList };
