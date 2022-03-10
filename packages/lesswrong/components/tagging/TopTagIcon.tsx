import React from 'react';
import { registerComponent } from '../../lib/vulcan-lib';
import PeopleIcon from '@material-ui/icons/People';
import { DnaIcon } from '../icons/dnaIcon';
import { MushroomCloudIcon } from '../icons/mushroomCloudIcon';
import { GlobeIcon } from '../icons/globeIcon';
import { ScrollIcon } from '../icons/scrollIcon';
import { BirdIcon } from '../icons/birdIcon';
import { ChickenIcon } from '../icons/chickenIcon';
import { ChoiceIcon } from '../icons/choiceIcon';
import { ChipIcon } from '../icons/chipIcon';
import { forumSelect } from '../../lib/forumTypeUtils';

// Mapping from tag slug to icon
// Don't want to fight the type system about the type of the MUI icon
const topTagIconMap = forumSelect<Record<string, any>>({
  EAForum: {
    community: PeopleIcon,
    biosecurity: DnaIcon,
    'x-risk': MushroomCloudIcon,
    'cause-prioritization': GlobeIcon,
    'moral-philosophy': ScrollIcon,
    'wild-animal-welfare': BirdIcon,
    'farmed-animal-welfare': ChickenIcon,
    'groups': PeopleIcon,
    'career-choice': ChoiceIcon,
    'ai-alignment': ChipIcon,
  },
  default: {}
})

const TopTagIcon = ({tag}: {tag: TagBasicInfo}) => {
  const Icon = topTagIconMap[tag.slug]
  if (!Icon) return null
  return <Icon />
}

const TopTagIconComponent = registerComponent("TopTagIcon", TopTagIcon);

declare global {
  interface ComponentTypes {
    TopTagIcon: typeof TopTagIconComponent
  }
}
