import styled from 'styled-components';
import colors from '@/design/colors';
import fontSizes from '@/design/fontSizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
    border-right: 1px solid ${colors.primary};
    overflow-y: hidden;

    & > .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        padding: 16px;

        background-color: ${colors.primary};

        & > .actions {
            display: flex;
            gap: 16px;

            svg {
                cursor: pointer;
            }
        }
    }

    & > .notification-info {
        display: flex;
        flex-direction: row;
        padding: 32px 16px;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        background-color: ${colors.info};

        .notification-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: ${colors.notificationIcon};
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .notification-disclaim {
            display: flex;
            flex-direction: column;

            .main-disclaim {
                color: ${colors.strongText};
                font-size: ${fontSizes.main};
                margin-bottom: 0.5rem;
            }

            .sub-disclaim {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 8px;
                cursor: pointer;
            }

            .sub-disclaim:hover {
                text-decoration: underline;
            }
        }
    }

    & > .search-chats {
        display: flex;
        padding: 8px 16px;
        border-bottom: 1px solid ${colors.primary};

        .search-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            background-color: ${colors.primary};
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

            svg {
                margin-right: 4px;
            }
        }

        .input-container {
            flex-grow: 1;
        }

        input {
            background-color: ${colors.primary};
            border: 0;
            padding: 16px;
            width: 100%;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            color: ${colors.strongText};
        }

        input::placeholder {
            font-size: ${fontSizes.sub};
            color: ${colors.subText};
        }

        input:focus {
            outline: none;
        }
    }

    & > .contact-list {
        overflow-y: scroll;
    }
`;

export default null;