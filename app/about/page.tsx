"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const items = [
  { id: 1, name: "Apple", category: "Fruit", origin: "Local" },
  { id: 2, name: "Carrot", category: "Vegetable", origin: "Imported" },
  { id: 3, name: "Banana", category: "Fruit", origin: "Imported" },
  { id: 4, name: "Duck", category: "Vegetable", origin: "Local" },
];

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const origin = searchParams.get("origin");

  const filteredItems = items.filter((item) => {
    return (
      (!category || item.category.toLowerCase() === category.toLowerCase()) &&
      (!origin || item.origin.toLowerCase() === origin.toLowerCase())
    );
  });

  const handleFilterChange = (
    newCategory: string | null,
    newOrigin: string | null
  ) => {
    const query: { [key: string]: string } = {};
    if (newCategory) query.category = newCategory;
    if (newOrigin) query.origin = newOrigin;
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  return (
    <div>
      <h1>Items</h1>
      <div>
        <Button
          className="w-[13%]"
          onClick={() => handleFilterChange("Fruit", origin)}
        >
          Fruit
        </Button>
        <Button onClick={() => handleFilterChange("Vegetable", origin)}>
          Vegetable
        </Button>
        <Button onClick={() => handleFilterChange("", origin)}>
          All Categories
        </Button>
      </div>
      <div>
        <Button onClick={() => handleFilterChange(category, "Local")}>
          Local
        </Button>
        <Button onClick={() => handleFilterChange(category, "Imported")}>
          Imported
        </Button>
        <Button onClick={() => handleFilterChange(category, "")}>
          All Origins
        </Button>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} - {item.origin}
          </li>
        ))}
      </ul>
    </div>
  );
}
