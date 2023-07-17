import { gql } from "../../superfluid/__generated__";

export const GET_MY_STREAMS = gql(`
query GetMyStreams($owner:ID!) @api(name: superfluid){
  account(id: $owner) {
    outflows(where: {currentFlowRate_gt:0}) {
      receiver {
        id
      }
      currentFlowRate
    }
  }
  }
`)
