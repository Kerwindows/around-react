import React from 'react';
import trash from '../images/Trash.svg';
import loader from '../images/loader.png';

 
function Templates() {
    return (
      <>
 <template id="card-template">
        <li className="card">
            <img className="card__image" src={loader} alt="card" />
            <button className="card__trash">
                <img className="card__trash-image hide" src={trash} alt="Trash" />
            </button>
            <div className="card__place-title">
                <h2 className="card__place-name">loading...</h2>
                <div className="card__place-container">
                    <button type="button" className="card__place-favorite"></button>
                    <p className="card__place-num">0</p>
                </div>
            </div>
        </li>
    </template>
     </>
     )
 }
 
 export default Templates;
 