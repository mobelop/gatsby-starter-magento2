import React from 'react';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ProductOptions from 'components/ProductOptions';
import AddToCart from 'components/AddToCart';
import { media } from 'helpers/media';
import { Helmet } from 'react-helmet';

export const ProductDetails = styled.div`
    display: flex;
    padding: 2em;
    justify-content: center;
    ${media.tablet`display: block`} ${media.phone`display: block`};
`;

export const MetaWrap = styled.div`
    max-width: 30vw;
    ${media.tablet`max-width: 95vw;`} ${media.phone`max-width: 95vw;`};
`;

export const ImageWrap = styled.div`
    min-width: 30vw;
    ${media.tablet`min-width: 95vw;`} ${media.phone`min-width: 95vw;`};
`;

const Product = ({
    data: { magentoProduct: product },
    pageContext: { image },
}) => (
    <div>
        {product && (
            <Layout>
                <Helmet>
                    <title>{product.name}</title>
                </Helmet>
                <ProductDetails>
                    <ImageWrap>
                        {product.image.childImageSharp ? (
                            <Img fluid={product.image.childImageSharp.fluid} />
                        ) : (
                            <div>error</div>
                        )}
                    </ImageWrap>

                    <MetaWrap>
                        <h2>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: product.name,
                                }}
                            />
                        </h2>

                        <ProductOptions
                            options={product.configurable_options}
                        />

                        <div
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />

                        <AddToCart item={toItem(product)} />
                    </MetaWrap>
                </ProductDetails>
            </Layout>
        )}
    </div>
);

function toItem(item) {
    return {
        id: item.id,
        name: item.name,
        price: item.price.regularPrice.amount.value,
        qty: 1,
        url: `/${item.url_key}/`,
        image: item.image,
    };
}

export default Product;

export const query = graphql`
    query ProductQuery($url_key: String) {
        magentoProduct(url_key: { eq: $url_key }) {
            id
            sku
            name
            description
            small_image
            image {
                childImageSharp {
                    fluid(maxWidth: 1024, maxHeight: 1024) {
                        src
                        srcSet
                        sizes
                        aspectRatio
                        base64
                    }
                }
            }

            categories {
                id
                name
                url_path
            }

            configurable_options {
                label
                values {
                    label
                    value_index
                }
            }

            url_key
            price {
                regularPrice {
                    amount {
                        value
                        currency
                    }
                }
            }
        }
    }
`;
