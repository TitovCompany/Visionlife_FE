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
export interface Utex {
  title: string;
  sections: UtexSections[];
}

interface UtexSections {
  id: string;
  category: string;
  title: string;
  items: UtexItems[];
}

interface UtexItems {
  id: string;
  category: string;
  content: string;
}