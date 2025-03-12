export default function HomePage() {
  return (
    <div>
      {
        Array.from({length: 1000}).map((_, index) => (
          <div key={index} className="h-10 w-full">
            {index}
          </div>
        ))
      }
    </div>
  );
}
