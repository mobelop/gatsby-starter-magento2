// @flow
import React, { Component } from 'react';
import Currency from 'components/Currency';
import media from 'helpers/media';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import AddToCart from 'components/AddToCart';
import {
    CatalogItemContainer,
    CatalogWrapper,
    Price,
    ProductName,
} from './index.css';

/**
 * Catalog Properties
 */
type Props = {};

/**
 * Catalog State
 */
type State = {};

const CatalogItem = ({ item }) => {
    return (
        <CatalogItemContainer>
            <div>
                {item.image.childImageSharp ? (
                    <Img fluid={item.image.childImageSharp.fluid} />
                ) : (
                    <div>error</div>
                )}
            </div>
            <ProductName>
                <Link to={item.url}>
                    <span dangerouslySetInnerHTML={{ __html: item.name }} />
                </Link>
            </ProductName>
            <Price>
                <Currency value={item.price} />
            </Price>
            <AddToCart item={item} />
        </CatalogItemContainer>
    );
};

/**
 */
export default class Catalog extends Component<Props, State> {
    render() {
        return (
            <CatalogWrapper>
                {this.props.items.map(item => (
                    <CatalogItem key={item.id} item={item} />
                ))}
            </CatalogWrapper>
        );
    }
}
