import Tag from './tag';
import styles from '../blog.module.scss';

function Tags(props) {
  return (
    <div className="mt-5">
      <div className={`pt-5 d-flex flex-wrap mt-5 ${styles.tagList}`}>
        {props.tags.map((tag) => (
          <div
            key={tag.name}
            className={
              `badge rounded-pill pointer px-5 mb-3 mr-3 ${styles.category}  ` +
              (props.active ? styles.active : '')
            }
            onClick={() => props.onClick(tag.slug)}
          >
            <p className="mb-0">{tag.name}</p>
          </div>
        ))}
        <Tag tag={{ name: 'All' }} />
      </div>
    </div>
  );
}

export default Tags;
