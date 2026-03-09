"use client";

import Link from "next/link";
import { FaWalking } from "react-icons/fa";

const destinations = [
  { name: "Australia", slug: "australia" },
  { name: "France", slug: "france" },
  { name: "Germany", slug: "germany" },
  { name: "Sweden", slug: "sweden" },
  { name: "UAE", slug: "uae" },
  { name: "UK", slug: "uk" },
  { name: "USA", slug: "usa" },
  { name: "Canada", slug: "canada" },
  { name: "Italy", slug: "italy" },
  { name: "Netherlands", slug: "netherlands" },
  { name: "New Zealand", slug: "new-zealand" }
];

export default function StudyDestinations() {
  return (
    <section className="destinations-section">

      <h2 className="destinations-title">
        Study Destinations
      </h2>

      <div className="destinations-grid">

        {destinations.map((country, index) => (
          <Link
            key={index}
            href={`/destinations/${country.slug}`}
            className="destination-card"
          >
            <span>{country.name}</span>

            <FaWalking className="walk-icon" />

          </Link>
        ))}

      </div>

    </section>
  );
}