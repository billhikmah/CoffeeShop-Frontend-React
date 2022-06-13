
import { counterUpAction, counterDownAction } from "../actionCreator/actionString";

const initialState = {
    number: 0,
}
const counterReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case counterUpAction:
            return {...prevState, number: prevState.number + 1}


        case counterDownAction:
            return {...prevState, number: prevState.number - 1}
    
        default:
            return prevState;
    }
}

export default counterReducer