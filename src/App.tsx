import Filters from "./ui/Filters/Filters";
import { Header } from "./ui/Header/Header";
import Pagination from "./ui/Pagination/Pagination";
import "./global.css";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Filters />
        <Pagination />
      </div>
    </AuthProvider>
  );
}

export default App;
