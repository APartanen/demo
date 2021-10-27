import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Komponentti from './Komponentti'

let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 2},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 3}]
let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 5},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 6}]

let listaPääkysymyksiä1 = [{pääkysymys: "Onko JavaScript kivaa?", id: 1, vastausVaihtoehdot:arr1}]
let listaPääkysymyksiä2 = [{pääkysymys: "Onko React kivaa?", id: 1, vastausVaihtoehdot:arr2}]

let kaikki = [listaPääkysymyksiä1,listaPääkysymyksiä2]

function App() {
  const [pääkysymykset, setPääkysymykset] = useState(kaikki)
  const [tämänHetkinen, setTämänhetkinen] = useState([])
  console.log(kaikki)
  return (
    <Container> 
      {kaikki.map((setti) => (
        <> 
        {console.log("setti",setti)}
        <Komponentti pääkysymys={setti}/>
        </>
      ))}


    </Container>
  );
}


export default App;
