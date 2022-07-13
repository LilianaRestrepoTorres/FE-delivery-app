import axios from 'axios';
import {useEffect, useState} from 'react';

const useGetData = ()=> {
    const [deliveries, setDeliveries] = useState([]);

    // Calling API to get data
    useEffect(() => {
        axios.get("http://localhost:9393/deliveries")
        .then((response) => {
            console.log(response.data);
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


    return {deliveries, filterDeliveries};
}

export { useGetData };