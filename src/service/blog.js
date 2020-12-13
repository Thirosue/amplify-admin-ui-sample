import { API, graphqlOperation } from 'aws-amplify';
import { listBlogs } from '../graphql/queries';

/**
 * get a list of blogs
 */
async function list() {
    const results = await API.graphql(graphqlOperation(listBlogs));
    return results.data.listBlogs.items
}

export default list;
