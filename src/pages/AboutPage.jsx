import { X, XCircle } from "lucide-react";
import React, { useState } from "react";
const AboutPage = () => {
  const [ville, setVille] = useState("");
  const [list, setList] = useState([]);
  // console.log(ville)
  const add = () => {
    setList([...list, ville]);
    setVille("");
  };

  const deleteItem = (index) => {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Ajouter Ville</h1>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label
              htmlFor="ville"
              className="text-lg font-medium text-gray-700 sm:w-24"
            >
              Ville
            </label>
            <input
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              name="ville"
              id="ville"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Entrez une ville"
            />
            <button
              onClick={add}
              className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
              Ajouter
            </button>
          </div>
          {list.length > 0 && (
            <div className="border rounded-md overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-gray-50"
                  >
                    <span className="text-gray-800">{item}</span>
                    <button
                      onClick={() => deleteItem(index)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      aria-label={`Supprimer ${item}`}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-lg font-semibold text-gray-700">
            Total : <span className="text-blue-600">{list.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
