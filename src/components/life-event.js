import styled from 'styled-components';

export const LifeEvent = styled.div`
    justify-content: ${(props)=> props.justify};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-top: 10px;
`;

const IconStyle = {
    width: "35px",
    height: "35px"
};

export const Icon = (props)=> (
    <img style={IconStyle} src={props.src}></img>
);

export const Event = styled.div`
    padding: 0 10px 0 10px;
    margin: 0;
    color:#fff;
    min-width: 170px;
`;