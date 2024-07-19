import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Resume() {

    return (
        <>
            <Container className="py-5">
                <center><img src='/images/resume.png' alt="page title image: resume" height="100"></img></center>
                <Row>
                    <Col xs={9}>
                        <embed src="/sc-resume.pdf" width="100%" height="1200"></embed>
                    </Col>
                    <Col xs={3}>
                        <h3>Toolkit</h3>
                        <img src='/images/MERN.png' width={"100%"}></img>
                    </Col>
                </Row>
            </Container>
        </>)
};

export default Resume;