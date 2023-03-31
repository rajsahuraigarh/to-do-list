import React from 'react'
import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';
import './styles.css'
import {useState, useEffect} from 'react';

const Header = () => {
  const [light, setLight] = useState(true);
  const toggleMode = (e) => {
    e.preventDefault();
    setLight(!light);
  }

  useEffect(() => {
    const themeImg = document.querySelector(".theme-img");
    const rootGetter = getComputedStyle(document.documentElement);
    const rootSetter = document.documentElement.style;

    if (light) {
      themeImg.setAttribute('src', `${moonIcon}`);
      rootSetter.setProperty("--bg-image", rootGetter.getPropertyValue("--bg-image-light"));
      rootSetter.setProperty("--bg-color", rootGetter.getPropertyValue("--vl-gray"));
      rootSetter.setProperty("--card-bg-color", "white");
      rootSetter.setProperty("--task-text-color", rootGetter.getPropertyValue("--vd-gray-blue"));
      rootSetter.setProperty("--taskinfo-text-color", rootGetter.getPropertyValue("--d-gray-blue"));
      rootSetter.setProperty("--text-hover-color", "black");
      rootSetter.setProperty("--border-color", rootGetter.getPropertyValue("--l-gray-blue"));
      rootSetter.setProperty("--text-finished-color", rootGetter.getPropertyValue("--l-gray-blue"));
    } else {
      themeImg.setAttribute('src', `${sunIcon}`);
      rootSetter.setProperty("--bg-image", rootGetter.getPropertyValue("--bg-image-dark"));
      rootSetter.setProperty("--bg-color", rootGetter.getPropertyValue("--vd-blue"));
      rootSetter.setProperty("--card-bg-color", rootGetter.getPropertyValue("--vd-desat-blue"));
      rootSetter.setProperty("--task-text-color", rootGetter.getPropertyValue("--l-gray-blue_dark"));
      rootSetter.setProperty("--taskinfo-text-color", rootGetter.getPropertyValue("--d-gray-blue_dark"));
      rootSetter.setProperty("--text-hover-color", "white");
      rootSetter.setProperty("--border-color", rootGetter.getPropertyValue("--vd-gray-blue_dark2"));
      rootSetter.setProperty("--text-finished-color", rootGetter.getPropertyValue("--vd-gray-blue_dark"));
    }
  })

  return (
    <header className="header">
        <h1 className="heading">
            Todo
        </h1>
        <button 
          className="theme-btn"
          onClick={toggleMode}>
            <img
                className="theme-img"
                src={moonIcon}
                alt="Moon"
            />
        </button>
    </header>
  )
}

export default Header