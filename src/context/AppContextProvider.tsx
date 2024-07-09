import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from 'context/context.ts';
import { Bean } from 'types/types.ts';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [beans, setBeans] = useState<Bean[]>([]);

  return <AppContext.Provider value={{ beans, setBeans }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
