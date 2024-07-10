import { useNavigate, useParams } from 'react-router-dom';
import { useBeanInfo } from 'hooks/useBeanInfo.ts';
import { useEffect, useState } from 'react';
import { Bean } from 'types/types.ts';
import styles from './DetailedBean.module.css';

const DetailedBean = () => {
  const { beanId } = useParams();

  const { beanInfo } = useBeanInfo(Number(beanId));
  const [bean, setBean] = useState<Bean>();

  const navigate = useNavigate();

  useEffect(() => {
    if (beanInfo) {
      setBean(beanInfo);
    }
  }, [beanInfo]);

  return (
    <div className={styles.wrapper}>
      {bean && (
        <>
          <h2>{bean.flavorName}</h2>
          <p>{bean.description}</p>
          <img
            src={bean.imageUrl}
            alt="Bean"
          />
          <p>Group Name: {bean.groupName?.map((group) => <span key={group}>{group} </span>)}</p>
          <p>
            Ingredients:{' '}
            {bean.ingredients?.map((ingredient) => <span key={ingredient}>{ingredient} </span>)}
          </p>
          <div className={styles.groupInfo}>
            <p>Color Group: {bean.colorGroup}</p>
            <p style={{ backgroundColor: bean.backgroundColor }}>
              Hexadecimal Color: {bean.backgroundColor}
            </p>
            <p>Bean ID: {bean.beanId}</p>
            <p>Gluten-Free: {bean.glutenFree ? 'Yes' : 'No'}</p>
            <p>Sugar-Free: {bean.sugarFree ? 'Yes' : 'No'}</p>
            <p>Seasonal: {bean.seasonal ? 'Yes' : 'No'}</p>
            <p>Kosher: {bean.kosher ? 'Yes' : 'No'}</p>
          </div>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </div>
  );
};

export { DetailedBean };
