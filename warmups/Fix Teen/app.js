function fixTeen (n) {
    if (n===13 || n=== 14 || n=== 17|| n===18|| n===19) {
    return 0;
        } else {
        return n;
        }
}

function noTeenSum (a,b,c) {
        a = fixTeen(a);
        b = fixTeen(b);
        c = fixTeen(c);
        return a+ b+c;
}

console.log(noTeenSum(1,5,13));
