import {ADD, DELETE, FINISHED} from '../constants/actionTypes';
const initialTasks = [
    {
        name: 'Complete online JavaScript course',
        finished: true
    },
    {
        name: 'Jog around the park 3x',
        finished: false
    },
    {
        name: '10 minutes meditation',
        finished: false
    },
    {
        name: 'Read for 1 hour',
        finished: false
    },
    {
        name: 'Pick up groceries',
        finished: false
    },
    {
        name: 'Complete Todo App on Frontend Mentor',
        finished: false
    }
];

export default (state=[...initialTasks], action) => {
    switch (action.type) {
        case ADD:
            return [...state, {name: action.payload, finished: false}];
        case DELETE:
            return state.filter(task => task.name != action.payload);
        case FINISHED:
            return state.map(task => task.name == action.payload? {name: task.name, finished: !task.finished}: task);
        default:
            return state;
    }
}