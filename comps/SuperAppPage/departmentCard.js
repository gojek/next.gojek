import { useRouter } from 'next/router';
import Link from 'next/link';

function DepartmentCard(props) {
  const { slug, bg, label } = props;

  return (
    <div className="col-12 col-md-4 mb-2">
      <Link href={`/careers/all?d=${label}`} passHref>
        <a
          className={`card text-white department rounded-pill`}
          style={{
            backgroundColor: `${bg}`,
          }}
        >
          <div className="card-body">
            <h5 className="head mb-0">{label}</h5>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default DepartmentCard;
