import { useMileStonesContext } from 'context/milestones/milestones.ts';
import { useMileStones } from 'hooks/useMileStones.ts';
import { useEffect, useRef } from 'react';
import { MileStoneCard } from 'components/MileStoneCard';
import styles from './MileStonesList.module.css';

const MileStonesList = () => {
  const {
    setMileStones,
    mileStonePage,
    totalMileStonesPages,
    setTotalMileStonesPages,
    setMileStonePage,
    mileStones,
  } = useMileStonesContext();
  const { milestonesResponse, isLoading, error } = useMileStones(mileStonePage);

  const ref = useRef(null);

  const onScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (mileStonePage <= totalMileStonesPages) {
          setMileStonePage((prevState) => prevState + 1);
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
    if (milestonesResponse) {
      console.log(milestonesResponse, 'MileStone');
      setTotalMileStonesPages(milestonesResponse.totalPages);
      setMileStones((prevState) => {
        if (milestonesResponse.items !== undefined) {
          return [...prevState, ...milestonesResponse.items];
        } else {
          return prevState;
        }
      });
    }
  }, [isLoading, error, milestonesResponse, setMileStones, mileStonePage, setTotalMileStonesPages]);

  return (
    <div
      className={styles.list}
      ref={ref}
      onScroll={onScroll}
    >
      {mileStones.map((milestone) => (
        <MileStoneCard
          mileStone={milestone}
          key={milestone.mileStoneId}
        />
      ))}
    </div>
  );
};

export { MileStonesList };
