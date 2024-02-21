export type PlaylistType = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
};

type Thumbnails = {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
};

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
