type VideoThumbnailSizes = {
  small: string;
  medium?: string;
  large: string;
};

type VideoThumbnail = {
  trending: VideoThumbnailSizes;
  regular: VideoThumbnailSizes;
};

export type VideoType = {
  title: string;
  thumbnail: VideoThumbnail;
  year: number;
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  linkToVideo: string;
};
