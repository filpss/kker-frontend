import MainButton from "../components/MainButton";
import SearchBar from "../components/SearchBar";
import { FaUserPlus } from "react-icons/fa";
import datas from "../../database.json";
import Table from "../components/Table";

const headers = Object.keys(datas[0]).filter((key) => key !== "id");
const headerLabels = {
  nome: "Nome",
  telefone: "Telefone",
  divida: "Dívida",
  ativo: "Ativo",
  data_cobranca: "Data de Cobrança",
};

function Clients() {
  return (
    <div className="h-full w-full mt-10">
      <div className="max-w-md sm:min-w-xl md:min-w-2xl lg:min-w-4xl xl:min-w-6xl mx-auto flex justify-between items-center py-4">
        <MainButton Text="Cadastrar Cliente" Color="var(--laranja-kker)" />
        <button className="block sm:hidden rounded-full p-4 cursor-pointer">
          <FaUserPlus size={30} color="var(--marrom-kker)" />
        </button>
        <h1 className="text-gray-500 font-semibold text-3xl hidden sm:block">
          Clientes
        </h1>
        <SearchBar />
      </div>
      <div className="px-4">
        <Table headers={headers} headerLabels={headerLabels} data={datas} />
      </div>
    </div>
  );
}

export default Clients;
