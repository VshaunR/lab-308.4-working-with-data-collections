//part 1 

let str =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// console.log(str.split('\n'));

let arr = str
  let cell1="";
  let cell2 ="";
  let cell3 ="";
  let cell4 ="";
  let cell5 ="";
  let newLineIndex=[];
for(let i =0;i<arr.length;i++){
  
  if(arr[i] ==='\n'){
  
    newLineIndex.push(i)
  }
}


for(let i =0;i<arr.length;i++){
 
    if(i<newLineIndex[0]){
      cell1 = (cell1 +arr[i]).split(',')
    }else if (i>newLineIndex[0] && i<newLineIndex[1]){
      cell2= (cell2 +arr[i]).split(',');
    }else if (i>newLineIndex[1] && i<newLineIndex[2]){
      cell3= (cell3 +arr[i]).split(',');
    }else if (i>newLineIndex[2] && i<newLineIndex[3]){
      cell4= (cell4 +arr[i]).split(',');
    }else if(i>newLineIndex[3]){
      cell5 = (cell5 +arr[i]).split(',')
    }

}
// console.log(cell1,cell2,cell3,cell4,cell5)
//console.log(newLineIndex)


//part 2
let nestedArr=[];
nestedArr.push(cell1,cell2,cell3,cell4,cell5);
// console.log(nestedArr);

//part 3
let objArr=[];
let obj={

}

for(let i =0;i<nestedArr.length;i++){
  // console.log(nestedArr[i])
  if(i<nestedArr.length){
     obj = {
      id:nestedArr[i][0],
      name:nestedArr[i][1],
      occupation:nestedArr[i][2],
      age:nestedArr[i][3]
    }
    objArr.push(obj)
  }
}
  let removeTitle = objArr.shift()
 console.log(objArr)

//part 4

// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

let removeLast = objArr.pop();
// console.log(removeLast)
// console.log(objArr);
let toBeInserted = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
objArr.splice(1,0,toBeInserted);
// console.log(objArr)
let bilbo= { id: "7", name: "Bilbo", occupation: "None", age: "111" };
objArr.push(bilbo);
console.log(objArr)




let avgAge =0;
let total=0;
objArr.forEach((age,index,arr)=>{
 
  let length= arr.length
  total = Number(age.age) +total;
  // console.log(age.age)
    avgAge = total/length
    // console.log(total)
})
console.log('The average age is: '+avgAge)
//part 5

let string=''
// console.log(removeTitle)
for(key in removeTitle){
  // console.log(removeTitle[key])
  string += removeTitle[key] +',';
}
string +='\n'
for(let i =0;i<objArr.length;i++){
  
    if(i<objArr.length){
      string = string +objArr[i].id +',';
      string = string +objArr[i].name+',';
      string = string +objArr[i].occupation +','
      string = string +objArr[i].age+',';
    }
    string = string +'\n'
}
console.log(string)