export interface FriendLink {
  name: string;
  url: string;
  description: string;
  avatar?: string;
  // avatar 支持三种格式：
  // 1. 外部链接：以 http:// 或 https:// 开头
  // 2. public 目录：以 / 开头，如 /images/avatar.jpg
  // 3. 本地路径：相对于 src 目录，如 assets/images/avatar.jpg
}

export const friendLinks: FriendLink[] = [
  {
    name: "MBRjun-Blog",
    url: "https://www.libmbr.com/",
    description: "我们生活在大地上，但我们的梦想超越天空",
    avatar: "https://lfs.libmbr.com/assets/pics/LG4v5Savatar180px.webp",
  },
  // 在这里添加更多友链
];