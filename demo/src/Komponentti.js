import './App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alikomponentti from './Alikomponentti'

//let listaPääkysymyksiä1 = [{pääkysymys: "Onko JavaScript kivaa?", id: 1, vastausVaihtoehdot:arr1}]
//let listaPääkysymyksiä2 = [{pääkysymys: "Onko React kivaa?", id: 2, vastausVaihtoehdot:arr2}]
//let listaPääkysymyksiä3 = [{pääkysymys: "Onko Reactin hookit vaikeita?", id: 3, vastausVaihtoehdot:arr3}]
//let listaPääkysymyksiä4 = [{pääkysymys: "Joko alkaa päässä sirittää?", id: 4, vastausVaihtoehdot:arr4}]

const Komponentti = ({ pääkysymys,setPääkysymykset,pääkysymykset})  => {
  const [listaKysymyksiä, setListaKysymyksiä] = useState(pääkysymys)

  return (
    <Box class="container">
      <div class="box shadow">
        {listaKysymyksiä.map((listaPääkysymyksiä) => (
            <Grid class="textbox"> 
              <h1>{listaPääkysymyksiä.pääkysymys}</h1>
              <Alikomponentti vastausVaihtoehdot={listaPääkysymyksiä.vastausVaihtoehdot} listaKysymyksiä={listaKysymyksiä} setPääkysymykset={setPääkysymykset} pääkysymykset={pääkysymykset}/> 
            </Grid>
            ))}
       </div>     
    </Box>
  );
}

export default Komponentti;