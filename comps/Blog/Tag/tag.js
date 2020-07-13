import styles from '../blog.module.scss';

function Tag(props) {
  return (
    <div
      className={
        `badge rounded-pill pointer px-5 mb-3 mr-3 ${styles.category}  ` +
        (props.active ? styles.active : '')
      }
      onClick={() => props.onClick(props.tag)}
    >
      <p className="mb-0">{props.tag.name}</p>
    </div>
  );
}
export default Tag;
