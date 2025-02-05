/* 공통타입 */
interface BusinessBase {
  title: string;
  description: string;
}

/* 기업 소개 */
export interface Overview {
  features: string;
  benefits: string;
}

/* UTEX (제품) */
interface UtexDescription {
  id: string;
  type: 'description';
  content: string;
}

interface UtexFeature {
  id: string;
  type: 'feature';
  title?: string;
  content: string;
}

interface UtexInk {
  id: string;
  type: 'ink';
  title: string;
  content: string;
}

export interface UtexComparison {
  id: string;
  type: 'comparison';
  title: string;
  steps: UtexStep[];
}

interface UtexStep {
  id: string;
  content: string;
}
