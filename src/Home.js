import React from 'react';
import {TakeNum} from "./TakeNum"
export const Home = ({user}) => {

    
    const bakers = ["Boba Fett", "Anikin", "Obi-Wan", "Mulan"]

     

    return (
        <>
            <h1>Welcome to Bay and Marble Doughnut Shoppe, {user.name}!</h1>
            <p>We make awesome dougnuts!</p>
            <h2>Our Bakers:</h2>
            <ul>
                {bakers.map((baker, i) => <li key={i}>{baker}</li> )}
            </ul>
            <TakeNum/>
        </>
    )
}