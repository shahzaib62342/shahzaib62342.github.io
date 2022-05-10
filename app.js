

// Öbject Based Information

var userObject={

    name:"Muhammad Shahzaib",
    designation1:"Ionic/Angular Developer",
    // designation2:"IT CONSULTANT",
    cellNumber:"+92 (340) 2087662",
    email:"m.shahzaib.123456@gmail.com",

    userReview1:"I am Certified from(Aptech Global Learning solutions Malaysia) Information  Technolgy (Pvt) batch 2017 and also i have more than 2 years experince in Ionic Framework. I have developed and designed more than 10 Projects",
    userReview2:"I have completed my schooling from Al Hadeed Grammar High School and Secondry karachi  in 2012. then i completed my Inter from Govt. Islamia Science  Collage Karachi  in 2015 from the begining i was very passionate about computer technologies therefore studying in Aptech Learning soloution is a <strong> Golden Chance </strong> for me. I'll never try to loose this and always be sincere with those who give me this chance and be always with them for development of country.",
    userQuote:"<i>Make your Way to Success</br> The Glory Will be yours</i>"
}


document.getElementById("goodName").innerHTML=userObject.name;

document.getElementById('shortR').innerHTML=userObject.designation1;

document.getElementById('qR1').innerHTML=userObject.userReview1;
document.getElementById('qR2').innerHTML=userObject.userReview2;
document.getElementById('userBQ').innerHTML=userObject.userQuote;

document.getElementById('cell').innerHTML=" "+userObject.cellNumber;
document.getElementById('mail').innerHTML=" "+userObject.email;

