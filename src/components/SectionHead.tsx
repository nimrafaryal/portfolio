export default function SectionHead({
  num,
  label,
  title,
  accent,
  note,
}: {
  num: string;
  label: string;
  title: string;
  accent?: string;
  note?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">
          <span className="num">[{num}]</span>
          <span className="bar" />
          <span>{label}</span>
        </div>
        <h2 className="h-xl">
          {title}
          {accent && (
            <>
              {" "}
              <span className="grad">{accent}</span>
            </>
          )}
        </h2>
      </div>
      {note && <p>{note}</p>}
    </div>
  );
}
