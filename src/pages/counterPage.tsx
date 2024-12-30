import React from "react";
import Counter from "../components/Counter.tsx";

function CountersPage() {
  return (
    <div className="CountersPage">
      {/* <h1>Counters</h1> */}
      <Counter index='1' />
      <Counter index='2' />
      <Counter index='3' />
    </div>
  );
}

export default CountersPage;