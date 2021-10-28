import './App.css';
import React, { useState, useEffect } from 'react';


//let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 2},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 3}]
//let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 5},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 6}]
//let arr3 = [{vastaus: "no jaa", booleanArvoVastaukselle: false, komponentinId: 8},{vastaus: "kysytkin vielä!", booleanArvoVastaukselle: false, komponentinId: 9},{vastaus: "kyllä ne tästä...", booleanArvoVastaukselle: false, komponentinId: 10}]
//let arr4 = [{vastaus: "johan nyt toki", booleanArvoVastaukselle: false, komponentinId: 11},{vastaus: "mitä?!", booleanArvoVastaukselle: false, komponentinId: 12},{vastaus: "AAAArrrrggh!!!!", booleanArvoVastaukselle: false, komponentinId: 13}]


const Alikomponentti = ({ vastausVaihtoehdot, listaKysymyksiä, setPääkysymykset })  => {
  const [vaihtoehdot, setVaihtoehdot] = useState(vastausVaihtoehdot)

console.log("vastausVaihtoehdot:", vastausVaihtoehdot)

const save = (id) => {
  console.log("tämä kuuluu pääkysymys listalle: ", listaKysymyksiä[0].id)
  console.log("vastausvaihtoehdon id: ",id)

}

    return (
      <>
        {vaihtoehdot.map((vaihtoehto) => (
        <> 
          {console.log("vaihtoehto",vaihtoehto)}
            <div class="answerlines">
              <div class="answerline">
                <input type="checkbox" onClick={() => save(vaihtoehto.komponentinId)}/> {vaihtoehto.vastaus}
              </div>
            </div> 
        </>
        ))}
  </>
  );
}

export default Alikomponentti;