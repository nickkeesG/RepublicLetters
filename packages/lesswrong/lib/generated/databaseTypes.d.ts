//
// GENERATED FILE
// Do not edit this file directly. Instead, start a server and run "npm run generate",
// which will cause this file to be regenerated. This file should nevertheless be
// checked in to version control.
//
// Contains Typescript signatures for database objects, generated by
// server/codegen/generateDbTypes.ts.
//
interface AdvisorRequestsCollection extends CollectionBase<DbAdvisorRequest, "AdvisorRequests"> {
}

interface DbAdvisorRequest extends DbObject {
  __collectionName?: "AdvisorRequests"
  userId: string
  interestedInMetaculus: boolean
  jobAds: any /*{"definitions":[{"blackbox":true}]}*/
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface BansCollection extends CollectionBase<DbBan, "Bans"> {
}

interface DbBan extends DbObject {
  __collectionName?: "Bans"
  expirationDate: Date
  userId: string
  ip: string
  reason: string
  comment: string
  properties: any /*{"definitions":[{"blackbox":true}]}*/
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface BooksCollection extends CollectionBase<DbBook, "Books"> {
}

interface DbBook extends DbObject {
  __collectionName?: "Books"
  postedAt: Date
  title: string
  subtitle: string
  tocTitle: string
  collectionId: string
  number: number
  postIds: Array<string>
  sequenceIds: Array<string>
  displaySequencesAsGrid: boolean
  hideProgressBar: boolean
  showChapters: boolean
  contents: EditableFieldContents
  contents_latest: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface ChaptersCollection extends CollectionBase<DbChapter, "Chapters"> {
}

interface DbChapter extends DbObject {
  __collectionName?: "Chapters"
  title: string
  subtitle: string
  number: number
  sequenceId: string
  postIds: Array<string>
  contents: EditableFieldContents
  contents_latest: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface ClientIdsCollection extends CollectionBase<DbClientId, "ClientIds"> {
}

interface DbClientId extends DbObject {
  __collectionName?: "ClientIds"
  clientId: string
  firstSeenReferrer: string | null
  firstSeenLandingPage: string
  userIds: Array<string>
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface CollectionsCollection extends CollectionBase<DbCollection, "Collections"> {
}

interface DbCollection extends DbObject {
  __collectionName?: "Collections"
  userId: string
  title: string
  slug: string
  gridImageId: string
  firstPageLink: string
  hideStartReadingButton: boolean
  contents: EditableFieldContents
  contents_latest: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface CommentModeratorActionsCollection extends CollectionBase<DbCommentModeratorAction, "CommentModeratorActions"> {
}

interface DbCommentModeratorAction extends DbObject {
  __collectionName?: "CommentModeratorActions"
  commentId: string
  type: "downvotedCommentAlert"
  endedAt: Date | null
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface CommentsCollection extends CollectionBase<DbComment, "Comments"> {
}

interface DbComment extends DbObject {
  __collectionName?: "Comments"
  parentCommentId: string
  topLevelCommentId: string
  postedAt: Date
  author: string
  postId: string
  tagId: string
  tagCommentType: "SUBFORUM" | "DISCUSSION"
  subforumStickyPriority: number | null
  userId: string
  userIP: string
  userAgent: string
  referrer: string
  authorIsUnreviewed: boolean
  answer: boolean
  parentAnswerId: string
  directChildrenCount: number
  descendentCount: number
  shortform: boolean
  nominatedForReview: string
  reviewingForReview: string
  lastSubthreadActivity: Date
  postVersion: string
  promoted: boolean
  promotedByUserId: string
  promotedAt: Date
  hideKarma: boolean
  legacy: boolean
  legacyId: string
  legacyPoll: boolean
  legacyParentId: string
  retracted: boolean
  deleted: boolean
  deletedPublic: boolean
  deletedReason: string
  deletedDate: Date
  deletedByUserId: string
  spam: boolean
  repliesBlockedUntil: Date
  needsReview: boolean
  reviewedByUserId: string
  hideAuthor: boolean
  moderatorHat: boolean
  hideModeratorHat: boolean | null
  isPinnedOnProfile: boolean
  af: boolean
  suggestForAlignmentUserIds: Array<string>
  reviewForAlignmentUserId: string
  afDate: Date
  moveToAlignmentUserId: string
  agentFoundationsId: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  contents: EditableFieldContents
  contents_latest: string
  voteCount: number
  baseScore: number
  extendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  score: number
  inactive: boolean
  afBaseScore: number
  afExtendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  afVoteCount: number
}

interface ConversationsCollection extends CollectionBase<DbConversation, "Conversations"> {
}

interface DbConversation extends DbObject {
  __collectionName?: "Conversations"
  title: string
  participantIds: Array<string>
  latestActivity: Date
  af: boolean
  messageCount: number
  moderator: boolean | null
  archivedByIds: Array<string>
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface DatabaseMetadataCollection extends CollectionBase<DbDatabaseMetadata, "DatabaseMetadata"> {
}

interface DbDatabaseMetadata extends DbObject {
  __collectionName?: "DatabaseMetadata"
  name: string
  value: any /*{"definitions":[{"blackbox":true}]}*/
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface DebouncerEventsCollection extends CollectionBase<DbDebouncerEvents, "DebouncerEvents"> {
}

interface DbDebouncerEvents extends DbObject {
  __collectionName?: "DebouncerEvents"
  name: string
  af: boolean
  dispatched: boolean
  failed: boolean
  delayTime: Date
  upperBoundTime: Date
  key: string
  pendingEvents: Array<any /*{"definitions":[{"blackbox":true}]}*/>
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface EmailTokensCollection extends CollectionBase<DbEmailTokens, "EmailTokens"> {
}

interface DbEmailTokens extends DbObject {
  __collectionName?: "EmailTokens"
  token: string
  tokenType: string
  userId: string
  usedAt: Date
  params: any /*{"definitions":[{"blackbox":true}]}*/
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface FeaturedResourcesCollection extends CollectionBase<DbFeaturedResource, "FeaturedResources"> {
}

interface DbFeaturedResource extends DbObject {
  __collectionName?: "FeaturedResources"
  title: string
  body: string
  ctaText: string
  ctaUrl: string
  expiresAt: Date
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface GardenCodesCollection extends CollectionBase<DbGardenCode, "GardenCodes"> {
}

interface DbGardenCode extends DbObject {
  __collectionName?: "GardenCodes"
  code: string
  title: string
  userId: string
  slug: string
  startTime: Date
  endTime: Date
  fbLink: string
  type: string
  hidden: boolean
  deleted: boolean
  afOnly: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  contents: EditableFieldContents
  contents_latest: string
  pingbacks: any /*{"definitions":[{}]}*/
}

interface LWEventsCollection extends CollectionBase<DbLWEvent, "LWEvents"> {
}

interface DbLWEvent extends DbObject {
  __collectionName?: "LWEvents"
  userId: string
  name: string
  documentId: string
  important: boolean
  properties: any /*{"definitions":[{"blackbox":true}]}*/
  intercom: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface LegacyDataCollection extends CollectionBase<DbLegacyData, "LegacyData"> {
}

interface DbLegacyData extends DbObject {
  __collectionName?: "LegacyData"
  objectId: string
  collectionName: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface LocalgroupsCollection extends CollectionBase<DbLocalgroup, "Localgroups"> {
}

interface DbLocalgroup extends DbObject {
  __collectionName?: "Localgroups"
  name: string
  organizerIds: Array<string>
  lastActivity: Date
  types: Array<string>
  categories: Array<string>
  isOnline: boolean
  mongoLocation: any /*{"definitions":[{"blackbox":true}]}*/
  googleLocation: any /*{"definitions":[{"blackbox":true}]}*/
  location: string
  contactInfo: string
  facebookLink: string
  facebookPageLink: string
  meetupLink: string
  slackLink: string
  website: string
  bannerImageId: string
  inactive: boolean
  deleted: boolean
  contents: EditableFieldContents
  contents_latest: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface MessagesCollection extends CollectionBase<DbMessage, "Messages"> {
}

interface DbMessage extends DbObject {
  __collectionName?: "Messages"
  userId: string
  conversationId: string
  noEmail: boolean
  contents: EditableFieldContents
  contents_latest: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface MigrationsCollection extends CollectionBase<DbMigration, "Migrations"> {
}

interface DbMigration extends DbObject {
  __collectionName?: "Migrations"
  name: string
  started: Date
  finished: boolean
  succeeded: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface ModerationTemplatesCollection extends CollectionBase<DbModerationTemplate, "ModerationTemplates"> {
}

interface DbModerationTemplate extends DbObject {
  __collectionName?: "ModerationTemplates"
  name: string
  collectionName: "Messages" | "Comments"
  order: number
  deleted: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  contents: EditableFieldContents
  contents_latest: string
}

interface ModeratorActionsCollection extends CollectionBase<DbModeratorAction, "ModeratorActions"> {
}

interface DbModeratorAction extends DbObject {
  __collectionName?: "ModeratorActions"
  userId: string
  type: "rateLimitOnePerDay" | "rateLimitOnePerThreeDays" | "rateLimitOnePerWeek" | "rateLimitOnePerFortnight" | "rateLimitOnePerMonth" | "recentlyDownvotedContentAlert" | "lowAverageKarmaCommentAlert" | "lowAverageKarmaPostAlert" | "negativeUserKarmaAlert" | "movedPostToDraft" | "sentModeratorMessage" | "manualFlag"
  endedAt: Date | null
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface NotificationsCollection extends CollectionBase<DbNotification, "Notifications"> {
}

interface DbNotification extends DbObject {
  __collectionName?: "Notifications"
  userId: string
  documentId: string
  documentType: string
  extraData: any /*{"definitions":[{"blackbox":true}]}*/
  link: string
  title: string
  message: string
  type: string
  deleted: boolean
  viewed: boolean
  emailed: boolean
  waitingForBatch: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface PetrovDayLaunchsCollection extends CollectionBase<DbPetrovDayLaunch, "PetrovDayLaunchs"> {
}

interface DbPetrovDayLaunch extends DbObject {
  __collectionName?: "PetrovDayLaunchs"
  launchCode: string
  hashedLaunchCode: string
  userId: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface PodcastEpisodesCollection extends CollectionBase<DbPodcastEpisode, "PodcastEpisodes"> {
}

interface DbPodcastEpisode extends DbObject {
  __collectionName?: "PodcastEpisodes"
  podcastId: string
  title: string
  episodeLink: string
  externalEpisodeId: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface PodcastsCollection extends CollectionBase<DbPodcast, "Podcasts"> {
}

interface DbPodcast extends DbObject {
  __collectionName?: "Podcasts"
  title: string
  applePodcastLink: string | null
  spotifyPodcastLink: string | null
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface PostRelationsCollection extends CollectionBase<DbPostRelation, "PostRelations"> {
}

interface DbPostRelation extends DbObject {
  __collectionName?: "PostRelations"
  type: string
  sourcePostId: string
  targetPostId: string
  order: number
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface PostsCollection extends CollectionBase<DbPost, "Posts"> {
}

interface DbPost extends DbObject {
  __collectionName?: "Posts"
  postedAt: Date
  modifiedAt: Date
  url: string
  title: string
  slug: string
  viewCount: number
  lastCommentedAt: Date
  clickCount: number
  deletedDraft: boolean
  status: number
  isFuture: boolean
  sticky: boolean
  stickyPriority: number
  userIP: string
  userAgent: string
  referrer: string
  author: string
  userId: string
  question: boolean
  authorIsUnreviewed: boolean
  readTimeMinutesOverride: number
  submitToFrontpage: boolean
  hiddenRelatedQuestion: boolean
  originalPostRelationSourceId: string
  shortform: boolean
  canonicalSource: string
  nominationCount2018: number
  nominationCount2019: number
  reviewCount2018: number
  reviewCount2019: number
  reviewCount: number
  reviewVoteCount: number
  positiveReviewVoteCount: number
  reviewVoteScoreAF: number
  reviewVotesAF: Array<number>
  reviewVoteScoreHighKarma: number
  reviewVotesHighKarma: Array<number>
  reviewVoteScoreAllKarma: number
  reviewVotesAllKarma: Array<number>
  finalReviewVoteScoreHighKarma: number
  finalReviewVotesHighKarma: Array<number>
  finalReviewVoteScoreAllKarma: number
  finalReviewVotesAllKarma: Array<number>
  finalReviewVoteScoreAF: number
  finalReviewVotesAF: Array<number>
  lastCommentPromotedAt: Date
  tagRelevance: any /*{"definitions":[{"blackbox":true}]}*/
  noIndex: boolean
  rsvps: Array<{
    name: string,
    email: string,
    nonPublic: boolean,
    response: "yes" | "maybe" | "no",
    userId: string | null,
    createdAt: Date,
  }>
  activateRSVPs: boolean
  nextDayReminderSent: boolean
  onlyVisibleToLoggedIn: boolean
  onlyVisibleToEstablishedAccounts: boolean
  hideFromRecentDiscussions: boolean | null
  votingSystem: string
  podcastEpisodeId: string | null
  legacy: boolean
  legacyId: string
  legacySpam: boolean
  feedId: string
  feedLink: string
  curatedDate: Date
  metaDate: Date
  suggestForCuratedUserIds: Array<string>
  frontpageDate: Date
  collectionTitle: string
  coauthorStatuses: Array<{
    userId: string,
    confirmed: boolean,
    requested: boolean,
  }>
  hasCoauthorPermission: boolean
  socialPreviewImageId: string
  socialPreviewImageAutoUrl: string
  fmCrosspost: {
    isCrosspost: boolean,
    hostedHere: boolean | null,
    foreignPostId: string | null,
  } | null
  canonicalSequenceId: string
  canonicalCollectionSlug: string
  canonicalBookId: string
  canonicalNextPostSlug: string
  canonicalPrevPostSlug: string
  unlisted: boolean
  disableRecommendation: boolean
  defaultRecommendation: boolean
  draft: boolean
  meta: boolean
  hideFrontpageComments: boolean
  maxBaseScore: number
  scoreExceeded2Date: Date | null
  scoreExceeded30Date: Date | null
  scoreExceeded45Date: Date | null
  scoreExceeded75Date: Date | null
  scoreExceeded125Date: Date | null
  scoreExceeded200Date: Date | null
  bannedUserIds: Array<string>
  commentsLocked: boolean
  commentsLockedToAccountsCreatedAfter: Date
  organizerIds: Array<string>
  groupId: string
  eventType: string
  isEvent: boolean
  reviewedByUserId: string
  reviewForCuratedUserId: string
  startTime: Date | null
  localStartTime: Date
  endTime: Date | null
  localEndTime: Date
  eventRegistrationLink: string
  joinEventLink: string
  onlineEvent: boolean
  globalEvent: boolean
  mongoLocation: any /*{"definitions":[{"blackbox":true}]}*/
  googleLocation: any /*{"definitions":[{"blackbox":true}]}*/
  location: string
  contactInfo: string
  facebookLink: string
  meetupLink: string
  website: string
  eventImageId: string
  types: Array<string>
  metaSticky: boolean
  sharingSettings: any /*{"definitions":[{"blackbox":true}]}*/
  shareWithUsers: Array<string>
  linkSharingKey: string | null
  linkSharingKeyUsedBy: Array<string>
  commentSortOrder: string
  hideAuthor: boolean
  sideCommentsCache: any /*{"definitions":[{}]}*/
  sideCommentVisibility: string
  moderationStyle: string
  hideCommentKarma: boolean
  commentCount: number
  subforumTagId: string
  af: boolean
  afDate: Date
  afCommentCount: number
  afLastCommentedAt: Date
  afSticky: boolean
  suggestForAlignmentUserIds: Array<string>
  reviewForAlignmentUserId: string
  agentFoundationsId: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  contents: EditableFieldContents
  contents_latest: string
  pingbacks: any /*{"definitions":[{}]}*/
  moderationGuidelines: EditableFieldContents
  moderationGuidelines_latest: string
  customHighlight: EditableFieldContents
  customHighlight_latest: string
  voteCount: number
  baseScore: number
  extendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  score: number
  inactive: boolean
  afBaseScore: number
  afExtendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  afVoteCount: number
}

interface RSSFeedsCollection extends CollectionBase<DbRSSFeed, "RSSFeeds"> {
}

interface DbRSSFeed extends DbObject {
  __collectionName?: "RSSFeeds"
  userId: string
  ownedByUser: boolean
  displayFullContent: boolean
  nickname: string
  url: string
  status: string
  rawFeed: any /*{"definitions":[{}]}*/
  setCanonicalUrl: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface ReadStatusesCollection extends CollectionBase<DbReadStatus, "ReadStatuses"> {
}

interface DbReadStatus extends DbObject {
  __collectionName?: "ReadStatuses"
  postId: string
  tagId: string
  userId: string
  isRead: boolean
  lastUpdated: Date
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface ReportsCollection extends CollectionBase<DbReport, "Reports"> {
}

interface DbReport extends DbObject {
  __collectionName?: "Reports"
  userId: string
  reportedUserId: string
  commentId: string
  postId: string
  link: string
  claimedUserId: string
  description: string
  closedAt: Date
  markedAsSpam: boolean
  reportedAsSpam: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface ReviewVotesCollection extends CollectionBase<DbReviewVote, "ReviewVotes"> {
}

interface DbReviewVote extends DbObject {
  __collectionName?: "ReviewVotes"
  userId: string
  postId: string
  qualitativeScore: number
  quadraticScore: number
  comment: string
  year: string
  dummy: boolean
  reactions: Array<string>
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface RevisionsCollection extends CollectionBase<DbRevision, "Revisions"> {
}

interface DbRevision extends DbObject {
  __collectionName?: "Revisions"
  documentId: string
  collectionName: CollectionNameString
  fieldName: string
  editedAt: Date
  autosaveTimeoutStart: Date
  updateType: "initial" | "patch" | "minor" | "major"
  version: string
  commitMessage: string
  userId: string
  draft: boolean
  originalContents: {
    type: string,
    data: string,
  }
  html: string
  wordCount: number
  changeMetrics: any /*{"definitions":[{"blackbox":true}]}*/
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  voteCount: number
  baseScore: number
  extendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  score: number
  inactive: boolean
  afBaseScore: number
  afExtendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  afVoteCount: number
}

interface SequencesCollection extends CollectionBase<DbSequence, "Sequences"> {
}

interface DbSequence extends DbObject {
  __collectionName?: "Sequences"
  userId: string
  title: string
  gridImageId: string
  bannerImageId: string
  curatedOrder: number
  userProfileOrder: number
  draft: boolean
  isDeleted: boolean
  canonicalCollectionSlug: string
  hidden: boolean
  hideFromAuthorPage: boolean
  af: boolean
  contents: EditableFieldContents
  contents_latest: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface SpotlightsCollection extends CollectionBase<DbSpotlight, "Spotlights"> {
}

interface DbSpotlight extends DbObject {
  __collectionName?: "Spotlights"
  documentId: string
  documentType: SpotlightDocumentType
  position: number
  duration: number
  customTitle: string | null
  customSubtitle: string | null
  lastPromotedAt: Date
  draft: boolean
  spotlightImageId: string | null
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  description: EditableFieldContents
  description_latest: string
}

interface SubscriptionsCollection extends CollectionBase<DbSubscription, "Subscriptions"> {
}

interface DbSubscription extends DbObject {
  __collectionName?: "Subscriptions"
  userId: string
  state: "subscribed" | "suppressed"
  documentId: string
  collectionName: CollectionNameString
  deleted: boolean
  type: "newComments" | "newShortform" | "newPosts" | "newRelatedQuestions" | "newEvents" | "newReplies" | "newTagPosts"
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface TagFlagsCollection extends CollectionBase<DbTagFlag, "TagFlags"> {
}

interface DbTagFlag extends DbObject {
  __collectionName?: "TagFlags"
  name: string
  deleted: boolean
  slug: string
  order: number
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  contents: EditableFieldContents
  contents_latest: string
}

interface TagRelsCollection extends CollectionBase<DbTagRel, "TagRels"> {
}

interface DbTagRel extends DbObject {
  __collectionName?: "TagRels"
  tagId: string
  postId: string
  deleted: boolean
  userId: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  voteCount: number
  baseScore: number
  extendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  score: number
  inactive: boolean
  afBaseScore: number
  afExtendedScore: any /*{"definitions":[{"type":"JSON"}]}*/
  afVoteCount: number
}

interface TagsCollection extends CollectionBase<DbTag, "Tags"> {
}

interface DbTag extends DbObject {
  __collectionName?: "Tags"
  name: string
  slug: string
  oldSlugs: Array<string>
  core: boolean
  suggestedAsFilter: boolean
  defaultOrder: number
  descriptionTruncationCount: number
  postCount: number
  userId: string
  adminOnly: boolean
  canEditUserIds: Array<string>
  charsAdded: number
  charsRemoved: number
  deleted: boolean
  lastCommentedAt: Date
  lastSubforumCommentAt: Date
  needsReview: boolean
  reviewedByUserId: string
  wikiGrade: number
  wikiOnly: boolean
  bannerImageId: string
  tagFlagsIds: Array<string>
  lesswrongWikiImportRevision: string
  lesswrongWikiImportSlug: string
  lesswrongWikiImportCompleted: boolean
  htmlWithContributorAnnotations: string
  contributionStats: any /*{"definitions":[{"blackbox":true}]}*/
  introSequenceId: string
  postsDefaultSortOrder: string
  canVoteOnRels: Array<string>
  isSubforum: boolean
  subforumModeratorIds: Array<string>
  parentTagId: string
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  description: EditableFieldContents
  description_latest: string
  subforumWelcomeText: EditableFieldContents
  subforumWelcomeText_latest: string
  moderationGuidelines: EditableFieldContents
  moderationGuidelines_latest: string
}

interface UserTagRelsCollection extends CollectionBase<DbUserTagRel, "UserTagRels"> {
}

interface DbUserTagRel extends DbObject {
  __collectionName?: "UserTagRels"
  tagId: string
  userId: string
  subforumLastVisitedAt: Date | null
  subforumShowUnreadInSidebar: boolean
  subforumEmailNotifications: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface UsersCollection extends CollectionBase<DbUser, "Users"> {
}

interface DbUser extends DbObject {
  __collectionName?: "Users"
  username: string
  emails: Array<any /*{"definitions":[{}]}*/>
  isAdmin: boolean
  profile: any /*{"definitions":[{"blackbox":true}]}*/
  services: any /*{"definitions":[{"blackbox":true}]}*/
  displayName: string
  previousDisplayName: string
  email: string
  slug: string
  noindex: boolean
  groups: Array<string>
  lwWikiImport: boolean
  theme: {
    name: "default" | "dark" | "auto" | null,
    siteThemeOverride: any /*{"definitions":[{"blackbox":true}]}*/,
  } | null
  lastUsedTimezone: string
  whenConfirmationEmailSent: Date
  legacy: boolean
  commentSorting: string
  sortDraftsBy: string
  noKibitz: boolean
  showHideKarmaOption: boolean
  showPostAuthorCard: boolean
  hideIntercom: boolean
  markDownPostEditor: boolean
  hideElicitPredictions: boolean
  hideAFNonMemberInitialWarning: boolean
  noSingleLineComments: boolean
  noCollapseCommentsPosts: boolean
  noCollapseCommentsFrontpage: boolean
  petrovOptOut: boolean | null
  acceptedTos: boolean | null
  hideNavigationSidebar: boolean
  currentFrontpageFilter: string
  frontpageFilterSettings: any /*{"definitions":[{"blackbox":true}]}*/
  allPostsTimeframe: string
  allPostsFilter: string
  allPostsSorting: string
  allPostsShowLowKarma: boolean
  allPostsIncludeEvents: boolean
  allPostsOpenSettings: boolean
  draftsListSorting: string
  draftsListShowArchived: boolean
  draftsListShowShared: boolean
  lastNotificationsCheck: Date
  karma: number
  goodHeartTokens: number
  moderationStyle: string
  moderatorAssistance: boolean
  collapseModerationGuidelines: boolean
  bannedUserIds: Array<string>
  bannedPersonalUserIds: Array<string>
  bookmarkedPostsMetadata: Array<any /*{"definitions":[{}]}*/>
  hiddenPostsMetadata: Array<any /*{"definitions":[{}]}*/>
  legacyId: string
  deleted: boolean
  voteBanned: boolean
  nullifyVotes: boolean
  deleteContent: boolean
  banned: Date
  auto_subscribe_to_my_posts: boolean
  auto_subscribe_to_my_comments: boolean
  autoSubscribeAsOrganizer: boolean
  notificationCommentsOnSubscribedPost: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationShortformContent: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationRepliesToMyComments: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationRepliesToSubscribedComments: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationSubscribedUserPost: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationPostsInGroups: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationSubscribedTagPost: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationPrivateMessage: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationSharedWithMe: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationAlignmentSubmissionApproved: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationEventInRadius: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationRSVPs: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationGroupAdministration: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationCommentsOnDraft: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationPostsNominatedReview: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  notificationSubforumUnread: {
    channel: "none" | "onsite" | "email" | "both",
    batchingFrequency: "realtime" | "daily" | "weekly",
    timeOfDayGMT: number,
    dayOfWeekGMT: string,
  }
  karmaChangeNotifierSettings: {
    updateFrequency: "disabled" | "daily" | "weekly" | "realtime",
    timeOfDayGMT: number,
    dayOfWeekGMT: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday",
    showNegativeKarma: boolean,
  }
  karmaChangeLastOpened: Date
  karmaChangeBatchStart: Date
  emailSubscribedToCurated: boolean
  subscribedToDigest: boolean
  unsubscribeFromAll: boolean
  hideSubscribePoke: boolean
  hideMeetupsPoke: boolean
  frontpagePostCount: number
  sequenceCount: number
  sequenceDraftCount: number
  mongoLocation: any /*{"definitions":[{"blackbox":true}]}*/
  googleLocation: any /*{"definitions":[{"blackbox":true}]}*/
  location: string
  mapLocation: any /*{"definitions":[{"blackbox":true}]}*/
  mapLocationSet: boolean
  mapMarkerText: string
  htmlMapMarkerText: string
  nearbyEventsNotifications: boolean
  nearbyEventsNotificationsLocation: any /*{"definitions":[{"blackbox":true}]}*/
  nearbyEventsNotificationsMongoLocation: any /*{"definitions":[{"blackbox":true}]}*/
  nearbyEventsNotificationsRadius: number
  nearbyPeopleNotificationThreshold: number
  hideFrontpageMap: boolean
  hideTaggingProgressBar: boolean
  hideFrontpageBookAd: boolean
  hideFrontpageBook2019Ad: boolean
  sunshineNotes: string
  sunshineFlagged: boolean
  needsReview: boolean
  sunshineSnoozed: boolean
  snoozedUntilContentCount: number
  reviewedByUserId: string
  reviewedAt: Date
  afKarma: number
  voteCount: number
  smallUpvoteCount: number
  smallDownvoteCount: number
  bigUpvoteCount: number
  bigDownvoteCount: number
  fullName: string
  shortformFeedId: string
  viewUnreviewedComments: boolean
  partiallyReadSequences: Array<{
    sequenceId: string,
    collectionId: string,
    lastReadPostId: string,
    nextPostId: string,
    numRead: number,
    numTotal: number,
    lastReadTime: Date,
  }>
  beta: boolean
  reviewVotesQuadratic: boolean
  reviewVotesQuadratic2019: boolean
  reviewVotesQuadratic2020: boolean
  petrovPressedButtonDate: Date
  petrovLaunchCodeDate: Date
  defaultToCKEditor: boolean
  signUpReCaptchaRating: number
  oldSlugs: Array<string>
  noExpandUnreadCommentsReview: boolean
  postCount: number
  maxPostCount: number
  commentCount: number
  maxCommentCount: number
  tagRevisionCount: number
  abTestKey: string
  abTestOverrides: any /*{"definitions":[{"type":"JSON","blackbox":true}]}*/
  reenableDraftJs: boolean
  walledGardenInvite: boolean
  hideWalledGardenUI: boolean
  walledGardenPortalOnboarded: boolean
  taggingDashboardCollapsed: boolean
  usernameUnset: boolean
  paymentEmail: string
  paymentInfo: string
  profileImageId: string
  jobTitle: string
  organization: string
  careerStage: Array<string>
  website: string
  fmCrosspostUserId: string
  linkedinProfileURL: string
  facebookProfileURL: string
  twitterProfileURL: string
  githubProfileURL: string
  profileTagIds: Array<string>
  organizerOfGroupIds: Array<string>
  programParticipation: Array<string>
  postingDisabled: boolean
  allCommentingDisabled: boolean
  commentingOnOtherUsersDisabled: boolean
  conversationsDisabled: boolean
  acknowledgedNewUserGuidelines: boolean | null
  experiencedIn: Array<string>
  interestedIn: Array<string>
  afPostCount: number
  afCommentCount: number
  afSequenceCount: number
  afSequenceDraftCount: number
  reviewForAlignmentForumUserId: string
  afApplicationText: string
  afSubmittedApplication: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
  moderationGuidelines: EditableFieldContents
  moderationGuidelines_latest: string
  howOthersCanHelpMe: EditableFieldContents
  howOthersCanHelpMe_latest: string
  howICanHelpOthers: EditableFieldContents
  howICanHelpOthers_latest: string
  biography: EditableFieldContents
  biography_latest: string
  recommendationSettings: {
    frontpage: {
      method: string,
      count: number,
      scoreOffset: number,
      scoreExponent: number,
      personalBlogpostModifier: number,
      frontpageModifier: number,
      curatedModifier: number,
      onlyUnread: boolean,
    },
    frontpageEA: {
      method: string,
      count: number,
      scoreOffset: number,
      scoreExponent: number,
      personalBlogpostModifier: number,
      frontpageModifier: number,
      curatedModifier: number,
      onlyUnread: boolean,
    },
    recommendationspage: {
      method: string,
      count: number,
      scoreOffset: number,
      scoreExponent: number,
      personalBlogpostModifier: number,
      frontpageModifier: number,
      curatedModifier: number,
      onlyUnread: boolean,
    },
  }
}

interface VotesCollection extends CollectionBase<DbVote, "Votes"> {
}

interface DbVote extends DbObject {
  __collectionName?: "Votes"
  documentId: string
  collectionName: CollectionNameString
  userId: string
  authorIds: Array<string>
  voteType: string
  extendedVoteType: any /*{"definitions":[{"type":"JSON"}]}*/
  power: number
  afPower: number
  cancelled: boolean
  isUnvote: boolean
  votedAt: Date
  documentIsAf: boolean
  createdAt: Date
  legacyData: any /*{"definitions":[{"blackbox":true}]}*/
}

interface CollectionsByName {
  AdvisorRequests: AdvisorRequestsCollection
  Bans: BansCollection
  Books: BooksCollection
  Chapters: ChaptersCollection
  ClientIds: ClientIdsCollection
  Collections: CollectionsCollection
  CommentModeratorActions: CommentModeratorActionsCollection
  Comments: CommentsCollection
  Conversations: ConversationsCollection
  DatabaseMetadata: DatabaseMetadataCollection
  DebouncerEvents: DebouncerEventsCollection
  EmailTokens: EmailTokensCollection
  FeaturedResources: FeaturedResourcesCollection
  GardenCodes: GardenCodesCollection
  LWEvents: LWEventsCollection
  LegacyData: LegacyDataCollection
  Localgroups: LocalgroupsCollection
  Messages: MessagesCollection
  Migrations: MigrationsCollection
  ModerationTemplates: ModerationTemplatesCollection
  ModeratorActions: ModeratorActionsCollection
  Notifications: NotificationsCollection
  PetrovDayLaunchs: PetrovDayLaunchsCollection
  PodcastEpisodes: PodcastEpisodesCollection
  Podcasts: PodcastsCollection
  PostRelations: PostRelationsCollection
  Posts: PostsCollection
  RSSFeeds: RSSFeedsCollection
  ReadStatuses: ReadStatusesCollection
  Reports: ReportsCollection
  ReviewVotes: ReviewVotesCollection
  Revisions: RevisionsCollection
  Sequences: SequencesCollection
  Spotlights: SpotlightsCollection
  Subscriptions: SubscriptionsCollection
  TagFlags: TagFlagsCollection
  TagRels: TagRelsCollection
  Tags: TagsCollection
  UserTagRels: UserTagRelsCollection
  Users: UsersCollection
  Votes: VotesCollection
}

interface ObjectsByCollectionName {
  AdvisorRequests: DbAdvisorRequest
  Bans: DbBan
  Books: DbBook
  Chapters: DbChapter
  ClientIds: DbClientId
  Collections: DbCollection
  CommentModeratorActions: DbCommentModeratorAction
  Comments: DbComment
  Conversations: DbConversation
  DatabaseMetadata: DbDatabaseMetadata
  DebouncerEvents: DbDebouncerEvents
  EmailTokens: DbEmailTokens
  FeaturedResources: DbFeaturedResource
  GardenCodes: DbGardenCode
  LWEvents: DbLWEvent
  LegacyData: DbLegacyData
  Localgroups: DbLocalgroup
  Messages: DbMessage
  Migrations: DbMigration
  ModerationTemplates: DbModerationTemplate
  ModeratorActions: DbModeratorAction
  Notifications: DbNotification
  PetrovDayLaunchs: DbPetrovDayLaunch
  PodcastEpisodes: DbPodcastEpisode
  Podcasts: DbPodcast
  PostRelations: DbPostRelation
  Posts: DbPost
  RSSFeeds: DbRSSFeed
  ReadStatuses: DbReadStatus
  Reports: DbReport
  ReviewVotes: DbReviewVote
  Revisions: DbRevision
  Sequences: DbSequence
  Spotlights: DbSpotlight
  Subscriptions: DbSubscription
  TagFlags: DbTagFlag
  TagRels: DbTagRel
  Tags: DbTag
  UserTagRels: DbUserTagRel
  Users: DbUser
  Votes: DbVote
}

