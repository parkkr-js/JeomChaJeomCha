import { Routes, Route } from "react-router-dom";
import Home from "../layout/home";
import NotFound from "../layout/notFoundPage";
import Login from "../layout/loginPage";
import SearchResult from "../layout/searchResultPage";
import EnterMemberInfo from "../layout/enterMemberInfoPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/search/:keyword" element={<SearchResult />} />
      <Route path="/enterMemberInfo" element={<EnterMemberInfo />} />
    </Routes>
  );
}
export default Router;
