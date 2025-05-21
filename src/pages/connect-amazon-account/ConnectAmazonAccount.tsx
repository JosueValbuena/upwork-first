import type { JSX } from 'react';
import type React from 'react';

import BGIMG from '@/assets/img/bg-one.avif';
import { IconAmazonOutlinedWhite } from '@/utils/icons';
import { Button } from '@/components/ui/button';

const ConnectAmazonAccount: React.FC = (): JSX.Element => {
    return (
        <div
            className='bg-cover bg-center bg-no-repeat h-dvh p-2'
            style={{ backgroundImage: `url(${BGIMG})` }}
        >
            <div className='max-w-[1366px] flex justify-center h-full md:items-center'>
                <div className='max-w-[644px] text-center'>
                    <div className='bg-primary-dark w-36 h-36 rounded-full flex items-center justify-center mx-auto'>
                        <IconAmazonOutlinedWhite />
                    </div>

                    <h1 className='font-semibold text-5xl mt-10'>Connect Your Amazon Account</h1>

                    <p className='text-[26px] mt-7'>
                        To get started, please connect your Amazon Seller
                        account to sync your inventory
                    </p>

                    <Button className='w-full max-w-md h-16 mt-15 bg-primary-dark text-lg font-bold'>
                        Connect Amazon Account
                    </Button>

                    <p className='text-[22px] mt-5 text-primary-dark ml-2 cursor-pointer hover:underline'>Why do we need this?</p>
                </div>
            </div>
        </div>
    );
};

export default ConnectAmazonAccount;