import React from "react";
import { Provider } from 'react-redux';
import Main from './main/main';


const Root = ({store}) => {
  return (
    <Provider >
      <Main store={store}/>
    </Provider>
 );
};


export default Root;
