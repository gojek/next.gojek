import Link from 'next/link';
import Tag from './tag';

function Tags(props) {
  const { data: tags } = props;

  return (
    <div className="pt-5 d-flex justify-content-around">
      {tags.map((tag) => (
        <Tag slug={tag.slug} name={tag.name} />
      ))}

      {/* All categoy */}
      <Link href="all">
        <Tag slug="all" name="All" />
      </Link>

      {/* Search */}
      <span className="my-auto">|</span>
      <span className="my-auto search">
        <i className="fas fa-search text-green-light"></i>
      </span>
    </div>
  );
}
export default Tags;
