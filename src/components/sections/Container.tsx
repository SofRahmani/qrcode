export interface containerProps {
  sectionID: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Container({ sectionID, children, className }: containerProps) {
  return (
    <section
      id={sectionID}
      className={`flex size-full flex-col items-center justify-center gap-4 lg:p-24 ${className}`}
    >
      {children}
    </section>
  );
}
