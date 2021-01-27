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
      {data.page === 'blog' && <p className="mb-0">{tag.name}</p>}
      {(data.page === 'all-blogs' || data.page === 'tags') && (
        <a href={`/blog/tag/${tag.slug}`} className="mb-0">
          {tag.name}
        </a>
      )}
    </div>
  );
}

function Tags(props) {
  return (
    <div className={`pt-5 pb-4 d-flex ${styles.tagList}`}>
      {props.tags.map((tag, key) => (
        <Tag tag={tag} data={props} key={key} />
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
      <span style={{ lineHeight: '2.25rem', color: '#b5b2b2' }}>|</span>
    </div>
  );
}

export default Tags;
