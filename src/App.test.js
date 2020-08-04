import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FeedbackForm from './FeedbackForm';



test('Fake test', () => {
    expect(true).toBeTruthy();
});

describe('Interactions with the anonymity toggle on the form', () => {
    test.skip("Hides the anonymity toggle when allowAnonymity configuration is false.", () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ allowAnonymity: false }} />
        )
    
        wrapper.find('#anonymity-toggle').exists().toBe(false);  
    });
})