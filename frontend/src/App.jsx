
import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Table from "./Components/Table";

function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    
    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountry = () => {
        let alpha = /^[a-zA-Z]+$/;
        setError("")
        if (input.length < 2 || !alpha.test(input)) {
            setError("Please enter a valid alpha code to search by!");
            return;
        }
        
        let endpoint = ((input.length === 2) ? "code/" : "alpha/") + input.toLowerCase() + "/";
        Axios.get("http://127.0.0.1:8000/api/v1/countrylist/" + endpoint)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.detail);
            } else {
                setError("Connection to the CountryList API failed! Please try again later.");
            }
        });
    }

    const fetchCountries = () => {
        setError("")
        Axios.get("http://127.0.0.1:8000/api/v1/countrylist/")
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.detail);
            } else {
                setError("Connection to the CountryList API failed! Please try again later.");
            }
        });
    }
    
    return (
        <div className="container col-md-8 col-sm-offset-2">
            <div className="col-md-12 mt-3">
                <h3>Country List API <span className="small text-primary">v1.0</span></h3>
            </div>
            <div className="col-md-12 d-flex align-items-center">
                <div className="col-md-11 d-flex">
                    <Button className="btn btn-warning" label="Search" onClick={fetchCountry} />
                    <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Search by alpha code" />
                </div>
                <div className="col-md-1 float-right">
                    <img onClick={() => {window.location.reload(true);}} title="Reload list" className="float-right" src="./refresh.png" width="40" />
                </div>
            </div>
            <div className="col-md-12 text-center m-2">
                <span className="text-danger">{error}</span>
            </div>
            <Table data={data} />
        </div>
    )
}

export default App;