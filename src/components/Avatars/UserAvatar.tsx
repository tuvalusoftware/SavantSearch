import defaultAvatar from '@/assets/images/default_avatar.png';
import Image, { StaticImageData } from 'next/image';

interface UserAvatarProps {
    src?: string | StaticImageData;
    alt?: string;
    className?: string;
}

export default function UserAvatar({
    src = defaultAvatar,
    alt = 'Avatar',
    className
}: UserAvatarProps) {
    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className="rounded-full"
            />
        </div>
    );
}
