import { universities } from "@/app/data/universities";

export default function Home() {
  return (
    <main>
      <h1>Test Universities</h1>
      {universities.map((uni, index) => (
        <div key={index}>
          {uni.name} - {uni.country}
        </div>
      ))}
    </main>
  );
}