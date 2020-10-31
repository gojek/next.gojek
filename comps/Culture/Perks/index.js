

function Perks({perks}) {
  

  return (
    <div className="card-columns text-left pt-5">
      {perks.map((perk) => {
        return (
          <div
            className="card single-perk-card"
            key={perk.id}
            style={{ height: perk.img ? `26.875rem` : '17.625rem' }}
          >
            <div
              style={{
                backgroundImage: perk.img ? `url(${perk.img})` : '',
                backgroundColor: perk.bgColor,
              }}
              className="card-content mr-1 bg-img p-5"
            >
              <h1 className="heading-sm">{perk.title}</h1>
              <p>{perk.description}</p>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .image-bg {
          height: 22.5rem;
        }
        .colored-bg {
          height: 15.6rem;
        }
      `}</style>
    </div>
  );
}
export default Perks;
