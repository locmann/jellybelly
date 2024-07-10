import { FC, PropsWithChildren, useState } from 'react';
import { CombinationsContext } from 'context/combinations/combinations.ts';
import { Combination } from 'types/types.ts';

const CombinationsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [combinationPage, setCombinationPage] = useState(1);
  const [totalCombinationsPages, setTotalCombinationsPages] = useState(1);

  return (
    <CombinationsContext.Provider
      value={{
        combinations,
        setCombinations,
        setCombinationPage,
        combinationPage,
        setTotalCombinationsPages,
        totalCombinationsPages,
      }}
    >
      {children}
    </CombinationsContext.Provider>
  );
};

export default CombinationsContextProvider;
