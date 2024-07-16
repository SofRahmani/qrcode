import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { title } from "@/styles/primitives";
import Container from "../Container";

export default function FaqSection() {
  return (
    <Container sectionID="faq" className="mb-20 scroll-mt-0.5 lg:mb-12">
      <h2 className={`${title({ size: "sm", color: "yellow" })}`}>F.A.Q</h2>
      <div className="flex w-full flex-col gap-4 lg:w-2/3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Mes informations sont-elles stockées sur le site ?</AccordionTrigger>
            <AccordionContent>
              Non, aucune information n&apos;est stockée sur le site. Aucune base de données
              n&apos;est utilisée.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Une erreur est survenu lors de la génération du QR Code
            </AccordionTrigger>
            <AccordionContent>
              Cette erreur peut-être causée le fournisseur de l&apos;API permettant de générer le QR
              Code. Il est possible que le fournisseur bloque certaine requête afin de limiter la
              charge serveur ou que le QR Code ne soit pas généré correctement. Veuillez réessayer
              ultérieurement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Quels sont les paramètres par défaut du QR Code ?</AccordionTrigger>
            <AccordionContent>
              Outre le texte, les couleurs, le format et la taille que vous définissez par vous même
              ; les paramètres utilisés par défaut sont le &quot;ecc&quot; sur la valeur
              &quot;Q&quot;, ce qui permet de récupérer environ 25 % des données détruites si le QR
              Code est endommagé. <br /> <br />
              Le second paramètre est &quot;qzone&quot; sur la valeur &quot;2&quot; qui permet de
              créer une zone de silence suffisante afin d&apos;éviter toute perturbation pour les
              lecteur de QR Code.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
}
