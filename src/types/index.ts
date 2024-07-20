export type Status = "IDLE" | "LOADING" | "RESULT_OK" | "ERROR";
type ActionType = "LOADING" | "RESULT_OK" | "ERROR";
type Category = "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";

export type State = {
  results: any[];
  status: Status;
  error: string | null;
};

export type Action = {
  type: ActionType;
  payload?: any;
};

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
};
