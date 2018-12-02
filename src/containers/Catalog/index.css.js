import styled from 'styled-components';
import media from 'helpers/media';

export const CatalogWrapper = styled.div`
    display: grid;
    grid: auto / repeat(5, 1fr);
    ${media.tablet`grid: auto / repeat(3, 1fr);`} ${media.phone`grid: auto / repeat(2, 1fr);`}
    grid-gap: 40px 40px;
    padding: 4rem;
`;

export const ProductName = styled.strong`
    display: block;
    line-height: 2em;
    font-family: 'Source Sans Pro', sans-serif;
`;

export const Price = styled.div`
    font-weight: bold;
    font-family: 'Source Sans Pro', sans-serif;
`;

export const CatalogItemContainer = styled.div`
    align-self: center;
    text-align: center;
    img {
        max-width: 200px;
    }
    padding: 1em 2em;
`;
