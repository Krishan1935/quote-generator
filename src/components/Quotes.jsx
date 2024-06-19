
import React, { useEffect, useState } from 'react'
import { Text } from 'react-font'
import { toast } from 'react-toastify'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";
import Loader from "./Loader"

const Quotes = (props) => {
    const [quote, setQuote] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchquote() {
            setLoading(true)
            try {
                let quote = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${props.category}&X-Api-Key=rWBRuRPIovLjqvcnLfMgVQ==eZCdt3Zm0KZB7mpy`);
                let response = await quote.json();
                setQuote(response[0]);
            }
            catch (e) {
                toast.error("Something went wrong")
            }
            setLoading(false)
        }
        fetchquote()
    },[props.category])
  return (
    <div className='w-full h-full bg-purple-500 flex  justify-center items-center'>
        {
            (quote) ? (
                (
                    loading ? (
                        <Loader></Loader>
                    ) : (
                        <div className='flex flex-col gap-4 justify-center items-center w-[500px] bg-purple-800 text-white p-4 rounded-md'>
                            <Text className='font-bold capitalize text-2xl underline underline-offset-4'
                            family='Ubuntu'>{quote.category} </Text>
                            <div className='text-center flex flex-col items-center justify-center'>
                                <BiSolidQuoteAltLeft/>
                                <Text className='font-semibold text-xl tracking-wide'
                                family='Roboto Condensed'>
                                    {quote.quote}
                                </Text>
                                <BiSolidQuoteAltRight/>
                            </div>
                            <Text className='text-xl' family='Ubuntu'>
                                -{quote.author}
                            </Text>
                        </div>
                    )
                )
            ) : (
                <div className='text-4xl text-white bg-purple-400 py-4 px-2 rounded-lg'> Choose a Category </div>
            )
        }
    </div>
  )
}

export default Quotes