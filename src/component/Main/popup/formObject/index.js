import randomId from "../../../../generateID"
 const form=({
    GoalPlanID: randomId(),
    GoalPlanName: "",
    DateFrom: "",
    DateTo: "",
    Description: "",
    Priority: 1,
    IsPermissionEditProportion: 0,
    IsPermissionCancel: 0,
    IsReview: 0,
    EvaluationExpireDate: "",
    NumEvaluationLevel: 1,
    IsCopyResult: 0,
    LabelLevel1: "",
    LabelLevel2: "",
    LabelLevel3: "",
    IsApproved: 0,
    ApprovalBeginDate: ""
});
export default form;