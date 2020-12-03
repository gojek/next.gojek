import Moment from 'react-moment';

function BlogCard(props) {
  const { post } = props;

  var stripedHtml = post.description.replace(/<[^>]+>/g, '');

  return (
    <React.Fragment>
      {post.featured && (
        <div className="col-md-8 mb-md-5">
          <div className="card border-0">
            <a href={post.link}>
              <div
                className={`thumbnail large`}
                style={{ backgroundImage: `url(${post.thumbnail})` }}
              />
            </a>
          </div>
        </div>
      )}
      <div className="col-md-4 mb-md-5">
        <a href={post.link} className="post">
          <div className="card border-0 bg-transparent">
            {!post.featured && (
              <React.Fragment>
                <div
                  className={`thumbnail small`}
                  style={{ backgroundImage: `url(${post.thumbnail})` }}
                />
              </React.Fragment>
            )}
            <div className="card-body px-0">
              <h5 className={`${post.featured ? 'featured' : ''} title`}>{post.title}</h5>
              <p className={`${post.featured ? 'featured' : ''} description`}>
                {' '}
                {stripedHtml.substring(0, 100)}...
              </p>
              <React.Fragment>
                <div className="mt-3 meta">
                  <p className="mb-0 author">{post.author}</p>
                  <p className="date-time">
                    <Moment format="MMM DD">{post.published_at}</Moment> | 5mins
                  </p>
                </div>
              </React.Fragment>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
}

export default BlogCard;
