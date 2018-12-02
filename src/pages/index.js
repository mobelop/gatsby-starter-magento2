import React from 'react';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import Catalog from '../containers/Catalog';

const Index = ({ data }) => (
    <Layout>
        <h2>Products from Magento2 GraphQL endpoint</h2>
        <Catalog
            items={transformMagentoFeed(
                data.allMagentoProduct.edges.map(({ node }) => node)
            )}
        />
        <div style={{ height: '50vh' }} />
    </Layout>
);

export default Index;

function transformMagentoFeed(feed) {
    return feed.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price.regularPrice.amount.value,
        qty: 1,
        url: `/${item.url_key}/`,
        image: item.image,
    }));
}

export const query = graphql`
    query HomepageQuery {
        allMagentoProduct(
            filter: { categories: { elemMatch: { id: { in: [3] } } } }
        ) {
            edges {
                node {
                    id
                    sku
                    name
                    description
                    image {
                        childImageSharp {
                            fluid(maxWidth: 196, maxHeight: 210) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    small_image
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
        }
    }
`;
