import { css, Global } from '@emotion/react';

export const GlobalStyes = (
    <Global
        styles={css`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                
            };
            body {
                font-family: 'DM Sans', sans-serif;
            }
            `}
            />
);