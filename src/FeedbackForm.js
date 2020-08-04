import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const API_PATH = 'http://localhost:8080'; // stub

function FeedbackForm(props) {
    const [ anonymous, setAnonymous ] = useState(false);
    const [ name, setName ] = useState('');

    let nameField = <input 
        id='name' 
        type='text'
        name='name' 
        value={ props.configuration.accountName ? props.configuration.accountName : anonymous ? 'Anonymous' : name } 
        disabled={ props.configuration.accountName != undefined || anonymous ? true : false } 
        onChange={ event => setName(event.target.value) }
    />

    let attachButton = props.configuration.acceptedFileFormats ? <input type='file' name='attachments' multiple/> : null;

    const handleSubmit = (form) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        xhr.send(new FormData(form));
    }

    return (
        <Container>
            <form action={`${ API_PATH }/submit-feedback`} method='POST' encType='multipart/form-data' onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event.target);
            }}>
                <Row>
                    { nameField }
                    <input 
                        type='checkbox' 
                        name='isAnonymous' 
                        checked={ anonymous } 
                        onChange={ event => setAnonymous(event.target.checked) }
                    />

                    <label htmlFor='anonymous'>Send Privately?</label>
                </Row>
                <Row>
                    <textarea rows='4' cols='50' />
                </Row>
                <Row>
                    { attachButton }
                    <input type='submit' value='Submit' />
                </Row>
            </form>
        </Container>
    )
}

FeedbackForm.defaultProps = {
    configuration: {
        anonymityAllowed: true 
    }
}

export default FeedbackForm;

/*
Configuration:
    anonimityAllowed: boolean,
    acceptedAttachments: Map<string> of file extensions
    receptionMethod: json (email? write email data, direct data to http? write http information) NEED MORE RESEARCH

Form data: 
    timeSent,

*/