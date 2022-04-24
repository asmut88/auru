import axios from "axios";
import React, { useEffect, useState } from "react";


export function UniversitiesList() {

    const [univers, setUnivers] = useState()

    useEffect(() => {
        const URI: string = 'http://universities.hipolabs.com/search?country=United+Kingdom'

        axios.get(URI)
            .then((response) => {
                setUnivers(response.data)
            })


    }, [setUnivers])

    return univers
}