import type { JSX } from 'react';
import type React from 'react';

import BGIMG from '@/assets/img/bg-one.avif';
import { IconCheckOutlinedWhite } from '@/utils/icons';

const ConnectAmazonAccountSuccessfull: React.FC = (): JSX.Element => {
    return (
        <div
            className='bg-cover bg-center bg-no-repeat xl:h-dvh p-2'
            style={{ backgroundImage: `url(${BGIMG})` }}
        >
            <div className='max-w-[1366px] flex justify-center items-center h-full mx-auto'>
                <div className='text-center'>
                    <div className='bg-primary-dark w-36 h-36 rounded-full flex items-center justify-center mx-auto'>
                        <IconCheckOutlinedWhite />
                    </div>

                    <h1 className='font-semibold text-5xl mt-10'>Amazon Account Linked Successfully</h1>

                    <p className='text-[26px] mt-7 text-center'>
                        Your Amazon account has been connected.
                    </p>

                    <p className='text-[26px] mt-7 max-w-[800px] mx-auto'>
                        We’re now syncing your listings and data — this may take a few hours to complete.You’ll receive an email once everything is ready.
                    </p>

                    <p className='text-[26px] mt-7'>
                        In the meantime, feel free to explore your dashboard or customize your settings.
                    </p>

                    <p className='text-[26px] font-semibold mt-5'>What’s next?</p>

                    <ul className='list-disc pl-6 space-y-1 text-[16px] text-black mt-5'>
                        <li className='text-[26px] max-w-[30rem] mx-auto text-start'> We’ll start analyzing your listings</li>
                        <li className='text-[26px] max-w-[30rem] mx-auto text-start'>You can set your repricing rules</li>
                        <li className='text-[26px] max-w-[30rem] mx-auto text-start'>Real-time insights will appear on  your dashboard as data becomes available</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ConnectAmazonAccountSuccessfull;