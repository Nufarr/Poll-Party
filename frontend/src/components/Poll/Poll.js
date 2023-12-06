import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Poll.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

const Poll = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };
  
    const handleVoteClick = () => {
      // Handle the vote logic here
      console.log('Voting for:', selectedOption);
    };
  return (
    <div>
      <form className='pollsquare'>
        <p className='question'>Ce animal se afla pe tricourile departamentului de IT?</p>
        <p className='makeachoice'>Make a choice:</p>
        <div className="pollLabel">
        <input 
          type="radio" 
          id="option1" 
          name="fav_language" 
          value="option1"
          onChange={() => handleOptionChange('option1')}>
          </input>
        <label htmlFor="html">nsuh</label><br/>
        </div>
        <div className="pollLabel">
        <input 
          type="radio" 
          id="option2" 
          name="fav_language" 
          value="option2"
          onChange={() => handleOptionChange('option2')}>
          </input>
        <label htmlFor="css">da</label><br/>
        </div>
        <div className="pollLabel">
        <input 
          type="radio" 
          id="option3" 
          name="fav_language" 
          value="option3"
          onChange={() => handleOptionChange('option3')}>
          </input>
        <label htmlFor="javascript">Aprob</label>
        </div>
        {user ? (
          <div>
            <button className="deletebut">Delete</button>
            {selectedOption && (
              <button className="votebut1" onClick={handleVoteClick}>Vote</button>
          )}
          </div>
        ):(
          <div>
          {selectedOption && (
              <button className="votebut2" onClick={handleVoteClick}>Vote</button>
        )}</div>
        )}
        
      </form>
      
    </div>
  );
};

export default Poll;
