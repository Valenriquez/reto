import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
 
const Administrador = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(`/api/search?query=${searchQuery}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Administrador</h1> <br />
      <h2>BÚSQUEDA DE USUARIOS ADULTOS MAYORES</h2>
      <div className="container">
        <div className="search-bar">
          <h3>¿A quién deseas buscar?</h3>
          <input
            type="text"
            placeholder="Buscar"
            style={{ width: "79%" }}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            Buscar
          </button>
        </div>
        {searchResults.map((result) => (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            key={result.person_id}
          >
            <Grid item xs={4}>
              <div className="column">
                {result.full_name}
              </div>
            </Grid>
          </Grid>
        ))}
      </div>
    </>
  );
};

export default Administrador;