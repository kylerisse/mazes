class Square {

    constructor(i, j, x, y, width, height) {
        this.i = i
        this.j = j
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.topWall = true
        this.bottomWall = true
        this.leftWall = true
        this.rightWall = true
    }

    draw() {
        this.drawWalls()
    }

    drawWalls() {
        stroke(0)
        strokeWeight(2)
        if (this.topWall) {
            line(this.x, this.y, this.x + this.width, this.y)
        }
        if (this.bottomWall) {
            line(this.x, this.y + this.height, this.x + this.width, this.y + this.height)
        }
        if (this.leftWall) {
            line(this.x, this.y, this.x, this.y + this.height)
        }
        if (this.rightWall) {
            line(this.x + this.width, this.y, this.x + this.width, this.y + this.height)
        }
    }

    colorRed() {
        fill(255, 32, 0, 100)
        rect(this.x, this.y, this.width, this.height)
    }

    colorBlue() {
        fill(0, 32, 255, 100)
        noStroke()
        rect(this.x, this.y, this.width, this.height)
    }

    colorGreen() {
        fill(0, 255, 32, 100)
        noStroke()
        rect(this.x, this.y, this.width, this.height)
    }

}
