import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from '../src'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const render = () => {
  ReactDOM.render(<Root />, document.querySelector('react'))
};

render();

module.hot.accept('../src', render)
