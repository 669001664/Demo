import { ADDPERSON } from "../constant";

export default function personReducer(preState = [{ id: 1, name: 'likui', age: 12 }], action) {
    console.log(action);
    switch (action.type) {
        case ADDPERSON:
            console.log(1);
            return [action.data, ...preState]
        default:
            return preState
    }

}