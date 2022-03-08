import styled from 'styled-components';

export const Message = styled.main`
    color: var(--text);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    max-width: 88vw;
    
    h1 {
        font-size: 2.5rem;
        text-align: center;
    }

    button {
        border: 2px solid var(--primary);
        color: var(--primary);
        padding: 1rem 4rem;
        border-radius: .5rem;
        background: none;
        cursor: pointer;
        transition: all ease .2s;
        font-weight: 500;
        font-size: 1.8rem;

        &:hover {
            background: var(--primary);
            color: var(--bg);
        }
    }
`;