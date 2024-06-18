import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface unFollowCardprops {
  setShowModal: any;
  userSelected: any;
}

function UnFollowCard({ setShowModal, userSelected }: unFollowCardprops) {
  return (
    <Modal
      centered
      show={setShowModal}
      onHide={() => setShowModal(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <img
          className="picuser-unfollow"
          alt=""
          src={`https://unavatar.io/${userSelected.username}`}
        />
        <Modal.Title>Unfollow @{userSelected.username}?</Modal.Title>
        <Modal.Footer>
          <Button className="unfollow" onClick={() => setShowModal(false)}>
            Unfollow
          </Button>
          <Button className="cancel" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

export default UnFollowCard;
