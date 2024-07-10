import { useAppContext } from 'context/context.ts';
import { useRef } from 'react';
import styles from './FactsList.module.css';
import { FactCard } from 'components/FactCard';
const FactsList = () => {
  const { facts, factPage, setFactPage, totalFactsPages } = useAppContext();

  const ref = useRef(null);

  const onScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (factPage <= totalFactsPages) {
          setFactPage((prevState) => prevState + 1);
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
      {facts.map((fact) => (
        <FactCard
          fact={fact}
          key={fact.factId}
        />
      ))}
    </div>
  );
};

export { FactsList };
