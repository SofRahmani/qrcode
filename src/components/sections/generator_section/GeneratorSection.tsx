import Container from "../Container";
import { QrCode } from 'lucide-react';
import { title } from '@/styles/primitives';
import { PickerExample } from '@/components/ui/ColorPicket'
import QrGeneratorForm from './form/QrGeneratorForm'


export default function GeneratorSection() {
  return (
    <Container sectionID="generator">
      <div className="flex size-full justify-between gap-10">
        <div className="flex size-full items-center justify-center">
          <h1 className={`${title({ size: "xl", color: "yellow" })} text-center `}>
            QR Code Générator
          </h1>
        </div>
        <div className="flex size-full items-center justify-center">
          <QrGeneratorForm />
        </div>
      </div>
    </Container>
  );
}
