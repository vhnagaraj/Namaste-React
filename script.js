const heading = React.createElement("h1", {id:"hello"}, "Hello World React Namaste");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



                         //CREATING NESTED ELEMENTS//

{/* <div class="parent">
    <div class="child">
        <h1 class="hh"></h1>
    </div>
</div> */}
const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"},[
    React.createElement("h1", { id:"hh"}, "im h1"),
    React.createElement("h1", { id:"hh"}, "im h2"),
    ]),

React.createElement("div", {id:"child2"},[
React.createElement("h1", { id:"hh"}, "im h1"),
React.createElement("h1", { id:"hh"}, "im h2")
]),
]);


root.render(parent);
console.log(parent);