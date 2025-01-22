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
    const { register, formErrors, handleSubmit, onLogin } = useLoginViewModel();
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
                        register={register('password')}
                        type="text"
                        name="referral-code"
                        id="referral-code"
                        placeholder="Referral Code"
                    />

                    <CustomIconButton
                        type="submit"
                        className="hover:bg-hover"
                        trailingIcon={
                            <div className="p-2 rounded-xl bg-[#FFFFFF80] transition-all duration-300 hover:translate-x-2">
                                <ArrowRight size={20} />
                            </div>
                        }
                    >
                        <p className="text-sm font-orbitron">Continue</p>
                    </CustomIconButton>
                    <SocialLogin />
                </form>

                <div className="font-orbitron xl:text-[80px] text-6xl font-bold absolute z-10 bottom-9">
                    MAKE YOUR <br />
                    <span className="text-primary">FUTURE</span> NOW
                </div>
            </div>
            <div className="col-span-7 w-full">
                <div className="relative w-full">
                    <div className="cursor-pointer absolute right-0 bg-white rounded-full p-4">
                        <Menu color="black" />
                    </div>
                    <div className="flex justify-end">
                        <Image
                            src={loginBannerBg}
                            className="w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-5rem)]"
                            alt="Background"
                        />
                    </div>
                    <Image
                        src={loginBanner}
                        className="absolute top-0 left-[60%] -translate-x-2/3 max-w-[650px] xl:max-w-[750px] h-[80vh] md:left-[55%] md:-translate-x-1/2 lg:left-[55%] lg:-translate-x-1/2 xl:left-[60%] xl:-translate-x-2/3"
                        alt="Banner"
                    />
                    <Image
                        src={loginBannerBall}
                        alt="Ball"
                        className="absolute top-2/3 left-3/4 transform -translate-x-2/4 -translate-y-1/2 lg:left-2/4 lg:-translate-x-2/4 max-w-[200px] max-h-[200px]"
                    />
                </div>
            </div>
        </div>
    );
}
