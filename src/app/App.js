import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import Header from '../common/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/search">Search</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
