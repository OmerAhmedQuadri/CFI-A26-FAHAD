function flat(arr,arr1=[]){
    if(!(Array.isArray(arr))){
        console.log('enter an array');
        return
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            flat(arr[i],arr1)
        }else{
            arr1.push(arr[i])
        }
    }return arr1
}
console.log(flat([1,2,[3,64,23,[24,3223,56,[234,1],24],23,4,6],23,78]));