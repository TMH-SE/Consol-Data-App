import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({ uri: 'http://localhost:3000/graphql' })

const T = () => (
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>
)

ReactDOM.render(<T />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
