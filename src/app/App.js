import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import Header from '../common/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/search/:subreddit">Search Page</Route>
        <Route path="/">Home Page</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
