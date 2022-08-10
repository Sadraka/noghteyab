document.querySelector("input").addEventListener("keyup" , gethorof);
document.querySelector("input").addEventListener("paste" , gethorof);

let splitedmatn=[];
function gethorof(){
    let matn = document.getElementsByTagName("input")[0].value;
    splitedmatn= matn.split("");
    calc(splitedmatn);
}
function calc (split){
    const horofObject ={
        onedot:["ب","ج","خ","ز","ذ","ظ","غ","ف","ن","ض"],
        twodot:["ت","ق"],
        threedot:["پ","ث","چ","ژ","ش"],
        ytwo:["ی"," "]
    }
    let splitarray=[];
for(let index of split){
    
    for(let i=0;i<horofObject.onedot.length;i++){
        if(index===horofObject.onedot[i]){
           splitarray.push(index);
        } 
    
    }
    for(let i=0;i<horofObject.twodot.length;i++){
        if(index===horofObject.twodot[i]){
            splitarray.push(index);
            splitarray.push(index);
            
        }

    }
    for(let i=0;i<horofObject.threedot.length;i++){
        if(index===horofObject.threedot[i]){
            splitarray.push(index);
            splitarray.push(index);
            splitarray.push(index);
        }
    
    }
    


}

for (let i=0;i<split.length;i++){
    if(split[i]===horofObject.ytwo[0]){
        let j=i+1;
        // console.log(j,split[j])
        if(split[j]!==horofObject.ytwo[1] && split.length!==j){
            // مهمممممممممممممممممممممممممممم بعد از && ؟
            splitarray.push(split[i]);
            splitarray.push(split[i]);
            console.log("ya hossein")
        }

    }
}
console.log(split);
console.log(splitarray);
document.getElementById("noghte").innerHTML=`<p>تعداد نقطه: ${splitarray.length}</p>`;

}
