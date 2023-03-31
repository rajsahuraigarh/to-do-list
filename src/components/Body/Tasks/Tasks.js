import React, { useEffect } from 'react'
import Task from '../Task/Task'
import TaskInfo from '../TaskInfo/TaskInfo';
import TaskInfoDesktop from '../TaskInfoDesktop/TaskInfoDesktop';
import './styles.css';
import {useSelector} from 'react-redux';

const Tasks = ({filter, setFilter}) => {
  const tasks = useSelector(state => state.tasks);
  var filterTasks;

  if (filter == 'All') {
    filterTasks = tasks;
  } else if (filter == 'Active') {
    filterTasks = tasks.filter(task => !task.finished);
  } else if (filter == 'Completed') {
    filterTasks = tasks.filter(task => task.finished);
  }

  useEffect(() => {
    const taskText = document.querySelectorAll(".task__text");

    let ctr = 0;
    for (;ctr < taskText.length; ctr++) {
      if (filterTasks[ctr].finished) {
        taskText[ctr].classList.add("task__text--finished");
      } else {
        taskText[ctr].classList.remove("task__text--finished");
      }
    }
    
    const draggables = document.querySelectorAll(".task");
    const tasksElem = document.querySelector(".tasks");
    
    draggables.forEach(draggable => {

      // Change styling of element to indicate when it's being dragged
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('task--dragging');
      })

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('task--dragging');
      })

    })

    tasksElem.addEventListener('dragover', e => {
      e.preventDefault();
      // e.clientY returns current y position of mouse
      const afterElem = getDragAfterElement(tasksElem, e.clientY);
      const currentDrag = document.querySelector(".task--dragging");
      const taskInfo = document.querySelector(".info");

      // If there aren't any elements after element being dragged
      if (afterElem == null) {
        tasksElem.insertBefore(currentDrag, taskInfo);
      } else {
        tasksElem.insertBefore(currentDrag, afterElem);
      }
    })
  })

  function getDragAfterElement(tasks, y) {
    // Return element that comes right after dragging element

    // Get all draggable elements except for the one that's currently being dragged
    const dragElems = [...tasks.querySelectorAll(".task:not(.task--dragging)")];

    // closest = Draggable element that's currently closest to mouse
    // child = Current draggable element we're iterating over
    // second parameter = first value of closest
    return dragElems.reduce((closest, child) => {
      // Get bounding box of child
      const box = child.getBoundingClientRect();
      
      // Get distance between center of box and mouse cursor
      const offset = y - (box.top + box.height / 2);

      // Only consider offsets above 0 bc it shows you're above the child
      // and if current element is closer to mouse than current closest
      if (offset < 0 && offset > closest.offset) {
        return {offset: offset, element: child};
      } else {
        return closest;
      }
    }, {offset: Number.NEGATIVE_INFINITY}).element;

    // Return only the closest element, not the entire object
  }

  return (
    <ul
      className="tasks">
      {filterTasks.map(task => (
        <Task task={task} key={task.name} />
      ))}
      <TaskInfo />
      <TaskInfoDesktop setFilter={setFilter} />
    </ul>
  )
}

export default Tasks