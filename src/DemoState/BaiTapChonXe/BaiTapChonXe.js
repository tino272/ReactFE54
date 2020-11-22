import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/red-car.jpg' //  giá trị mặc định của state
    }

    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        {/* Hình ảnh của xe */}
                        {/* <img className='w-100 mt-5' src="./img/car/products/red-car.jpg" /> */}
                        <img className='w-100 mt-5' src={this.state.imgSrc} />
                    </div>
                    <div className='col-6'>
                        {/* button chọn màu xe */}
                        <div className="card mt-5">
                            <div className='card-header bg-dark text-white'> Exterior color</div>
                            <div className="card-body ">
                                <div className='row  border border-dark p-2'>
                                    <div className='col-2'>
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.changeColor('black');
                                        }} src="./img/car/icons/icon-black.jpg" className='w-100 '></img>
                                    </div>
                                    <div className='col-10'>
                                        <h3>Black color </h3>
                                    </div>
                                </div>
                                <div className='row border border-dark p-2'>
                                    <div className='col-2'>
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.setState({
                                                imgSrc: './img/car/products/silver-car.jpg'
                                            })
                                        }}
                                            src="./img/car/icons/icon-silver.jpg" className='w-100 '></img>
                                    </div>
                                    <div className='col-10'>
                                        <h3>Silver color </h3>
                                    </div>
                                </div>
                                <div className='row  border border-dark p-2'>
                                    <div className='col-2'>
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.changeColor('red');
                                        }}
                                            src="./img/car/icons/icon-red.jpg" className='w-100 '></img>
                                    </div>
                                    <div className='col-10'>
                                        <h3>Red color </h3>
                                    </div>
                                </div>
                                <div className='row  border border-dark p-2'>
                                    <div className='col-2'>
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.setState({
                                                imgSrc: './img/car/products/steel-car.jpg'
                                            })
                                        }}
                                            src="./img/car/icons/icon-steel.jpg" className='w-100 '></img>
                                    </div>
                                    <div className='col-10'>
                                        <h3>Steel color </h3>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}
