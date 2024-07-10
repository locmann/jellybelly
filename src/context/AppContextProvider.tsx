import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from 'context/context.ts';
import { Bean, Fact } from 'types/types.ts';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [beans, setBeans] = useState<Bean[]>([]);
  const [beanPage, setBeanPage] = useState(1);
  const [totalBeansPages, setTotalBeansPages] = useState(1);

  const [facts, setFacts] = useState<Fact[]>([]);
  const [factPage, setFactPage] = useState(1);
  const [totalFactsPages, setTotalFactsPages] = useState(1);

  return (
    <AppContext.Provider
      value={{
        beans,
        setBeans,
        beanPage,
        setBeanPage,
        totalBeansPages,
        setTotalBeansPages,
        facts,
        setFacts,
        factPage,
        setFactPage,
        totalFactsPages,
        setTotalFactsPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
