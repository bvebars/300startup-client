import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes(false)
  return (
    <div >
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </div>
  );
}

export default App;
