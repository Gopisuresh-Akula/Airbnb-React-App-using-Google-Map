import React from 'react';
import { Row, Col, Card, Rate, Carousel } from 'antd';
import './Hotel.scss';



class Hotel extends React.Component {
    handleClick = () => {
        //call the parent method selectFlat
        this.props.selectFlat(this.props.flat);
    }

    onChange = (a, b, c) => {
        console.log(a, b, c);
    }



    render() {
        // console.log('from flat',this.props.flat.imageUrl);
        const title = this.props.flat.name;
        const prices = this.props.flat.price;
        const Rates = this.props.flat.Rate;
        const flats =
            <img className="image" alt="flat-bg" src={require(`../../assets/${this.props.flat.imageUrl}`)} style={{height:150,width:150,margin:20}} />

        return (
            <Row gutter={32} className='showcase-2'>
                <div className='flat' onMouseOver={this.handleClick} >

                    <Col >

                        <Card

                            bordered={true}
                            hoverable>
                            <div className={'card-header'}>
                                {/* {flats} */}
                                <Carousel afterChange={this.onChange} style={{width:500}}>
                                    <div>
                                        <img className="image" alt="flat-bg" src={require(`../../assets/${this.props.flat.imageUrl}`)} style={{height:150,width:150,margin:20}} />
                                    </div>
                                    <div>
                                        <img className="image" alt="flat-bg" src={require(`../../assets/${this.props.flat.imageUrl}`)} style={{height:150,width:150,margin:20}} />
                                    </div>
                                    <div>
                                        <img className="image" alt="flat-bg" src={require(`../../assets/${this.props.flat.imageUrl}`)} style={{height:150,width:150,margin:20}} />
                                    </div>
                                    <div>
                                        <img className="image" alt="flat-bg" src={require(`../../assets/${this.props.flat.imageUrl}`)} style={{height:150,width:150,margin:20}} />
                                    </div>
                                </Carousel>
                            </div>


                            <div >
                                <span>Semi-private | Studio | BedRoom </span><br />
                                <strong> {title}</strong>

                            </div>
                            <div className='position'>
                                <span  >From ₹{prices}/Mo</span>
                                <strong style={{ position: 'relativle', left: '100px' }}>{Rates}</strong>
                                <Rate text='4.0' style={{ marginLeft: '120px' }} />

                            </div>
                        </Card>
                    </Col>

                </div>
            </Row>
        );
    }
}

export default Hotel;