import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "lib/theme";
import { ItemList } from "components/Item/ItemList";
import NotFound404 from "components/NotFound404";
import ItemDetail from "components/Item/ItemDetail";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/items" />} />
            <Route exact path="/items" component={ItemList} />
            <Route exact path="/items/:id?" component={ItemDetail} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </Router>
        {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
