import PropTypes from 'prop-types';

const theme = {
    fontFamily: 'Lato, sans-serif',
    primary: {
        background: '#24beff',
        borderColor: '#24beff',
        color: 'white',
        focusColor: '#68d2ff',
        hoverBackground: '#68d2ff',
        hoverColor: 'white'
    },
    default: {
        background: '#f4f9fb',
        borderColor: 'gray',
        color: 'black',
        focusColor: '#68d2ff',
        hoverBackground: 'white',
        hoverColor: 'black'
    }
};

export const themeProps = PropTypes.shape({
    fontFamily: PropTypes.string,
    primary: PropTypes.shape({
        background: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string,
        focusColor: PropTypes.string,
        hoverBackground: PropTypes.string,
        hoverColor: PropTypes.string
    }),
    default: PropTypes.shape({
        background: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string,
        focusColor: PropTypes.string,
        hoverBackground: PropTypes.string,
        hoverColor: PropTypes.string
    })
});

export default theme;
