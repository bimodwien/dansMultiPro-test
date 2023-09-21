import { useState, useEffect } from "react";

const useFetch = (params) => {
    const {url, config = {}, defaultData, dependencyArray = []} = params
    const [result, setResult] = useState(defaultData)

    function fetchData() {
        fetch(url, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setResult(data)
            })
            .catch((error) => {
                console.log(`there's an error on fetching`);
            })
    }

    useEffect(() => {
        fetchData();
    },[url, ...dependencyArray]);
    return result;
};   


export {useFetch}