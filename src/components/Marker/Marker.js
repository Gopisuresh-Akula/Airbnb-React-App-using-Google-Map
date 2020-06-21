import React, { Component } from "react";
import { Card, Rate } from "antd";

import "./Marker.scss";

class Marker extends Component {
  state = { visible: false, open: true };

  showModal = () => {
    console.log("showMoidal")
    this.setState({
      ['visible@' + this.props.index]: true
    });
    console.log("length", this.props.length, this.props.index)
    for (let i = 0; i < this.props.length; i++) {
      if (i != this.props.index) {
        console.log(this.props.index, i)
        this.setState({ ['visible@' + i]: false })
      }
    }
  };

  handleClick = () => {
    //call the parent method selectFlat
    this.props.selectFlat(this.props.flat);
  };

  render() {
    let classes = "marker";
    if (this.props.selected) {
      classes += " selected";
    }
    console.log("this.state",this.state)
    const title = this.props.flat.name;
    const flats = (
      <img
        className="image"
        alt="flat-bg"
        src={require(`../../assets/${this.props.flat.imageUrl}`)}
        height='200px'
      />
    );
    const prices = this.props.flat.price;
    const Rates = this.props.flat.Rate;
    return (
      <div>
        <div className={classes} onClick={this.showModal}>
          {" "}
          ₹{this.props.text}
        </div>

        {this.state['visible@' + this.props.index] == true ? (

          <Card bordered={true} hoverable visible={this.state['visible@' + this.props.index]} style={{ width: '350px' }}>
            <div className={"card-header"}>{flats}</div>

            <div >
              <span>Semi-private | Studio | BedRoom </span><br />
              <strong> {title}</strong>

            </div>
            <div className='position'>
              <span  >From ₹{prices}/Mo </span>
              {Rates}
              <Rate text='4.0' style={{ marginLeft: '120px' }} />
            </div>
          </Card>

        ) : null}
      </div>
    );
  }
}

export default Marker;
