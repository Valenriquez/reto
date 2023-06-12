import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar className="NavBar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/logo192.png"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-abuelitos">Tooltip for Inicio</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/" style={{ color: 'black' }}>
              Inicio
            </Nav.Link>
          </OverlayTrigger>
          <Dropdown>
            <Dropdown.Toggle className="NavLink" id="areas-dropdown" style={{ color: 'black', backgroundColor: 'rgb(235, 217, 189)', borderColor: 'rgb(235, 217, 189)'}}>
              Áreas
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area1">Primera Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areafuncional">
                  Funcional
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area2">Segunda Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areasocial">
                  Social
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area3">Tercera Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areacognitiva">
                  Cognitiva
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area4">Cuarta Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areafisica">
                  Física
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area4">Quinta Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areaafectiva">
                  Afectiva
                </Dropdown.Item>
              </OverlayTrigger>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle className="NavLink" id="areas-dropdown" style={{ color: 'black', backgroundColor: 'rgb(235, 217, 189)', borderColor: 'rgb(235, 217, 189)'}}>
              Mi Perfil
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area1">Primera Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areafuncional">
                  Resultado de Pruebas
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area2">Segunda Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areasocial">
                  Social
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area3">Tercera Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areacognitiva">
                  Cognitiva
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area4">Cuarta Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areafisica">
                  Física
                </Dropdown.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-area4">Quinta Área</Tooltip>}
              >
                <Dropdown.Item as={Link} to="/areaafectiva">
                  Afectiva
                </Dropdown.Item>
              </OverlayTrigger>
            </Dropdown.Menu>
          </Dropdown>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-perfil">Tooltip for Mi Perfil</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/acerca" style={{ color: 'black' }}>
              Mi Perfil
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
        <Nav className="ms-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-ingresa">Tooltip for Ingresa</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/login" style={{ color: 'black' }}>
              Ingresa
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
