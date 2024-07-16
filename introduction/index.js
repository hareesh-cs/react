ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root")) 
ReactDOM.render(<h2>learning react</h2>, document.getElementById("root2")) 
ReactDOM.render(<ol>
    <li>One</li>
    <li>Two</li>
</ol>, document.getElementById("root3")) 
ReactDOM.render(<ul>
    <li>One</li>
    <li>Two</li>
</ul>, document.getElementById("root4")) 
function SomeContent(){
    return(<a>I am learning react!</a>)
}
ReactDOM.render(
    <div>
        <SomeContent />
    </div>, document.getElementById("root2")
)

const h1 = document.createElement("h1")
h1.textContent = "I am trying to learn what is imperativeway to program"
h1.className = "header"
document.getElementById("root4").append(h1)

const element = <h1 className = "header">This is JSX</h1>
console.log("test",element)

ReactDOM.render(element, document.getElementById("root4"))
