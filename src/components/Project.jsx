import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import projectsList from '../projects';

function Project({ name }) {

    return projectsList.map((project) => {
        if (project.id !== name) {
            console.log(`${project.id} != ${name}`)
        } else {
            console.log(`${project.id} = ${name}!`)
            console.log(`title: ${project.title}, src: ${project.src}, description: ${project.description}, link: ${project.link}, repo: ${project.repo}`);
            return (
                <Col>
                    <Card style={{ height: 550 }}>
                        <Card.Img variant="top" src={project.src} style={{ height: 175, objectFit: 'cover'}}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href={project.link}
                                target="_blank" variant='dark' className='m-2'>Link</Button>
                            <Button href={project.repo}
                                target="_blank" variant='secondary' className='m-2'>Repo</Button>
                        </Card.Footer>
                    </Card>
                </Col >
            );
        }
    })
}



export default Project;

