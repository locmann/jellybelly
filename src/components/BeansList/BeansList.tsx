import { useAppContext } from 'context/context.ts';
import { BeanCard } from 'components/BeanCard';
import styles from './BeansList.module.css';
import { FC, useRef } from 'react';

const BeansList = () => {
  const { beans, beanPage, setBeanPage, totalBeansPages } = useAppContext();
  const ref = useRef(null);
  const onScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (beanPage <= totalBeansPages) {
          setBeanPage((prevState) => prevState + 1);
        }
      }
    }
  };

  return (
    <div
      className={styles.list}
      ref={ref}
      onScroll={onScroll}
    >
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
