const heading = React.createElement('h1', {

    // attributes of the tag 
    id: "heading"
}, "This heading is created using create react elements");

// console.log(`This is the element which is created using the React.createElement`);
console.log(`React.createElement create an object which is further converted in to a html tag `);

console.log(heading);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);