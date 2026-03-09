import { notFound } from "next/navigation";
import { countries } from "@/app/data/countries";

type Params = {
  slug: string;
};

export default function CountryPage({ params }: { params: Params }) {

  const { slug } = params;

  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <div style={{ padding: "80px" }}>
      <h1>Study in {country.name}</h1>
      {/* <p>{country.description}</p> */}
    </div>
  );
}