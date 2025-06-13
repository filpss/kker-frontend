function Table({ headers, data, headerLabels }) {
  return (
    <table className="min-w-md sm:min-w-xl md:min-w-3xl lg:min-w-4xl xl:min-w-6xl mx-auto mt-10 bg-white border border-gray-200">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="text-center p-2 bg-gray-50">
              {headerLabels[header]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className={`border-t border-gray-100 hover:bg-gray-50 ${
              !row.ativo ? "text-gray-300" : ""
            }`}
          >
            {headers.map((header) => (
              <td key={`${row.id}-${header}`} className="text-center p-2">
                {header === "divida"
                  ? `R$ ${row[header].toFixed(2)}`
                  : header === "ativo"
                  ? row[header]
                    ? "Sim"
                    : "Não"
                  : row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
