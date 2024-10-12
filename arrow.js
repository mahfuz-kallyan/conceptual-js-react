// function show(){
// console.log('normal function');
// }
// show();

// const rem =()=>{
//     console.log('arrow funtion');
// }
// rem()

const addArray = (Numbers)=>{
    if(!Array.isArray(Numbers)){
        return 'invalid'
    }

    let sum = 0;
    for(const num of Numbers){
        result = sum + num;
    }
    return result;
};

let x = addArray([1, 3, 4])
console.log(x);

