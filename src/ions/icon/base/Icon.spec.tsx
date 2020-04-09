import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Icon from './Icon';
import { dashGreen00 } from '@colors';

describe('<Icon>', () => {
  describe('global render', () => {
    it('should render', () => {
      const IconWrapper = mount(<Icon />);

      expect(IconWrapper).toMatchSnapshot();
    });

    describe('component style', () => {
      it('should set a default style if none is provided', () => {
        const IconWrapper = mount(<Icon />);

        expect(IconWrapper).toHaveStyleRule('fill', dashGreen00);
        expect(IconWrapper).toHaveStyleRule('cursor', 'inherit');
        expect(IconWrapper).toHaveStyleRule('width', '20px');
        expect(IconWrapper).toHaveStyleRule('height', '20px');
      });

      it('should set the provided style', () => {
        const IconWrapper = mount(<Icon size={40} color='red' />);

        expect(IconWrapper).toHaveStyleRule('fill', 'red');
        expect(IconWrapper).toHaveStyleRule('width', '40px');
        expect(IconWrapper).toHaveStyleRule('height', '40px');
      });

      it('should handle disabled mode', () => {
        const IconWrapper = mount(<Icon disabled />);

        expect(IconWrapper).toHaveStyleRule('opacity', '0.5');
        expect(IconWrapper).toHaveStyleRule('cursor', 'not-allowed');
      });
    });
  });
});
