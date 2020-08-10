import React from 'react';
import { validateFiles } from './Util';

function AttachmentButton(props) {

    const parseFileNames = (files) => {
        // Loop to get an array of file names
        let fileNames = [];
        for (let i = 0; i < files.length; i++) {
            fileNames.push(files.item(i).name);
        } 

        console.log(fileNames);
        return fileNames;
    }

    return (
        <input 
            id='attachmentButton' 
            type='file' 
            name='attachments' 
            multiple 
            onChange={ event => validateFiles(parseFileNames(event.target.files), props.acceptedFileFormats) }
        /> 
    );
}

export default AttachmentButton;