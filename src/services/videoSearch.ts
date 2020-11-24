import axios from "axios";

import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_URL } from "../constants";

const DEFAULT_YOUTUBE_PARAMS = {
  maxResults: 9,
  type: "video",
  part: "snippet",
};

interface Thumbnail {
  height: number;
  width: number;
  url: string;
}

interface YoutubeItem {
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: Date;
    publishedAt: Date;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    title: string;
  };
}

interface YoutubeSearchResult {
  items: YoutubeItem[];
}

export interface VideoResult {
  title: string;
  channelTitle: string;
  description: string;
  thumbnail: Thumbnail;
  publishedAt: Date;
}

const mapToVideoResults = (ytResult: YoutubeSearchResult): VideoResult[] => {
  return ytResult.items.map(({ snippet }: YoutubeItem) => {
    const { title, channelTitle, description, publishedAt } = snippet;
    const { default: thumbnail } = snippet.thumbnails;
    return { title, channelTitle, description, thumbnail, publishedAt };
  });
};

/**
 * Sends Youtube API search request.
 * @param {string} q Search string
 */
export const searchYoutube = async (q: string) => {
  if (!YOUTUBE_API_KEY) {
    throw new Error("Missing Youtube API key.");
  }

  try {
    const response = await axios.get<YoutubeSearchResult>(YOUTUBE_SEARCH_URL, {
      params: { ...DEFAULT_YOUTUBE_PARAMS, q, key: YOUTUBE_API_KEY },
    });
    return mapToVideoResults(response.data);
  } catch (e) {
    throw new Error(
      `Cannot connect Youtube, check network requests and console for more details.`
    );
  }
};
