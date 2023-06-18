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
            schema: "https://spindex-api.spinamp.xyz/v3/graphql"
        }
    },
    ignoreNoDocuments: true,
};

export default config;