/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import { getQuotes } from "../constans"
const Quotes = () => {
    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        const getQuo = async() => {
            const response = await getQuotes();
            setQuotes(response[0])
        }

        getQuo();
    },[])
    return (
        <div className='w-full flex justify-center items-center lg:justify-start lg:items-start text-secondary mt-16 mb-16'>
            <div className="w-11/12">
                <p className="text-sm"> '{quotes?.quote}' </p>
                <h2 className="flex justify-end items-end lg:mr-6 text-secondary text-sm"> {quotes?.author} </h2>
            </div>
        </div>
    )
}

export default Quotes