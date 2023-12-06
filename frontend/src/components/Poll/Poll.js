import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deletePoll } from '../../features/polls/pollSlice'
import { useDispatch } from 'react-redux'
import './Poll.css'

const Poll = ({ poll }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <form className='pollsquare'>
        <p className='question'>{poll.question}</p>
        <p className='makeachoice'>Make a choice:</p>
        <div className="pollLabel">
        <input type="radio" id="html" name="fav_language" value="HTML"></input>
        <label htmlFor="html">{poll.option1}</label><br/>
        </div>
        <div className="pollLabel">
        <input type="radio" id="css" name="fav_language" value="CSS"></input>
        <label htmlFor="css">{poll.option2}</label><br/>
        </div>
        <div className="pollLabel">
        <input className='radio' type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
        <label htmlFor="javascript">{poll.option3}</label>
        <button onClick={() => dispatch(deletePoll(poll._id))} className='close'>
        Delete
      </button>
        </div>
      </form>
      
    </div>
  );
};

export default Poll;
