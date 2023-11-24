import postData from "../data/posts.json";
import Post from "./Post";

export default function PostList() {
  const postList = postData.list;
  return (
    <div>
      {postList.map((postObj) => {
        return <Post key={postObj.id} PostObj={postObj} />;
      })}
    </div>
  );
}
