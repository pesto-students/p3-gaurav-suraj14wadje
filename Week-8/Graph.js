const Queue = require("./Queue");

class Graph{

    constructor(vertices,edges){
        this.vertices = vertices;
        this.adjacencyList = Array(vertices).fill(null).map(a=>[])
        
        
        edges.forEach(edge=>{
            const [source,destination] = edge;
            this.adjacencyList[source].push(destination);
            this.adjacencyList[destination].push(source)
        })
    }

    isThereAPath(source,destination){
        const queue = new Queue();
        const visited = Array(this.vertices).fill(0);
        this.adjacencyList[source].forEach(vertex=> queue.enQueue(vertex));

        while(!queue.isEmpty()){
            const currentVertex = queue.deQueue();
            if(currentVertex === destination) return true;

            if(visited[currentVertex] === 0){
                visited[currentVertex] = 1;
                this.adjacencyList[currentVertex].forEach(vertex=>queue.enQueue(vertex));
            }
        }
        return false;
    }

    log(){
        this.adjacencyList.forEach((list,index)=>{
            console.log(`${index} => ${list}`);
        })
    }

}


module.exports = Graph;