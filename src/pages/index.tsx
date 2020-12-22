import * as React from 'react';
import '../css/index.css';
import { ThemeContext, Theme } from './themeContext';
import MyPage from './MyPage';

function App() {
  const [theme, setTheme] = React.useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className="App-header">
          <MyPage/>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;