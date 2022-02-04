import styled from 'styled-components';
import colors from '@/design/colors';

export const Container = styled.div`
    display: grid;
    width: 80%;
    height: 90%;
    background-color: ${colors.backgroundAlt};

    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
`;

export default null;