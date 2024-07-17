import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Project() {
  return (
    <Col>
          <Card>
            <Card.Img variant="top" src={Project.src} />
            <Card.Body>
              <Card.Title>{Project.title}</Card.Title>
              <Card.Text>
                {Project.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  );
}

export default Project;