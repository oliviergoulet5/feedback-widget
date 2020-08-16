import React from "react";
import FeedbackForm from './FeedbackForm'

import './App.scss';

export default () => (
  <>
    <div className='modal'>
      <FeedbackForm configuration={{ 
        allowAnonymity: true,
        acceptedFileFormats: ['png', 'jpg'],
        maximumCharacters: 250,
        minimumCharacters: 30
      }}/>
      <footer>
        <p className='fine-print'>Powered by Feedback</p>
      </footer>
    </div>
    
    <p id='credit'>
      <b>Feedback Widget Demo</b> by Olivier Goulet
    </p>
  </>
);
