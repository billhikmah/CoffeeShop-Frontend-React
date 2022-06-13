import {counterUpAction, counterDownAction} from "./actionString";

export const counterUp = () => {
    return {
        type: counterUpAction,
    }
}
export const counterDown = () => {
    return {
        type: counterDownAction,
    }
}