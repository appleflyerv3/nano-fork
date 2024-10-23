import "dreamland";
import { Route, Router } from "dreamland-router";
import Home from "./routes/home";
import Privacy from "./routes/privacy";
import Terms from "./routes/terms";
import Error from "./routes/error";
import "./index.css";

new Router(
    (
        <Route>
            <Route path="/" show={<Home />} />
            <Route path="*" show={<Error />} />
        </Route>
    ),
).mount(document.getElementById("app"));
