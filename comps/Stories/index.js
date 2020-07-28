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
    // {
    //   url: '/img/videos/gomakeimpact.mp4',
    //   type: 'video',
    // },
    // {
    //   url: '/img/videos/gomakeimpact.mp4',
    //   type: 'video',
    // },
    // {
    //   url: '/img/videos/gomakeimpact.mp4',
    //   type: 'video',
    // },
    '/img/placeholder3.jpeg',
    '/img/placeholder3.jpeg',
    '/img/placeholder3.jpeg',
    '/img/placeholder3.jpeg',
  ];

  return <Stories stories={stories} defaultInterval={3000} width="100%" />;
}

export default StoriesSection;
