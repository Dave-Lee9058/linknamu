import ProfileHeader from "@/component/ProfileHeader";
import LinkCard from "@/component/LinkCard";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-12 sm:py-16">
      {/* 상단: 원형 프로필 사진 + 이름 + 한 줄 소개 */}
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      {/* 하단: 링크 카드 세로 목록 */}
      <nav aria-label="링크 목록" className="mt-10">
        <ul className="flex flex-col gap-6">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
