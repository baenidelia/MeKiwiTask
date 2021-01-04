import React from 'react';

const TitleBar = () => {

    //Tämän nostin erilleen, koska se sekoittaa koodin lukemista tosi paljon.
    //Tein tästäkin listaitemin kun ei jaksanut alkaa CSS värkkään enempää.
    return (
        <>
        <li className="titleBar">
            <div>
                <h3>Country</h3>
            </div>
            <div>
                <h3>Flag</h3>
            </div>
            <div>
                <h3>Population</h3>
            </div>
            <div>
                <h3>Region</h3>
            </div>
            <div>
                <h3>More</h3>
            </div>
        </li>
        </>
    )
}

export default TitleBar;