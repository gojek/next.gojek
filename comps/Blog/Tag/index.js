import { useState, useEffect } from 'react';

import Tag from './tag';
import BlogCard from '~/../../comps/Blog/BlogCard';
import MainBlog from '~/../../comps/Blog/BlogCard/mainBlog';
import OpenMedium from '~/../../comps/Common/openMedium';
import styles from '../blog.module.scss';

function Tags(props) {
  const [selectedTag, setSelectedTag] = useState(props.tags[0]);
  const [tagBlogs, setTagBlogs] = useState([]);

  // to filter blogs according to selected tag
  useEffect(() => {
    let tag = selectedTag,
      filteredArray = [];

    // to calculate no of blogs under selected tag
    props.blogs.map((blog, i) => {
      if (blog.categories.indexOf(tag.name) > -1) {
        filteredArray.push(blog);
      }
    });

    setTagBlogs(filteredArray);
  }, [selectedTag]);

  const scrollToAll = () => {
    var elmnt = document.getElementById('all-blogs');
    elmnt.scrollIntoView();
  };

  return (
    <div id="tags">
      <div className={`pt-5 d-flex flex-wrap ${styles.tagList}`}>
        {props.tags.map((tag) => (
          <Tag
            tag={tag}
            changeTag={(tag) => setSelectedTag(tag)}
            active={tag.name == selectedTag.name}
          />
        ))}
        <Tag tag={{ name: 'All' }} changeTag={(tag) => scrollToAll()} />
      </div>

      {/* selected tag blogs */}
      <div className="pt-5">
        <div className="container py-5">
          <h1 className={`header ${styles.tagHeading}`}>{selectedTag.name}</h1>
          {tagBlogs.length > 0 ? (
            <div>
              <MainBlog data={tagBlogs[0]} />

              <div className="row mt-5">
                {tagBlogs.map((blog, i) => {
                  if (i > 0 && i < 4) {
                    return <BlogCard data={blog} />;
                  }
                })}
                {tagBlogs.length > 3 && (
                  <div className="col-12">
                    <p
                      className="link text-green-light pt-5 mb-0"
                      onClick={() =>
                        OpenMedium(`https://blog.gojekengineering.com/${selectedTag.URL}/home`)
                      }
                    >
                      See More
                      <i className="fas fa-long-arrow-alt-right align-middle ml-2"></i>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>No active blogs under {selectedTag.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tags;
