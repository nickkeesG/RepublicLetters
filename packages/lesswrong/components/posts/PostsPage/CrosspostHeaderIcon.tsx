import React from "react";
import { Components, registerComponent, combineUrls } from "../../../lib/vulcan-lib";
import {
  forumTypeSetting,
  fmCrosspostSiteNameSetting,
  fmCrosspostBaseUrlSetting,
} from "../../../lib/instanceSettings";
import { compassIcon } from "../../icons/compassIcon";
import { lightbulbIcon } from "../../icons/lightbulbIcon";

const styles = (theme: ThemeType): JssStyles => ({
  root: {
    display: "inline-block",
  },
  icon: {
    color: theme.palette.text.dim3,
    display: "inline-block",
    width: 20,
    // marginLeft: -6,
    // marginRight: 14,
    verticalAlign: "sub",
  },
});

const CrosspostHeaderIcon = ({post, classes}: {
  post: PostsWithNavigation|PostsWithNavigationAndRevision,
  classes: ClassesType,
}) => {
  if (!post.fmCrosspost) {
    return null;
  }

  const {LWTooltip} = Components;
  const icon = forumTypeSetting.get() === "LessWrong" ? lightbulbIcon : compassIcon;
  const tip = post.fmCrosspost.hostedHere
    ? `This post was crossposted to ${fmCrosspostSiteNameSetting.get()}. Click to view.`
    : `This is a crosspost. Click to view the original on ${fmCrosspostSiteNameSetting.get()}.`;
  const href = combineUrls(fmCrosspostBaseUrlSetting.get() ?? "", `posts/${post.fmCrosspost.foreignPostId}`);

  return (
    <div className={classes.root}>
      <a href={href} target="_blank" rel="noreferrer">
        <LWTooltip title={tip}>
          <span className={classes.icon}>{icon}</span>
        </LWTooltip>
      </a>
    </div>
  );
}

const CrosspostHeaderIconComponent = registerComponent(
  "CrosspostHeaderIcon", CrosspostHeaderIcon, {styles}
);

declare global {
  interface ComponentTypes {
    CrosspostHeaderIcon: typeof CrosspostHeaderIconComponent,
  }
}
