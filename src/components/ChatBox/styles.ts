import styled from 'styled-components';
import colors from '@/design/colors';

export const Container = styled.div`
    display: grid;
    width: 80%;
    height: 90%;
    background-color: ${colors.backgroundAlt};

    grid-template-columns: minmax(30%, 1fr) minmax(70%, 2fr);
    grid-template-rows: auto;
`;

export default null;