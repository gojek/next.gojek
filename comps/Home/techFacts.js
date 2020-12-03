import { techFacts } from './data';

function TechFacts() {
  return (
    <div className="pt-5">
      {techFacts.map((data, i) => (
        <div
          className="card text-white px-5 border-0 mb-4 shadow"
          style={{ backgroundColor: data.bgColor }}
          key={i}
        >
          <div className="card-body pb-0 pt-4">
            <div className="row">
              <div
                className={`col-md-6 align-self-center py-5 ${
                  i % 2 == '0' ? 'order-first' : 'order-last'
                }`}
              >
                <h3 className="description heading-sm">{data.content}</h3>
              </div>
              <div className={`col-md-6 align-self-end`}>
                <img src={data.image} alt={data.content} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechFacts;
