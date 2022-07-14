import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/inertia-react";
import { Fragment, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Stepper, Step, StepButton, Typography, Box } from "@mui/material";

const Questions = ({ auth, category, errors }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = category.questions.map((question) => question);

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();
  const handleNext = () =>
    setActiveStep(
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    );
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

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
        onStart: setIsProcessing(true),
        onFinish: setIsProcessing(false),
      }
    );

    Inertia.reload({
      preserveState: true,
    });
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
              <div className="border rounded p-4 flex flex-col gap-4">
                <Stepper activeStep={activeStep}>
                  {steps.map((question, index) => (
                    <Step key={question.id} completed={completed[index]}>
                      <StepButton color="inherit" />
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? (
                  <Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="flex items-end justify-center gap-4">
                      <h1 className="font-bold text-4xl mt-4">
                        {steps[activeStep].hiragana}
                      </h1>
                      <h2 className="text-2xl">{steps[activeStep].romaji}</h2>
                      {steps[activeStep].result === null ? (
                        <div className="flex gap-4">
                          {steps[activeStep].choices.map((choice) => (
                            <Fragment key={choice.id}>
                              <Button
                                processing={isProcessing}
                                onClick={() =>
                                  onSubmitAnswer(
                                    category.id,
                                    steps[activeStep].id,
                                    choice.id,
                                    steps[activeStep].hiragana,
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
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {steps[activeStep].result === null &&
                      activeStep !== steps.length - 1 ? (
                        <Button
                          onClick={handleNext}
                          processing={steps[activeStep].result === null}
                        >
                          Next
                        </Button>
                      ) : (
                        <Link href={route("results.get", category.id)}>
                          <Button>Finish</Button>
                        </Link>
                      )}
                    </Box>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Questions;
