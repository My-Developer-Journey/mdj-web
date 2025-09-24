import { Category } from "./category";
import { Tag } from "./tag";

export interface PostRequest {
    title: string;
    content: string;
    contentJson: Record<string, unknown>;
    authorId: string;
    categoryIds?: string[];
    tagIds?: string[];
    postStatus?: "DRAFT" | "PUBLISHED" | "SCHEDULED";
    scheduledPublishDate: string;
}

export interface Post {
  id: string;
  slug?: string;
  title?: string;
  thumbnailUrl?: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  content: string;
  contentJson: Record<string, unknown>;
  postStatus: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoTitle?: string;
  scheduledPublishDate?: string;
  submittedAt?: string;
  likeCount?: number;
  commentCount?: number;
  viewCount?: number;
}

export interface Author {
    id: string;
    email: string;
    displayName: string;
    avatar: string;
}