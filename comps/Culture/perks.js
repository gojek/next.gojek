import styles from './index.module.scss';

function Perks({ perks, showPerks, mobilePerks }) {
  let count = 0;
  if (showPerks === 1) {
    count = 6;
  } else {
    count = 12;
  }
  return (
    <div>
      <div className={`card-columns pt-5 d-md-block d-none ${styles.perksColumns}`}>
        {perks.map((perk) => {
          return (
            <div
              className={`card  ${perk.id <= count ? 'd-inline-block' : 'd-none'} ${
                perk.img ? 'perk-img' : 'perk-card'
              } ${styles.perkCard}`}
              key={perk.id}
              style={{
                height: perk.height,
                backgroundImage: perk.img ? `url(${perk.img})` : 'none',
                backgroundColor: perk.bgColor,
              }}
            >
              <h1 className={`${styles.perkHeading}`}>{perk.title}</h1>
              <p>{perk.description}</p>
            </div>
          );
        })}
      </div>

      <div className={`card-columns pt-5 d-md-none d-block ${styles.perksColumns}`}>
        {mobilePerks.map((perk) => {
          return (
            <div
              className={`single-perk-card card px-4  ${
                perk.id <= count ? 'd-inline-block' : 'd-none'
              } ${perk.img ? 'perk-img' : 'perk-card'} ${styles.perkCard}`}
              key={perk.id}
              style={{
                height: perk.height,
                backgroundImage: perk.img ? `url(${perk.img})` : 'none',
                backgroundColor: perk.bgColor,
              }}
            >
              <h1 className={`${styles.perkHeading}`}>{perk.title}</h1>
              <p className={`mt-3 ${styles.descrption}`}>{perk.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Perks;
