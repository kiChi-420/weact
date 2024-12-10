btn.onclick = function(){
    alert("hello")
}

btn.innerHTML = "haiii"

document.getElementById("native-button-container").appendChild(btn);

//React

const btn = React.createElement("button",
    {
        onclick: function(){
            alert("Click event occurred")
        },
    },
    "React"
)

ReactDOM.render(btn, document.getElementById("react-button-container"));

ReactDOM.render(
    <button
        onClick={()=>{
            alert("Click event occurred");
        },
        className="asd"
    }/>)