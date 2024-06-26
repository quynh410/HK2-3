import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/reducer/themeReducer';
import '../App.css'
function Theme() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state:any) => state.theme.isDarkMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={handleToggleTheme}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div className="content">
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      </div>
    </div>
  );
}

export default Theme;
