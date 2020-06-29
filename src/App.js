import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Example from "./components/Example";

const App = () => {
  const client = new ApolloClient({
    // Insert GraphQL URI here
    uri: "https://48p1r2roz4.sse.codesandbox.io",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
      <Example />
    </ApolloProvider>
  );
};

export default App;
