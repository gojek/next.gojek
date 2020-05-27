import { useState, useEffect } from 'react';
import Link from 'next/link';

function JobCard(props) {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    console.log('window length', screen.width);
    setMobile(screen.width < 768 ? true : false);
  }, []);

  if (mobile) {
    return (
      <div className="my-2 p-2">
        <p>{props.data.title}</p>
        <p>
          {props.data.department} - {props.data.location}{' '}
          <Link href={`/careers/description/${props.data.id}`}>
            <a className="text-secondary">
              <i className="fas fa-chevron-right"></i>
            </a>
          </Link>
        </p>
        <hr />
      </div>
    );
  } else {
    return (
      <tr className="jobCard">
        <td>{props.data.title}</td>
        <td>{props.data.department}</td>
        <td>{props.data.location}</td>
        <td>
          <Link href={`/careers/description/${props.data.id}`}>
            <a className="text-secondary">
              <i className="fas fa-chevron-right"></i>
            </a>
          </Link>
        </td>
      </tr>
    );
  }
}

export default JobCard;
