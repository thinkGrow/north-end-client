import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  console.log(coffees);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              key={coffee._id}
            ></CoffeeCard>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
