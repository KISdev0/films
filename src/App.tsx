import Filters from "./ui/Filters/Filters";
import Header from "./ui/Header/Header";
import Pagination from "./ui/Pagination/Pagination";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <Pagination />
    </div>
  );
}

export default App;
