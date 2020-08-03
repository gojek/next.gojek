import { InView } from 'react-intersection-observer';

function IntersectionView(props) {
 return (
    <InView
    as="div"
    threshold={[0.9, 0.1]}
    onChange={() => props.onScroll(arguments[1])}
  >
     {props.children} 
  </InView>
 )
};

export default IntersectionView;