const graph = new Graph();


graph.addVertex('00001');
graph.addVertex('00002');
graph.addVertex('00003');
graph.addVertex('00004');
graph.addVertex('00005');
graph.addVertex('00006');
graph.addVertex('00007');
graph.addVertex('00008');
graph.addVertex('00009');
graph.addVertex('00010');
graph.addVertex('00011');
graph.addVertex('00012');
graph.addVertex('00013');
graph.addVertex('00014');
graph.addVertex('00015');
graph.addVertex('00016');


graph.addEdge('00001', '00002');
graph.addEdge('00002', '00003');
graph.addEdge('00003', '00004');
graph.addEdge('00004', '00005');
graph.addEdge('00005', '00006');
graph.addEdge('00006', '00007');
graph.addEdge('00007', '00008');
graph.addEdge('00008', '00009');
graph.addEdge('00009', '00010');
graph.addEdge('00011', '00012');
graph.addEdge('00012', '00013');
graph.addEdge('00014', '00015');
graph.addEdge('00015', '00016');

console.log(graph.adjacencyList);