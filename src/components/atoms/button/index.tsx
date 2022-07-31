/* eslint-disable no-constant-condition */
import styled from 'styled-components';
import colors, { COLOR_TYPES } from '../../utils/colors';

interface IButton{
    variant:COLOR_TYPES,
    color:string,
    bgColor:string,
    size:'large'|'default'|'full'
}

const ButtonSizes = {
  large: '14px 16px',
  default: '6px 12px',
  full: '14px 16px',
};

const Button = styled.button<IButton>`
    padding: ${({ size = 'default' }) => ButtonSizes[size]};
    background-color: ${({ variant = 'primary', bgColor }) => bgColor || colors[variant]};
    color: ${({ color }) => color || '#ffffff'};
    border-radius: 5px;
    border: none;
    font-size: ${({ size = 'default' }) => (size === 'large' || size === 'full' ? '16px' : '14px')};
    width: ${({ size }) => (size === 'full' ? '-webkit-fill-available' : 'auto')};
`;

export default Button;
