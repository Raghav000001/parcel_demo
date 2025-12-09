import React from "react";
import ReactDOM from "react-dom/client";


const heading =  React.createElement("h1",{id:"heading"},"hello");
//    console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const nestedElement = React.createElement("div",{id:"parent"},
   [    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"hello fron nested component")
    ), React.createElement("div",{id:"child2"},"hello from child2")
] 
)

root.render(nestedElement);


 


 