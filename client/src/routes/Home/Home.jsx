import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";

import axios from "axios";
import { useState, useEffect } from "react";
import PatioCard from "../../components/PatioCard/PatioCard";

const Home = () => {
  const [patios, setPatios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPatios = async () => {
      try {
        const response = await axios.get("https://localhost:7222/api/Patios");
        setPatios(response.data);
      } catch (error) {
        setError("Erro ao carregar dados do patio.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatios();
  }, []);

  const filteredPatios = patios.filter((patio) => {
    const searchValue = searchTerm.toLowerCase();
    return patio.nome.toLowerCase().includes(searchValue);
  });

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredPatios.map((patio, cap) => (
                <PatioCard
                  key={patio.patioId}
                  patio={patio.nome}
                  cap={patio.capacidade}
                />
              ))}
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
