import { apiService } from "./api";

// Interface of JSONPlaceholder posts
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface CreatePostDto {
  title: string;
  body: string;
}

export const postService = apiService.injectEndpoints({
  endpoints: (build) => ({
    // query<ResultType, QueryArg>
    getPosts: build.query<Post[], null>({
      query: () => ({ method: "GET", url: "posts" }),
    }),
    createPost: build.mutation<Post, CreatePostDto>({
      query: (data) => ({
        method: "POST",
        url: "posts",
        data: { userId: 1, ...data },
      }),
    }),
  }),
});

// Auto-generated hooks
export const { useGetPostsQuery, useCreatePostMutation } = postService;
