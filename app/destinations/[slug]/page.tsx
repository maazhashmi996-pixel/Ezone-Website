import { countries } from "@/app/data/countries";
import { notFound } from "next/navigation";

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = countries.find((c) => c.slug === params.slug);

  // Agar country list mein nahi hai to 404 dikhao
  if (!country) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">
        Study in {country.name}
      </h1>
      <p className="text-gray-600 text-lg">
        Explore world-class education opportunities in {country.name} with Ezone.
      </p>
      
      {/* Yahan hum components add karte jayenge jaise Hero, Info, requirements */}
      <div className="mt-10 p-20 bg-blue-50 rounded-3xl border border-blue-100 text-center">
        <p className="text-blue-400">Content for {country.name} is coming here...</p>
      </div>
    </div>
  );
}