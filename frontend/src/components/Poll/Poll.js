import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Poll.css'

const Poll = () => {
  return (
    <div>
      <form className='pollsquare'>
        <p className='question'>Ce animal se afla pe tricourile departamentului de IT?</p>
        <p className='makeachoice'>Make a choice:</p>
        <div className="pollLabel">
        <input type="radio" id="html" name="fav_language" value="HTML"></input>
        <label for="html">nsuh</label><br/>
        </div>
        <div className="pollLabel">
        <input type="radio" id="css" name="fav_language" value="CSS"></input>
        <label for="css">da</label><br/>
        </div>
        <div className="pollLabel">
        <input className='radio' type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
        <label for="javascript">Aprob</label>
        </div>
      </form>
      
    </div>
  );
};

export default Poll;
