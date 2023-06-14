import "./AreaCognitiva.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AreaSocial = () => {

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
};

  return(
    <div>

        <h1>Social</h1>
        <div className="resumenArea">
            <div className="left">
                <h2>Tener relaciones saludables con amigos, familiares y la comunidad, y tener interés o preocupación por los demás.</h2>
                <p>¡Bienvenido al área social!</p>
                <p>En esta área recordaremos la importancia del aspecto social.</p>
                <p>Si deseas continuar, sigue moviéndote hacia abajo</p>

                <h2>¿Qué esperar?</h2>
                <p>Se presentarán...</p>
            </div>

            <div className="right">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F509%2F092%2Flarge_2x%2Falzheimers-disease-neurological-brain-cognition-line-style-icon-free-vector.jpg&f=1&nofb=1&ipt=1bf05c31bba48db90c1dd7b35d4b74dc70cb034a8ba1cd9b288a4383b068c9bf&ipo=images" alt="Imagen Cognición"></img>
            </div>
            
        </div>

        <br></br>

        <h1 style={{ fontSize: "35px"}}>Pruebas</h1>
        <div className="pruebas">
            <div className="left">
              <button> 
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcerebro-en-un-fondo-blanco-silueta-linear-de-los-dos-hemisferios-ilustraci-n-del-vector-148513433.jpg&f=1&nofb=1&ipt=7daad160be1f39fed947faacc534537e92d955409158d5e50459e7e0f932e481&ipo=images" alt="Imagen MMSE"></img>
                <h2>Gijón</h2>
                <p style={{ margin: 0 }}>Prueba bla bla bla</p>
              </button>
            </div>
        </div>

        <br></br><br></br><br></br><br></br><br></br>

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




     );
  }

export default AreaSocial;