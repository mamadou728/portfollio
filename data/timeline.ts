export interface TimelineItem {
  type: "project" | "certification";
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    type: "project",
    year: "Present",
    title: "Bayard",
    description: "Current role",
  },
  {
    type: "certification",
    year: "2024",
    title: "Certification",
    description: "AWS Certified",
  },
  {
    type: "project",
    year: "2023",
    title: "Etc.",
    description: "Previous milestone",
  },
];
