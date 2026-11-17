export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로 (예: "/profile.jpg"). 비워 두면 이름 첫 글자를 표시합니다. */
  image?: string;
  links: LinkItem[];
};

// TODO: 아래는 모두 보여주기용 더미 값입니다. 나중에 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile-dummy.svg", // 실제 사진은 public/ 에 넣고 경로만 바꾸면 됩니다.
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
