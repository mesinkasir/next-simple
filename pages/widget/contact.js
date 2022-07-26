import data from '../data/widget.json';
function Contact() {
  return (
    <div className="text-center p-3 border rounded">
      <p>{data.info}</p>
      <a href={data.was} className="btn btn-dark text-white">
        {data.wa}
      </a>{' '}
      <a href={data.email} className="btn btn-dark text-white">
        {data.mail}
      </a>
    </div>
  );
}

export default Contact;
