import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Goals from "./components/Goals/Goals";
import { Layout } from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </Layout>
  );
}

export default App;
