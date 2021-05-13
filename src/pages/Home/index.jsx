import { Jumbotron, Container } from "react-bootstrap";

import jumbotron from "images/jumbotron.jpg";

const Home = () => (
  <div className="Home">
    <Jumbotron
      style={{ backgroundImage: `url(${jumbotron})`, backgroundSize: "cover" }}
      fluid
    >
      <div className="jumbotron-title">
        Confiez vos rêves à des experts du Web
      </div>
    </Jumbotron>
    <Container>
      <h1>Bienvenue sur la Web Agency !</h1>
      <p>
        Grâce à notre savoir-faire, notre expérience et notre écoute, nous
        accompagnons nos clients dans la création de site internet: étude, UX,
        conception, design, développement, SEO. Notre agence web est capable de
        répondre à tous vos besoins et d'élaborer une véritable stratégie
        digitale.
      </p>
    </Container>
  </div>
);

export default Home;
