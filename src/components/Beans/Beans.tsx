import { BeansList } from 'components/BeansList';
import BeansContextProvider from 'context/beans/BeansContextProvider.tsx';

const Beans = () => {
  return (
    <BeansContextProvider>
      <BeansList />
    </BeansContextProvider>
  );
};

export { Beans };
