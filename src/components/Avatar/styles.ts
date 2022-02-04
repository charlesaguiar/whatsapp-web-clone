import styled from 'styled-components';
import colors from '@/design/colors';

interface ContainerProps {
    size: number;
}

export const Container = styled.div<ContainerProps>`
    & > img {
        height: ${props => props.size}px;
        width: ${props => props.size}px;
        border-radius: ${props => props.size / 2}px;
    }
`;

export default null;