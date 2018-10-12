import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Button from './lib/Button';
import equinorTheme from '../EquinorTheme/lib/EquinorTheme';
import defaultTheme from '../DefaultTheme/lib/DefaultTheme';
import { createGlobalStyle } from 'styled-components';
import EquinorLight from '../EquinorTheme/fonts/Equinor-Light.woff';
import EquinorRegular from '../EquinorTheme/fonts/Equinor-Regular.woff';
import EquinorMedium from '../EquinorTheme/fonts/Equinor-Medium.woff';
import EquinorBold from '../EquinorTheme/fonts/Equinor-Bold.woff';
import EquinorLightItalic from '../EquinorTheme/fonts/Equinor-LightItalic.woff';
import EquinorItalic from '../EquinorTheme/fonts/Equinor-Italic.woff';
import EquinorMediumItalic from '../EquinorTheme/fonts/Equinor-MediumItalic.woff';
import EquinorBoldItalic from '../EquinorTheme/fonts/Equinor-BoldItalic.woff';

const EquinorFonts = createGlobalStyle`
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorLight}) format('woff');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorRegular}) format('woff');
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorMedium}) format('woff');
        font-style: normal;
        font-weight: 500;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorBold}) format('woff');
        font-style: normal;
        font-weight: 700;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorLightItalic}) format('woff');
        font-style: italic;
        font-weight: 300;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorItalic}) format('woff');
        font-style: italic;
        font-weight: 400;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorMediumItalic}) format('woff');
        font-style: italic;
        font-weight: 500;
    }
    @font-face {
        font-family: Equinor;
        src: local('☻'), url(${EquinorBoldItalic}) format('woff');
        font-style: italic;
        font-weight: 700;
    }
`;

const DefaultFont = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato');
`;

const stories = storiesOf('Button', module);

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
    background: #ffffff;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 300px;
`;

stories.addDecorator(story => <Wrapper>{story()}</Wrapper>);

stories.add('Buttons with Equnior theme', () => (
    <ButtonWrapper>
        <EquinorFonts />
        <Button theme={equinorTheme} variant="primary">
            Primary
        </Button>
        <Button theme={equinorTheme} variant="default">
            Default
        </Button>
    </ButtonWrapper>
));

stories.add('Buttons with Default theme', () => (
    <ButtonWrapper>
        <DefaultFont />
        <Button theme={defaultTheme} variant="primary">
            Primary
        </Button>
        <Button theme={defaultTheme} variant="default">
            Default
        </Button>
    </ButtonWrapper>
));
