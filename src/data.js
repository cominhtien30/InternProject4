import randomId from "./generateID"
const loadData=()=>{
    const dataNew=[];
    (Array(4).fill(0).forEach((element, index) => {
        dataNew.push({
            GoalPlanID: randomId(),
            GoalPlanName: "Tên mục tiêu " + index,
            DateFrom: "06/15/2021 ",
            DateTo: "06/20/2021",
            Description: "Đây là mô tả bảng mục tiêu này",
            Priority: index % 2 === 0 ? 2 : 1,
            IsPermissionEditProportion: 1,
            IsPermissionCancel: 1,
            IsReview: 1,
            EvaluationExpireDate: "01/01/2020 ",
            NumEvaluationLevel: 1,
            IsCopyResult: 1,
            LabelLevel1: "Level1",
            LabelLevel2: "Level2",
            LabelLevel3: "Level3",
            IsApproved: 1,
            ApprovalBeginDate: "01/01/2020"
        })
    }))
    return dataNew;
}
export default loadData;
