'use client';
import loginBanner from '@/assets/images/login_banner.png';
import loginBannerBall from '@/assets/images/login_banner_ball.png';
import loginBannerBg from '@/assets/images/login_banner_bg.png';
import { AuthSideBar } from '@/components/Auth/AuthSideBar';
import SocialLogin from '@/components/Auth/SocialLogin';
import { CustomIconButton } from '@/components/Buttons/CustomIconButton';
import { CustomFormInput } from '@/components/Inputs/CustomFormInput';
import { useLoginViewModel } from '@/hooks/view-models/auth/useLoginViewModel';
import { colorMapper } from '@/utils/colors';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    AtSign,
    CircleCheck,
    LockKeyhole,
    Menu,
    Webcam
} from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
    const { register, formErrors, handleSubmit, onLogin, loading } =
        useLoginViewModel();
    return (
        <div className={'grid grid-cols-12 gap-4 p-10 h-full justify-between'}>
            <div className="col-span-1">
                <AuthSideBar />
            </div>
            <div className="col-span-4 mt-36">
                <h1 className="text-3xl font-bold text-form dark:text-form-dark my-auto font-orbitron">
                    Welcome Back
                </h1>
                <p className="mt-3 text-md">
                    Let’s take a look at what artificial intelligence is and how
                    you can use it in order to make profitable betting
                    decisions.
                </p>
                <div className="text-sm font-light text-[#6B7280] pb-4 mx-auto"></div>
                <form
                    className="flex flex-col"
                    onSubmit={handleSubmit(onLogin)}
                >
                    <CustomFormInput
                        prefixIcon={<AtSign width={20} />}
                        trailingIcon={
                            <CircleCheck
                                color={colorMapper(formErrors['email'])}
                                width={14}
                            />
                        }
                        register={register('email')}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        autoComplete="off"
                        error={formErrors['email']}
                    />

                    <CustomFormInput
                        prefixIcon={<LockKeyhole width={20} />}
                        register={register('password')}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="password"
                        error={formErrors['password']}
                    />
                    <CustomFormInput
                        prefixIcon={<Webcam width={20} />}
                        register={register('referralCode')}
                        type="text"
                        name="referral-code"
                        id="referral-code"
                        placeholder="Referral Code"
                    />

                    <motion.button whileTap={{ scale: 0.9 }}>
                        <CustomIconButton
                            type="submit"
                            loading={loading}
                            className="hover:bg-hover w-full"
                            trailingIcon={
                                <div className=" p-2 rounded-xl bg-[#FFFFFF80] transition-all duration-300 hover:translate-x-2">
                                    <ArrowRight size={20} />
                                </div>
                            }
                        >
                            <p className="text-sm font-orbitron">Continue</p>
                        </CustomIconButton>
                    </motion.button>
                    <SocialLogin />
                </form>

                <div className="font-orbitron xl:text-[80px] text-6xl font-bold absolute z-10 bottom-9">
                    MAKE YOUR <br />
                    <span className="text-primary">FUTURE</span> NOW
                </div>
            </div>
            <div className="col-span-7 w-full">
                <div className="relative w-full ">
                    <div className="cursor-pointer absolute right-0 bg-white hover:bg-slate-200 rounded-full p-4">
                        <Menu color="black" />
                    </div>
                    <div className="flex justify-end ">
                        <Image
                            src={loginBannerBg}
                            className="w-5/6 h-[calc(100vh-2rem)] md:h-[calc(100vh-5rem)]"
                            alt="Background"
                            loading="eager"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-[65%] -translate-x-2/3 max-w-[450px] xl:max-w-[600px] h-[90vh] md:left-[60%] md:-translate-x-1/2 lg:left-[60%] lg:-translate-x-1/2 xl:left-[70%] xl:-translate-x-2/3"
                    >
                        <Image
                            src={loginBanner}
                            alt="Banner"
                            loading="eager"
                            className="absolute top-0 left-[65%] -translate-x-2/3 max-w-[450px] xl:max-w-[600px] h-[90vh] md:left-[60%] md:-translate-x-1/2 lg:left-[60%] lg:-translate-x-1/2 xl:left-[70%] xl:-translate-x-2/3"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[75%] left-3/4 transform -translate-x-3/4 -translate-y-1/2 lg:left-3/4 lg:-translate-x-3/4 max-w-[200px] max-h-[200px] hover:scale-105 transition-all duration-300"
                    >
                        <Image
                            src={loginBannerBall}
                            alt="Ball"
                            className="top-[75%] left-3/4 transform -translate-x-3/4 -translate-y-1/2 lg:left-3/4 lg:-translate-x-3/4 max-w-[200px] max-h-[200px] transition-all duration-300 hover:rotate-180"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
