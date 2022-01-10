import { addPostsAction } from "../store/postsReducer";

//Получение постов
export const fetchPosts = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=21")
      .then((response) => response.json())
      .then((json) => dispatch(addPostsAction(json)));
  };
};
