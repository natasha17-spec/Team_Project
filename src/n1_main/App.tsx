import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "./m1_ui/main/Main";
import {store} from "./m2_bll/store";


const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>

                </Provider>
            </HashRouter>
        </div>
    )
}

export default App;
