import notFound from '../../assets/404.gif';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.notFound}>
    <img src={notFound} alt="confused Travolta" width="50%" />
    <h1>Content not found</h1>
  </div>
);

export default NotFound;
