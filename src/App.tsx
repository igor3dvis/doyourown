import React from "react";
import styles from './App.module.scss'

import { Redirect, Route, Switch, withRouter } from "react-router-dom";

//Components
import Header from './components/Header/Header'
import WordsListCection from "./components/WordsListSection/WordsListSection";
import AddNewWordPage from "./components/AddNewWord/AddNewWordPage";

//Lazy render component

const App: React.FC = () => {
  return (
    <>
      
        <div className={styles.appWrapper}>
          <Header />
          
          <Switch>
            <Route path='/addnewword'><AddNewWordPage /></Route >
            <Route path='/wordslist'><WordsListCection /></Route >
          </Switch>
          
        </div>
      
    </>
  );
};

export default App;
