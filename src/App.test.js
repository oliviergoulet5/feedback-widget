import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FeedbackForm from './FeedbackForm';

configure({ adapter: new Adapter() });

describe('Interactions with the anonymity toggle on the form', () => {
    test("Hides the anonymity toggle when allowAnonymity configuration is false.", () => {
        const wrapper = shallow(
            <FeedbackForm configuration={{ allowAnonymity: false }} />
        )
    
        expect(wrapper.find('#anonymity-toggle').isEmptyRender()).toBe(true)
    });
})