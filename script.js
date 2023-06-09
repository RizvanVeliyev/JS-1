"use strict";
//task1
let data=""
var slc = document.getElementById('slc');

console.log(slc.value);

let color=""

function Render() {
    data = ''
    for(let i=0;i<slc.value;i++){
        data+=`<tr>`;
    
        for(let j=0;j<slc.value;j++){
            if(i==j || j==slc.value-i-1){
                color='black';
            }
            else{
                color='';
            }
            data+=`<td style="background-color:${color};"> </td>`;
            
    
        }
        data+=`</tr>`
    } 
    document.getElementById("tbl").innerHTML=data;
}


slc.addEventListener('change',Render);





//task2
// let btn=document.getElementById("login_btn");

// function login(){
//     let mail="admin@gmail.com";
//     let pass="12345";
//     let input_mail=document.getElementById("inpt_mail").value;
//     let input_pass=document.getElementById("inpt_pass").value;
//     if(mail===input_mail && pass===input_pass){
//         alert("dogrudur");
//     }
//     else{
//         alert("yalnisdir");
//     }

// }

