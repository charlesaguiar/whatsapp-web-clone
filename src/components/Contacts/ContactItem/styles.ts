import styled from 'styled-components';
import colors from '@/design/colors';
import fontSizes from '@/design/fontSizes';

interface IProps {
    isSelected: boolean;
}

export const Container = styled.div<IProps>`
    display: flex;
    align-items: center;
    justify-content: 'flex-start';
    padding: 4px 12px;
    gap: 16px;
    background-color: ${props => (props.isSelected ? colors.active : colors.backgroundAlt)};
    cursor: pointer;

    & > .contact-info {
        display: flex;
        flex-direction: column;
        padding: 16px 0;
        border-bottom: 1px solid ${colors.primary};
        width: 100%;

        .sp-username {
            color: ${colors.strongText};
            font-weight: ${props => (props.isSelected ? 'bold' : 400)};
            font-size: ${fontSizes.main};
            line-height: 21px;
        }
    }
`;

export default null;