import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FeedbackForm from './FeedbackForm';

import { validateFiles } from  './Util';

configure({ adapter: new Adapter() });

describe('Interactions with the anonymity toggle on the form', () => {
    test('Hides the anonymity toggle when allowAnonymity configuration is false.', () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ allowAnonymity: false }} />
        );
    
        expect(wrapper.find('#anonymity-toggle').isEmptyRender()).toBe(true);
    });

    test('Displays the anonymity toggle when allowAnonimity configuration is true.', () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ allowAnonymity: true }} />
        );

        expect(wrapper.find('#anonymity-toggle').isEmptyRender()).toBe(false);
    });
});

describe('Interactions with the acceptedFileFormats configuration.', () => {
    test('Displays the attachment button when acceptedFileFormats exist.', () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ acceptedFileFormats: ['png', 'jpg'] }} />
        )

        expect(wrapper.find('#attachmentButton').isEmptyRender()).toBe(false);
    });

    test('Doesn\'t render the attachment button if no acceptedFileFormats exist.', () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ }} />
        );

        expect(wrapper.find('#attachmentButton').isEmptyRender()).toBe(true);
    });

    test('Doesn\'t render the attachment button if acceptedFileFormats is defined but empty.', () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ acceptedFileFormats: [] }} />
        );

        expect(wrapper.find('#attachmentButton').isEmptyRender()).toBe(true);
    });

    test('Doesn\'t accept file formats which are not specified in the acceptedFileFormats configuration.', () => {
        expect(validateFiles(['test.txt', 'bob.bmp'], ['png', 'bmp'])).toEqual(false);
    });

    test('Accepts file formats which are specified in the acceptedFileFormats configuration.', () => {
        expect(validateFiles(['test.txt', 'bob.jpg'], ['txt', 'jpg'])).toEqual(true);
    });
});