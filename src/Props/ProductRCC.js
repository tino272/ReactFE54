import React, { Component } from 'react'
export default class ProductRCC extends Component {

    render() {
        let { sanPham } = this.props;
        return (
            <div classname="card text-left">
                <img classname="card-img-top" src={sanPham.hinhAnh} alt />
                <div classname="card-body">
                    <h4 classname="card-title">{sanPham.tenSp}</h4>
                    <p classname="card-text">Text</p>
                </div>
            </div>
        )
    }
}
