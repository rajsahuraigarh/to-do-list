import React, { useEffect } from 'react'
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import TaskFilter from './TaskFilter/TaskFilter'
import DragTask from './DragTask/DragTask'
import {useSelector} from 'react-redux'
import {useState} from 'react'

const Body = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const filterBtns = document.querySelectorAll(".filter__btn");
    filterBtns.forEach(filterBtn => {
      if (filterBtn.textContent == filter) {
        filterBtn.classList.add("filter__btn--selected");
      } else {
        filterBtn.classList.remove("filter__btn--selected");
      }
    })

    const filterBtnsDesktop = document.querySelectorAll(".filter__btn--desktop");
    filterBtnsDesktop.forEach(filterBtn => {
      if (filterBtn.textContent == filter) {
        filterBtn.classList.add("filter__btn--desktop--selected");
      } else {
        filterBtn.classList.remove("filter__btn--desktop--selected");
      }
    })
  })

  return (
    <main className="allTasks">
      <AddTask />
      <Tasks 
      filter={filter}
      setFilter={setFilter} />
      <TaskFilter 
      setFilter={setFilter} />
      <DragTask />
    </main>
  )
}

export default Body