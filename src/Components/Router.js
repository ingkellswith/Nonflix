import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
} //exact는 exactly same을 뜻함 즉 정확히 일치안하면 실행 안함
export default Router;
