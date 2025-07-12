import React from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => {
          return <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>;
        })}
      </div>
    </div>
  );
};

export default Home;
