import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Toaster = ({ setShow }) => {
  return (
    <ToastContainer className="p-3" position="top-center" style={{ zIndex: 1 }}>
      <Toast
        onClose={() => setShow(false)}
        className="d-inline-block m-1"
        bg="warning"
        animation="true"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body className={"Warning" === "Dark" && "text-white"}>
          Please check the credenatials.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
