import React from "react";
import FeedbackForm from './FeedbackForm'

export default () => (
  <div id='main'>
    <FeedbackForm configuration={{ 
      anonymityAllowed: true,
      acceptedFileFormats: ['png', 'jpg']
    }}/>
    <footer>
      <p>Powered by Feedback</p>
    </footer>
  </div>
);
