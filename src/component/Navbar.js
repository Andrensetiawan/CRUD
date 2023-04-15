import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffcanvasExample() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="secondary" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/home">DATA KELAS TI</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="bg-secondary"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end bg-secondary flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Beranda</Nav.Link>
                  <Nav.Link href="#action2">Kontak</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search "
                    className="me-2 bg-secondary"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark bg-light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;