import React from 'react'
// React funtion component (rfc) nhận props là tham số đầu vào của hàm component
export default function ProductRFC(props) {

    // ES 5 
    // let name = props.name;
    // let price = props.price;

    // ES 6
    let {name,price} = props;
    return (
        <div>
            <div classname="card text-white bg-primary">
                <img classname="card-img-top" src="https://picsum.photos/250/250" alt='123' />
                <div classname="card-body">
                    <h4 classname="card-title">{name}</h4>
                    <p classname="card-text">{price}</p>
                </div>
            </div>

        </div>
    )
}
