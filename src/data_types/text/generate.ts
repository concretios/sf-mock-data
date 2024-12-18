import { TextFields } from "./fields";

export const generateTextData = (field_name: string, count: number) => {
    let valuesArray: string[] = [];
    for(let i=1; i<=count; i++){
        if(!TextFields[field_name]){
            valuesArray.push(TextFields['default'].generate())
        }
        valuesArray.push(TextFields[field_name].generate())
    }
    return valuesArray;
}