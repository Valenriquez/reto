import React, { useState, useEffect } from "react";
import './AbuelitosABP.css'
//import image from './img/prueba1imagen.jpg';
import Button from 'react-bootstrap/Button';
 import { useNavigate } from "react-router-dom";

function InfoBox() {
    const data = [
      {
        title: 'TESTIMONIOS',
        description: 'Esta es la descripción del cuadro 1.',
      }
    ];
  
    return (
      <div className="info-box">
        {data.map((item, index) => (
            <div className="container-box" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
         ))}
      </div>
    );
}
  
function Intro() {
  const navigate = useNavigate();
  const goToSignUp = () => navigate("/signup");
  const goToLogIn = () => navigate("/login");
  return(
  <> 
    <div style={{ width: '100%', height: '600px', padding: '50px', textAlign: 'left', '@media (min-width: 768px)': { width: '50%' } }}>
      <h1 style={{textAlign: 'left', color: 'black'}}>Abuelitos ABP</h1><br />
      <h2 style={{textAlign: 'left', color: 'black'}}>"Los abuelitos somos fuente de <br />sabiduría"</h2>
      <p style={{textAlign: 'left', color: 'black'}}>¡Bienvenidos a Abuelitos ABP!</p>
      <p style={{textAlign: 'left', color: 'black'}}>
        En esta página te guiaremos en cada proceso para evaluar los <br />distintos aspectos de tu salud.
        Te daremos recomendaciones <br />para seguir teniendo una salud y vida plena.
      </p>
      <p style={{color: 'black'}}>Si deseas continuar, oprime el botón de abajo para registrarte.</p>
      
      <Button variant="primary" className="rounded-pill" onClick={goToSignUp}>Registro</Button>
      <span style={{ margin: '0 15px' }}></span> 
      <Button variant="primary" className="rounded-pill" onClick={goToLogIn}>Acceder a mi cuenta</Button>{' '}
    </div>
  </>
  );
}

function Slides(){

  let slides = [
    {
      key: 1,
      content: "1"
    },
    {
      key: 2,
      content: "2"
    },
    {
      key: 3,
      content: "2"
    },
    {
      key: 4,
      content: "3"
    },
    {
      key: 5,
      content: "4"
    },
    {
      key: 6,
      content: "5"
    },
    {
      key: 7,
      content: "6"
    },
    {
      key: 8,
      content: "7"
    }
  ];
  return(
    <h1>Slides</h1>
  );
}

const AbuelitosABP = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");  
  const handleSubmit = (event) => {
      event.preventDefault();
    
      // Send the form data to the backend.
    
      // Clear the form fields.
      setName("");
      setLastName("");
      setEmail("");
      setMessage("");
  }
    return (
      <>  
        <div className="App">
        <section className="section1">
         <Intro />
        </section> 
        <h2 style={{ textAlign: "left" }}>CONTÁCTANOS</h2>
        <div className="paraContactar">

            <div className="left">
                <p style={{ textAlign: "left" }}>
                    <strong>E-mail:</strong> abuelitosabp@gmail.com
                </p>
                <p style={{ textAlign: "left" }}>
                    <strong>Teléfono:</strong> +52 811659 6021
                </p>
                <p style={{ textAlign: "left" }}> Monterrey, Nuevo León, México</p>
        
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>

            <div className="center">
                <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <p>Introduce tu nombre: (obligatorio)</p>
                        <input
                            type="text"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div>
                        <p>Introduce tu apellido: (obligatorio)</p>
                        <input
                            type="text"
                            placeholder="Tu Apellido"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>

                    <div>
                    <p>Introduce tu correo: (obligatorio)</p>
                    <input
                        type="email"
                        placeholder="Tu Correo"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    </div>
                </div>
                </form>
            </div>

            <div className="right">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Escribe tu comentario:</p>
                        <textarea
                            placeholder="Tu Mensaje"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <p style={{margin: 0}}></p>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="right">
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Escribe tu comentario:</p>
                    <textarea
                        placeholder="Tu Mensaje"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <p style={{margin: 0}}></p>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

    </div>
    </>
  );
}
export default AbuelitosABP;