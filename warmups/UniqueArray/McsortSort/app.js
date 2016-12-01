//Take two parameters, an array of user objects and a boolean 'sortAscending'. If the boolean 'sortAscending' is true, sort the array of user object by last name from A-Z
var sortItems = [
        {
            firstName: "Billy"
            , lastName: "Madison"
            , age: 32
    }
    , {
            firstName: "Tommy"
            , lastName: "Pickles"
            , age: 32
    }
    , {
            firstName: "Ray"
            , lastName: "Charles"
            , age: 32
    }
    , {
            firstName: "Lady"
            , lastName: "Gaga"
            , age: 32
    }
    , {
            firstName: "Elizabeth"
            , lastName: "Taylor"
            , age: 32
    }
    , {
            firstName: "Led"
            , lastName: "Zeplin"
            , age: 32
    }
    , {
            firstName: "Micael"
            , lastName: "Johnson"
            , age: 32
    }
    , {
            firstName: "Keri"
            , lastName: "Strug"
            , age: 32
    }
    , {
            firstName: "Chucky"
            , lastName: "Finster"
            , age: 32
    }
    , {
            firstName: "Angelica"
            , lastName: "Pickles"
            , age: 32
    }
, ]
    //sort by lastName
items.sort(function (a, b) {
    if (a.lastName < b.lastname) true
    return +1;
    if (a.lastName > b.lastname) true
    return -1;
});
console.log(sortItems)