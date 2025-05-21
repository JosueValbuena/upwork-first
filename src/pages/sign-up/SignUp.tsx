import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BGIMG from '@/assets/img/bg-one.avif';
import { FormFieldInputPassword, FormFieldInputText } from '@/components/molecules';
import { Button } from '@/components/ui/button';
import { IconGoogleOutlinedNormal } from '@/utils/icons';
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";

const formSchema = z.object({
    email: z.string()
        .min(1, {
            message: "Email is required.",
        })
        .email({
            message: "Invalid email address.",
        }),
    password: z.string()
        .min(6, {
            message: "Password must be at least 6 characters.",
        }),
    passwordConfirm: z.string()
        .min(6, {
            message: "Password must be at least 6 characters.",
        }),
});

type Inputs = z.infer<typeof formSchema>;

const SignUp = () => {

    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };

    return (
        <div
            className='bg-cover bg-center bg-no-repeat h-dvh'
            style={{ backgroundImage: `url(${BGIMG})` }}
        >

            <p className="text-center pr-10 pt-3 text-lg xl:text-end">Have an account? <Link to='/login'><span className="text-primary-dark text-lg font-bold">Log in!</span></Link></p>

            <div className='p-5 flex flex-col gap-3 max-w-[1366px]
            md:flex-row md:justify-center md:items-center md:h-[90%] md:gap-30'>
                <div>
                    <h1 className='text-5xl font-bold text-foreground
                    md:max-w-[450px]
                    '>Start Managing
                        you inventory
                        smarter</h1>
                </div>

                <div className='flex flex-col justify-center md:max-w-[450px]'>
                    <h2 className='text-center text-4xl font-semibold'>Get Started With MAKER</h2>
                    <p className='text-center text-2xl font-normal text-text-medium-customized my-3'>Getting started is easy</p>
                    <Button className='bg-white border-violet-600 border-1 text-black font-medium text-md py-8 rounded-2xl hover:text-white'>
                        <IconGoogleOutlinedNormal className='overflow-visible mr-3 mb-2' />Google
                    </Button>

                    <div className="relative flex items-center mt-3">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-foreground text-lg">Or continue with</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>

                            <FormFieldInputText
                                id={'email'}
                                form={form}
                                placeHolder={'Enter Email'}
                                customizedInput={'bg-white py-7 mt-3'}
                            />

                            <FormFieldInputPassword
                                id={'password'}
                                form={form}
                                placeHolder={'Password'}
                                customizedInput={'bg-white py-7 mt-5'}
                            />

                            <FormFieldInputPassword
                                id={'passwordConfirm'}
                                form={form}
                                placeHolder={'Confirm Password'}
                                customizedInput={'bg-white py-7 mt-5'}
                            />

                            <Button
                                className='w-full my-3 py-8 rounded-2xl bg-primary-dark text-lg font-bold mt-7'
                                type="submit"
                            >
                                Create account
                            </Button>
                        </form>
                    </Form>

                    <p className='text-lg'>
                        By continuing you indicate that you read and agreed
                        to the <span className='text-primary-dark text-lg'>Terms of Use</span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default SignUp