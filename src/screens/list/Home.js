import React, { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import Card from "./Card";
import { useApi, AXIOS_METHOD } from "../../hooks/useApi";
import Search from "../../components/Search";
import Paginations from "../../components/Pagination";
import Footer from "../../components/Footer";

const Home = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { results, info } = fetchedData;
  let [pageNumber, setPageNumber] = useState(1);

  const [data, loading, error, fetchData] = useApi(
    AXIOS_METHOD.GET,
    `/character/?page=${pageNumber}&name=${search}`
  );

  useEffect(() => {
    if (data) {
      updateFetchedData(data);
    }
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData, search]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters Page</h1>
      <Search setSearch={setSearch} updatePageNumber={setPageNumber} />
      {loading && <LinearProgress />}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} loading={loading} />
            </div>
          </div>
        </div>
      </div>
      <Paginations
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
      <Footer />
    </div>
  );
};

export default Home;
