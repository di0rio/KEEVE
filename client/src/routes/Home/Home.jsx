import styles from "./Home.module.css";

import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import PatioCard from "../../components/PatioCard/PatioCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <h1 className="text-[#f44336] text-3xl font-bold">PATIOS</h1>
              <Search />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <PatioCard />
              <PatioCard />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <PatioCard />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
