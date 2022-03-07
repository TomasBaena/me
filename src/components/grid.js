import styled from 'styled-components';

export const Grid = styled.div`
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row ${(props)=> props.wrap};
    justify-content: ${(props)=> props.justify};
    text-align: ${(props)=> props.textAlign};
    align-items: ${(props)=> props.alignItems};
    margin-top: ${(props)=> props.topMargin};
    overflow: ${(props)=> props.overflow};
`;

export const Col = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: ${(props)=> props.size};
    justify-content: ${(props)=> props.justify};
    align-items: ${(props)=> props.alignItems};
    text-align: ${(props)=> props.textAlign};

    ${(props) => props.hide && media[props.hide](`
        display: none;
    `)}
`;

const media = {
    xs: (styles) => `
        @media only screen and (max-width:480px) {
            ${styles}
        }
    `
}