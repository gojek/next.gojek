import Link from 'next/link';
import Tag from './tag';
import styles from '../blog.module.scss';

function Tags(props) {
  const { data: tags } = props;

  return (
    <div className="pt-5 d-flex flex-wrap">
      {tags.map((tag) => (
        <Tag slug={tag.slug} name={tag.name} />
      ))}

      {/* Search */}
      <div className="">
        <span className="">|</span>
        <span className={`ml-4 ${styles.search}`}>
          <i className="fas fa-search text-green-light"></i>
        </span>
      </div>
    </div>
  );
}
export default Tags;
