import { FC, PropsWithChildren, useState } from 'react';
import { MileStonesContext } from 'context/milestones/milestones.ts';
import { MileStone } from 'types/types.ts';

const MileStonesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mileStones, setMileStones] = useState<MileStone[]>([]);
  const [mileStonePage, setMileStonePage] = useState(1);
  const [totalMileStonesPages, setTotalMileStonesPages] = useState(1);

  return (
    <MileStonesContext.Provider
      value={{
        setMileStonePage,
        totalMileStonesPages,
        mileStonePage,
        setTotalMileStonesPages,
        setMileStones,
        mileStones,
      }}
    >
      {children}
    </MileStonesContext.Provider>
  );
};

export default MileStonesContextProvider;
