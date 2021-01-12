import { DiscussionEmbed } from 'disqus-react';
const DisqusComments = (props) => {
  console.log('Pros', props);
  const disqusShortname = 'test-8t3gldoljf';
  const disqusConfig = {
    url: props.url,
    identifier: props.id, // Single props id
    title: props.title, // Single post title
  };
  return (
    <div className="container">
      {/* <div className="row"> */}
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      {/* </div> */}
    </div>
  );
};
export default DisqusComments;
