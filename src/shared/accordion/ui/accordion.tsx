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
          <div className="flex items-center justify-between text-gray-800">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span>{openIndex === i ? "−" : "+"}</span>
          </div>
          {openIndex === i && (
            <p className="text-muted-foreground mt-2 text-sm text-gray-600">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
