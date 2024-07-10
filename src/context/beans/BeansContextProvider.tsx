import { FC, PropsWithChildren, useState } from 'react';
import { Bean } from 'types/types.ts';
import { BeansContext } from 'context/beans/beans.ts';

const BeansContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [beans, setBeans] = useState<Bean[]>([]);
  const [beanPage, setBeanPage] = useState(1);
  const [totalBeansPages, setTotalBeansPages] = useState(1);
  return (
    <BeansContext.Provider
      value={{ beans, setBeans, beanPage, setBeanPage, totalBeansPages, setTotalBeansPages }}
    >
      {children}
    </BeansContext.Provider>
  );
};

export default BeansContextProvider;
