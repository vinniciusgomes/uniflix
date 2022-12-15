import styled from "styled-components"

type IContainerProps = {
    imageUrl: string
}

export const Container = styled.div<IContainerProps>`
    width: 100%;
    height: 648px;
    background: ${({ imageUrl }) => `linear-gradient(269.96deg, rgba(0, 0, 0, 0) 0.04%, rgba(0, 0, 0, 0.8) 99.5%), url(${imageUrl})`};
    background-size: cover;
    background-repeat: no-repeat;
`

export const Content = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto; 

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

    h1 {
        color: #fff;
        font-size: 56px;
        font-weight: 500;
    }

    span { 
        display: block;
        max-width: 632px;
        font-weight: 400;
        font-size: 16px;
        color: #fff;
    }
` 

export const ButtonContainer = styled.div`
    width: 200px
` 