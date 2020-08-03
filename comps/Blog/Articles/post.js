import Link from 'next/link';
import styles from '../blog.module.scss';
import Moment from 'react-moment';
import { readingTime } from '@tryghost/helpers';

function Post(props) {
  const { data: post } = props;
  const timeToRead = readingTime(post);
  return (
    <React.Fragment>
      {/* If Post is a featured post, then the layou will be different. */}
      {post.featured && (
        <div className="col-md-8 mb-5">
          <div className="card border-0 bg-red">
            <Link href={post.slug}>
              <a className="post">
                <img src={post.feature_image} className="card-img-top" alt={post.title} />
              </a>
            </Link>
          </div>
        </div>
      )}
      <div className="col-md-4 mb-5">
        <Link href={post.slug}>
          <a className="post">
            <div className="card border-0 bg-transparent">
              {!post.featured && (
                <React.Fragment>
                  <img
                    src={post.feature_image}
                    className="card-img-top bg-orange"
                    alt={post.title}
                  />
                  {/* <a href={post.primary_tag.slug} className="text-white text-uppercase tag">
                    {post.primary_tag.name}
                  </a> */}
                </React.Fragment>
              )}
              <div className="card-body px-0">
                <h5>{post.title}</h5>
                {props.type == 'articles' && (
                  <React.Fragment>
                    <p>{post.excerpt}</p>
                    <div className="mt-3">
                      <p className="mb-0">{post.primary_author.name}</p>
                      <p>
                        <Moment format="MMM DD, YYYY">{post.published_at}</Moment> | {timeToRead}
                      </p>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
}
export default Post;
