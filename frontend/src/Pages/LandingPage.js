import React from 'react';
import {ReactComponent as Testoasa} from "../assets/images/TestoasaCalculatorista.svg";
import "./LandingPage.css";
import Poll from '../components/Poll/Poll';

export default function LandingPage() {
    return(
        <div className="landingpage">
            <div className='nush'>
            <div className='landingtext'>
            <p>Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback
                direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.</p>
            </div>
            <Testoasa className="testoasa" />
            </div>
            <Poll/>
        </div>
    );
}