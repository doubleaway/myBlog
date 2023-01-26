
const skillsObj={"html":10,"scss":10,"javascript":7,"jquery":8,"react":6,"vue":5,"photoshop/illustlator":10}

var li=0;


const skill=(e,k)=>{

    let skiilGrephdocument=document.getElementById("skillGraph");
    li+=1;

    console.log(li);
    if(li==1){
        skiilGrephdocument.innerHTML="<ul id='graphCon1'></ul>";
        document.getElementById("graphCon1").innerHTML+="<li ><span class='graph"+k+"'>"+e+"</span></li>";
    }

    else if(li%4==0){

        skiilGrephdocument.innerHTML+="<ul id='graphCon3'></ul>";
        document.getElementById("graphCon1").innerHTML+="<li><span  class='graph"+k+"'>"+e+"</span></li>";
    }else{
        console.log(li+"d")
        li>4?document.getElementById("graphCon3").innerHTML+="<li ><span class='graph"+k+"'>"+e+"</span></li>":document.getElementById("graphCon1").innerHTML+="<li ><span class='graph"+k+"'>"+e+"</span></li>";
    }
}

for(var n in skillsObj){
    console.log('object => ', n, 'value => ', skillsObj[n]);
    skill(n,skillsObj[n])
}

