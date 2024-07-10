import { FC, PropsWithChildren, useState } from 'react';
import { Fact } from 'types/types.ts';
import { FactsContext } from 'context/facts/facts.ts';

const FactsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [factPage, setFactPage] = useState(1);
  const [totalFactsPages, setTotalFactsPages] = useState(1);

  return (
    <FactsContext.Provider
      value={{ facts, setFacts, factPage, setFactPage, totalFactsPages, setTotalFactsPages }}
    >
      {children}
    </FactsContext.Provider>
  );
};

export default FactsContextProvider;
