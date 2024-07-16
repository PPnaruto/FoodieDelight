const RestroCard = ({ restro, callback }) => {
  const truncateName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 16) + "...";
    }
    return name;
  };
  return (
    <div className="restro-card-parent" onClick={callback}>
      <h3>{truncateName(restro.restro)}</h3>
      <p>{restro.address}</p>
      <div className="contact-info">
        <p>{restro.email}</p>
        <p>{restro.contact_no}</p>
      </div>
    </div>
  );
};

export default RestroCard;
