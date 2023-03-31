import {ADD, DELETE, FINISHED} from '../constants/actionTypes';

export const Add = (task) => {
    return {
        type: ADD,
        payload: task
    }
}

export const Delete = (task) => {
    return {
        type: DELETE,
        payload: task
    }
}

export const Finished = (task) => {
    return {
        type: FINISHED,
        payload: task
    }
}