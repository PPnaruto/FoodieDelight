const AllRestros = ({ restro }) => {
  return (
    <div className="restro-card-parent">
      <h5>{restro.restro}</h5>
      <h6>{restro.address}</h6>
      <div style={{ marginBottom: "5px" }}>
        <p>{restro.email}</p>
        <p>{restro.contact_no}</p>
      </div>
    </div>
  );
};

export default AllRestros;
