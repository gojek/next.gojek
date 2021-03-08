import Link from 'next/link';

import styles from '../blog.module.scss';

function Tag(tagData) {
  const { tag, data } = tagData;

  if (data.page === 'blog') {
    return (
      <div
        key={tag.name}
        className={
          `badge rounded-pill pointer px-4 my-3 mr-3 ${styles.category}  ` +
          (data.activeTag === tag.slug ? styles.active : '')
        }
        onClick={() => data.onClick(tag.slug)}
      >
        <p className="mb-0">{tag.name}</p>
      </div>
    );
  } else {
    return (
      <Link href={`/blog/tag/${tag.slug}`}>
        <div
          key={tag.name}
          className={
            `badge rounded-pill pointer px-4 my-3 mr-3 ${styles.category}  ` +
            (data.activeTag === tag.slug ? styles.active : '')
          }
        >
          <p className="mb-0">{tag.name}</p>
        </div>
      </Link>
    );
  }
}

function Tags(props) {
  return (
    <div className={`d-flex ${styles.tagList} mr-5 mr-lg-0`}>
      {props.tags.map((tag, key) => (
        <Tag tag={tag} data={props} key={key} />
      ))}
      <a href="/blog/all" className="view-all">
        <div
          key="all"
          className={
            `badge rounded-pill pointer px-4 my-3 mr-3 ${styles.category}  ` +
            (props.activeTag === 'all' ? styles.active : '')
          }
        >
          <p className="mb-0">All</p>
        </div>
      </a>
      <span
        className="my-3 mx-2 d-none d-lg-flex"
        style={{ lineHeight: '2.25rem', color: '#b5b2b2' }}
      >
        |
      </span>
    </div>
  );
}

export default Tags;
