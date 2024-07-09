import { useBeans } from 'hooks/useBeans.ts';
import { useEffect } from 'react';
import { BeansList } from 'components/BeansList';
import { useAppContext } from 'context/context.ts';

const Beans = () => {
  const { beans, error, isLoading } = useBeans();

  const { setBeans } = useAppContext();

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, 'Loading');
    }
    if (error) {
      console.log(error, 'Error');
    }
    if (beans) {
      console.log(beans, 'Beans');
      setBeans((prevState) => {
        if (beans.items !== undefined) {
          return [...prevState, ...beans.items];
        } else {
          return prevState;
        }
      });
    }
  }, [beans, error, isLoading, setBeans]);

  return <BeansList />;
};

export { Beans };
