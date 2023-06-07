
//const coins = [{ denom: 25, count: 2 },{ denom: 1, count: 7 },{ denom: 10, count: 3 }];
//const coin = [{ denom: 25, count: 1}]

function validDenomination(coin){
    return[1,5,10,25,50,100].indexOf(coin)!==-1;
};

function valueFromCoinObject(obj){
    const {denom = 0, count = 0 }=obj;
    //console.log("denom",denom)
    return validDenomination(denom) ? denom * count: 0;
}

function valueFromArray(arr){
    const totalValue = arr.reduce((acc,coin) =>{
        const value = valueFromCoinObject(coin);
        //console.log("value",value);
        return acc + value;
    },0);
    return totalValue;

}

function coinCount(...coinage){
    return valueFromArray(coinage);

}

module.exports = {
    coinCount
};

//console.log("value object",valueFromCoinObject({ denom: 25, count: 2 }));
//console.log("vaalue array",valueFromArray(coins))
//console.log("valid",validDenomination(coin))

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));