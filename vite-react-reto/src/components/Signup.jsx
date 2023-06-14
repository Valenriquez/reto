import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from 'countries-api';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Grid } from '@mui/material';
 
const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [tel, setTel] = useState("");
    const [date, setDate] = useState("");
    const [sex, setSex] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [school, setSchool] = useState("");
    const [cp, setCp] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

     
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, lastname, tel, date, sex, city, state, country, street, number, school, cp, address, password });
        setEmail("");
        setTel("");
        setUsername("");
        setLastname("");
        setDate("");
        setSex("");
        setCity("");
        setState("");
        setCountry("");
        setStreet("");
        setNumber("");
        setSchool("");
        setCp("");
        setAddress("");
        setPassword("");


     };
 
    const countiresAll = [
        "Argentina",
        "Bolivia",
        "Brasil",
        "Colombia",
        "Chile",
        "Costa Rica",
        "Cuba",
        "Ecuador",
        "El Salvador",
        "Guatemala",
        "Haití",
        "Honduras",
        "Jamaica",
        "México",
        "Nicaragua",
        "Panamá",
        "Paraguay",
        "Perú",
        "Puerto Rico",
        "República Dominicana",
        "Uruguay",
        "Venezuela"
    ]

    const mexicanStates = [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas"
    ];

    const gotoLoginPage = () => navigate("/login");


    return(
      <> <br/> <br/>
      <div className="container">
        
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
           <label htmlFor='username'>Nombre(s)</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>  
         <div style={{ textAlign: 'left' }}>
            <label htmlFor="country">País:</label> <br/>
            <select id="country" name="country" style={{ width: '45%' }}>
              {countiresAll.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
        </div>
        </Grid>
        <Grid item xs={6}>
          <label htmlFor='lastname'>Apellido(s)</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            value={lastname}
            required
            onChange={(e) => setLastname(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
        <div style={{ textAlign: 'left' }}> 
        <label htmlFor="state">Estado</label> <br/>
          <select id="state" name="state">
            {mexicanStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        </Grid>
        <Grid item xs={6}>
            <label htmlFor='birthday'>Fecha de Nacimiento</label>
            <input
              type='date'
              id='date'
              name='date'
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor='sex'>Sexo</label>
                <select id='sex' name='sex' value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option value='hombre'>Hombre</option>
                  <option value='mujer'>Mujer</option>
                </select>
         </Grid>
         <Grid item xs={6}>
         <div style={{ textAlign: 'left' }}>
         <label htmlFor='city'>Ciudad</label> <br/>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
          </div>
         </Grid>
         <Grid item xs={6}>
         <label htmlFor='email'>Correo electrónico</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
    
                <label htmlFor='tel'>Teléfono</label>
                <input
                  type='tel'
                  name='tel'
                  id='tel'
                  value={tel}
                  required
                  onChange={(e) => setTel(e.target.value)}
                />
         </Grid>
         <Grid item xs={6}>
         <div style={{ textAlign: 'left' }}>
         <label htmlFor='street'>Calle</label>
                <input
                  type='text'
                  id='street'
                  name='street'
                  value={street}
                  required
                  onChange={(e) => setStreet(e.target.value)}
                />
    
                <label htmlFor='number'>Número(s)</label>
                <input
                  type='text'
                  id='number'
                  name='number'
                  value={number}
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!isNaN(value)) {
                      setNumber(value);
                      setErrorMessage('');
                    } else {
                      setErrorMessage('Please enter a valid number');
                    }
                  }}
                />
          </div>
         </Grid>
         <Grid item xs={6}>
         <label htmlFor='school'>Escolaridad</label>
                <select id='school' name='school'>
                  <option value="universidad">Universidad</option>
                  <option value="preparatoria">Preparatoria</option>
                </select>
         </Grid>
         <Grid item xs={6}>
         <div style={{ textAlign: 'left' }}>
         <label htmlFor='cp'>Código Postal</label>
                <input
                  type='text'
                  id='cp'
                  name='cp'
                  value={cp}
                  required
                  onChange={(e) => setCp(e.target.value)}
                />
    
                <label htmlFor='address'>Colonia</label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
            </div>
         </Grid>
         </Grid>
         <Button variant='outline-success' className='BotonLogin'>
        Regístrate
      </Button>{' '}
      <p>
        ¿Ya tienes cuenta?{' '}
        <span className='link' onClick={gotoLoginPage}>
          Ingresa
        </span>
      </p>
      </div>
      </>  
    );
}    
export default Signup;
