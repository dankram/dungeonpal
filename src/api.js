import { API, graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
API.configure(config)

const api = (operation, variables = {}) => {
  return API.graphql(graphqlOperation(operation, variables))
}

export default api
