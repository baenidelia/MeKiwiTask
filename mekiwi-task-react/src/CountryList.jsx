import {React, useState, useEffect} from 'react';
import Country from './Country.jsx';
import TitleBar from './TitleBar.jsx';

const CountryList = (countryData) => {

    //Määritetään useStatet, että voidaan näyttää hakutulokset
    const [inputText, setInputText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    // const [searching, setSearching] = useState(false);
    //Jos tässä käytti useStatea niin se resetoi liikaa eikä searchi koskaa mene loppuun.
    let searching = false;

    //Monitoroidaan muutoksia hakupalkkiin
    const inputChange = e => {
        setInputText(e.target.value);
        if (inputText.length !== 0) { searching = true}
        else { searching = false };
    }

    //Kutsutaan tarkistusta joka kerta kun inputti muuttuu. Hakutulokset päivittyvät tämän avulla.
    //toLowerCaset molemmissa, että hakutulokset ei mene sekaisin capslockista jne
    useEffect(() => {
        const regionResult = countryData.data.filter(countryRegion => 
            countryRegion.subregion.toLowerCase().includes(inputText.toLowerCase()));
        const nameResult = countryData.data.filter(countryName =>
            countryName.name.toLowerCase().includes(inputText.toLowerCase()));

        setSearchResults(searchResults => [...regionResult, ...nameResult]);
    }, [inputText]);

    return (
        // En aivan satavarma kuinka vapaasti react fragmenttejä saa käyttää..
        <>
            <div className="wideDiv">
                <input type="text" placeholder="Search region or name" value={inputText} onChange={inputChange} className="searchBar"/>
            </div>

            <ul className="countryList">

                <TitleBar />

                {/* Täällä conditional renderöidään joko hakutulokset tai kaikki tulokset */}
                {
                    (searching)
                        ?
                        countryData.data.map((country, index) => {
                            return <li key={index}><Country data={country}/></li>;
                        })
                        :
                        searchResults.map((country, index) => {
                            return <li key={index}><Country data={country}/></li>;
                        })
                }
            </ul>
        </>
    )
}

export default CountryList;