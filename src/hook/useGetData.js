import axios from 'axios';
import {useEffect, useState} from 'react';

const useGetData = ()=> {
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9393/deliveries")
        .then((response) => {
            console.log(response.data);
            setDeliveries(response.data);
        });
    }, []);

    return {deliveries};
}

export { useGetData };