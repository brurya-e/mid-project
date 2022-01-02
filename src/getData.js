import React, { useState, useEffect } from 'react';
import Sinagogs from './Api/sinagog';

    const GetData = () => {
        const [data, setMovie] = useState([]);
    
        useEffect(() => {
            const search = async () => {
                const { data } = await Sinagogs.get(`/data`);
                console.log(data)
            };
    
            search();
    
        }, []);
    
        return <div>
            <p>App </p>
            <p> {data}</p>
        </div>;
    };
    
    export default GetData;
    