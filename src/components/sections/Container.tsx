export interface containerProps {
  sectionID: string;
  children?: React.ReactNode;
}

export default function Container({ sectionID, children }: containerProps) {
  return (
    <section
      id={sectionID}
      className="flex size-full flex-col items-center justify-center gap-4 p-24"
    >
      {children}
    </section>
  );
}
