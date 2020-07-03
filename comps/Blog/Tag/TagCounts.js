import { useState, useEffect } from 'react';

import OpenMedium from '~/../../comps/Common/openMedium';
import styles from '../blog.module.scss';

function TagCounts(props) {
  const [tagsCount, setTagsCount] = useState([]);

  // to format data from medium
  useEffect(() => {
    console.log('blog props', props);

    let tagsCountArray = [],
      tagsCount = [];

    // to cauculate no og blogs in each tag
    props.data.map((blog, i) => {
      tagsCountArray = tagsCountArray.concat(blog.categories);
    });

    props.tags.map((tag) => {
      let count = tagsCountArray.filter(function(value) {
        return value === tag.name;
      }).length;
      tagsCount.push({
        name: tag.name,
        URL: tag.URL,
        count: count,
      });
    });

    //  to sort the tags count array in decending order
    tagsCount.sort(function(a, b) {
      return a.count - b.count;
    });
    tagsCount.reverse();
    console.log('sorted tags count', tagsCount);
    setTagsCount(tagsCount);
  }, []);

  const openMediumTag = (path) => {
    OpenMedium(`https://blog.gojekengineering.com/${path}/home`);
  };

  return (
    tagsCount.length > 0 && (
      <div id="tag-counts">
        <div className={`row justify-content-around ${styles.tiles}`}>
          {tagsCount.map((tag, i) => {
            return (
              <div
                className={`p-5 my-2 ${i == 0 || i == 5 ? 'col-md-5' : 'col-md-3'} ${styles.tile}`}
                onClick={() => openMediumTag(tag.URL)}
              >
                <h5 className="mb-0">{tag.name}</h5>
                <p>{tag.count} Articles</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default TagCounts;
