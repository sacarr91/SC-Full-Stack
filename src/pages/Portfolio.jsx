import Row from 'react-bootstrap/Row';
import Project from '../components/Project';

function Portfolio() {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            <Project name='tutorhub' />
            <Project name='weather' />
            <Project name='roster' />
            <Project name='social' />
            <Project name='ntsg' />
            <Project name='jenna' />
        </Row>
    );
}


export default Portfolio;