import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { tint } from 'polished';
import { slate, mist } from '../../themes/colors';

const tinted = tint(0.7, slate);

const Animation = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
`;

const animatedBackground = css`
    animation: ${Animation} 6s infinite reverse linear;
    background-image: repeating-linear-gradient(
        -45deg,
        ${tinted},
        ${tinted} 20px,
        ${mist} 20px,
        ${mist} 40px
    );
    background-size: 200% 100%;
`;

const Progressbar = styled.div`
    background: ${slate};
    border-radius: 5px;
    height: 10px;
    border: 1px solid ${tinted};
    ${({ showAnimation }) => showAnimation && animatedBackground};
`;

Progressbar.propTypes = { showAnimation: PropTypes.bool };

Progressbar.defaultProps = { showAnimation: false };

export default Progressbar;
