import "./App.css";
import AddPostForm from "./feauters/posts/AddPostForm";
import PostList from "./feauters/posts/PostList";

function App() {
  return (
    <div>
      <PostList />
      <AddPostForm />
    </div>
  );
}

export default App;
