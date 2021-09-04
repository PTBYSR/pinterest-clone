import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './Mainboard.css'

function Mainboard(props, index) {

    let {pins} = props;

    return (
        <Wrapper>
            <Container className="mainboard__container">
                {pins.map((pin) => {
                    let {urls} = pin;
                    return <Pin key={index} urls={urls}/>
                })}
            </Container>
        </Wrapper>
    )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
`
const Container = styled.div`
    margin: 0 auto;
    height: 100%;
    background-color: white;
    `