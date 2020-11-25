import Link from 'next/link';

import styles from '../blog.module.scss';

function Tag(tagData) {
  const { tag, data } = tagData;

  return (
    <div
      key={tag.name}
      className={
        `badge rounded-pill pointer px-4 mb-3 mr-3 ${styles.category}  ` +
        (data.activeTag === tag.slug ? styles.active : '')
      }
      onClick={() => data.onClick(tag.slug)}
    >
      <p className="mb-0">{tag.name}</p>
    </div>
  );
}

function Tags(props) {
  return (
    <div className="mt-5">
      <div className={`pt-5 d-flex flex-wrap mt-5 ${styles.tagList}`}>
        {props.tags.map((tag) => (
          <Tag tag={tag} data={props} />
        ))}
        <div
          key="all"
          className={
            `badge rounded-pill pointer px-4 mb-3 mr-3 ${styles.category}  ` +
            (props.activeTag === 'all' ? styles.active : '')
          }
        >
          <a href="/blog/all" className="mb-0 view-all">
            All
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tags;
