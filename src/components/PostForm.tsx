import { FormEvent, useState } from "react";
import { useCreatePostMutation } from "../services/posts";

const PostForm: React.FC<unknown> = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [createPost, { isLoading }] = useCreatePostMutation();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createPost({ title, body });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <textarea
        name="body"
        placeholder="Body..."
        rows={5}
        value={body}
        onChange={(e) => setBody(e.currentTarget.value)}
      />
      <input
        type="submit"
        value={isLoading ? "Wait..." : "Submit"}
        disabled={isLoading}
      />
    </form>
  );
};

export default PostForm;
