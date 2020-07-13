import Tag from './tag';
import styles from '../blog.module.scss';

function Tags(props) {
  // const [selectedTag, setSelectedTag] = useState(props.tags[0]);
  // const [tagBlogs, setTagBlogs] = useState([]);

  // to filter blogs according to selected tag
  // useEffect(() => {
  //   let tag = selectedTag,
  //     filteredArray = [];

  //   // to calculate no of blogs under selected tag
  //   props.blogs.map((blog, i) => {
  //     if (blog.categories.indexOf(tag.name) > -1) {
  //       filteredArray.push(blog);
  //     }
  //   });

  //   setTagBlogs(filteredArray);
  // }, [selectedTag]);

  // const scrollToAll = () => {
  //   var elmnt = document.getElementById('all-blogs');
  //   elmnt.scrollIntoView();
  // };
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
