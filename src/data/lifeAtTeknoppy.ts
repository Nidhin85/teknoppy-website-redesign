/**
 * Life @ Teknoppy — Dynamic Content & Data Architecture
 * 
 * Adding a new photo, video, client moment, or milestone only requires
 * appending a new item to these arrays. The page layout, filters, lightbox,
 * and animations handle the presentation automatically.
 */

export interface LifeEntry {
  id: string;
  date: string;
  formattedDate: string;
  title: string;
  category: 'team' | 'projects' | 'clients' | 'office' | 'events' | 'culture' | 'behind-the-scenes' | 'achievements';
  type: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  description: string;
  person?: string;
  client?: string;
  project?: string;
  featured?: boolean;
  isNew?: boolean;
  tags?: string[];
  youtubeId?: string;
}

export interface DayTimelineItem {
  id: string;
  time: string;
  period: 'AM' | 'PM';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  location: string;
}

export interface ProjectWorkflowStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ActiveBuild {
  id: string;
  client: string;
  projectType: string;
  stage: string;
  progressPercent: number;
  lead: string;
  badge: string;
  accent: string;
}

export interface TeamMemberLife {
  id: string;
  name: string;
  role: string;
  department: string;
  photo: string;
  photoFallback?: string;
  bio: string;
  specialty: string;
}

export interface ClientMoment {
  id: string;
  clientName: string;
  organization: string;
  role: string;
  image: string;
  location: string;
  highlight: string;
  projectRef: string;
  youtubeId?: string;
}

export interface MilestoneItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: string;
}

/* =========================================================================
   1. THE TEKNOPPY WALL & JOURNAL ENTRIES
   ========================================================================= */

// Content lives in lifeAtTeknoppy.json, which the CMS sync overwrites — edit it in the CMS.
import data from './lifeAtTeknoppy.json';

export const lifeEntries: LifeEntry[] = data.lifeEntries as LifeEntry[];
export const dailyTimeline: DayTimelineItem[] = data.dailyTimeline as DayTimelineItem[];
export const teamMembers: TeamMemberLife[] = data.teamMembers as TeamMemberLife[];
export const projectWorkflow: ProjectWorkflowStage[] = data.projectWorkflow as ProjectWorkflowStage[];
export const activeBuilds: ActiveBuild[] = data.activeBuilds as ActiveBuild[];
export const clientMoments: ClientMoment[] = data.clientMoments as ClientMoment[];
export const milestones: MilestoneItem[] = data.milestones as MilestoneItem[];
export const cultureMoments = data.cultureMoments;
