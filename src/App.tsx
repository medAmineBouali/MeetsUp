import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import AuthPage from "@/pages/Auth";
import Layout from "@/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
