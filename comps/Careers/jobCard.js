import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

function JobCard(props) {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    setMobile(screen.width < 768 ? true : false);
  }, []);

  const openJob = (id) => {
    Router.push(`/careers/${id}`);
  };

  if (mobile) {
    return (
      <div
        className="my-2 p-2"
        onClick={() => {
          openJob(props.data.id);
        }}
      >
        <p>{props.data.title}</p>
        <p>
          {props.data.department} - {props.data.location}{' '}
        </p>
        <p className="text-green-light font-weight-bold mx-auto">
          More{' '}
          <a className="text-secondary">
            <i className="fas fa-chevron-right"></i>
          </a>
        </p>
        <hr />
      </div>
    );
  } else {
    return (
      <tr
        className="jobCard pointer"
        onClick={() => {
          openJob(props.data.id);
        }}
      >
        <td>{props.data.title}</td>
        <td>{props.data.department}</td>
        <td>{props.data.location}</td>
        <td>
          <a className="text-secondary">
            <i className="fas fa-chevron-right"></i>
          </a>
        </td>
      </tr>
    );
  }
}

export default JobCard;
