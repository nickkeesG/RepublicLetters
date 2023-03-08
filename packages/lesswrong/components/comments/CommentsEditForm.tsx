import { Components, registerComponent, getFragment } from '../../lib/vulcan-lib';
import React from 'react';
import { Comments } from "../../lib/collections/comments";
import classNames from 'classnames';

const CommentsEditForm = ({ comment, successCallback, cancelCallback, className }: {
  comment: any,
  successCallback?: any,
  cancelCallback?: any,
  className?: string
}) => {
  return (
    <div className={classNames("comments-edit-form", className)}>
      <Components.WrappedSmartForm
        layout="elementOnly"
        collection={Comments}
        documentId={comment._id}
        successCallback={successCallback}
        cancelCallback={cancelCallback}
        showRemove={false}
        queryFragment={getFragment('CommentEdit')}
        mutationFragment={getFragment('CommentsList')}
        submitLabel="Save"
      />
    </div>
  )
}

const CommentsEditFormComponent = registerComponent('CommentsEditForm', CommentsEditForm);

declare global {
  interface ComponentTypes {
    CommentsEditForm: typeof CommentsEditFormComponent,
  }
}

