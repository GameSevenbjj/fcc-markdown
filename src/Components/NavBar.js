import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar>
        <Container
          style={{
            backgroundColor: "#ced4daff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Navbar.Brand className="text-center">
            <h2>
              {" "}
              <i class="fa-brands fa-markdown"></i>
              Markdown Previewer
            </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
