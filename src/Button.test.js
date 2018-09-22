import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonContainer from './Button.styles';
import theme from './theme';
import 'jest-styled-components';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document
    }
  });
}

describe('Button styled-components', () => {
  it('should render a ButtonContainer', () => {
    const wrapper = shallow(<ButtonContainer theme={theme} />);
    expect(toJson(wrapper)).toHaveStyleRule('color', '#FFD5B7');
  });
});
