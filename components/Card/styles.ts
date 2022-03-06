import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .3rem;
    display: flex; 
    flex-direction: column;
    border: 1px solid var(--primary);
    text-decoration: none;

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .5rem;

        > p {
            color: var(--text);
            font-weight: 600;
            font-size: 2.2rem;
        }
    }

    .image-container {
        background: #fff;
        width: 100%;
        height: auto;
        padding: 1rem;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 1rem;
    background: var(--btn);
    color: #fff;
    display: flex;
    border: none;
    border-radius: .3rem;
    align-items: center;
    align-self: flex-end;
    width: max-content;
    gap: .5rem;
    font-size: 1.8rem;

    svg {
        width: 2rem;
        height: 2rem;
        fill: #fff;
    }
`;

export const Title = styled.p`
    color: var(--text);
    padding: .5rem;
    width: 100%;
    font-size: 1.8rem;

`;