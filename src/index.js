import Offline from 'offline-plugin/runtime'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'
import { store } from './store'

if (process.env.NODE_ENV === 'production') {
  injectTapEventPlugin()
  Offline.install()
}

export const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)

if (!module.hot) render(<Root />, document.querySelector('react'))
