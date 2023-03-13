import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment03.css"
import logo  from "./images/logo.png";
import userIcon from "./images/user icon.png"

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement (
//   "div",
//   {
//     class: "title",
//     key: "title"
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "h1"
//       },
//       "This is h1 tag"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "h2"
//       },
//       "This is h2 tag"
//     ),
//      React.createElement(
//       "h3",
//       {
//         key: "h3"
//       },
//       "This is h3 tag"
//     ),
//   ]
// );


// Q: Create the same element using JSX. and it is a object.
// const header = (
//   <div className="Title" key="title">
//     <h1 key="h1">This is h1 tag</h1>
//     <h2 key="h2">This is h2 tag</h2>
//     <h3 key="h3">This is h3 tag</h3>
//   </div>
// )

// Q: Create a functional component of the same with JSX

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 key="h1">This is h1 tag</h1>
//       <h2 key="h2">This is h2 tag</h2>
//       <h3 key="h3">This is h3 tag</h3>
//     </div>
//   );
// }

// Q: Pass attribute into the tag in JSX

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color: "blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color: "yellow"}} key="h2">This is h2 tag</h2>
//       <h3 style={{color: "red"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// }

// Q.`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is element</h1> //It is call like {Titlecomponent}

// const TitleElement = () =>
// {
//   return (
//     <h2 style={{color: red}}>This is title element</h2>
//   )
// } // It is call like <TitleComponent/>


// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       {element}
//       <h1 style={{color: "blue"}} key="h1">This is h1 tag</h1>
//        {<TitleElement/>}
//       <h2 style={{color: "yellow"}} key="h2">This is h2 tag</h2>
//       {<TitleElement></TitleElement>}
//       <h3 style={{color: "red"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// }

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
    return (
      <header className="header" key="title">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input 
            className="input"
            type="text"
            placeholder="Search anything..." />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
            <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header/>); // we can also write like this for functional component root.render(Header())  