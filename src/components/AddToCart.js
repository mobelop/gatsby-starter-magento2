import React from 'react';
import styled from 'styled-components';

const AddToCart = styled.button`
    -webkit-appearance: none;
    background-color: #f2c862;
    border-radius: 5px;
    border: none;
    color: #000;
    border: 1px solid #ddd;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 4rem 0 2rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    transition: 0.2s background-color ease;

    &:active,
    &:focus {
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
        outline: none;
    }

    &:hover {
        background-color: #e0b852;
    }

    & + & {
        margin-left: 1rem;
    }
`;

export default () => <AddToCart>Add To Cart</AddToCart>;
