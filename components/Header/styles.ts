import styled from 'styled-components';

export const Header = styled.header`
    background: var(--second-bg);
    width: 100;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6%;
`;

export const BagIcon = styled.div<{ bagLength?: number }>`
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    position: relative;
    transition: all ease .2s;

    &:hover {
        transform: scale(1.05);
    }

    > svg {
        width: 100%;
        height: 100%;
    }

    &:after {
        ${({ bagLength }) => bagLength ? `content: "${bagLength}"` : 'display: none'};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: -.5rem;
        right: 0;
        background: var(--btn);
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        color: #fff;
    }
`;