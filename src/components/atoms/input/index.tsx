import styled from 'styled-components';
import colors from '../../utils/colors';

const Input = styled.input`
    padding: 8px 14px;
    border: 1px solid #e8e8ee;
    border-radius: 5px;
    width: -webkit-fill-available;
    :invalid {
        border-color: ${colors.danger};
        color: ${colors.danger};
    }
    :focus-visible{
        outline: none;
    }
`;

export default Input;
