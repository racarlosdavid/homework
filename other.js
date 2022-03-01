function compose (){
    const ar = arguments;
    const arg_size = arguments.length
    return function (){
        let ar2;
        for (let index = 0; index < arg_size; index++) {
            if (index == 0) {
                ar2 = ar[index].apply(this,arguments); 
            }else{
                ar2 = ar[index].call(this,ar2); 
            }
        }
    }
}

function one(x){return x+x+x;}
function two(y){console.log('x'+y+y)}

const my = compose(one,two);
my(6)