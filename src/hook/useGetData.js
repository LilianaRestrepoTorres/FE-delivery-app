import axios from 'axios';
import {useEffect, useState} from 'react';

const useGetData = ()=> {
    const [deliveries, setDeliveries] = useState([]);

    // Calling API to get data
    useEffect(() => {
        axios.get("http://localhost:9393/deliveries")
        .then((response) => {
            setDeliveries(response.data);
        });
    }, []);

    // Status Filter function hook
    const filterDeliveries = (status, deliveries) => {
        const newArrayDeliveries = [...deliveries];
        if(status === "") {
            setDeliveries(newArrayDeliveries);
        }
        else {
            setDeliveries(newArrayDeliveries.filter(delivery => delivery.state === status));
        }
    };

    // Sort by ascendent or descendent function hook
    const sortDeliveries = (order) => {
        let sortProperty = "creation_date";
        const newArray = [...deliveries];
        let newArraySorted = newArray.sort((a, b) => {
            if(order === "ascendent") {
                return Date.parse(a[sortProperty]) - Date.parse(b[sortProperty]);
            }
            else {
                return Date.parse(b[sortProperty]) - Date.parse(a[sortProperty]);
            }
        });
        setDeliveries(newArraySorted);
    }

    return {deliveries, filterDeliveries, sortDeliveries};
}

export { useGetData };