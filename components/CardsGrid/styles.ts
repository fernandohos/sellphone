import styled from 'styled-components';

export const CardsGrid = styled.main`
    width: 88%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 3rem auto;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 638px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;