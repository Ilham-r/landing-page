import React from 'react'
import { Button, Container, Img, SvgContainer, TextContainer, TextH1, Textp } from './MainElements'
import svg  from '../../images/main.svg'

function Main() {
    return (
    
        <>
            <Container>
                <TextContainer>
                    <TextH1>
                     Create your Outdoor Advetnure
                    </TextH1>
                    <Textp>There's still time, Make your way out</Textp>
                    <Button>Get Start</Button>
                </TextContainer>
                <SvgContainer><Img src={svg} /></SvgContainer>
            </Container>

        </>
    )
}

export default Main
