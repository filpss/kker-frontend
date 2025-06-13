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
      to: "/clients",
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
    <div className="flex flex-col justify-center items-center flex-1 h-full w-full bg-gray-50">
      <div className="max-w-sm text-sm sm:max-w-md sm:text-base md:max-w-2xl text-center flex flex-col items-center py-10">
        <img src={KkerSystem} alt="kk&r system" width={300} />
        <p className="pt-10 text-gray-600 font-medium">
          Cadastre novos clientes, visualize históricos de venda, calendário de
          cobrança e muito mais!
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {opcoes.map((opcao, index) => (
            <BotaoOpcoes
              key={index}
              Icon={opcao.Icon}
              Text={opcao.Text}
              to={opcao.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
