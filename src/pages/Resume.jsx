import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Resume() {

    return (
        <>
            <Container className="py-5">
                <h2 className='mb-3'>Portfolio</h2>
                <Row>
                    <Col xs={9} className='my-5'>
                        <embed src="/src/assets/sc-resume.pdf" width="100%" height="1000"></embed>
                    </Col>
                    <Col xs={3} className='my-5'>
                        <h3>Toolkit</h3>
                        <img src='/src/assets/MERN.png' width={"100%"}></img>
                    </Col>
                </Row>
            </Container>
        </>)
};

export default Resume;