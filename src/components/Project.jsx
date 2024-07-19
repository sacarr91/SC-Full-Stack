import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import projectsList from '../utils/projects';

function Project({ name }) {

    return projectsList.map((project) => {
        if (project.id !== name) {
            console.log(`${project.id} != ${name}`)
        } else {
            console.log(`${project.id} = ${name}!`)
            console.log(`title: ${project.title}, src: ${project.src}, description: ${project.description}, link: ${project.link}, repo: ${project.repo}`);
            return (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={project.src}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer><center>
                            <Button href={project.link}
                                target="_blank" variant='dark'>App</Button>
                            <Button href={project.repo}
                                target="_blank" variant='secondary'>Code</Button>
                        </center> </Card.Footer>
                    </Card>
                </Col >
            );
        }
    })
}


export default Project;