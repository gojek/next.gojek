import Masonry from 'react-masonry-css';

function Perks({ perks }) {
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    500: 1,
  };

  return (
    // <Masonry
    //   breakpointCols={breakpointColumnsObj}
    //   className="my-masonry-grid"
    //   columnClassName="my-masonry-grid_column"
    // >
    <div class="card-columns">
      {perks.map((perk) => {
        return (
          <div
            className="single-perk-card m-3 card"
            key={perk.id}
            style={{
              height: perk.height,
              backgroundImage: perk.img ? `url(${perk.img})` : '',
              backgroundColor: perk.bgColor,
            }}
          >
            <h1 className="heading-sm">{perk.title}</h1>
            <p>{perk.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Perks;
