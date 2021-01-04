import React from 'react';
import { Link } from 'react-router-dom';

const Country = (country) => {
    return (
        <>
            {/* Otetaan objektista tarvittava data pihalle. Ei mitään kauneinta settiä, mutta toimii. */}
            <div>
                {country.data.name}
            </div>
            <div >
                <img className="countryFlag" src={country.data.flag} alt={`Flag of ` + country.data.name}></img>
            </div>            
            <div>
                <p>{country.data.population.toLocaleString("en-US")}</p>
            </div>
            <div>
                {country.data.subregion}
            </div>
            <div>
                {/* Täällä setupataan se useParams että voi naputella urliin
                    Pakko myöntää että nää ei ihan 120% menny jakeluun...
                */}
                <Link to={`/Country/${country.data.alpha3Code}`}><button className="infoButton">More info</button></Link>
            </div>
        </>
    )
}

export default Country;