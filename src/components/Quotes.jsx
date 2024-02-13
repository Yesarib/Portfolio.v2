/* eslint-disable react/no-unescaped-entities */
import { quates } from "../constans"
const Quotes = () => {
    return (
        <div className='w-full flex justify-center items-center lg:justify-start lg:items-start text-secondary mt-16 mb-16'>
            <div className="w-11/12">
                <p className="text-sm"> '{quates?.quote[0].quote}' </p>
                <h2 className="flex justify-end items-end lg:mr-6 text-secondary text-sm"> {quates?.quote[0].author} </h2>
            </div>
        </div>
    )
}

export default Quotes