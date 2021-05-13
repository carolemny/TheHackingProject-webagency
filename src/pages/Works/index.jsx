import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Container, ListGroup } from "react-bootstrap";

import works from "data/works";
import StudyCase from "pages/StudyCase";

const Works = () => (
  <div className="Works">
    <h1>Nos projets</h1>
    <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
    <Container>
      <h4>
        Découvrez pas à pas comment nous avons été présents pour lancer vos
        marques préférées.
      </h4>
      <Router>
        <ListGroup variant="flush">
          {works.map((work, index) => {
            return (
              <ListGroup.Item key={index}>
                <Link className="my-link my-list-link" to={`/works/${work.client}-study-case`}>
                  {work.title}
                </Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <Switch>
          <Route path="/works/:project" component={StudyCase}></Route>
        </Switch>
      </Router>
    </Container>
  </div>
);

export default Works;
