function flat(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            flat(arr[i])
        } else console.log(arr[i]);
        
    }
}
flat([1,2,[3,4],[5,6,[7,8]],9,10])

// function flat(arr, arr2 = []){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(Array.isArray(arr[i])){
//             flat(arr[i], arr2)
//         } else arr2.push(arr[i])
        
//     }
//     return arr2
// }
// console.log(flat([1,2,[3,4],[5,6,[7,8]],9,10]));