import React from 'react'
import './styles.css';

const TaskFilter = ({setFilter}) => {

  const handleClick = e => {
    e.preventDefault();
    setFilter(e.target.textContent);
  }

  return (
    <section className="filter">
      <button 
        className="filter__btn"
        onClick={handleClick}>
        All
      </button>
      <button 
        className="filter__btn"
        onClick={handleClick}>
        Active
      </button>
      <button 
        className="filter__btn"
        onClick={handleClick}>
        Completed
      </button>
    </section>
  )
}

export default TaskFilter