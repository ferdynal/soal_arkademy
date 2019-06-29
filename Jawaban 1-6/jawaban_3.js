function stars(rows) {
    let i = 0, j = 0;
    for (i = 1; i <= rows; i++) {
        let line = "";
        for (j = 1; j < i; j++) {
            line = line + " ";
        }
        for (j = 1; j <= (rows * 2 - (2 * i - 1)); j++) {

            if (i === 1 || j === 1 || j == (rows * 2 - (2 * i - 1))) {
                line = line + "*";
            }
            else {
                line = line + " ";
            }
        }
        console.log(line);
    }
}
stars(10);