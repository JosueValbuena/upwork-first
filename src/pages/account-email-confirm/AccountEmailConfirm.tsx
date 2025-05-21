import type { JSX } from 'react';
import type React from 'react';

import BGIMG from '@/assets/img/bg-one.avif';
import { IconMailContainedWhite } from '@/utils/icons';

const AccountEmailConfirm: React.FC = (): JSX.Element => {
    return (
        <div
            className='bg-cover bg-center bg-no-repeat h-dvh p-2'
            style={{ backgroundImage: `url(${BGIMG})` }}
        >
            <div className='max-w-[1366px] flex justify-center items-center h-full mx-auto'>
                <div className='max-w-[644px] text-center'>
                    <div className='bg-primary-dark w-36 h-36 rounded-full flex items-center justify-center mx-auto'>
                        <IconMailContainedWhite />
                    </div>

                    <h1 className='font-semibold text-5xl mt-10'>Confirm Your Email</h1>

                    <p className='text-[26px] mt-7'>
                        We’ve sent a confirmation link to your email address. Please check your inbox and click the <br />
                        link to continue.
                    </p>

                    <p className='text-[22px] mt-20'>Didn’t get the email?<span className='text-[22px] text-primary-dark ml-2 cursor-pointer hover:underline'>Resend Link</span></p>
                </div>
            </div>
        </div>
    );
};

export default AccountEmailConfirm;