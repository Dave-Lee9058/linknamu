import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative size-48 overflow-hidden rounded-full bg-emerald-600 ring-4 ring-white shadow-md sm:size-56 dark:ring-emerald-950">
        {image ? (
          <Image src={image} alt={`${name} 프로필 사진`} fill sizes="224px" className="object-cover" priority />
        ) : (
          <span className="flex size-full items-center justify-center text-7xl font-bold text-white" aria-hidden>
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-base opacity-70">{bio}</p>
    </header>
  );
}
