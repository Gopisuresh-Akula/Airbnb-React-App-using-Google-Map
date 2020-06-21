import React, { Component } from "react";
import Hotel from "./components/Hotel/Hotel";
import "./App.css";
import GoogleMapReact from "google-map-react";
import Marker from "./components/Marker/Marker";
import Hotelsinfo from "./Hotelsinfo";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slectedFlat: null,
      term: ""
    };
    console.log("flat state", this.state.flats);
  }

  selectFlat = flat => {
    console.log(flat);
    this.setState({
      slectedFlat: flat
    });
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };


  render() {
    const term = this.state.term;
    const filteredFlats = Hotelsinfo.filter(flat => {
      return flat.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });




    // console.log("thuis",this.state.slectedFlat)

    let center = {
      //give the coordinates for the map
      lat: 17.4486,
      lng: 78.3908,
    };
    if (this.state.slectedFlat) {
      center = {
        lat: this.state.slectedFlat.lat,
        lng: this.state.slectedFlat.lng
      };
    }
    return (
      <div className="app">


        <div className="main">


          <div className="flats">
            {filteredFlats.map((flat, i) => {
              return (
                <Hotel key={flat.id} flat={flat} selectFlat={this.selectFlat} />
              );
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={center} defaultZoom={12}>
            {filteredFlats.map((flat, index) => {
              return (
                <Marker
                  key={flat.id}
                  lat={flat.lat}
                  lng={flat.lng}
                  text={flat.price}
                  selected={flat === this.state.slectedFlat}
                  selectFlat={this.selectFlat}
                  flat={flat}
                  index={index}
                  length={filteredFlats.length}
                  animation={
                    window.google.maps.Animation.DROP
                  }
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
