import postData from "../data/posts.json";
import AddPostBtn from "./AddPostBtn";
import Post from "./Post";

export default function PostList() {
  const postList = postData.list;
  return (
    <div>
      <AddPostBtn />
      {postList.map((postObj) => {
        return <Post key={postObj.id} PostObj={postObj} />;
      })}
    </div>
  );
}
