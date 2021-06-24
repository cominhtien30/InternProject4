// @flow
import React, { useState, useEffect } from "react";
import
{
  Label,
  TextInput,
  DatePicker,
  NumberInput,
  Toggle,
  Dropdown,
  Modal,
  ModalBody
} from "diginet-core-ui/components";

import { onVali, validateObject } from "../validation";
import formObject from "../formObject";
import ModalFooter from "./popupFooter";
import ModalHeader from "./popupHeader";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col } from 'react-bootstrap';
import randomId from "../../../../randomId";
import
{
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "diginet-core-ui/components";

function FormPopup(props)
{
  //props
  const {
    listPlans,
    popupForm,
    closePopup,
    addPlan,
    updatePlan,
    detail
  } = props;

  //detail vatible

  //form
  const [form, setForm] = useState(formObject(randomId()));
  //handle level label
  const [level, setLevel] = useState({
    1: true,
    2: false,
    3: false
  });
  const defaultLevel = {
    1: true,
    2: false,
    3: false
  };
  const activeLevel = (Level) =>
  {
    let objectLv = defaultLevel;
    if (Level <= 3)
    {
      for (let i = 1;i <= Level;i++)
      {
        objectLv = { ...objectLv, [i]: true };
      }
      if (Level < 3)
        for (let i = Level + 1;i <= 3;i++)
        {

          objectLv = { ...objectLv, [i]: false };
        }
    }
    setLevel(objectLv);
  }
  //when set State
  useEffect(() =>
  {
    const checkDetail = Object.keys(detail).length;
    if (checkDetail > 0)
    {
      setForm(detail);
      activeLevel(detail.NumEvaluationLevel)

    } else
    {
      setForm(formObject(randomId()));
    }
  }, [detail]);
  //validation
  const [validate, setvalidate] = useState(validateObject);
  const valiDefault = validate;
  //submit form
  const submit = (e) =>
  {
    e.preventDefault();
    let vali = {};
    Object.keys(validate).forEach((k) =>
    {
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
    if (checkVali === false)
    {
      const findIndexPlan = listPlans.findIndex(
        (item) => item.GoalPlanID === form.GoalPlanID
      );
      findIndexPlan === -1 ? addPlanItem() : editPlanItem(findIndexPlan);
    }
  };
  //add handle
  const addPlanItem = () =>
  {
    //when checkVali not exist !== true
    closePopupAdd();
    addPlan(form);
  };
  //edit handle
  const editPlanItem = (index) =>
  {
    //when checkVali not exist !== true
    closePopupAdd();
    updatePlan(index, form);
  };
  const closePopupAdd = () =>
  {
    closePopup();
    setvalidate(valiDefault);
    setLevel(defaultLevel);
  };
  console.log(level);
  // //when onChange Input
  const onChangeHandle = (value, name) =>
  {
    setForm({ ...form, [name]: value });
    switch (name)
    {
      case "GoalPlanName":
      case "DateFrom":
      case "DateTo":
        setvalidate({
          ...validate,
          [name]: onVali(value),
          value: { ...validate.value, [name]: value }
        });
        break;
      case "NumEvaluationLevel":
        activeLevel(value);
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
          <Form>
            <Row>
              <Col xs={12} sm={12} md={12} >
                <Form.Group className="mb-3">
                  <TextInput
                    label="Tên Mục Tiên"
                    required
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
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} >
                <Form.Group className="mb-3">
                  <TextInput
                    label="Mô tả"
                    value={form.Description}
                    placeholder="Nhập"
                    onChange={(e) => onChangeHandle(e.target.value, "Description")}
                    inputProps={{
                      maxLength: 1000
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={true} sm={true} md={4} >
                <Form.Group className="mb-3">
                  <DatePicker
                    required
                    value={form.DateFrom}
                    error={validate.DateFrom === true ? "" : validate.DateFrom}
                    style={{ marginBottom: "0px" }}
                    clearAble
                    max={moment(form.DateTo).format("YYYY-MM-DD")}
                    displayFormat="DD/MM/YYYY"
                    label="Ngày bắt đầu"
                    placeholder="DD/MM/YYYY"
                    returnFormat="MM/DD/YYYY"
                    onChange={(e) => onChangeHandle(e.value, "DateFrom")}
                  />
                </Form.Group>
              </Col>
              <Col xs={true} sm={true} md={4} >
                <Form.Group className="mb-3">
                  <DatePicker
                    required
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
                    placeholder="DD/MM/YYYY"
                    returnFormat="MM/DD/YYYY"
                    onChange={(e) => onChangeHandle(e.value, "DateTo")}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={true} md={4} >
                <Form.Group className="mb-3">
                  <NumberInput
                    label="Độ Ưu Tiên"
                    min={0}
                    value={form.Priority}
                    defaultValue={1}
                    style={{ margin: "auto" }}
                    placeholder="Nhập"
                    onKeyUp={(e) => onChangeHandle(e.target.value, "Priority")}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={true} sm={true} md={4} >
                <Form.Label className="mb-3">
                  <Label>Cho phép nhân viên sửa trọng số</Label>
                </Form.Label>
              </Col>
              <Col xs={true} sm={true} md={3} >
                <Form.Group className="mb-3">
                  <Toggle
                    checked={form.IsPermissionEditProportion === 1 ? true : false}
                    onChange={(e) =>
                      onChangeHandle(
                        e.target.checked ? 1 : 0,
                        "IsPermissionEditProportion"
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={true} sm={true} md={4} >
                <Form.Label className="mb-3">
                  <Label>Cho phép nhân viên hủy mục tiêu</Label>
                </Form.Label>
              </Col>
              <Col xs={true} sm={true} md={3} >
                <Form.Group className="mb-3">
                  <Toggle
                    checked={form.IsPermissionCancel === 1 ? true : false}
                    onChange={(e) =>
                      onChangeHandle(e.target.checked ? 1 : 0, "IsPermissionCancel")
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Accordion expand>

              <AccordionSummary >
                Thông tin review
              </AccordionSummary>
              <AccordionDetails>
                <Row className="align-items-md-center">
                  <Col xs={12} sm={true} md={5}>
                    <Row className="align-items-md-center">
                      <Col xs={true} sm={true} md={6}>
                        <Form.Label className="mb-3">
                          <Label>Review mục tiêu</Label>
                        </Form.Label>
                      </Col>
                      <Col xs={true} sm={true} md={6}>
                        <Form.Group className="mb-3">
                          <Toggle
                            checked={form.IsReview === 1 ? true : false}
                            onChange={(e) =>
                              onChangeHandle(e.target.checked ? 1 : 0, "IsReview")
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={true} sm={true} md={5}>
                    <Form.Group className="mb-3">
                      <DatePicker
                        // returnFormat='DD/MM/YYYY'
                        value={form.EvaluationExpireDate}
                        style={{ marginBottom: "0px" }}
                        clearAble
                        disabled={form.IsReview === 1 ? false : true}
                        label="Hạn review cuối"
                        placeholder="DD/MM/YYYY"
                        returnFormat="MM/DD/YYYY"
                        displayFormat="DD/MM/YYYY"
                        onChange={(e) =>
                          onChangeHandle(e.value, "EvaluationExpireDate")
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-md-center">
                  <Col xs={true} sm={true} md={5}>
                    <Form.Group className="mb-3">
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

                        // style={{ width: "159px" }}
                        displayExpr="{id}"
                        label="Số cấp review"
                        viewType="outlined"
                        itemMultipleSize="small"
                        closeAfterSelect={true}
                        itemMode="treeview"
                        keyExpr="id"
                        value={form.NumEvaluationLevel.toString()}
                        // onKeyDown={(e) => e.target.value = e.target.value + 1}

                        inputProps={{ readOnly: true }}
                        onChange={(e) =>
                          onChangeHandle(e.value, "NumEvaluationLevel")
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={5}>
                    <Row className="align-items-md-center">
                      <Col xs={true} sm={true} md={8}>
                        <Form.Label className="mb-3">
                          <Label>Cho phép sap chép kết quả cấp trước</Label>
                        </Form.Label>
                      </Col>
                      <Col xs={true} sm={true} md={4}>
                        <Form.Group className="mb-3">
                          <Toggle
                            checked={form.IsCopyResult === 1 ? true : false}
                            disabled={form.IsReview === 1 ? false : true}
                            onChange={(e) =>
                              onChangeHandle(
                                e.target.checked ? 1 : 0,
                                "IsCopyResult"
                              )
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className={level[1] ? "" : `d-none`}>
                  <Col xs={true} sm={true} md={12} >
                    <Form.Group className="mb-3">
                      {/* <div
                  className={classes.colInput}
                  style={{
                    display: level[1]
                      ? ""
                      : "none"
                  }}
                > */}
                      <TextInput
                        label="Label cấp 1"
                        value={form.LabelLevel1}
                        placeholder="Nhập"
                        inputProps={{
                          maxLength: 250
                        }}
                        onChange={(e) =>
                          onChangeHandle(e.target.value, "LabelLevel1")
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className={level[2] ? "" : `d-none`}>
                  <Col xs={true} sm={true} md={12} >
                    <Form.Group className="mb-3">
                      <TextInput
                        label="Label cấp 2"
                        value={form.LabelLevel2}
                        onChange={(e) =>
                          onChangeHandle(e.target.value, "LabelLevel2")
                        }
                        placeholder="Nhập"
                        inputProps={{
                          maxLength: 250
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className={level[3] ? "" : `d-none`}>
                  <Col xs={true} sm={true} md={12} >
                    <Form.Group className="mb-3">
                      <TextInput
                        label="Label cấp 3"
                        value={form.LabelLevel3}
                        onChange={(e) =>
                          onChangeHandle(e.target.value, "LabelLevel3")
                        }
                        placeholder="Nhập"
                        inputProps={{
                          maxLength: 250
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </AccordionDetails>
            </Accordion>
            <Accordion expand>
              <AccordionSummary >
                Thông tin xét duyệt
              </AccordionSummary>
              <AccordionDetails>
                <Row className="align-items-md-center">
                  <Col xs={12} sm={true} md={5}>
                    <Row className="align-items-md-center">
                      <Col xs={true} sm={true} md={6}>
                        <Form.Label className="mb-3">
                          <Label>Xem xét duyệt bảng mục tiêu</Label>
                        </Form.Label>
                      </Col>
                      <Col xs={true} sm={true} md={6}>
                        <Form.Group className="mb-3">
                          <Toggle
                            checked={form.IsApproved === 1 ? true : false}
                            onChange={(e) =>
                              onChangeHandle(e.target.checked ? 1 : 0, "IsApproved")
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={true} sm={true} md={5}>
                    <Form.Group className="mb-3">
                      <DatePicker
                        value={form.ApprovalBeginDate}
                        returnFormat="MM/DD/YYYY"
                        style={{ marginBottom: "0px" }}
                        clearAble
                        label="Ngày bắt đầu xét duyệt"
                        placeholder="DD/MM/YYYY"
                        displayFormat="DD/MM/YYYY"
                        onChange={(e) =>
                          onChangeHandle(e.value, "ApprovalBeginDate")
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </AccordionDetails>
            </Accordion>
          </Form>
        </ModalBody>
        <ModalFooter submit={submit} />
      </Modal>
    </>
  );
}
export default FormPopup;
