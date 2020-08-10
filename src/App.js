import React from "react";
import FeedbackForm from './FeedbackForm'

export default () => (
  <div id='main'>
    <FeedbackForm configuration={{ 
      allowAnonymity: true,
      acceptedFileFormats: ['png', 'jpg'],
      maximumCharacters: 250,
      minimumCharacters: 30
    }}/>
    <footer>
      <p>Powered by Feedback</p>
    </footer>
  </div>
);
