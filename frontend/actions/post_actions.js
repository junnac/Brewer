import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
})
const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})
const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
})

export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId)
    .then(res => dispatch(removePost(postId)))
);