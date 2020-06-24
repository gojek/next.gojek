import Link from 'next/link';
import styles from '../blog.module.scss';

function Tag(props) {
  const { name, slug } = props;
  return (
    <Link href={slug}>
      <a
        className={
          `badge rounded-pill px-5 mb-3 mr-3 ${styles.category}  ` +
          (1 === 0 ? `active ${styles.active}` : '')
        }
      >
        {name}
      </a>
    </Link>
  );
}
export default Tag;
