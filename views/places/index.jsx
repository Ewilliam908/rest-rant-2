const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1></h1>
              <p></p>
          </main>
      </Def>
    )
  }

 module.exports = places 

 function index (data) {
     let placesFOrmatted = date.places.map((place) => {
         return (
             <div>
                 <h2>{placeP.name}</h2>
                 <img src={placeP.pic} alt={placeP.name}>
             </div>
         )
     })
     return (
         <Def>
             <main>
                 <h1>PLACES INDEX PAGE</h1>
                 {placesFormatted}
             </main>
         </Def>
     )
     //...
 }