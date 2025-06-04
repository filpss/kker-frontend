import BotaoOpcoes from "../components/BotaoOpcoes";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosLink } from "react-icons/io";
import KkerSystem from "../assets/kkersystem.svg";

function Home() {
  const opcoes = [
    {
      Icon: FaUserPlus,
      Text: "Clientes",
    },
    {
      Icon: MdOutlineSell,
      Text: "Vendas",
    },
    {
      Icon: MdOutlineAttachMoney,
      Text: "Pagamentos",
    },
    {
      Icon: BiSolidReport,
      Text: "Gerar Relatório",
    },
    {
      Icon: GiReceiveMoney,
      Text: "Cobrança",
    },
    {
      Icon: IoIosLink,
      Text: "Gerar Link de Pagamento",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
      <div className="mt-20 text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          <img src={KkerSystem} alt="kk&r system" width={300} />
        </h1>
        <p className="text-gray-600 font-medium mt-10 px-10">
          Cadastre novos clientes, visualize históricos de venda, calendário de
          cobrança e muito mais!
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-15 mb-20">
          {opcoes.map((opcao, index) => (
            <BotaoOpcoes key={index} Icon={opcao.Icon} Text={opcao.Text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
