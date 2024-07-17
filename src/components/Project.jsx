import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function Project({ project }) {
    return (
        <>
            < Col >
                <Card>
                    <Card.Img variant="top" src={project.src} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col >
        </>
    );
};

export default Project;

