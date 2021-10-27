import './App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alikomponentti from './Alikomponentti'

//let listaPääkysymyksiä1 = [{pääkysymys: "Onko JavaScript kivaa?", id: 1, vastausVaihtoehdot:arr1}]
//let listaPääkysymyksiä2 = [{pääkysymys: "Onko React kivaa?", id: 1, vastausVaihtoehdot:arr2}]

const Komponentti = ({ pääkysymys })  => {

  return (
    <Box>
        {pääkysymys.map((listaPääkysymyksiä) => (
            <Grid> 
                <h1>{listaPääkysymyksiä.pääkysymys}</h1>
                {console.log("listaPääkysymyksiä",listaPääkysymyksiä)}
                    <Alikomponentti vastausVaihtoehdot={listaPääkysymyksiä.vastausVaihtoehdot}/> 
            </Grid>
            ))}
    </Box>
  );
}

export default Komponentti;
