var creator

function setup() {
    createCanvas(800, 800)
    let w = 50 
    maze = new Grid(w, w)
    creator = new Backtracker(maze)
}

function draw() {
    if (creator != undefined) {
        background(255)
        maze.draw()
        creator.update()
        creator.draw()
        if (creator.done) {
            creator = undefined
            background(255)
            maze.draw()
        }
    }
}
