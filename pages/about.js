import Navbar from '~/../../comps/Navbar';
import Milestones from '../comps/About/milestone';
import TechFacts from '../comps/Home/techFacts';
import Projects from '../comps/Home/OpenSource';
import Link from '../comps/Common/link';
import CommonCta from '~/../../comps/Common/Cta';
import Funding from '../comps/Home/funding';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: false,
  dots: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
};

function About() {
  return (
    <div>
      <Navbar />

      <Milestones />
    </div>
  );
}

export default About;
