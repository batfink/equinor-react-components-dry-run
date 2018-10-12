import { rgb, rgba } from 'polished';
import PropTypes from 'prop-types';

// Create same hex color from rgba if background is white
export const hexify = (red, green, blue, alpha = 1) => {
    const hex = color =>
        `0${Math.floor(alpha * parseInt(color) + (1 - alpha) * 255).toString(
            16
        )}`.slice(-2);

    return `#${hex(red)}${hex(green)}${hex(blue)}`;
};

// Equinor colors

const alphaVariant1 = 1;
const alphaVariant2 = 0.7;
const alphaVariant3 = 0.5;
const alphaVariant4 = 0.3;
const alphaVariant5 = 0.2;
const alphaVariant6 = 0.08;
const alphaVariant7 = 0.04;

// Energy Red
const energyRed = rgb(255, 18, 67);
const energyRed2 = hexify(255, 18, 67, alphaVariant2);
const energyRed6 = hexify(255, 18, 67, alphaVariant6);

// White
const white = rgb(255, 255, 255);

// Black
const black = rgb(51, 51, 51);

// Gray
const gray = rgb(215, 217, 218);

// Slate Blue
const slateBlue = rgb(36, 55, 70);
const slateBlue7 = hexify(36, 55, 70, alphaVariant7);

// Heritage Red
const heritageRed = rgb(125, 0, 35);

// Moss Green
const mossGreen = rgb(0, 112, 121);
const mossGreen6 = hexify(0, 112, 121, 0.04);

// Mist Blue
const mistBlue = rgb(213, 234, 244);

// Spruce Wood
const spruceWood = rgb(255, 231, 214);

// Lichen Green
const lichenGreen = rgb(230, 250, 236);

const theme = {
    fontFamily: 'Equinor',
    primary: {
        background: energyRed,
        borderColor: energyRed,
        color: white,
        hoverBackground: energyRed2,
        hoverColor: energyRed6,
        focusColor: energyRed2
    },
    default: {
        background: slateBlue7,
        borderColor: gray,
        color: black,
        hoverBackground: white,
        hoverColor: black,
        focusColor: energyRed
    }
};

export const themeProps = PropTypes.shape({
    fontFamily: 'Equinor',
    primary: PropTypes.shape({
        background: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string,
        hoverBackground: PropTypes.string,
        hoverColor: PropTypes.string
    }),
    default: PropTypes.shape({
        background: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string,
        hoverBackground: PropTypes.string,
        hoverColor: PropTypes.string
    })
});

export default theme;
