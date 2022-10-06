
import { Button } from "components/Button"
import { ButtonContainer, Container, Content } from "./styles"

type IBannerProps = {
    url: string;
    imageUrl: string;
    description: string;
    title: string;
}

const Banner = ({ url, imageUrl, title, description }: IBannerProps) => {
    return (
        <Container imageUrl={imageUrl}>
            <Content>
                <h1>{title}</h1>
                <span>{description}</span>

                <ButtonContainer>
                    <Button>
                        Assistir agora
                    </Button>
                </ButtonContainer>

            </Content>
        </Container>)
}

export { Banner }