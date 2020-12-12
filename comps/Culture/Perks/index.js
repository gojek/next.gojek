import Masonry from 'react-masonry-css';

function Perks({ perks, showPerks, mobilePerks }) {
  let count = 0;
  if (showPerks === 1) {
    count = 6;
  } else if (showPerks === 2) {
    count = 12;
  } else {
    count = 20;
  }
  return (
    <div>
      <div class="card-columns pt-5 d-md-block d-none">
        {perks.map((perk) => {
          return (
            <div
              className={`single-perk-card card  ${
                perk.id <= count ? 'd-inline-block' : 'd-none'
              } ${perk.img ? 'perk-img' : 'perk-card'} `}
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

      <div class="card-columns pt-5 d-md-none d-block">
        {mobilePerks.map((perk) => {
          return (
            <div
              className={`single-perk-card card px-4  ${
                perk.id <= count ? 'd-inline-block' : 'd-none'
              } ${perk.img ? 'perk-img' : 'perk-card'} `}
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
    </div>
  );
}
export default Perks;
