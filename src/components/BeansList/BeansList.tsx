import { BeanCard } from 'components/BeanCard';
import styles from './BeansList.module.css';
import { useEffect, useRef } from 'react';
import { useBeans } from 'hooks/useBeans.ts';
import { useBeansContext } from 'context/beans/beans.ts';

const BeansList = () => {
  const { beanPage, setBeanPage, totalBeansPages, beans, setBeans, setTotalBeansPages } =
    useBeansContext();
  const ref = useRef(null);

  const { beansResponse, error, isLoading } = useBeans(beanPage);
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

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, 'Loading');
    }
    if (error) {
      console.log(error, 'Error');
    }
    if (beansResponse) {
      console.log(beansResponse, 'Beans');
      setTotalBeansPages(beansResponse.totalPages);
      setBeans((prevState) => {
        if (beansResponse.items !== undefined) {
          return [...prevState, ...beansResponse.items];
        } else {
          return prevState;
        }
      });
    }
  }, [beansResponse, error, isLoading, setBeans, beanPage, setTotalBeansPages]);

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
