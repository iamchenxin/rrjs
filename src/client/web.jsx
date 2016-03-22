/**
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

const HTMLContainer = document.getElementById('contain');
console.log('whole web.jsx reload!');
if(!module.hot){
  render();
}else {
  hotRender();
  module.hot.accept('./web/testbox.jsx',()=>{
    // when ./web/testbox.jsx update , this will be called again
    console.log('./web/testbox.jsx updated!' );
    setTimeout(hotRender);
  });
}

// functions ....
function render(){
  const TestBox = require('./web/testbox.jsx').TestBox;
  ReactDOM.render(
      <TestBox msg='hehsea' />,
      HTMLContainer
  );
}
function renderError(error){
  ReactDOM.render(<RedBox error={error} />, HTMLContainer);
}
function hotRender(){
  try {
    render();
  } catch (e) {
    renderError(e);
  }
}
