import { useState, useEffect } from "react";

const useFetch = (params) => {
    const {url, config = {}, defaultData, dependencyArray = [], shouldContinue = () => true} = params
    const [result, setResult] = useState(defaultData)

    
    function fetchData() {
        fetch(url, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const cleanData = data.filter((itm) => {
                    return itm !== null
                })            
                if(!shouldContinue()) return setResult(cleanData)
                setResult([...result,...cleanData])
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

const useFetchDetail = (params) => {
    const {url, config = {}, defaultData, dependencyArray = []} = params;
    const [resultDetail, setResultDetail] = useState(defaultData);

    function fetchDetail() {
        fetch(url, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setResultDetail(data)
            })
            .catch((error) => {
                console.log(`error saat fetch details`);
            })
    }

    useEffect(() => {
        fetchDetail();
    }, [url, ...dependencyArray]);

    return resultDetail;
}


export {useFetch, useFetchDetail}