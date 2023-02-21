import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App: React.FC<unknown> = () => {
  const [formMode, setFormMode] = useState<boolean>(true);

  if (formMode) {
    return (
      <div className="postForm">
        <button onClick={() => setFormMode(false)}>Show list</button>
        <PostForm />
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setFormMode(true)}>Create Post</button>
      <PostList />
    </div>
  );
};

export default App;
