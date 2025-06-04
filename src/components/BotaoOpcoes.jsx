export default function BotaoOpcoes({ Icon, Text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[var(--marrom-kker-fraco)] hover:shadow-lg transition-all duration-300 min-h-[140px] w-full max-w-[200px] mx-auto"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors duration-300">
        <Icon className="text-2xl text-[var(--laranja-kker)] group-hover:text-[var(--marrom-kker-fraco)]" />
      </div>
      <span className="text-sm font-medium text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-300">
        {Text}
      </span>
    </button>
  );
}
