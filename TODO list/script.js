const box=document.getElementById("input-text");
const date=document.getElementById("date");
const list=document.getElementById("list");
function task(){
    if(box.value===''){
        alert("please enter content to brfore clicking add");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=box.value;
        li.append("    "+date.value);
        // con.appendChild(li);
        list.append(li);
        let del=document.createElement("span");
        del.innerHTML="Delete";
        let edi=document.createElement("span");
        edi.innerHTML="Edit";
        // let date=new Date();
        // li.append(new Date().toLocaleDateString());
        li.appendChild(edi);
        li.appendChild(del);
        del.addEventListener("click",function(){
            list.removeChild(li);
        })
        let textSpan=document.createElement("span");
        textSpan.textContent=box.value;
        edi.addEventListener("click",function(){
            let text=textSpan.textContent.trim()
            box.value=text;
            list.removeChild(li);
        });
    }
    box.value="";
}