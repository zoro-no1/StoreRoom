 export default function rendomString(num=10) {
    const str="abcdefghijklmnopqrstuvwxyz123456789"
    let newStr=""
    for (let i = 0; i < num; i++) {
      newStr+=str[ Math.floor(Math.random()* str.length +1)] 
    }
    return newStr
 }


 