import React, { useEffect } from 'react';
import deleteIcon from "../../../images/icon-cross.svg";
import './styles.css';
import {useDispatch} from 'react-redux';
import {Delete, Finished} from '../../../actions/tasks';

const Task = ({task}) => {
  const dispatch = useDispatch();

  const finishEvent = () => {
    dispatch(Finished(task.name));
  }

  const deleteEvent = e => {
    e.preventDefault();
    dispatch(Delete(task.name));
  }

  const parseName = (taskName) => {
    let lines = [];
    const lineLength = 36;
    for (let i = 0; i <= Math.floor(taskName.length / lineLength); i++) {
      let start =  Math.min(taskName.length,i * lineLength);
      let end = Math.min(taskName.length, start + lineLength);
      lines.push(taskName.slice(start, end));
    }

    return lines;
  }

  return (
    <li className="task">
      <label 
        className="task__container"
        htmlFor={task.name}
      >
        <div className="task__info">
          <input 
            readOnly={true}
            className="task__input"
            type="checkbox"
            id={task.name}
            name={task.name}
            checked={task.finished}
          />
          <span
            className="task__checkbox"
            dataname={task.name}
            onClick={finishEvent} />
          <div className="task__text">
            {parseName(task.name).map(line => (
              <p>{line}</p>
            ))}
          </div>
        </div>
        <button 
          className="task__delete-btn"
          onClick={deleteEvent} >
          <img
            className="task__delete-img"
            src={deleteIcon}
            alt="delete"
          />
        </button>
      </label>
    </li>
  )
}

export default Task