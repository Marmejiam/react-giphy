import React, { Component } from "react";
import Giphy from "giphy-api";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifsList from "./gifs_list";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }

    this.search("homer thinking");

  }

  search = (query) => {
    Giphy("edadcukarvoW4DXeg5lMxyl4p7ZSq4ry").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });

  }

  id = () => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs = [
      { id: "duNowzaVje6Di3hnOu"},
      { id: "3oz8xIsloV7zOmt81G"},
      { id: "CtScCEBUKlcERsgw29"},
      { id: "33zX3zllJBGY8"},
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif
              // id={this.state.selectedGifId}
              id={this.id}
             />
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
