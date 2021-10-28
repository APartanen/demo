import './App.css';
import React, { useState, useEffect } from 'react';


//let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 2},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 3}]
//let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 5},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 6}]
//let arr3 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 7},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 8},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 9}]
//let arr4 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 10},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 11},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 12}]


const Alikomponentti = ({ vastausVaihtoehdot, listaKysymyksiä, setPääkysymykset, pääkysymykset  })  => {
  const [vaihtoehdot, setVaihtoehdot] = useState(vastausVaihtoehdot)
  const [vastaukset, setVastaukset] = useState([])


const save = (id) => {
  let array = pääkysymykset[listaKysymyksiä[0].id][0].vastausVaihtoehdot
  array.forEach(element => {
    if (element.komponentinId === id) {
      element.booleanArvoVastaukselle = !element.booleanArvoVastaukselle 
    }
  pääkysymykset[listaKysymyksiä[0].id][0].vastausVaihtoehdot = array
  setPääkysymykset(pääkysymykset.concat())

  });

}

    return (
      <>
        {vaihtoehdot.map((vaihtoehto) => {
          return vaihtoehto.booleanArvoVastaukselle === false ? (
          <> 
            <div class="answerlines">
              <div class="answerline">
                <input type="checkbox" id={vaihtoehto.komponentinId} onClick={() => save(vaihtoehto.komponentinId)}/> {vaihtoehto.vastaus}
              </div>
            </div> 
        </>) 
        :
        <> 
        <div class="answerlines">
          <div class="answerline">
            <input type="checkbox" checked id={vaihtoehto.komponentinId} onClick={() => save(vaihtoehto.komponentinId)}/> {vaihtoehto.vastaus}
          </div>
        </div> 
      </>
        })}
  </>
  );
}

export default Alikomponentti;