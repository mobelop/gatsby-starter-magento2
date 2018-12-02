const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const Promise = require('bluebird');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: 'babel-plugin-import-graphql',
    });

    actions.setBabelPreset({
        name: '@babel/preset-flow',
    });
};

exports.onCreateWebpackConfig = ({
    stage,
    getConfig,
    rules,
    loaders,
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            plugins: [new DirectoryNamedWebpackPlugin()],
            extensions: ['.mjs', '.js', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto',
                },
            ],
        },
    });
    
    if (stage === 'build-javascript') {
        // turn off source-maps
        actions.setWebpackConfig({
            devtool: false
        })
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    {
                        allMagentoProduct {
                            edges {
                                node {
                                    url_key
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                // Create pages for each product
                result.data.allMagentoProduct.edges.forEach(({node}) => {
                    createPage({
                        path: `/${node.url_key}/`,
                        component: path.resolve(`./src/pages/product.js`),
                        context: {
                            url_key: node.url_key,
                        },
                    });
                });
            })
        );
    });
};

