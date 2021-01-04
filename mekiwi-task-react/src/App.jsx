import {React, useState, useEffect} from 'react';
import CountryList from './CountryList.jsx';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import CountryPage from './CountryPage.jsx';
import './app.css';

const App = () => {

    //UseStatet renderöinnin manipulointia varten, näyttää loadingia jos ei ole data saapunut vielä
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    //Datan haku APIsta
    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'https://restcountries.eu/rest/v2/all',
              );
              //Täytyy spreadata array, muuten ei tule data pihalle oikein. Note: Oma kokemus, ei hirveästi kokemusta.
            setCountryData(countryData => [...countryData, ...result.data]);
            setLoading(false);
        };

        fetchData();
      }, []);

// const [routingCode, setRoutingCode] = useState(false);

    //Näytetään loading message jos ei ole data tullut
    if (loading) {
        return <div className="App"> Loading data...</div>;
    }
    //Itse liha.
    if (!loading) {
        return (
            <div className="App">
                {/* Routerin avulla joko renderöidään maiden oma sivu tai maa_lista, Switchillä valittee vain toisen*/}
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <CountryList data={countryData}/>
                        </Route>
                        <Route path="/Country/:routeCode">
                            <CountryPage data={countryData}/>
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }

}

export default App;