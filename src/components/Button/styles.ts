import styled from "styled-components"

export const Text = styled.span`
    font-weight: 700;
    font-size: 16px;
    color: #fff;
`

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border-radius: 24px;
    background: transparent;
    border: 1px solid #fff;

    transition: 0.2s;

    :hover {
        background: #fff;

        ${Text} {
            color: #000;
        }
    }
`
