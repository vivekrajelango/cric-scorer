import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Components/Home";
import Opening from "./Components/Opening";
import ScoreCard from "./Components/ScoreCard";

const AppRoute=()=>{
    let Routes = useRoutes([
        {
            path:'/cricket',
            element: <Home />
        },
        {
            path:'/cricket/opening',
            element: <Opening />
        },
        {
            path:'/cricket/scorecard',
            element: <ScoreCard />
        }
    ])
    return Routes
}

export default AppRoute