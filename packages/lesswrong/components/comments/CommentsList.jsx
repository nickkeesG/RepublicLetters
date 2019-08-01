import { Components, registerComponent, withEdit } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Comments } from "../../lib/collections/comments";
import { shallowEqual, shallowEqualExcept } from '../../lib/modules/utils/componentUtils';
import { Posts } from '../../lib/collections/posts';
import withGlobalKeydown from '../common/withGlobalKeydown';

class CommentsList extends Component {
  state = { expandAllThreads: false }

  handleKeyDown = (event) => {
    const F_Key = 70
    if ((event.metaKey || event.ctrlKey) && event.keyCode == F_Key) {
      this.setState({expandAllThreads: true});
    }
  }

  componentDidMount() {
    const { addKeydownListener } = this.props
    addKeydownListener(this.handleKeyDown);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!shallowEqual(this.state, nextState))
      return true;

    if(!shallowEqualExcept(this.props, nextProps,
      ["post","comments","updateComment"]))
    {
      return true;
    }

    if(this.props.post==null || nextProps.post==null || this.props.post._id != nextProps.post._id ||
      (this.props.post.contents && this.props.post.contents.version !== nextProps.post.contents && nextProps.post.contents.version))
      return true;

    if(this.commentTreesDiffer(this.props.comments, nextProps.comments))
      return true;
    return false;
  }

  commentTreesDiffer(oldComments, newComments) {
    if(oldComments===null && newComments!==null) return true;
    if(oldComments!==null && newComments===null) return true;
    if(newComments===null) return false;

    if(oldComments.length != newComments.length)
      return true;
    for(let i=0; i<oldComments.length; i++) {
      if(oldComments[i].item != newComments[i].item)
        return true;
      if(this.commentTreesDiffer(oldComments[i].children, newComments[i].children))
        return true;
    }
    return false;
  }

  render() {
    const { comments, currentUser, highlightDate, updateComment, post, postPage, totalComments, condensed, startThreadTruncated, parentAnswerId, defaultNestingLevel = 1, hideReadComments, lastCommentId, parentCommentId=null } = this.props;

    const { expandAllThreads } = this.state
    const { lastVisitedAt } = post
    const lastCommentedAt = Posts.getLastCommentedAt(post)
    const unreadComments = lastVisitedAt < lastCommentedAt;

    if (comments) {
      return (
        <Components.ErrorBoundary>
          <div>
            {comments.map(comment =>
              <Components.CommentsNode
                startThreadTruncated={startThreadTruncated || totalComments >= 70}
                expandAllThreads={expandAllThreads}
                unreadComments={unreadComments}
                currentUser={currentUser}
                comment={comment.item}
                parentCommentId={parentCommentId}
                nestingLevel={defaultNestingLevel}
                lastCommentId={lastCommentId}
                //eslint-disable-next-line react/no-children-prop
                children={comment.children}
                key={comment.item._id}
                highlightDate={highlightDate}
                updateComment={updateComment}
                post={post}
                postPage={postPage}
                parentAnswerId={parentAnswerId}
                condensed={condensed}
                hideReadComments={hideReadComments}
                shortform={post.shortform}
                child={defaultNestingLevel > 1}
              />)
            }
          </div>
        </Components.ErrorBoundary>
      )
    } else {
      return (
        <div>
          <p>
            <FormattedMessage id="comments.no_comments"/>
          </p>
        </div>
      )
    }
  }
}


CommentsList.displayName = "CommentsList";

const withEditOptions = {
  collection: Comments,
  fragmentName: 'CommentsList',
};


registerComponent('CommentsList', CommentsList, [withEdit, withEditOptions], withGlobalKeydown);
