import styles from "./Search.module.css";

const Search = ({ value, placeholder = "Pesquise aqui pela cidade" }) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="w-full pl-8 pr-1 py-2.5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent shadow-sm"
      />
    </div>
  );
};
export default Search;
