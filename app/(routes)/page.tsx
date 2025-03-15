export default function HomePage() {
  return (
    <div>
      {process.env.CHECK_JI}
      {Array.from({ length: 1000 }).map((_, index) => (
        <div key={index} className="h-10 w-full">
          Number: {index}
        </div>
      ))}
    </div>
  );
}
