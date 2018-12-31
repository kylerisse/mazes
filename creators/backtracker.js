class BacktrackerNode {

    constructor(i, j, visited) {
        this.i = i
        this.j = j
        this.visited = visited
    }

}

class Backtracker {

    constructor(grid) {
        this.grid = grid
        this.done = false
        this.nodes = this.populateNodes()
        this.current = this.getRandomNode()
        this.stack = []
        this.stack.push(this.current)
    }
    
    populateNodes() {
        let cols = this.grid.cols
        let rows = this.grid.rows
        let squares = new Array(cols)
        for (let i = 0; i < cols; i++) {
            squares[i] = new Array(cols)
            for (let j = 0; j < rows; j++) {
                squares[i][j] = new BacktrackerNode(i, j, false)
            }
        }
        return squares
    }

    getRandomNode() {
        let i = floor(random(0, this.grid.cols))
        let j = floor(random(0, this.grid.rows))
        return this.nodes[i][j]
    }

    getRandomUnvistedNeighbor(i, j) {
        let unvisited = []
        if (i - 1 >= 0) {
            if (!this.nodes[i - 1][j].visited) {
                unvisited.push(this.nodes[i - 1][j])
            }
        }
        if (i + 1 < this.grid.cols) {
            if (!this.nodes[i + 1][j].visited) {
                unvisited.push(this.nodes[i + 1][j])
            }
        }
        if (j - 1 >= 0) {
            if (!this.nodes[i][j - 1].visited) {
                unvisited.push(this.nodes[i][j - 1])
            }
        }
        if (j + 1 < this.grid.rows) {
            if (!this.nodes[i][j + 1].visited) {
                unvisited.push(this.nodes[i][j + 1])
            }
        }
        if (unvisited.length > 0) {
            let rand = floor(random(0, unvisited.length))
            return unvisited[rand]
        }
        return false
    }

    update() {
        if (this.stack < 1) {
            this.pickStartEnd()
            this.done = true
            return
        } 
        let next = this.getRandomUnvistedNeighbor(this.current.i, this.current.j)
        if (next) {
            this.stack.push(next)
            this.grid.removeWalls(this.current.i, this.current.j, next.i, next.j)
            next.visited = true
            this.current = next
        } else {
            this.current = this.stack.pop()
        }
    }

    draw() {
        let i = this.current.i
        let j = this.current.j
        this.grid.squares[i][j].colorRed()
    }

    countWalls(i, j) {
        let count = 0
        if (this.grid.squares[i][j].topWall) {
            count++
        }
        if (this.grid.squares[i][j].bottomWall) {
            count++
        }
        if (this.grid.squares[i][j].leftWall) {
            count++
        }
        if (this.grid.squares[i][j].rightWall) {
            count++
        }
        return count
    }

    pickStartEnd() {
        let threeSided = []
        for (let j = 0; j < this.nodes.length; j++) {
            for (let i = 0; i < this.nodes[j].length; i++) {
                if (this.countWalls(i, j) == 3) {
                    threeSided.push(this.grid.squares[i][j])
                }
            }
        }
        this.grid.start = threeSided[0]
        this.grid.end = threeSided[threeSided.length - 1]
    }
}
