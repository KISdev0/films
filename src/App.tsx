import { Filters, FiltersProvider } from "./ui/Filters/Filters";
import { Header } from "./ui/Header/Header";
import Pagination from "./ui/Pagination/Pagination";
import "./global.css";

function App() {
  return (
    <div>
      <FiltersProvider>
        <Header />
        <Filters />
        <Pagination />
      </FiltersProvider>
    </div>
  );
}

export default App;
