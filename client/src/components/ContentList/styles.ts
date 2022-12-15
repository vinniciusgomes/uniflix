import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    .swiper-slide {
        width: 292px;
        height: 440px;   
        overflow: hidden;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 52px;
    margin-bottom: 24px;

    span {
        display: block;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    svg {
        color: #fff;
    }
`

export const ListContainer = styled.div`
    margin-bottom: 42px;

    
`

export const Cover = styled.img`
    width: 100%;
    height: 440px;
    cursor: pointer;
` 
