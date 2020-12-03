import Masonry from 'react-masonry-css';

function Perks({ perks, showPerks }) {
  let count = 0;
  if (showPerks === 1) {
    count = 6;
  } else if (showPerks === 2) {
    count = 12;
  } else {
    count = 20;
  }
  return (
    <div class="card-columns">
      {perks.map((perk) => {
        return (
          <div
            className={`single-perk-card card  ${perk.id <= count ? 'd-inline-block' : 'd-none'} ${
              perk.img ? 'perk-img' : 'perk-card'
            } `}
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
