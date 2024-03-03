import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     { id: "heading", class: "heading" },
//     "Namaste React"
// );

const jsxHeading = (
    <h1 className="heading" tabIndex="5">
        Namaste React using JSX
    </h1>
);

const Title = () => {
    return (
        <h1>
            Namaste React Title Component
        </h1>
    );
}

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title></Title>
            <h1 className="heading">
                Namaste React Functional Component
            </h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);