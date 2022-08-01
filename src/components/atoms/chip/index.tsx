import styled from 'styled-components';
import colors, { COLOR_TYPES } from '../../utils/colors';

interface IChip{
    variant:COLOR_TYPES
}

const Chip = styled.span<IChip>`
    display: inline-block;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: 14px;
    color: white;
    background-color: ${({ variant = 'primary' }) => colors[variant]};
`;

export default Chip;
