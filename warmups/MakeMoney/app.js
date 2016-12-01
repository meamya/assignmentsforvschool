function tomoney(number) {
    var moneyString = num.toString();
    var 
    
    for(var i = number.length; i>=0; i--){
        money.push(num[i]);
    }
        money.splice(3,0,".");
    money.splice(money.length,0,"$");
    return
    number.toString(), 
    dollars = number.split('.')[0], 
    cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
}
console.log()