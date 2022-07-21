import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";

const Graph = React.lazy(() => import('./chart'))
const Dashboard = React.lazy(() => import('./dashboard'))

const App = () => {
    return <div>
        <Suspense fallback={'Loading...'}>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/graph">Graph</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/graph" element={<Graph />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </div >
}

export default App