// @flow
import * as actions from "../actions";
import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import Form from "./popup/popupAddEdit/popup";
import DialogDelete from "./popup/popupDelete";
import { Divider, PagingInfo } from 'diginet-core-ui/components';
import 'devextreme/dist/css/dx.light.css';
import { Edit, Delete } from 'diginet-core-ui/icons';
import { stylesIndex } from "./styles"
import Header from "./header";
import Loading from "./loading"
import Alert from "./alter/success"
import
{
    DataGrid, Button as ButtonIcon, Column,
    Paging, Scrolling
} from 'devextreme-react/data-grid';

function Index(props)
{
    const { getDatasRequest, loading, listTarget ,alertActive} = props;
    console.log(alertActive)
   
    //request data
    useEffect(() =>
    {
        getDatasRequest();
    }, [getDatasRequest]);
    const classes = stylesIndex();
    const [popupForm, setPopupForm] = useState(false);
    const [popupDelete, setPopupDelete] = useState({ open: false, id: "" });
    //state page
    const [pageSize, setPageSize] = useState(10);
    const [pageCurrent, setPageCurrent] = useState(0);
    //detail
    const [detail, setDetail] = useState({});
    const openPopup=()=>{
        setPopupForm(true)
    }
    const closePopup = () =>
    {
        setDetail({});
        setPopupForm(false);
        setPopupDelete({ open: false, id: "" });
    }
 
    //get detail
    const getDetail = (GoalPlanID) =>
    {
        //set Text notify
        setNotify(`Cập Nhật ID: ${GoalPlanID}`);
        //lay id
        //loc array theo id
        const detail = listTarget.filter(item => item.GoalPlanID === GoalPlanID);
        setPopupForm(true);
        //set vao state detail
        setDetail(detail[0])
    }
    //handle delete
    const handleDelete=(GoalPlanID)=>{
        setNotify(`Đã Xóa ID : ${GoalPlanID}`);
        setPopupDelete({ open: true, id: GoalPlanID });
    }
    const renderMyCommand = (e, index) =>
    {
        const { GoalPlanID } = e.row.data;;
        return index === 1
            ? <div style={{ display: "inline" }} onClick={() => getDetail(GoalPlanID)}><Edit /></div>
            : <div style={{ display: "inline" }} onClick={()=>handleDelete(GoalPlanID)}><Delete /></div>;
    };
    const rowIndex = (e) =>
    {
        return props.listTarget.indexOf(e);
    }
    const renderDateHandle = (data) =>
    {

        return data.DateFrom === null ? "" : data.DateFrom + " - " + data.DateTo
    }
    ///notify alert
    const [notify,setNotify]=useState("");
    const setTextNotify=(text)=>{
        setNotify(text);
    }
    const stylesHeader = (caption) => (<span style={{ fontSize: 13, color: "black", fontWeight: "bold", marginBottom: "40px" }}>{caption}</span>)
    return <div className={classes.main}>
        {loading ? <Loading /> : ""}
        <div
            //  width="1864px" height="501px"

            style={{ margin: "auto", border: "none" }} >
            <Header setPopupForm={openPopup} setTextNotify={setTextNotify} />
            <Divider />
            <div className={classes.Datagrid}>

                <DataGrid
                    height={245}
                    rowAlternationEnabled={true}
                    dataSource={listTarget}
                    showBorders={false}
                    showColumnLines={false}
                //onValidate(e.target.value, {name: "required", message: "" || null})
                >
                    <Column alignment="left" calculateCellValue={rowIndex} width={50} headerCellRender={() => stylesHeader("STT")} />
                    <Column alignment="left" caption="Name" width={200} dataField="GoalPlanName" headerCellRender={() => stylesHeader("TÊN HẠNG MỤC TIÊU BIỂU")} />
                    <Column alignment="left" width={400} dataField="Description" headerCellRender={() => stylesHeader("MÔ TẢ")} />
                    <Column alignment="left" width={200} calculateCellValue={renderDateHandle} headerCellRender={() => stylesHeader("KHOẢNG THỜI GIAN")} />
                    <Column alignment="left" width={200} dataField="Priority" headerCellRender={() => stylesHeader("ĐỘ ƯU TIÊN")} />
                    <Column alignment="left" width={600} type="buttons" >
                        <ButtonIcon
                            render={(e) => renderMyCommand(e, 1)}
                        />
                        <Divider direction="vertical" />
                        <ButtonIcon
                            render={(e) => renderMyCommand(e, 2)}
                        />
                    </Column>
                    {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} /> */}
                    <Paging defaultPageSize={10} />
                    <Paging

                        pageIndex={pageCurrent}
                        pageSize={pageSize}
                    />
                    <Scrolling mode="virtual" />
                    <Scrolling rowRenderingMode='virtual' />

                </DataGrid>
                <PagingInfo
                    className={classes.PagingInfo}
                    fullWidth={true}
                    listItemsPerPage={[
                        10,
                        20,
                        40,
                        50
                    ]}
                    onChangePage={(value) => setPageCurrent(value - 1)}
                    totalItems={props.listTarget.length}
                    onChangeItemsPerPage={(value) => setPageSize(value)} />
            </div>

        </div>

        <Form
            popupForm={popupForm}
            closePopup={closePopup}
            submitForm={props.submitForm}
            addPlan={props.addPlan}
            updatePlan={props.updatePlan}
            //get listPlans
            listPlans={listTarget}
            /// gui detail qua
            detail={detail}
        />
        <DialogDelete  closePopup={closePopup} popupDelete={popupDelete} deleteTarget={props.deleteTarget} />
        {alertActive ? <Alert notify={notify}/> : "" } 
        
    </div>

}

///connect redux
//get State
const mapStateToProps = state => ({
    listTarget: state.goalPlan,
    loading: state.loading,
    //state alert
    alertActive: state.alert

});
//DISPATCH
const mapDispatchToProps = {
    //request data
    getDatasRequest: actions.getDatasRequest,
    //Delete
    deleteTarget: (id) => actions.deleteTarget(id),
    //addPlan
    addPlan: (newPlan) => actions.addPlan(newPlan),
    //update 
    updatePlan: (index,newPlan) => actions.updatePlan(index,newPlan),

};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
