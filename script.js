let celeb= document.createElement("div");
celeb.setAttribute("class","birthday")
// celeb.innerHTML="this is a tag";
 


setTimeout(()=>{
    console.log("10");
    celeb.innerHTML="10";
},1000);
setTimeout(()=>{
    console.log("9");
    celeb.innerHTML="9";
},2000);
setTimeout(()=>{
    console.log("8");
    celeb.innerHTML="8";
},3000);
setTimeout(()=>{
    console.log("7");
    celeb.innerHTML="7";
},4000);
setTimeout(()=>{
    console.log("6");
    celeb.innerHTML="6";
},5000);
setTimeout(()=>{
    console.log("5");
    celeb.innerHTML="5";
},6000);
setTimeout(()=>{
    console.log("4");
    celeb.innerHTML="4";
},7000);
setTimeout(()=>{
    console.log("3");
    celeb.innerHTML="3";
},8000);
setTimeout(()=>{
    console.log("2");
    celeb.innerHTML="2";
},9000);
setTimeout(()=>{
    console.log("1");
    celeb.innerHTML="1";
},10000);
setTimeout(()=>{
    console.log("HAPPY INDEPENDENCE DAY");
    celeb.innerHTML="HAPPY INDEPENDENCE DAY";
},11000);

document.body.append(celeb);