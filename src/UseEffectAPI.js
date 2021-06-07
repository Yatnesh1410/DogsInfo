import React, { useState, useEffect } from 'react';
import Dogs from './Dogs';

const UseEffectAPI = () => {

    const [dogs, setDogs] = useState([]);
    const url ="https://api.thedogapi.com/v1/breeds/?limit=21";

    const getDogs = async () => {
            const response = await fetch(url,
            { headers : {'x-api-key' : 'e88fc44e-211f-40d5-bdeb-ca1639af8b5a'}
        });
            setDogs(await response.json());
    }

    useEffect(() => {
        getDogs();
    }, []);

    return (
        <>
            <Dogs dogs={dogs}/>
        </>
    )
}

export default UseEffectAPI