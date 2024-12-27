// let arr=["hello","welcome","to","the","javascript"]

// for(i=0;i<arr.length;i++){
//     let str=[""]
//     for(j=arr[i].length-1;j>=0;j--){
//         str+=arr[i][j]
//     }
//     str=[`${str}`]
//  console.log(str)
// }

let arr1=["hello","welcome","to","the","javascript"]
for(i=0;i<arr1.length;i++){
    let str=[""]
    for(j=arr1[i].length-1;j>=0;j--){

       str+=arr1[i][j]
       str=[`${str}`]
     
    }
    console.log(str)
}


