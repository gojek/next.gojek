import Stories from 'react-insta-stories';
import bannerImage from '~/../../static/banner.png';

function StoriesSection() {
  // const stories = [
  //   {
  //     url: 'https://www.gojek.io/images/impact-stories/arif.jpg',
  //     // header: { heading: <p>Play</p> },
  //   },
  //   {
  //     url: 'https://www.gojek.io/images/impact-stories/nuridah.jpg',
  //     // header: { heading: <p>Play</p> },
  //   },
  //   {
  //     url: 'https://www.gojek.io/images/impact-stories/heru.jpg',
  //     // header: { heading: <p>Play</p> },
  //   },
  //   {
  //     url: 'https://www.gojek.io/images/impact-stories/sumani.jpg',
  //     // header: { heading: <p>Play</p> },
  //   },
  // ];

  const stories = [
    'https://www.gojek.io/images/impact-stories/arif.jpg',

    'https://www.gojek.io/images/impact-stories/nuridah.jpg',

    'https://www.gojek.io/images/impact-stories/heru.jpg',

    'https://www.gojek.io/images/impact-stories/sumani.jpg',
  ];

  return <Stories stories={stories} defaultInterval={3000} width={'100%'} loader={<div />} loop />;
}

export default StoriesSection;
