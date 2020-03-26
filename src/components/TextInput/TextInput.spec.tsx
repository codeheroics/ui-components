import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { TextInput } from './TextInput';

describe('<TextInput>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const textInput = mount(<TextInput />);
      expect(textInput).toMatchSnapshot();
    });

    it('should render placeholder', () => {
      const textInput = mount(<TextInput placeholder='placeholder' />);

      expect(textInput).toMatchSnapshot();
    });

    it('should render error', () => {
      const textInput = mount(<TextInput feedbackType='error' />);

      expect(textInput).toMatchSnapshot();
    });

    it('should render warning', () => {
      const textInput = mount(<TextInput feedbackType='warning' />);

      expect(textInput).toMatchSnapshot();
    });

    it('should render disabled', () => {
      const textInput = mount(<TextInput disabled />);

      expect(textInput).toMatchSnapshot();
    });

    it('should render warning and show feedback text', () => {
      const textInput = mount(
        <TextInput feedbackType='warning' feedbackText='warning' />
      );

      expect(textInput).toMatchSnapshot();
    });
  });
});
