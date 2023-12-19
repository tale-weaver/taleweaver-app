export type PagePreview = {
  image: string;
  title: string;
  description: string;
  status: "ongoing" | "loser" | "winner";
  creator: string;
};

export type PageType = {
  created_at: string;
  creator_id: string;
  description: string;
  page_id: string;
  pagename: string;
  pageurl: string;
  status: string;
  voted_by_user_ids: string[];
  creator?: string;
};
