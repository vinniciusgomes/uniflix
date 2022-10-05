
import { ButtonContainer, Container, Content } from "./styles"

const imgSrc = "https://i.imgur.com/zaYPAdf.png"

const Banner = () => {
    return (
        <Container imageUrl={imgSrc}>
            <Content>
                <h1>Titulo</h1>
                <span>Descrição</span>

                <ButtonContainer>
                    <button>Assistir agora</button>
                </ButtonContainer>

            </Content>
        </Container>)
}

export { Banner }