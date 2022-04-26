import React, { useCallback, useState } from "react";
import Count from "./components/advanced-react/performance/Count";

const App = () => {
  const [filter, setFilter] = useState("");

  // useCallback(() => (callback, [dependencies]);
  // memorized
  const calculate = useCallback(() => {
    setFilter("");
  }, [setFilter]);

  // useMemo(() => value, [depenencies])
  const data = { success: false };

  return (
    <div>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} data={data}></Count>
    </div>
  );
};

export default App;
