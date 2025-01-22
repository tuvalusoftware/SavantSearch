import IcNote from '@/components/Icons/Note';
import IcRightLong from '@/components/Icons/UpLong';
import { cn } from '@/lib/utils';
import UserAvatar from '../Avatars/UserAvatar';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthSideBar({ className, ...props }: SidebarProps) {
    return (
        <div
            className={cn(
                'relative h-full w-full bg-primary rounded-[100px] flex flex-col items-center justify-between py-6',
                className
            )}
            {...props}
        >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-8">
                <IcNote />
            </div>
            <div className="flex flex-col items-center gap-8">
                <IcRightLong />
                <div className="rotate-[-90deg] origin-center text-black">
                    BETTI
                </div>
            </div>

            <UserAvatar />
        </div>
    );
}
