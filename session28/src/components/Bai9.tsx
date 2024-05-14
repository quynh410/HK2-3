import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');

  const handleThemeChange = (newTheme:any) => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLanguage:any) => {
    setLanguage(newLanguage);
  };

  const renderAppContent = () => {
    if (theme === 'light' && language === 'english') {
      return (
        <div>
          <h1>Light Theme - English</h1>
          {/* Nội dung ứng dụng */}
        </div>
      );
    } else if (theme === 'dark' && language === 'vietnamese') {
      return (
        <div>
          <h1>Dark Theme - Vietnamese</h1>
          {/* Nội dung ứng dụng */}
        </div>
      );
    } else {
      return null; 
    }
  };

  return (
    <div>
      <button onClick={() => handleThemeChange('light')}>Light Theme</button>
      <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
      <button onClick={() => handleLanguageChange('english')}>English</button>
      <button onClick={() => handleLanguageChange('vietnamese')}>Vietnamese</button>

      {/* Hiển thị nội dung của ứng dụng */}
      {renderAppContent()}
    </div>
  );
}

export default App;