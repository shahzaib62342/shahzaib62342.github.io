

// Öbject Based Information

var userObject={

    name:"Muhammad Shahzaib",
    designation1:"Ionic Developer",
    designation2:"IT CONSULTANT",
    cellNumber:"+92 (349) 0956508",
    email:"nomankhan.ks95@gmail.com",

    userReview1:"I am Certified from(Aptech Global Learning solutions Malaysia) Information  Technolgy (Pvt) batch 2017 and also i am a  IT Consultant in Fieldway Technology Pvt and working on  CA broadcom Infrastructure Managment and Security Managment since 2017 and i am giving my best todo something in technology.",
    userReview2:"I have completed my schooling from Sarfaraz Academy primary and Secondry karachi  in 2014 as 1<sup>st</sup> division. then i completed my Inter from Mumtaz Govt boys and Girls collage karachi  as 2<sup>st</sup> division in 2014 from the begining i was very passionate about computer technologies therefore studying in Aptech Learning soloution is a <strong> Golden Chance </strong> for me. I'll never try to loose this and always be sincere with those who give me this chance and be always with them for development of country.",
    userQuote:"<i>Make your Way to Success</br> The Glory Will be yours</i>"
}


document.getElementById("goodName").innerHTML=userObject.name;

document.getElementById('shortR').innerHTML=userObject.designation1 +", "+ userObject.designation2;

document.getElementById('qR1').innerHTML=userObject.userReview1;
document.getElementById('qR2').innerHTML=userObject.userReview2;
document.getElementById('userBQ').innerHTML=userObject.userQuote;

document.getElementById('cell').innerHTML=" "+userObject.cellNumber;
document.getElementById('mail').innerHTML=" "+userObject.email;

