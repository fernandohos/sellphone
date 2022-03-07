import styled from 'styled-components';

export const CheckoutButton = styled.button`
    background: var(--btn);
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: none;
    padding: 1rem 4rem;
    border-radius: .5rem;

    > svg {
        fill: #fff;
        width: 4rem;
        height: 4rem;
    }
`;