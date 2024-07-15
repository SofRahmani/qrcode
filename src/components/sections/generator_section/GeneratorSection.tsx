import { title } from "@/styles/primitives";
import Container from "../Container";
import QrGeneratorForm from "./form/QrGeneratorForm";
import ResultContainer from "./result/ResultContainer";

export default function GeneratorSection() {
  return (
    <Container sectionID="generator">
      <div className="flex size-full justify-between gap-10 max-lg:flex-col">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className={`${title({ size: "xl", color: "yellow" })} text-center`}>
            QR Code Générator
          </h1>
          <div className="hidden flex-col items-center justify-center gap-10 p-8 lg:flex">
            <ResultContainer />
          </div>
        </div>
        <div className="flex size-full flex-col items-center justify-center">
          <QrGeneratorForm />
          <div className="mb-12 flex flex-col items-center justify-center gap-10 p-8 lg:hidden">
            <ResultContainer />
          </div>
        </div>
      </div>
    </Container>
  );
}
