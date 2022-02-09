import React from "react";
import Searchinput from "./searcginput";
import axios from "axios";
import Imagelist from "./component/imagelist";

class App extends React.Component {
  state = {
    Image: [],
  };

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=21620935-b1bb9380a0a844f5ff2e3c2cc&q=${entry}&image_type=photo`
    );

    this.setState({ Image: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <Searchinput onSearchSubmit={this.onSearchSubmit} />
        <Imagelist Image={this.state.Image} />
      </div>
    );
  }
}

export default App;
