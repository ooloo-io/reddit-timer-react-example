import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import { ContentContainer } from './App.style';
import Header from '../common/header';
import Footer from '../common/footer';
import HomePage from '../page-home';
import SearchPage from '../page-search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />

      <ContentContainer>
        <Switch>
          <Route path="/search/:subreddit">
            <SearchPage />
          </Route>
          <Route path="/terms">Terms Page</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ContentContainer>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
