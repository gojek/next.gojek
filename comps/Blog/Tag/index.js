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
    <div className={`py-5 d-flex ${styles.tagList}`}>
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
      {/* <div className="pointer px-4 mb-3 mr-3 ml-1" style={{ borderLeft: '1px solid #b5b2b2' }}> */}

      <div
        className={`pointer px-4 mb-3 mr-3 ml-1 search-btn ${props.clicked ? 'animate' : ''}`}
        onClick={props.handlesearchClicked}
        style={{ borderLeft: '1px solid #b5b2b2' }}
      >
        <img
          onClick={props.handlesearchClicked}
          className="img-fluid mt-2"
          src="/img/blog/search.svg"
        />
      </div>
    </div>
  );
}

export default Tags;
