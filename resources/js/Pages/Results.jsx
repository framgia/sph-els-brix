import { Head } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated";
import { useEffect } from "react";

const Results = ({ auth, category, errors, results, ziggy }) => {
  const correctAnswers = results.filter((result) => result.is_correct);

  return (
    <Authenticated auth={auth} errors={errors}>
      <Head title="Results" />

      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 flex flex-col">
              <h1 className="font-bold mb-4">
                {category} - {correctAnswers.length}/{results.length}
              </h1>
              <div className="flex flex-col gap-4">
                {results.map((result, index) => (
                  <div key={result.id} className="border p-4 rounded">
                    <span className="text-xs">
                      {index + 1} - {results.length}
                    </span>
                    <h1 className="font-bold">{result.hiragana}</h1>
                    <p>{result.choice}</p>
                    <p>{result.is_correct ? "Correct" : "Wrong"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Results;
