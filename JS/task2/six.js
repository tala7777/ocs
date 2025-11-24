function isPandigital(num){

    let str = num.toString();

    let result = true;
    for (let i = 0; i <= 9; i++) {
        switch (true) {
            case str.includes(i.toString()):

                break;
            default:
                result = false;

        }

    }
    return result;

}
console.log(isPandigital(98140723568910)); // true
console.log(isPandigital(90864523148909)); // false