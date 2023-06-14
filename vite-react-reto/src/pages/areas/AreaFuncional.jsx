import "./AreaCognitiva.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AreaFuncional = () => {

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

        <h1>Funcional</h1>
        <div className="resumenArea">
            <div className="left">
                <h2>Nivel al que una persona se mantiene a sí misma</h2>
                <p>¡Bienvenido al área funcional!</p>
                <p>En esta área te daremos tips de como seguir teniendo una vida plena y funcional.</p>
                <p>Si deseas continuar, sigue moviéndote hacia abajo.</p>

                <h2>¿Qué esperar?</h2>
                <p>Se presentarán diferentes formularios donde se tendrá que elegir la respuesta más cercana a su situación y en base a eso se cálculara un puntaje.</p>
            </div>

            <div className="right">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGA9zHCznajWsp_XWTxnwPVGzgoXyojczyqA&usqp=CAU" alt="Imagen Cognición"></img>
            </div>
            
        </div>

        <br></br>

        <h1 style={{ fontSize: "35px"}}>Pruebas</h1>
        <div className="pruebas">
            <div className="left">
              <button> 
                <img src="data:image/png;base64,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" alt="Imagen MMSE"></img>
                <h2>Test de Barthel</h2>
                <p style={{ margin: 0 }}>Prueba bla bla bla</p>
              </button>
            </div>

            <div className="right">
              <button> 
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcerebro-en-un-fondo-blanco-silueta-linear-de-los-dos-hemisferios-ilustraci-n-del-vector-148513433.jpg&f=1&nofb=1&ipt=7daad160be1f39fed947faacc534537e92d955409158d5e50459e7e0f932e481&ipo=images" alt="Imagen Reloj"></img>
                <h2>Test de Lawton</h2>
                <p style={{ margin: 0 }}>Prueba bla bla bla</p>
              </button> 
            </div>

            <div className="right">
              <button> 
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcerebro-en-un-fondo-blanco-silueta-linear-de-los-dos-hemisferios-ilustraci-n-del-vector-148513433.jpg&f=1&nofb=1&ipt=7daad160be1f39fed947faacc534537e92d955409158d5e50459e7e0f932e481&ipo=images" alt="Imagen Reloj"></img>
                <h2>Test de Katz</h2>
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

export default AreaFuncional;