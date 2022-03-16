import styled from 'styled-components';

export const CartItem = styled.div`
    /* border: 1px solid var(--primary); */
    background: var(--card);
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    /* align-items: center; */
    font-size: 1.8rem;
    color: var(--text);
    gap: 1rem;

    .name-price {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > p {
            font-size: 2rem;
        }
    }

    .quantity {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 1rem;
        
        > div {
            cursor: pointer;
            padding: .5rem;
            background: var(--btn);
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .image-container {
        background: #fff;
        width: 10rem;
        height: 10rem;
        padding: 1rem;
        aspect-ratio: 1/1;
    }
`;