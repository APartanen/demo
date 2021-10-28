import './App.css';
import React, { useState, useEffect } from 'react';


//let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 2},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 3}]
//let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 5},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 6}]
//let arr3 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 7},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 8},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 9}]
//let arr4 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 10},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 11},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 12}]


const Alikomponentti = ({ vastausVaihtoehdot, listaKysymyksiä, setPääkysymykset, pääkysymykset  })  => {
  const [vaihtoehdot, setVaihtoehdot] = useState(vastausVaihtoehdot)
  const [vastaukset, setVastaukset] = useState([])

console.log("pääkysymykset alikomp:", pääkysymykset)

/**  console.log("tämä kuuluu pääkysymys listalle: ", listaKysymyksiä[0].id)
  console.log("vastausvaihtoehdon id: ",id)
  //hae id avulla pääkysymys ja sen vastausvaihtoehto
  //!tila
  let checkBox = document.getElementById(id);
  //console.log("checked",checkBox.checked)
  //console.log("pääkysymykset", pääkysymykset )
  let index = listaKysymyksiä[0].id
  console.log("tarkista",listaKysymyksiä)
  //val on listaPääkysymyksiä tapainen
  let päälista = pääkysymykset[index]
  console.log("päälista",päälista)
  //päälistaObjekti on listaPääkysymyksiä sisällä oleva objekti
  let päälistaObjekti = päälista[0]
  console.log("päälistaObjekti",päälistaObjekti)

  let kysymysArray = päälistaObjekti.vastausVaihtoehdot
  let vastausIndex = id
  console.log("kysymysArray: ",kysymysArray,"vastausIndex:",vastausIndex, id)
  console.log("kysymysArray: ",kysymysArray,"vastausIndex:",vastausIndex," vastaus:",kysymysArray[vastausIndex])
  let vastaus = kysymysArray[vastausIndex]
  vastaus.booleanArvoVastaukselle = !vastaus.booleanArvoVastaukselle
  console.log(vastaus) */


const save = (id) => {
  console.log("pääkysymykset:",pääkysymykset)
  //vastausVaihtoehdot 0 on aina listan vastausVaihtoehdot ensimmäinen elementti
  let checkBox = document.getElementById(id);
  //console.log("checkBox id",checkBox.id)
  let idCounter = pääkysymykset[listaKysymyksiä[0].id][0].vastausVaihtoehdot[1].komponentinId

    //pitää osoittaa monesko elementti se on listalla numeroilla 0,1,2
  //console.log("pääkysymykset pääasia:",pääkysymykset[listaKysymyksiä[0].id][0].vastausVaihtoehdot, "listan alku id: ", idCounter, id)
  let array = pääkysymykset[listaKysymyksiä[0].id][0].vastausVaihtoehdot
  array.forEach(element => {
    //console.log("element",element)
    if (element.komponentinId === id) {
      element.booleanArvoVastaukselle = !element.booleanArvoVastaukselle 
    }
  //console.log(array)
  pääkysymykset[listaKysymyksiä[0].id][0].vastausVaihtoehdot = array
  setPääkysymykset(pääkysymykset.concat())

  });

}

    return (
      <>
        {vaihtoehdot.map((vaihtoehto) => (
        <> 
          {console.log("vaihtoehto",vaihtoehto)}
            <div class="answerlines">
              <div class="answerline">
                <input type="checkbox" id={vaihtoehto.komponentinId} onClick={() => save(vaihtoehto.komponentinId)}/> {vaihtoehto.vastaus}
              </div>
            </div> 
        </>
        ))}
  </>
  );
}

export default Alikomponentti;