class Grid {

    constructor(cols, rows) {
        this.cols = cols
        this.rows = rows
        this.squares = this.createSquares(cols, rows, floor((width - 1)/cols), floor((height - 1)/rows))
        this.start = false
        this.end = false
    }

    createSquares(cols, rows, width, height) {
        let squares = new Array(cols)
        for (let i = 0; i < cols; i++) {
            squares[i] = new Array(cols)
            for (let j = 0; j < rows; j++) {
                squares[i][j] = new Square(i, j, i * width, j * height, width, height)
            }
        }
        return squares
    }

    draw() {
        if (this.start) {
            this.start.colorBlue()
        }
        if (this.end) {
            this.end.colorGreen()
        }
        for (let col of this.squares) {
            for (let square of col) {
                square.draw()
            }
        }
    }

    removeWalls(i1, j1, i2, j2) {
        if (i1 < i2) {
            this.squares[i1][j1].rightWall = false
            this.squares[i2][j2].leftWall = false
            return
        }
        if (i1 > i2) {
            this.squares[i1][j1].leftWall = false
            this.squares[i2][j2].rightWall = false
        }
        if (j1 < j2) {
            this.squares[i1][j1].bottomWall = false
            this.squares[i2][j2].topWall = false
        }
        if (j1 > j2) {
            this.squares[i1][j1].topWall = false
            this.squares[i2][j2].bottomWall = false
        }
    }

}
