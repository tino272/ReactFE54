import React from 'react'


//React function component (Thẻ <DemoFunctionComponent></DemoFunctionComponent>)
export default function DemoFunctionComponent() {

    return ( //Nội dung thẻ chứa trong lệnh return, Lưu ý: Nội dung phải được bao bọc bởi 1 thẻ 
        <div className="container bg-dark text-white mt-2">
            <div className="display-4 p-5">
                Component
            </div>
            <div className="p-5 ">
                Nội dung component
            </div>
        </div>

    )
}
