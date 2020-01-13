import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <button>Don't click!</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelectoe("#root"));
