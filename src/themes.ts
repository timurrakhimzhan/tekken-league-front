import {createCss} from "@stitches/react";
import PoppinsThin from '/assets/fonts/Poppins-Thin.ttf';
import PoppinsRegular from '/assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from '/assets/fonts/Poppins-Bold.ttf';
import PlexThin from '/assets/fonts/IBMPlexSans-Thin.ttf';
import PlexRegular from '/assets/fonts/IBMPlexSans-Regular.ttf';
import PlexBold from '/assets/fonts/IBMPlexSans-SemiBold.ttf';


export const {styled, theme, css, global} = createCss({
    theme: {
        space: {
            xSm: '3px',
            sm: '6px',
            md: '12px',
            lg: '18px',
            xLg: '24px'
        },
        colors: {
            backgroundPrimary: 'hsl(200, 7.0%, 8.8%)',
            backgroundSecondary: 'hsl(0, 0%, 19%)',
            primary: 'hsl(196, 98.8%, 66.5%)',
            secondary: 'hsl(59,99.2%,49%)',
            // secondary: 'hsl(34, 100%, 63%)',
            textPrimary: 'hsl(0, 0%, 100%)',
            textSecondary: 'hsl(200, 15%, 65%)',
            divider: 'hsl(10, 0%, 50%)',
            error: 'hsl(345, 53%, 46%)',
            success: 'hsl(133, 42%, 49%)',
            warning: 'hsl(34, 100%, 63%)',
            // warning: 'hsl(59,99.2%,49%)',
            disabled: 'hsl(0, 0%, 50%)'
        },
        fontWeights: {
            regular: '400',
            bold: '700'
        },
        fonts: {
            default: 'Plex Regular',
            thin: 'Plex Thin',
            regular: 'Plex Regular',
            bold: 'Plex Bold'
        },
        fontSizes: {
            xSm: '10px',
            sm: '12px',
            md: '14px',
            lg: '16px',
            xLg: '18px'
        },
        radii: {
            sm: '2px',
            md: '4px',
        },
        sizes: {
            headerHeight: '55px',
            inputHeight: '40px',
            buttonHeight: '33px',
            buttonMinWidth: '65px',
            toasterHeight: '54px',
        }
    }
});

global({
    '@font-face': [
        {
            fontFamily: "Poppins Thin",
            src: `url(${PoppinsThin})`
        },
        {
            fontFamily: "Poppins Regular",
            src: `url(${PoppinsRegular})`
        },
        {
            fontFamily: "Poppins Bold",
            src: `url(${PoppinsBold})`
        },
        {
            fontFamily: "Plex Thin",
            src: `url(${PlexThin})`
        },
        {
            fontFamily: "Plex Regular",
            src: `url(${PlexRegular})`
        },
        {
            fontFamily: "Plex Bold",
            src: `url(${PlexBold})`
        },
    ],
    '::placeholder': {
        color: '$textSecondary',
        opacity: 1,
    },
    body: {
        background: '$backgroundPrimary',
        margin: 0,
        padding: 0,

        //margins for left
        '& .marginLeftAuto': {
            marginLeft: 'auto'
        },
        '& .marginLeft0': {
            marginLeft: '0'
        },
        '& .marginLeftXSm': {
            marginLeft: '$xSm'
        },
        '& .marginLeftSm': {
            marginLeft: '$sm'
        },
        '& .marginLeftMd': {
            marginLeft: '$md'
        },
        '& .marginLeftLg': {
            marginLeft: '$lg'
        },
        '& .marginLeftXLg': {
            marginLeft: '$xLg'
        },

        //margins for top
        '& .marginTopAuto': {
            marginTop: 'auto'
        },
        '& .marginTop0': {
            marginTop: '0'
        },
        '& .marginTopXSm': {
            marginTop: '$xSm'
        },
        '& .marginTopSm': {
            marginTop: '$sm'
        },
        '& .marginTopMd': {
            marginTop: '$md'
        },
        '& .marginTopLg': {
            marginTop: '$lg'
        },
        '& .marginTopXLg': {
            marginTop: '$xLg'
        },

        //margins for right
        '& .marginRightAuto': {
            marginRight: 'auto'
        },
        '& .marginRight0': {
            marginRight: '0'
        },
        '& .marginRightXSm': {
            marginRight: '$xSm'
        },
        '& .marginRightSm': {
            marginRight: '$sm'
        },
        '& .marginRightMd': {
            marginRight: '$md'
        },
        '& .marginRightLg': {
            marginRight: '$lg'
        },
        '& .marginRightXLg': {
            marginRight: '$xLg'
        },

        //margins for bottom
        '& .marginBottomAuto': {
            marginBottom: 'auto'
        },
        '& .marginBottom0': {
            marginBottom: '0'
        },
        '& .marginBottomXSm': {
            marginBottom: '$xSm'
        },
        '& .marginBottomSm': {
            marginBottom: '$sm'
        },
        '& .marginBottomMd': {
            marginBottom: '$md'
        },
        '& .marginBottomLg': {
            marginBottom: '$lg'
        },
        '& .marginBottomXLg': {
            marginBottom: '$xLg'
        },

        //paddings for left
        '& .paddingLeft0': {
            paddingLeft: '0'
        },
        '& .paddingLeftXSm': {
            paddingLeft: '$xSm'
        },
        '& .paddingLeftSm': {
            paddingLeft: '$sm'
        },
        '& .paddingLeftMd': {
            paddingLeft: '$md'
        },
        '& .paddingLeftLg': {
            paddingLeft: '$lg'
        },
        '& .paddingLeftXLg': {
            paddingLeft: '$xLg'
        },

        //paddings for top
        '& .paddingTop0': {
            paddingTop: '0'
        },
        '& .paddingTopXSm': {
            paddingTop: '$xSm'
        },
        '& .paddingTopSm': {
            paddingTop: '$sm'
        },
        '& .paddingTopMd': {
            paddingTop: '$md'
        },
        '& .paddingTopLg': {
            paddingTop: '$lg'
        },
        '& .paddingTopXLg': {
            paddingTop: '$xLg'
        },

        //paddings for right
        '& .paddingRight0': {
            paddingRight: '0'
        },
        '& .paddingRightXSm': {
            paddingRight: '$xSm'
        },
        '& .paddingRightSm': {
            paddingRight: '$sm'
        },
        '& .paddingRightMd': {
            paddingRight: '$md'
        },
        '& .paddingRightLg': {
            paddingRight: '$lg'
        },
        '& .paddingRightXLg': {
            paddingRight: '$xLg'
        },

        //paddings for bottom
        '& .paddingBottom': {
            paddingBottom: '0'
        },
        '& .paddingBottomXSm': {
            paddingBottom: '$xSm'
        },
        '& .paddingBottomSm': {
            paddingBottom: '$sm'
        },
        '& .paddingBottomMd': {
            paddingBottom: '$md'
        },
        '& .paddingBottomLg': {
            paddingBottom: '$lg'
        },
        '& .paddingBottomXLg': {
            paddingBottom: '$xLg'
        },
        '& .flex1': {
            flex: '1'
        },
        '& height100': {
            height: '100%'
        },
    }
})();

