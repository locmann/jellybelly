import MileStonesContextProvider from 'context/milestones/MileStonesContextProvider.tsx';
import { MileStonesList } from 'components/MileStonesList';

const MileStones = () => {
  return (
    <MileStonesContextProvider>
      <MileStonesList />
    </MileStonesContextProvider>
  );
};

export { MileStones };
