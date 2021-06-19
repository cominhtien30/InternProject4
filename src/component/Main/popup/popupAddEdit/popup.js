// @flow
import React, { useState, useEffect } from "react";
import {
  Label,
  TextInput,
  DatePicker,
  NumberInput,
  Toggle,
  Dropdown,
  Modal,
  ModalBody
} from "diginet-core-ui/components";
import { ArrowUp } from "diginet-core-ui/icons";
import { onVali, validateObject } from "../validation";
import { stylesPopup } from "../../styles";
import formObject from "../formObject";
import ModalFooter from "./popupFooter";
import ModalHeader from "./popupHeader";
import moment from "moment";
import randomId from "../../../../randomId";

function FormPopup(props) {
  //props
  const {
    listPlans,
    popupForm,
    closePopup,
    addPlan,
    updatePlan,
    detail
  } = props;
  //randomId

  //detail vatible
  const classes = stylesPopup();
  //form
  const [form, setForm] = useState(formObject(randomId()));
  //when set State
  useEffect(() => {
    const checkDetail = Object.keys(detail).length;
    checkDetail > 0 ? setForm(detail) : setForm(formObject(randomId()));
  }, [detail]);
  //validation
  console.log(form);
  const [validate, setvalidate] = useState(validateObject);
  const valiDefault = validate;
  //submit form
  const submit = (e) => {
    e.preventDefault();
    let vali = {};
    Object.keys(validate).forEach((k) => {
      vali = { ...validate, ...vali, [k]: onVali(form[k]) };
    });
    setvalidate(vali);
    // remove last item of validate.value and check all field = true
    const valiWhenSubmit = Object.values(vali);
    // find !=== true
    const checkVali = valiWhenSubmit
      .filter((element, index) => index < valiWhenSubmit.length - 1)
      .some((item) => item !== true);
    // check edit or add
    if (checkVali === false) {
      const findIndexPlan = listPlans.findIndex(
        (item) => item.GoalPlanID === form.GoalPlanID
      );
      findIndexPlan === -1 ? addPlanItem() : editPlanItem(findIndexPlan);
    }
  };
  //add handle
  const addPlanItem = () => {
    //when checkVali not exist !== true
    closePopupAdd();
    addPlan(form);
  };
  //edit handle
  const editPlanItem = (index) => {
    //when checkVali not exist !== true
    closePopupAdd();
    updatePlan(index, form);
  };
  const closePopupAdd = () => {
    closePopup();
    setvalidate(valiDefault);
  };
  // //when onChange Input
  const onChangeHandle = (value, name) => {
    setForm({ ...form, [name]: value });
    switch (name) {
      case "GoalPlanName":
      case "DateFrom":
      case "DateTo":
        setvalidate({
          ...validate,
          [name]: onVali(value),
          value: { ...validate.value, [name]: value }
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Modal
        style={{ width: "696px", height: "914px" }}
        dragAnyWhere
        darkTheme={false}
        open={popupForm}
        onClose={closePopupAdd}
      >
        <ModalHeader />
        <ModalBody>
          <div
            className={classes.row}
            style={{ marginTop: "25.89px", flexDirection: "column " }}
          >
            <div className={classes.colInput}>
              <Label required>Tên Mục Tiên</Label>
              <TextInput
                value={
                  form.GoalPlanName.replace(/ /g, "") === ""
                    ? ""
                    : form.GoalPlanName
                }
                error={
                  validate.GoalPlanName === true ? "" : validate.GoalPlanName
                }
                onChange={(e) => onChangeHandle(e.target.value, "GoalPlanName")}
                placeholder="Nhập"
                inputProps={{
                  maxLength: 500
                }}
              />
            </div>
            <div className={classes.colInput}>
              <Label>Mô tả</Label>
              <TextInput
                value={form.Description}
                placeholder="Nhập"
                onChange={(e) => onChangeHandle(e.target.value, "Description")}
                inputProps={{
                  maxLength: 1000
                }}
              />
            </div>
            <div className={classes.rowInput}>
              <div className={classes.colInput}>
                <DatePicker
                  value={form.DateFrom}
                  error={validate.DateFrom === true ? "" : validate.DateFrom}
                  style={{ marginBottom: "0px" }}
                  clearAble
                  displayFormat="DD/MM/YYYY"
                  label="Ngày bắt đầu"
                  placeholder="dd/MM/yyyy"
                  returnFormat="MM/DD/YYYY"
                  onChange={(e) => onChangeHandle(e.value, "DateFrom")}
                />
              </div>
              <div className={classes.colInput} style={{ marginLeft: "28px" }}>
                <DatePicker
                  disabled={form.DateFrom === "" ? true : false}
                  value={form.DateTo}
                  error={validate.DateTo === true ? "" : validate.DateTo}
                  style={{ marginBottom: "0px" }}
                  actionIconAt="end"
                  clearAble
                  min={moment(form.DateFrom).format("YYYY-MM-DD")}
                  //min="2021-06-18"
                  displayFormat="DD/MM/YYYY"
                  label="Ngày kết thúc"
                  placeholder="dd/MM/yyyy"
                  returnFormat="MM/DD/YYYY"
                  onChange={(e) => onChangeHandle(e.value, "DateTo")}
                />
              </div>
              <div className={classes.colInput} style={{ marginLeft: "28px" }}>
                <Label>Độ Ưu Tiên</Label>
                <NumberInput
                  value={form.Priority}
                  defaultValue={1}
                  style={{ margin: "auto" }}
                  placeholder="Nhập"
                  onKeyUp={(e) => onChangeHandle(e.target.value, "Priority")}
                />
              </div>
            </div>
            <div className={classes.rowInput} style={{ width: "50%" }}>
              <Label>Cho phép nhân viên sửa trọng số</Label>
              <Toggle
                checked={form.IsPermissionEditProportion === 1 ? true : false}
                onChange={(e) =>
                  onChangeHandle(
                    e.target.checked ? 1 : 0,
                    "IsPermissionEditProportion"
                  )
                }
              />
            </div>
            <div className={classes.rowInput} style={{ width: "50%" }}>
              <Label>Cho phép nhân viên hủy mục tiêu</Label>
              <Toggle
                checked={form.IsPermissionCancel === 1 ? true : false}
                onChange={(e) =>
                  onChangeHandle(e.target.checked ? 1 : 0, "IsPermissionCancel")
                }
              />
            </div>
            <div className={classes.rowInput} style={{ width: "auto" }}>
              <ArrowUp />
              <Label className="label">Thông tin review</Label>
            </div>
            <div className={classes.rowInput} style={{ width: "70%" }}>
              <div className={classes.rowInput} style={{ marginTop: "0px" }}>
                <Label>Review mục tiêu</Label>
                <div style={{ marginRight: "28.48px" }}>
                  <Toggle
                    checked={form.IsReview === 1 ? true : false}
                    onChange={(e) =>
                      onChangeHandle(e.target.checked ? 1 : 0, "IsReview")
                    }
                  />
                </div>
              </div>
              <div className={classes.colInput} style={{ marginTop: "0px" }}>
                <DatePicker
                  // returnFormat='DD/MM/YYYY'
                  value={form.EvaluationExpireDate}
                  style={{ marginBottom: "0px" }}
                  clearAble
                  disabled={form.IsReview === 1 ? false : true}
                  label="Hạn review cuối"
                  placeholder="dd/MM/yyyy"
                  returnFormat="MM/DD/YYYY"
                  displayFormat="DD/MM/YYYY"
                  onChange={(e) =>
                    onChangeHandle(e.value, "EvaluationExpireDate")
                  }
                />
              </div>
            </div>
            <div className={classes.rowInput} style={{ width: "85%" }}>
              <div className={classes.colInput}>
                <Dropdown
                  disabled={form.IsReview === 1 ? false : true}
                  dataSource={[
                    {
                      id: "1",
                      name: "Item"
                    },
                    {
                      id: "2",
                      name: "Item"
                    },
                    {
                      id: "3",
                      name: "Item"
                    }
                  ]}
                  //renderItem={(data, index) => index + ' - ' + data.name}

                  style={{ width: "159px" }}
                  displayExpr="{id} - {name}"
                  label="Số cấp review"
                  placeholder="Text Dang Nhap"
                  viewType="outlined"
                  itemMultipleSize="small"
                  valueObjectDefault={{
                    id: "1",
                    name: "Item"
                  }}
                  value={form.NumEvaluationLevel.toString()}
                  onChange={(e) =>
                    onChangeHandle(e.value, "NumEvaluationLevel")
                  }
                />
              </div>
              <div className={classes.rowInput}>
                <Label>Cho phép sap chép kết quả cấp trước</Label>
                <div>
                  <Toggle
                    checked={form.IsCopyResult === 1 ? true : false}
                    disabled={form.IsReview === 1 ? false : true}
                    onChange={(e) =>
                      onChangeHandle(e.target.checked ? 1 : 0, "IsCopyResult")
                    }
                  />
                </div>
              </div>
            </div>
            <div className={classes.colInput}>
              <Label>Label cấp 1</Label>
              <TextInput
                value={form.LabelLevel1}
                disabled={
                  form.IsReview === 0 || parseInt(form.NumEvaluationLevel) !== 1
                    ? true
                    : false
                }
                placeholder="Nhập"
                inputProps={{
                  maxLength: 250
                }}
                onChange={(e) => onChangeHandle(e.target.value, "LabelLevel1")}
              />
            </div>
            <div className={classes.colInput}>
              <Label>Label cấp 2</Label>
              <TextInput
                value={form.LabelLevel2}
                disabled={
                  form.IsReview === 0 || parseInt(form.NumEvaluationLevel) !== 2
                    ? true
                    : false
                }
                onChange={(e) => onChangeHandle(e.target.value, "LabelLevel2")}
                placeholder="Nhập"
                inputProps={{
                  maxLength: 250
                }}
              />
            </div>
            <div className={classes.colInput}>
              <Label>Label cấp 3</Label>
              <TextInput
                value={form.LabelLevel3}
                disabled={
                  form.IsReview === 0 || parseInt(form.NumEvaluationLevel) !== 3
                    ? true
                    : false
                }
                onChange={(e) => onChangeHandle(e.target.value, "LabelLevel3")}
                placeholder="Nhập"
                inputProps={{
                  maxLength: 250
                }}
              />
            </div>
            <div className={classes.rowInput} style={{ width: "auto" }}>
              <ArrowUp />
              <Label className="label">Thông tin xét duyệt</Label>
            </div>
            <div className={classes.rowInput}>
              <div className={classes.rowInput} style={{ marginTop: "0px" }}>
                <Label>Xem xét duyệt bảng mục tiêu</Label>
                <div style={{ marginRight: "28.48px" }}>
                  <Toggle
                    checked={form.IsApproved === 1 ? true : false}
                    onChange={(e) =>
                      onChangeHandle(e.target.checked ? 1 : 0, "IsApproved")
                    }
                  />
                </div>
              </div>
              <div className={classes.colInput} style={{ marginTop: "0px" }}>
                <DatePicker
                  value={form.ApprovalBeginDate}
                  returnFormat="MM/DD/YYYY"
                  style={{ marginBottom: "0px" }}
                  clearAble
                  label="Ngày bắt đầu xét duyệt"
                  placeholder="DDDD, dd/MMMM/yyyy"
                  displayFormat="DD/MM/YYYY"
                  onChange={(e) => onChangeHandle(e.value, "ApprovalBeginDate")}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter submit={submit} />
      </Modal>
    </>
  );
}
export default FormPopup;
