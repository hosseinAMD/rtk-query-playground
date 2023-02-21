import { AxiosError } from "axios";
import { useGetPostsQuery } from "../services/posts";
import ErrorBanner from "./ErrorBanner";

const PostList: React.FC<unknown> = () => {
  const { data: posts, isLoading, error, refetch } = useGetPostsQuery(null);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <ErrorBanner error={error as AxiosError} refetch={refetch} />;
  }

  return (
    <div>
      <h2>Posts</h2>
      <div>
        {posts?.map((post) => (
          <div className="postItem">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
