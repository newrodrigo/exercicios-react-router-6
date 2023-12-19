import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./components/Header/Promotion";
import Promotion from "./components/Header/HomeBody";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
