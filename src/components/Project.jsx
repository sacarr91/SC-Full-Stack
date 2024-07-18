import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import projectsList from '../projects';

function Project({ name }) {
    return projectsList.map((project) => {
        if (project.id !== name) {
            console.log(`${project.id} != ${name}`)
        } else {
            console.log(`${project.id} = ${name}!`)
            console.log(`title: ${project.title}, src: ${project.src}, description: ${project.description}, link: ${project.link}, repo: ${project.repo}`);
            return (
            <Col className='p-5'>
                <Card className=''>
                    <Card.Img variant="top" src={project.src} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button href={project.link}>1</button>
                        <button href={project.repo}>2</button>
                    </Card.Footer>
                </Card>
            </Col >
            );
        }
    })
}



export default Project;

