import BarLoader from 'react-spinners/BarLoader';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <BarLoader height={4} width={'100vw'} color={'#00aa13'} />
    </div>
  );
};

export default Loader;
