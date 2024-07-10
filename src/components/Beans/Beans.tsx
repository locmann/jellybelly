import { useBeans } from 'hooks/useBeans.ts';
import { useEffect } from 'react';
import { BeansList } from 'components/BeansList';
import { useAppContext } from 'context/context.ts';

const Beans = () => {
  const { setBeans, beanPage, setTotalBeansPages } = useAppContext();

  const { beans, error, isLoading } = useBeans(beanPage);

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, 'Loading');
    }
    if (error) {
      console.log(error, 'Error');
    }
    if (beans) {
      console.log(beans, 'Beans');
      setTotalBeansPages(beans.totalPages);
      setBeans((prevState) => {
        if (beans.items !== undefined) {
          return [...prevState, ...beans.items];
        } else {
          return prevState;
        }
      });
    }
  }, [beans, error, isLoading, setBeans, beanPage]);

  return <BeansList />;
};

export { Beans };
