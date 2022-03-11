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
             <div className="col-sm-6">
                 <h2>{placeP.name}</h2>
                 <p className="text-center">
                     {place.cuisines}
                </p>
                <img src={placeP.pic} alt={placeP.name}>
                <p className="text-center">
                    located in {place.city}, {place.state}
                </p>
             </div>
         )
     })
     return (
         <Def>
             <main>
                 <h1>Places to Rant or Rave About</h1>
                 <div className="row">
                 {placesFormatted}
                 </div>
             </main>
         </Def>
     )
 }