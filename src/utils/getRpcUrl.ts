import random from 'lodash/random'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
export const getNodeUrl = ():string => {
  const randomIndex = random(0, nodes.length - 1)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return nodes[randomIndex]!
}
