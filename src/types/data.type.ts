export type Team = "plan" | "art" | "development" | "music" | "operation";

export type RecruitPosition = {
  recruitPosition: string;
  recruitCount: number;
  responbilities: string;
  requirements?: string[];
  preferences?: string[];
};

export type Recruitment = {
  recruitIndex: number;
  totalRecruitPositionCount: number;
  startDate: string;
  endDate: string;
} & {
  [team in Team]: {
    name: string;
    recruitPositions: RecruitPosition[];
  };
};
