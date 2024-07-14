import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRestro = ({ restro }) => {
  const [restroData, setRestroData] = useState({
    restro: restro ? restro.restro : "",
    address: restro ? restro.address : "",
    contact_no: restro ? restro.contact_no : "",
    email: restro ? restro.email : "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRestroData({
      ...restroData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form has been submitted");
    try {
      await axios.post("http://localhost:8080/restaurants", restroData);
      console.log("Data has been added succesfully", restroData);
      navigate("/all-restro");
    } catch (err) {
      console.log("Something went Wrong");
    }
  };

  const handleEdit = async (id) => {
    try {
      const dataToEdit = {
        ...restro,
        ...restroData,
      };
      console.log("Data To Edit:", dataToEdit);
      await axios.patch(`http://localhost:8080/restaurants/${id}`, dataToEdit);
      navigate("/all-restro");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/restaurants/${id}`);
    navigate("/all-restro");
  };
  return (
    <div className="form-parent">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Restro name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Restaurant Name"
            name="restro"
            defaultValue={restro && restro.restro}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address here"
            name="address"
            defaultValue={restro && restro.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact no.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Restro contact here"
            name="contact_no"
            defaultValue={restro && restro.contact_no}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            name="email"
            defaultValue={restro && restro.email}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        {!restro ? (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <div className="button-box">
            <Button variant="dark" onClick={() => handleEdit(restro.id)}>
              Edit
            </Button>
            <Button variant="warning" onClick={() => handleDelete(restro.id)}>
              Delete
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default AddRestro;
