import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    generates: {
        './src/graph-ql/queries/muzik/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            documents: ['src/graph-ql/queries/muzik/**/*.ts'],
            schema: "https://api.thegraph.com/subgraphs/name/thisisommore/muzik",
        },
        './src/graph-ql/queries/spinamp/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            documents: ['src/graph-ql/queries/spinamp/**/*.ts'],
            schema: "https://api.spinamp.xyz/v3/graphql"
        },
        './src/graph-ql/queries/octav3/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            documents: ['src/graph-ql/queries/octav3/**/*.ts'],
            schema: "https://api.thegraph.com/subgraphs/name/thisisommore/octav3"
        },
        './src/graph-ql/queries/superfluid/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            documents: ['src/graph-ql/queries/superfluid/**/*.ts'],
            schema: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai"
        }

    },
    ignoreNoDocuments: true,
};

export default config;