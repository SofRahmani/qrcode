import { title } from '@/styles/primitives'
import Container from '../Container'


export default function FaqSection() {
  return (
    <Container sectionID="faq">
      <h1 className={`${title({ size: "sm", color: "yellow" })}`}>FaqSection</h1>
    </Container>
  );
}