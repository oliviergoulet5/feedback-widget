import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

const API_PATH = 'http://localhost:8080'; // stub

function FeedbackForm(props) {
    const [ anonymous, setAnonymous ] = useState(false);
    const [ name, setName ] = useState('');
    const [ submitted, setSubmitted ] = useState(false)

    let alert = submitted ? <Alert color='success'>{ props.configuration.validSubmissionMessage }</Alert> : null;

    let nameField = <input 
        id='name' 
        type='text'
        name='name' 
        value={ props.configuration.accountName ? props.configuration.accountName : anonymous ? 'Anonymous' : name } 
        disabled={ props.configuration.accountName !== undefined || anonymous ? true : false } 
        onChange={ event => setName(event.target.value) }
    />

    let anonymityToggle = props.configuration.allowAnonymity ? 
        <>
            <input 
                id='anonymity-toggle'
                type='checkbox' 
                name='isAnonymous' 
                checked={ anonymous } 
                onChange={ event => setAnonymous(event.target.checked) }
            />
            <label htmlFor='anonymous'>Send Privately?</label>
        </> : null;

    let attachmentButton = props.configuration.acceptedFileFormats && props.configuration.acceptedFileFormats.length !== 0 ? <input id='attachmentButton' type='file' name='attachments' multiple/> : null;

    const handleSubmit = (form) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);

        let formData = new FormData(form);
        // Validate form here

        // If succeeded
        xhr.send(formData);
        setSubmitted(true);
    }

    return (
        <Container>
            <form action={`${ API_PATH }/submit-feedback`} method='POST' encType='multipart/form-data' onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event.target);
            }}>
                <Row>
                    { alert }
                    { nameField }
                    { anonymityToggle }

                </Row>
                <Row>
                    <textarea name='description' rows='4' cols='50' />
                </Row>
                <Row>
                    { attachmentButton }
                    <input type='submit' value='Submit' />
                </Row>
            </form>
        </Container>
    )
}

FeedbackForm.defaultProps = {
    configuration: {
        allowAnonymity: true,
        maximumCharacters: 250,
        minimumCharacters: 30,
        validSubmissionMessage: 'Your feedback has been submitted.' 
    }
}

export default FeedbackForm;

/*
Configuration:
    anonimityAllowed: boolean,
    acceptedAttachments: Map<string> of file extensions
    receptionMethod: json (email? write email data, direct data to http? write http information) NEED MORE RESEARCH
    minimumCharacters: number,
    maximumCharacters: number
Form data: 
    timeSent,

*/