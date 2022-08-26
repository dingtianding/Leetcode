/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    const target = graph.length - 1;
    const res = [];
    
    const DFS = (node, path) => { // start at node(0) and path is []
        
        path.push(node); //push the current node into path first. so 0
        
        if(node === target) { //if node is the last node you push it into result
            
            res.push(path);
            
            return;
        }
        for(let edge of graph[node]) { //iterate throuugh all the num(edges) in that node
            DFS(edge,[...path]); // for each edge, you push it into path and call DFS on the edges
        }
    }
    
    DFS(0, [])
    
    return res;
};