import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Style/style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Toaster from "./Toaster";

const Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (event) => {
    console.log("Inside handleChange");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminCredentials = await axios.get(
      "http://localhost:8080/admin-credentials"
    );
    const { email: adminEmail, password: adminPassword } =
      adminCredentials.data[0];

    if (adminEmail === formData.email && adminPassword === formData.password) {
      navigate("/home");
    } else {
      console.log("Wrong Credentials Baby");
      setShowToast(true);
    }
  };

  return (
    <div className="login-form-parent">
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {showToast && <Toaster setShow={setShowToast} />}
    </div>
  );
};

export default Admin;
