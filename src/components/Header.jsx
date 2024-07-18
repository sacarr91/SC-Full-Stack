import NavTabs from "./NavTabs";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return <>
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
      <img src='/src/assets/sc-portfolio-header-image.png' height={50}></img>
      <NavTabs />
      </Container>
    </Navbar>
    </>}

export default Header;