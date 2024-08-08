import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AiExperienceAccordion() {
  return (
    <Accordion type="single" collapsible className="w-[50%]">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer. test tes ttest test test tes ttest test test tes ttest test
          test tes ttest test test tes ttest test test tes ttest test test tes t
          test tes ttest test
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
