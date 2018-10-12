import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme, { themeProps } from '../../DefaultTheme/lib/DefaultTheme';

const CSS = (focusColor, hoverBackground) => ({
    primary: css`
        :hover {
            border-color: ${hoverBackground};
        }
        :focus {
            outline: 0 !important;
            border: 1px solid ${focusColor};
            box-shadow: inset 0 0 0 1px white, 0 0 0 1px ${focusColor};
        }
    `,
    default: css`
        :focus {
            border: 1px solid ${focusColor};
            box-shadow: 0 0 0 1px ${focusColor};
            transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    `
});

const StyledButton = styled.button`
    font-family: ${({ fontFamily }) => fontFamily}, sans-serif;
    color: ${({ color }) => color};
    background: ${({ background }) => background};
    border-color: ${({ borderColor }) => borderColor};
    :hover {
        color: ${({ hoverColor }) => hoverColor};
        background: ${({ hoverBackground }) => hoverBackground};
    }
    text-decoration: none;
    font-size: 18px;
    border-radius: 5px;
    padding: 10px 20px;
    :disabled {
        cursor: not-allowed;
    }
    :focus {
        outline: none;
    }
    ${({ variant, focusColor, hoverBackground }) =>
        CSS(focusColor, hoverBackground)[variant]};
`;

const Button = ({
    theme = defaultTheme,
    variant = 'default',
    size = 'medium',
    ...attributes
}) => {
    const themeVariant = theme[variant] || {};
    const {
        color,
        background,
        borderColor,
        focusColor,
        hoverColor,
        hoverBackground
    } = themeVariant;
    const { fontFamily } = theme;
    return (
        <StyledButton
            size={size}
            variant={variant}
            fontFamily={fontFamily}
            color={color}
            background={background}
            borderColor={borderColor}
            focusColor={focusColor}
            hoverColor={hoverColor}
            hoverBackground={hoverBackground}
            {...attributes}
        />
    );
};

Button.propTypes = {
    theme: themeProps,
    variant: PropTypes.oneOf(['default', 'primary']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Button;
