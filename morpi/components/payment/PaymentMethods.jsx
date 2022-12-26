import React from 'react'
import Script from "next/script";
import Head from 'next/head';

const PaymentMethods = () => {


    return (
        <div className='w-screen flex justify-center pb-[80px] mt-[80px]' >
            <Head>
                <Script src="https://secure.paguelofacil.com/HostedFields/vendor/scripts/WALLET/PFScript.js" ></Script>
            </Head>

            <div className='w-[1000px] rounded-md bg-white border-2 border-violet-600 min-h-[600px]' >
               
            </div>


        </div>
    )
}

export default PaymentMethods