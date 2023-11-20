import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Login from "../pages/login";
import SearchResult from "../pages/search";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/search" element={<SearchResult />} />
    </Routes>
  );
}
export default Router;
