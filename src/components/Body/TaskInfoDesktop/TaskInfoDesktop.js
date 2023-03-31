import React from 'react'
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {Delete} from '../../../actions/tasks';

const TaskInfoDesktop = ({setFilter}) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const clearCompleted = e => {
    e.preventDefault();
    const finishedTasks = tasks.filter(task => task.finished);
    finishedTasks.forEach((finishedTask, index) => {
      dispatch(Delete(finishedTask.name));
    });
  }

  const handleClick = e => {
    e.preventDefault();
    setFilter(e.target.textContent);
  }

  return (
    <li className="info--desktop">
      <p className="info__left--desktop">
        {tasks.filter(task => !task.finished).length} {tasks.filter(task => !task.finished).length == 1? 'item': 'items'} left
      </p>
      <section className="filter--desktop">
        <button 
          className="filter__btn--desktop"
          onClick={handleClick}>
          All
        </button>
        <button 
          className="filter__btn--desktop"
          onClick={handleClick}>
          Active
        </button>
        <button 
          className="filter__btn--desktop"
          onClick={handleClick}>
          Completed
        </button>
      </section>
      <button 
        className="info__clear--desktop"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </li>
  )
}

export default TaskInfoDesktop