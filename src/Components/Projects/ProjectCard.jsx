import React from "react";
import "./Projects.css";
import { Alert, Button, Modal } from "react-bootstrap";
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.projectName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.imageUrl} alt="" className="modal-body-img" />
        
        <div className="readmoreli">
          <h2>About Project</h2>
          <ul>
            {props.features.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <h2>
            {" "}
            <h2>Tech Stacks</h2>
            <div className="techStack2">
              {props.techStack.map((item) => (
                <Tilt className="skillT">
                  <img src={item} alt="" />
                </Tilt>
              ))}
            </div>
          </h2>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const ProjectCard = ({ projectName, projectDescription, imageUrl, projectUrl, gitHubUrl, techStack, features }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageUrl} alt="" className="project-image" />
      </div>
      <div className="project-details-container">
        <h2 className="project-name">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <div className="techStack">
          {techStack.map((item) => (
            <Tilt className="skillT">
              <img src={item} alt="" />
            </Tilt>
          ))}
        </div>
        <div className="btn-bottom">
          <div className="btn-link">
            <Button href={gitHubUrl} target="_blank" variant="outline-light" className="project-url2">
              <FaGithubSquare className="ic" />
            </Button>
            {projectUrl === "" ? (
              <Button
                onClick={() => {
                  alert("NOT DEPLOYED🙂");
                }}
                variant="outline-light"
                className="project-url2"
              >
                <FaExternalLinkAlt className="ic" />
              </Button>
            ) : (
              <Button target="_blank" href={projectUrl} variant="outline-light" className="project-url2">
                <FaExternalLinkAlt className="ic" />
              </Button>
            )}
          </div>
          <div className="btn-reademore ">
            <Button variant="outline-success" onClick={() => setModalShow(true)}>
              Reade More
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              projectName={projectName}
              features={features}
              imageUrl={imageUrl}
              techStack={techStack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
