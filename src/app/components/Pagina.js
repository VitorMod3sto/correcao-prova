import apiAnime from "@/services/apiAnime";
import { useEffect, useState } from "react";
import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {

    const [genero, setGenero] = useState([])

    useEffect(() => {
        apiAnime.get(`/genres/anime`).then(resultado => {
            setGenero(resultado.data.data)
        })


    }, [])

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/anime">Animes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/anime">Anime</Nav.Link>
                            <NavDropdown title="Gêneros" id="basic-nav-dropdown">
                            
                            {genero.map(genero => (
                                <div key={genero.mal_id}>
                            <NavDropdown.Item
                             href="/animes">{genero.name}({genero.count})
                             <Dropdown.Divider />
                             </NavDropdown.Item>
                             </div>
                            ))}
                            
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center py-4">
                <h1>{props.titulo}</h1>
            </div>

            <Container className="my-3">
                {props.children}
            </Container>
        </>
    )
}