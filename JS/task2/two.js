let counter = 1;
for (let i = 1; i <= 4; i++) {
    let row = 0;
    for (let j = 1; j <= i; j++) {
        row = row+ counter + " "
        counter++;
    }
      console.log(row);
}