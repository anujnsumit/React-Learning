const Heading=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello first child"),
React.createElement("h2",{},"second child")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"hello first child2"),
React.createElement("h2",{},"second child2")])
]);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(Heading);