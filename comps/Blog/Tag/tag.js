import styles from '../blog.module.scss';

function Tag(props) {
  return (
    <div
      className={
        `badge rounded-pill px-5 mb-3 mr-3 ${styles.category}  ` +
        (1 === 0 ? `active ${styles.active}` : '')
      }
      onClick={() => props.changeTag(props.tag)}
    >
      <p className="mb-0">{props.tag.name}</p>
    </div>
  );
}
export default Tag;
