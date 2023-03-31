import React, { useEffect } from 'react'
import './styles.css'
import {useDispatch, useSelector} from 'react-redux';
import {Add} from '../../../actions/tasks';

const AddTask = () => {
  const dispatch  = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const submitTask = e => {
    e.preventDefault();
    let alreadyAdded = false;
    const input = document.querySelector('.form__input');
    tasks.forEach(task => {
      input.value == task.name? alreadyAdded = true: alreadyAdded = false;
    })
    if (input.value != '' && !alreadyAdded && input.value.trim() != '') dispatch(Add(input.value.trim()));
    input.value = '';
  }

  const handleKey = e => {
    if (e.key == 'Enter') {
      submitTask(e);
    }
  }

  return (
    <label className="form">
      <button 
        className="form__submit" 
        onClick={submitTask}
      />
      <input 
        className="form__input"
        type="text" 
        placeholder="Create a new todo..."
        onKeyPress={handleKey}
      />
    </label>
  )
}

export default AddTask