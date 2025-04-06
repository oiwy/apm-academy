import { useState } from "preact/hooks";

export const Accordion = ({ items }: { items: any }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i: any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col gap-y-3">
      {items.map((item: any, i: number) => (
        <div
          key={i}
          className="cursor-pointer rounded-xl border p-3 shadow transition duration-300 hover:shadow-lg"
          onClick={() => toggle(i)}
        >
          <div className="text-base-content flex items-center justify-between">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span>{openIndex === i ? "−" : "+"}</span>
          </div>
          {openIndex === i && (
            <p className="text-muted-foreground text-neutral-content mt-2 text-sm">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
