import { Container, Row, Col } from "react-bootstrap";
import { SiLinkedin, AiFillGithub } from "react-icons/all";

const MyFooter = () => {
  return (
    <div className="MyFooter">
      <Container>
        <Row className="d-flex justify-content-around mt-4 mb-1">
          <Col lg={10} sm={12}>
            <p>
              <strong>Carole MENEY © 2021</strong>
              <small> -- Site factice - Formation THP</small>
            </p>
          </Col>
          <Col lg={2} sm={12}>
            <a
              href="https://github.com/carolemny"
              target="blank"
              className="github-logo px-1"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/carole-meney-508682203/"
              target="blank"
              className="linkedin-icon px-1"
            >
              <SiLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
