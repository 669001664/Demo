import { INCREMENT, DECREMENT } from "../redux/constant"
export default function countReducer(preState = 0, action) {
    // console.log(preState);
    //从action对象中获取：type、data
    console.log(1);
    const { type, data } = action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT: //如果是加
            return preState + data
        case DECREMENT: //若果是减
            return preState - data
        default:
            return preState
    }
}