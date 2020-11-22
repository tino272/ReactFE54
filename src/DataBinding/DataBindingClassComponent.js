import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    // thuộc tính
    sinhVien = {
        ma:'001',
        ten:'A',
        hinhAnh:'https://picsum.photos/200'
    }

    renderPicture = () => {
        return <img src = {this.sinhVien.hinhAnh} width='300' height = '300' alt='123'></img>
    }

    render() {
        const title = 'fe54';
        const renderTitle = () => {
            return <p className="text-danger">
                        {title}
                     </p>
        };

        return (
            <div className="container">
                <h3>React databinding class component</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên: {this.sinhVien.ma}</li>
                    <li>Tên sinh viên: {this.sinhVien.ten}</li>
                    <li>
                        <img src ={this.sinhVien.hinhAnh} width='200' height='200' alt='123'></img>
                    </li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
