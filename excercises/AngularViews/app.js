var app = angular.module("myApp", ["ngRoute"]);

app.service("Redservice", function(){
    this.count = 100;
    this.increment = function(){
        this.count++;            
        }
this.decrement =function(){
    this.count--;
}    
this.reset = 
}
}