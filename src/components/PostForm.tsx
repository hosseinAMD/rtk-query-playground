import { useState } from "react";

const PostForm: React.FC<unknown> = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  return (
    <form>
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PostForm;
