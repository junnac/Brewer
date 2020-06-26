import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, fetchPosts } from '../../actions/post_actions';
import PostCommentForm from './post_comment_form';

const msp = state => ({
  currentUserId: state.session.id,
  formType: 'Write post',
});

const mdp = dispatch => ({
  fetchAction: () => dispatch(fetchPosts()),
  formAction: post => dispatch(createPost(post)),
});

export default withRouter(connect(msp, mdp)(PostCommentForm));
