import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchTabs = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch tabs data.");
      }
      const data = await response.json();
      setTabs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  if (isLoading) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress style={{ color: "inherit" }} />
      </main>
    );
  }

  return (
    <main className="jobs-center">
      <BtnContainer
        tabs={tabs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <JobInfo tabs={tabs} currentItem={currentItem} />
    </main>
  );
};

export default App;
