import { Subscriptions } from './collection';
import { subscriptionTypes } from './schema'
import { Utils } from '../../vulcan-lib';
import Users from '../users/collection';

export const defaultSubscriptionTypeTable = {
  "Comments": subscriptionTypes.newReplies,
  "Posts": subscriptionTypes.newComments,
  "Users": subscriptionTypes.newPosts,
  "Localgroups": subscriptionTypes.newEvents,
  // TODO: Tags?
}

/**
 * @summary Perform the un/subscription after verification: update the collection item & the user
 * @param {String} action
 * @param {Collection} collection
 * @param {String} itemId
 * @param {Object} user: current user (xxx: legacy, to replace with this.userId)
 * @returns {Boolean}
 */
export const performSubscriptionAction = async (action:"subscribe"|"unsubscribe", collection: CollectionBase<any>, itemId: string, user: DbUser) => {
  const collectionName = collection.options.collectionName
  const newSubscription: Partial<DbSubscription> = {
    state: action === "subscribe" ? 'subscribed' : 'suppressed',
    documentId: itemId,
    collectionName,
    type: (defaultSubscriptionTypeTable as any)[collectionName]
  }
  await Utils.createMutator({
    collection: Subscriptions,
    document: newSubscription,
    validate: true,
    currentUser: user,
    // HACK: Make a shitty pretend context
    context: {
      currentUser: user,
      Users: Users,
    } as any,
  })
};
