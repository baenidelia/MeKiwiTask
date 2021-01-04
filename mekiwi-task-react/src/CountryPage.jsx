import React from 'react';
import {useParams} from 'react-router-dom';
import './countryPage.css';

const CountryPage = (countryData) => {
    //Täällä setupataan objekti valmiiksi lukua varten että ei tuu aivan täysin oksennusta koodista
    //samalla laitetaan useParams että sekin toimii
    const { routeCode } = useParams();
    const countryObject = countryData.data.filter(country => country.alpha3Code === routeCode);

    return(
        <div className="container">
            {/* En oo varma voiko näitä helpommin saaha pihalle kuin .mapilla
                Printataan objektista informaatiot oikeille kohdille
            */}
            {countryObject.map((dataObject, index) => {
                return(
                    <div key={index} className="countryCard">
                        <h1 className="countryName">{dataObject.name}</h1> 

                        <img src={dataObject.flag} alt={`Flag of` + dataObject.name} height="240" width="360"></img>
                        <div className="infoBlock">
                            <h2>Population</h2>
                            {/* toLocaleStringillä saadaan pilkut tonneittain numeroihin */}
                            <h3>{dataObject.population.toLocaleString("en-US")}</h3>
                        </div>

                        <div className="infoBlock">
                            <h2>Capital</h2>
                            <h3>{dataObject.capital}</h3>
                        </div>
  
                        <div className="infoBlock">
                            <h2>Languages</h2>
                            {/* Languaget oli objektissa joissa niitä pysty olee monta, nii ajetaa läpi kaikki namet vaan ja laitetaa joinilla kasaan 
                                Tän nappasin netistä, tosi kätsä.
                            */}
                            <h3>{dataObject.languages.filter(language => language.name).map(language => language.name).join(", ")}</h3>
                        </div>

                        <div className="infoBlock">
                            <h2>Currencies</h2>
                            <h3>{dataObject.currencies.filter(currency => currency.name).map(currency => currency.name).join(", ")}</h3>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default CountryPage;