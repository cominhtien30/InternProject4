import { onValidate } from 'diginet-core-ui/utils';


export const validateObject={
    GoalPlanName: true,
    DateFrom: true,
    DateTo: true,
}

export const onVali = (value) =>
{
    
    const val = value === undefined || value === null ? "" : value;
  
    let checkSpace = val.replace(/ /g, '') === "" ? "" : val;
    
   return onValidate(checkSpace, { name: "required", message: "" || null });

}
