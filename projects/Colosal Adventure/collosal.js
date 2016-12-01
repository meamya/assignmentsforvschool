//User starts the game, enters name and is prompted to enter a W. Starts with 10 HP. Game goes to 20 HP to win.
var readline = require('readline-sync');
var greeting = readline.question("Hello and Welcome to a Lovely Game of Friend or Faux, Enjoy! press enter to begin")
console.log(greeting);
var name = readline.question("Enter Your Name?");
console.log(name)
var walking = readline.question("Hello " + name + " You have entered the journey with 10 Help Points, Enter a w to begin.")
var walk = true
var weaponpower = ["bubbleofprotection", "invisiblepiercingsword", "lighteningbolt"];
while (walk) {
    var userHP = 10
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var newarr = [];

    function chooseforf() {
        newarr = [];
        for (var i = 0; i < 10; i++) {
            var random = getRandomInt(0, 9);
            var randomchoose = friendorfaux[random];
            var typerandom = randomchoose.type;
            newarr.push(typerandom);
        }
        return newarr;
    }
    chooseforf()
        //console.log(newarr)
    for (var i = 0; i < newarr.length; i++) {
        if (newarr[i] === "faux") {
            console.log("Hey " + newarr[i] + "has appeared in your path and has stolen five Health Points from your journey");
            var user = readline.question("Do You want to fight to get them back?");
            if (user === "yes") {
                var randomweapon = getRandomInt(0, 2);
                var typerandomweapon = weaponpower[randomweapon];
                if (typerandomweapon === 0) {
                    (user()) =
                }
                else if (typerandomweapon === 1) {}
                else if (typerandomweapon === 2) {}
            }
            console.log(typerandomweapon)
            userHP -= 5
        }
        else if (newarr[i] === "friend") {
            console.log(newarr[i] + "You have a friend to deliver 1 Health Point")
            console.log(userHP += 1)
        }
        console.log("user " + userHP);
    }
    walk = false
}
}

x = {
    name: 'b',
    age: 23
}
//chooseforf();
//if(typerandom === "friend"){
//   HP++    
//    chooseforf();
//    if(typerandom === "faux"){
//        HP 
//    }
//    else if (){
//      HP is > 0 = push point to HP 
//        getRandomInt (0,9);
//        
//    while (var i = 0; i < 1  )
//          
//        
//    }
//        
//    
//    walk = false; 
//}
//var friendorfaux = [
//    {ffname:'<p>You can use the mark tag to <mark>highlight</mark> text.</p>
//essimystica',type: 'faux', HP:'-5',},
//    {ffname:'energydrainu' , type: 'faux', HP:'-5'},
//    {ffname:'compassionista' , type: 'friend', HP: '+1'},
//    {ffname:'shrewdia', type:'friend', HP:'+1'},
//    {ffname:'mr.wisdom', type:'friend',HP:'+1'},
//    {ffname:'ms.mischief',type:'faux',HP:'-5'},
//    {ffname:'deceptionick' ,type:'faux',HP:'-5'},
//    {ffname:'harmony',type:'friend',HP:'+1'},
//    {ffname:'truth', type:'friend',HP:'+1'},
//    {ffname:'optimistica', type:'friend',HP:'+1'}       
//];
//
//
//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//
//function chooseforf () {
//    var random = getRandomInt(0, 9);
//    console.log(friendorfaux [random]);
//}
//function Decisions() {
//    if (chooseforf)
//}
//           var name
//           name = inputbox("Let's Get Started, What is Your Name?");
//           console.log 
//           ()
//           var W
//           W = prompt(Hi + (name"") + Enter a W to recieve a gift of 10 HP and start walking the Friend or Faux Journey);
//
//
////write a function or prompt that says if player enters W, he will earns 10HP. Then a random friend or faux appears. Pressing W to walk also generates the friendorfaux loop. It is conditional based on HP.
//
////HP values range from 0-20
//
//var HPvalue = []
//for (var i = 1; i <= 20; i++) {
//    console.log([])
//}
/////make a random friend or faux appear from var friendorfaux list. Give values for each. 
/////If a friend appears the user earns up 1 HP while being prompted to walk again. 
/////If faux appears, user loses 5 HP while being prompted to hit back or walk again. 
//                
//var friendorfaux = [
//    {ffname:'pessimystica','faux',HPvalue:'-5',},
//    {ffname:'energydrainu' , 'faux', HPvalue:'-5'},
//    {ffname:'compassionista' , 'friend',HPvalue '+1'},
//    {ffname:'shrewdia', 'friend', '+1'},
//    {ffname:'mr.wisdom', 'friend', '+1'},
//    {ffname:'ms.mischief', 'faux','-5'},
//    {ffname:'deceptionick' ,'faux','-5'},
//    {ffname:'harmony', 'friend','+1'},
//    {ffname:'truth', 'friend','+1'},
//    {ffname:'optimistica', 'friend','+1'},       
//];
//
////create a function that give 10 HP and then calculates HPs each time the user a friendorfaux appears and while the user hits or misses.
//
////while ffname add or subtract the value 
////if hit +5
////if miss -5
////if value is >1, prompt player to walk  
////if value is <1, game over
//
//function addscore = 
//    
//function determineHP(friendorfaux) {
//    if (friendorfaux === "faux").value {
//        return randomhpValue(-1, -5);
//    } else if (enemyType === "friend").value {
//        return randomhPValue(+1, +5);
//    
//for (var i = 0; i < 20; i++) {
//    
//}
// 
////randomly selects a weapon while looping through hit or miss   
////random attack power between min and max
//
//var weaponpower = [
//    {aweapon: 'bubbleofprotection'}
//    {aweapon: 'invisiblepiercingsword'}
//    {aweapon: 'lighteningbolt'}
//];
//                      
////create hit or miss. 
//var fightingback =['hit', 'miss']; 
//                      
////this random msg displays at end of gameover.
//
//var GameoverMsg = [
//    {msg1:"Keep Hope Alive"},
//    {msg2:"Maintain Mental Health and Wellbeing"}, 
//    {msg3:"Do Something to Stay Insired"}, 
//    {msg4:"Gain More Knowledge About Something"}, 
//    {msg5:"Apply Daily Wisdom"},
//];
//                     
//function beingattacked { 
//    subtract 5 from HP balance
//    while showing a random attackweapon                      
//    while looping through hit or miss
//}
//                              
//function miss {
//    for miss subtract 5 from HP balance
//    while prompting user to play again if HP are >1
//}
//
//for (var i = 0; i < friendorfaux.length; i++) {
//    if (friendorfaux[i].value <= 25) {
//        value.push(HPvalue[i]);
//    } else if (HPvalue[i].value <=0) {
//        gameover.push(""[i]);
//    } else {
//        random.push(friendorfaux[i]);
//    }
//}
//
//
////If attacking, you will choose a random attack power between a min and max
////If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
////After the player attacks or runs the enemy attacks back for a random damage amount
////If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
////If the enemy kills the player the console prints an cool death message and the game ends