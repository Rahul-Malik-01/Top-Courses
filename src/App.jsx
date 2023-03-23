import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#4a4e69]">
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App
