import IcLoginFb from '@/components/Icons/FacebookLogin';
import { Button } from '../ui/button';
import IcLoginGoogle from '@/components/Icons/GoogleLogin';
import IcLoginApple from '@/components/Icons/AppleLogin';

export default function SocialLogin() {
    return (
        <div className="space-y-4 mt-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-gray-500">
                        or continue with
                    </span>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-2xl bg-[#1F2C3E] border-none hover:bg-gray-800"
                >
                    <IcLoginFb />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-2xl bg-[#1F2C3E] border-none hover:bg-gray-800"
                >
                    <IcLoginApple />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-2xl bg-[#1F2C3E] border-none hover:bg-gray-800"
                >
                    <IcLoginGoogle />
                </Button>
            </div>
        </div>
    );
}
