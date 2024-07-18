import Row from 'react-bootstrap/Row';
import Project from '../components/Project';
import Container from 'react-bootstrap/esm/Container';

function Portfolio() {
    return (
        <>
            <Container className="py-5">
                <h2 className='mb-3'>Portfolio</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Project name='tutorhub' />
                    <Project name='ntsg' />
                    <Project name='roster' />
                    <Project name='social' />
                    <Project name='weather' />
                    <Project name='jenna' />
                </Row>
                </Container>
            </>
            );
}


            export default Portfolio;