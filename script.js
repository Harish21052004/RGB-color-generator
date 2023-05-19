const  change = () =>{
    let red = document.getElementById("red-color").value;
    let green = document.getElementById("green-color").value;
    let blue = document.getElementById("blue-color").value;
    let text = document.getElementById("text");
    let topic = document.getElementById("topic")

    text.innerHTML = "rgba("+red+" ,"+green+" ,"+blue+")"; 
    document.body.style.background = "rgba("+red+","+green+","+blue+")";  
    topic.style.color = "rgba("+red+","+green+","+blue+")";
}