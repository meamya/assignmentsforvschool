function countCode(str) {
    var num = 0;
    for (var i = 0; i < str.length - 3; i++) {
        if (str[i] + str[i + 1] + str[i + 3] === "123") {
            num++
        }
    }
    return num;
}
console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));