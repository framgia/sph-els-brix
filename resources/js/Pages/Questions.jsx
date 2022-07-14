import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/inertia-react";
import { Fragment, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Questions = ({ auth, category, errors, ziggy }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const onViewResults = (categoryId) => Inertia.visit(`/results/${categoryId}`);

  const onSubmitAnswer = (
    categoryId,
    questionId,
    choiceId,
    hiragana,
    choice
  ) => {
    Inertia.post(
      "/results",
      {
        categoryId,
        questionId,
        choiceId,
        hiragana,
        choice,
      },
      {
        preserveState: true,
        onStart: setIsProcessing(true),
        onFinish: setIsProcessing(false),
      }
    );

    Inertia.reload();
  };

  return (
    <Authenticated auth={auth} errors={errors}>
      <Head title="Questions" />

      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="border rounded p-4 mb-4">
                <h1 className="font-bold mb-4">{category.title}</h1>
                <p>{category.description}</p>
              </div>
              <div className="border rounded p-4 grid grid-cols-2 gap-4">
                {category.questions.map(
                  ({ id, hiragana, romaji, choices, result }) => (
                    <div
                      key={id}
                      className="border rounded p-4 flex flex-col items-center justify-center gap-4"
                    >
                      <h1 className="font-bold text-4xl">{hiragana}</h1>
                      <p>{romaji}</p>
                      {result === null ? (
                        <div className="flex gap-4">
                          {choices.map((choice) => (
                            <Fragment key={choice.id}>
                              <Button
                                processing={isProcessing}
                                onClick={() =>
                                  onSubmitAnswer(
                                    category.id,
                                    id,
                                    choice.id,
                                    hiragana,
                                    choice.word
                                  )
                                }
                              >
                                {choice.word}
                              </Button>
                            </Fragment>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <span>Answer submitted</span>
                        </div>
                      )}
                    </div>
                  )
                )}
                <div>
                  <Button onClick={() => onViewResults(category.id)}>
                    View results
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Questions;
