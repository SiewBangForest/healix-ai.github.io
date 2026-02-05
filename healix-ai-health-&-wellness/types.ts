
export enum WellnessCategory {
  SKINCARE = 'Skincare',
  STRESS = 'Stress Management',
  DIGESTION = 'Digestion',
  FITNESS = 'Fitness & Nutrition',
  SLEEP = 'Sleep',
  MENTAL = 'Mental Wellness'
}

export interface WellnessData {
  date: string;
  mood: number;
  sleepHours: number;
  energy: number;
  waterIntake: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ScenarioStep {
  text: string;
  options: {
    label: string;
    impact: string;
    nextScenario?: string;
  }[];
}
