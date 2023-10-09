import "./App.css";
import AddPostForm from "./feauters/posts/AddPostForm";
import PostList from "./feauters/posts/PostList";
import SinglePostPage from "./feauters/posts/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
