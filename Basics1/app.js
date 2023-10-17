const heading=React.createElement("h1",{id:'head'},"Hello React From Me !!")
const root=ReactDOM.createRoot(document.getElementById("root"))


const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hey Im React"),React.createElement("h3",{},"Hey Im React")]))


root.render(parent);