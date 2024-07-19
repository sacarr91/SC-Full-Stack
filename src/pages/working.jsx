import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Working() {

    return (
        <>
            <Container className="py-5">
                <center>
                    <Col><img src='/images/coding.png' alt="page title image: still coding" height="100"></img></Col>
                    <img src="/images/bentley.png" alt="We found Waldo!" className='gif'></img>

                    <h4>Congratulations, you found Waldo!</h4> <h5>Just kidding, his name is Bentley.</h5>
                    <h6>I'm still working on this particular project, but it's almost done! <br></br>It'll be available for review ASAP. Thanks for your patience!</h6>
                    <img src='https://gifdb.com/images/high/patience-498-x-280-gif-cm8e3drs18bkw69k.gif' alt="patience please" className='gif'></img>
                </center>
            </Container>
        </>
    )
};

export default Working;