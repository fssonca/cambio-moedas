import * as React from 'react';
import { useTheme, Theme } from './ThemeContext';

const MyPage = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button onClick={() => setTheme(Theme.Dark)}>
        switch to dark theme
      </button>
        my page
      </div>
  )
}

export default MyPage;