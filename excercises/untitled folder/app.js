function isPalindrome(str){
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    var i = 0, j = str.length - 1;
    console.log(str);
    while(i <= j){
        console.log(str[i], str[j]);
        if (str[i] !== str[j]){
            return false;
        }
        i++
        j--
    }
    return true;
}

isPalindrome("I madam, I mad radio! So I dared! Am I mad?? Am I?!");
isPalindrome("palindrome");
isPalindrome("Star Rats")