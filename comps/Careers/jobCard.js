import { useState, useEffect } from 'react';

function JobCard(props) {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    console.log('window length', screen.width);
    setMobile(screen.width < 768 ? true : false);
  }, []);

  if (mobile) {
    return (
      <div className="my-2 p-2">
        <p>Associate Program Manager: Information Security</p>
        <p>
          Program Management - Jakarta{' '}
          <a href="#" className="text-secondary">
            <i className="fas fa-chevron-right"></i>
          </a>
        </p>
        <hr />
      </div>
    );
  } else {
    return (
      <tr>
        <td>Associate Program Manager: Information Security</td>
        <td>Program Management</td>
        <td>Jakarta</td>
        <td>
          <a href="#" className="text-secondary">
            <i className="fas fa-chevron-right"></i>
          </a>
        </td>
      </tr>
    );
  }
}

export default JobCard;
