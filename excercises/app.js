var howManyActions = 30;

player = {
    name: "Stetson",
    totalCoins: 10,
    status: "small",
    isStarActive;false,
    setName: function (namePicked){
       if (namePicked.toLowerCase()==="mario"){;
    
} else { if (namePicked ==="luigi"){;   

} else {
    alert("name needs to be mario or luigi")
});

gotHit: function (){
        switch (<p>You can use the mark tag to <mark>highlight</mark> text.</p>
layer.status){
            case "Powered Up"
            this.status = "Big";
            break;
        case "Big":
            this.status = "Small";
            break;
        default:
            this.status = "Dead";
            this.gameActive = false;
    }
},

gotPowerup: function(){
    if(this.status === "big"){
        this.status = "gotPowerUp"    
    }else if (this.status = "small"){
            this.status = "big"
        }
    }
        
gameActive:true,
addCoin: function (){
    this.totalCoins++
},
print:function (){
}
        
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function doAction(){
    switch(getRandomInt(0,2)){
        case 0:
           player.gotHit();
            break;
        case 1:
            player.powerup();
            break;
        case 2:
            player.addCoin();
    }
}
for (var i = 0; i < howManyActions; i++){
    doAction()
}
player.print()
