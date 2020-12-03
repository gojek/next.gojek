import Link from 'next/link';

function Card(props) {
  const { slug, bg, label, openings, index, bgType } = props;

  return (
    // <Link href={`/jobs/all?d=${slug}`}>
    <a
      className={`card text-white department ${label} ${index < 2 ? ' highlight' : ''}`}
      style={{
        backgroundColor: `${bg}`,
        backgroundImage:
          bgType === 'img'
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.77)), url(${bg}) `
            : 'none',
      }}
      href={`/jobs/all?d=${label}`}
    >
      <div className="card-body">
        <h2 className="head mb-0">{label}</h2>
        <p className="openings">{openings} Openings</p>
      </div>
    </a>
    // </Link>
  );
}

export default Card;
