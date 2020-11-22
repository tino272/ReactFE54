import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMess = () => {
        alert('hello cyber soft');
    }
    showInfo = (info) => {
        alert(info);
    }

    render() {
        const title ='cybersoft'
        return (
            <div className='container'>
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me</button>

                <button onClick={() => {
                    alert('hello ${title}' );
                }}>show message</button>

                <button onClick={() => {
                    this.showInfo('hello fe54')
                }}>show info</button>
                { /* cách sử dụng hàm bind (ít dùng) */}
                <button onClick={this.showInfo.bind(this,'hello cybersoft')}>show info</button>
            </div>
        )
    }
}
