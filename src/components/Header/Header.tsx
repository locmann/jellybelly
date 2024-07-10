import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.btnList}>
      <NavLink to="/beans">Beans</NavLink>
      <NavLink to="/facts">Facts</NavLink>
      <NavLink to="/beans">Recipes</NavLink>
      <NavLink to="/beans">Combinations</NavLink>
      <NavLink to="/beans">History</NavLink>
    </div>
  );
};

export { Header };
