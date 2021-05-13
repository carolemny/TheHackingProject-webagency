import { Row, Col, Image } from "react-bootstrap";
import agencyImg from "images/agency.jpg";

const About = () => (
  <div className="About">
    <Row>
      <Col lg={4} md={6} sm={12}>
        <img src={agencyImg} alt="" />
      </Col>
      <Col lg={8} md={6} sm={12} className="my-auto px-5">
        <h1>L'agence</h1>
        <p>
          <strong>
            Websitic est une Agence de communication digitale à paris ayant pour
            mission de vous accompagner sur vos projets digitaux.
          </strong>
        </p>
        <p>
          <br />
          De l’étape d’avant projet web au lancement effectif du site, nous
          sommes là pour vous. Tout au long de la durée de vie de nos projets
          communs, nous mettons tout en oeuvre pour vous proposer des stratégies
          digitales efficaces et vous permettre d’atteindre vos objectifs.
          Laissez votre projet entre des mains dignes de confiance, ayant
          accompagné "Platon", "Solane" ou encore "Sedal" vers le sommet.
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
