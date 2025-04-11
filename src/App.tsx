import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-400 bg-cover bg-fixed bg-center">
      <div className="max-w-5xl mx-auto  min-h-screen mt pt-2">
          <Routes>
            <Route path="/" element={<ShowListPage />} />
            <Route path="show/:showId" element={<ShowDetailPage />} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;