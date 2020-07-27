
'use strict';
let btn = document.getElementById('btnsubmit')

function validation(){
let username = document.getElementById('username').value
let emailId = document.getElementById('emailId').value
let password = document.getElementById('password').value
let confirm = document.getElementById('passwordAgain').value
let mailformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;

    if(username.value==='NULL' || userName.value.length<4){
        div.innerHTML='username is less than 3 chanracter'
    }else{
        return true
    }
   
    if(emailId.value.match(mailformat))
        {
        return true;
        }
        else{
            div.innerHTML= 'Email is not valid'
        }
    
    if(password==null || password.length<7){
        div.innerHTML='Password must be atleast 6 characters'
    }
    if(confirm!==password || confirm===password){
        div.innerHTML='password2 is required'
    }

}
btnsubmit.addEventListener('click',validation)