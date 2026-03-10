export type ElementType = 'badge' | 'text' | 'button' | 'small';

export interface LayoutElement {
  id: string;
  name: string;
  type: ElementType;
  content: string;
  fontSize: number;
  fontWeight: number;
  color: string;
  bgColor?: string;
  marginTop: number;
  marginBottom: number;
  align: 'left' | 'center' | 'right' | 'justify';
  letterSpacing: number;
  fontFamily?: string;
}
