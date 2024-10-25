import React, { useState } from "react";

const Checkboxes = () => {
  const languages = [
    { id: "js", name: "JavaScript" },
    { id: "ts", name: "TypeScript" },
    { id: "py", name: "Python" },
    { id: "java", name: "Java" },
    { id: "csharp", name: "C#" },
    { id: "c++", name: "C++" },
    { id: "go", name: "Go" },
    { id: "rust", name: "Rust" },
  ];

  const [checkedLanguages, setCheckedLanguages] = useState([]);
  console.log(checkedLanguages);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setCheckedLanguages([...checkedLanguages, event.target.id]);

    } else {
      setCheckedLanguages(checkedLanguages.filter((language) => language !== event.target.id));
    }

  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Select Programming Languages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((language) => (
            <div key={language.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={language.id}
                checked={checkedLanguages.includes(language.id)}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={language.id}
                className={`text-sm font-medium leading-none cursor-pointer select-none ${
                  checkedLanguages.includes(language.id)
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {language.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Checked Languages:</h2>
        <div className="flex flex-wrap gap-2">
          {checkedLanguages.length > 0 ? (
            checkedLanguages.map((languageId) => (
              <p key={languageId} className="bg-gray-50 p-2 rounded">
                {languages.find((lang) => lang.id === languageId)?.name}
              </p>
            ))
          ) : (
            <p className="text-gray-500 italic">No languages selected</p>
          )}
        </div>
      </div>
    </div>
  )
};

export default Checkboxes;
