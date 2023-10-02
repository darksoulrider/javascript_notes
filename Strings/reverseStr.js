
// ************ 1 -way ***********

const rever = (str) => {
  let len = str.length;
  lis = str.split(" ");
  let fin = []
  lis.forEach((element) => {
    if(element.length >=5){
      fin.push([...element].reverse().join(""))
    }else{
      fin.push(element)
    }
  });
  return fin.join(" ")
};
// console.log(rever("I am Mukesh"));


 
