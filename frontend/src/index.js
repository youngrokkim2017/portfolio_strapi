import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from "@apollo/react-hooks";
import client from './utils/apolloClient';
import './index.css';
// import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    {/* <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider> */}
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <ApolloProvider client={client}>
//         <App />
//       </ApolloProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );