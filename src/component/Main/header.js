import React from 'react';
import { Button} from 'diginet-core-ui/components';

function header(props) {
    const clickAddHandle=()=>{
        props.setPopupForm();
        props.setTextNotify("Thêm");
        
    }
    return (
        <div style={{ display: "flex", margin: "0 41.17px", alignItems: "center", justifyContent: "flex-start" }}>
        <h4 style={{ color: "#151A30" }}>DANH SÁCH BẢNG MỤC TIÊU</h4>
        <Button
            color="primary"
            text="Thêm"
            viewType="filled"
            size="small"
            style={{ marginLeft: "17.83px", height: "40px", width: "114px" }}
            startIcon="add"
            onClick={clickAddHandle}
            defaultOpen={false}
        />
    </div>
    );
}

export default header;