import './App.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Komponentti from './Komponentti'


let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 0},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 2}]
let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 3},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 5}]
let arr3 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 6},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 7},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 8}]
let arr4 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 9},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 10},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 11}]

let listaPääkysymyksiä1 = [{pääkysymys: "listaPääkysymyksiä1", oikeaVastaus: 1, id: 0, vastausVaihtoehdot:arr1}]
let listaPääkysymyksiä2 = [{pääkysymys: "listaPääkysymyksiä2", oikeaVastaus: 2, id: 1, vastausVaihtoehdot:arr2}]
let listaPääkysymyksiä3 = [{pääkysymys: "listaPääkysymyksiä3", oikeaVastaus: 1, id: 2, vastausVaihtoehdot:arr3}]
let listaPääkysymyksiä4 = [{pääkysymys: "listaPääkysymyksiä4", oikeaVastaus: 2, id: 3, vastausVaihtoehdot:arr4}]

let kaikki = [listaPääkysymyksiä1,listaPääkysymyksiä2,listaPääkysymyksiä3, listaPääkysymyksiä4]

function App() {
  const [pääkysymykset, setPääkysymykset] = useState(() => {
    let avain = "localStorageAvain"
    let localStorageData = localStorage.getItem(avain) //hae arvottu numero
    let bool = false
    if (localStorageData === null) {
      bool = true
    }
    //jos bool on true, palauta localStorageData jos false palauta kaikki
    return bool ? kaikki : localStorageData
  });

  
  useEffect(() => {    
  console.log("aaaa",pääkysymykset)
  let avain = "localStorageAvain"
  localStorage.setItem(avain, JSON.stringify(pääkysymykset))
  },[pääkysymykset]); //makes the effect run if changed

  console.log("kaikki",kaikki)
  return (    
    <Container> 
      {pääkysymykset.map((setti) => (
        <> 
        {console.log("setti",setti)}
        <Komponentti pääkysymys={setti} setPääkysymykset={setPääkysymykset} pääkysymykset={pääkysymykset}/>
        </>
      ))}


    </Container>
  );
}


export default App;