import { LayoutElement } from './types';

export const FONT_FAMILIES = [
  { label: 'Sans-Serif (Modern)', value: 'system-ui, -apple-system, sans-serif' },
  { label: 'Serif (Formal/Academic)', value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
  { label: 'Monospace (Data/Code)', value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
];

export const initialLayoutData: LayoutElement[] = [
  {
    id: 'institution',
    name: 'Institution',
    type: 'small',
    content: 'DEPARTMENT OF QUANTUM PHYSICS',
    fontSize: 12,
    fontWeight: 700,
    color: '#002147',
    marginTop: 0,
    marginBottom: 4,
    align: 'left',
    letterSpacing: 1.5,
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  {
    id: 'title',
    name: 'Course Title',
    type: 'text',
    content: 'Introduction to Quantum Information Theory',
    fontSize: 32,
    fontWeight: 800,
    color: '#990000',
    marginTop: 0,
    marginBottom: 10,
    align: 'left',
    letterSpacing: -0.5,
    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  {
    id: 'meta',
    name: 'Course Meta',
    type: 'text',
    content: 'Prof. J. Oppenheimer  •  Fall Semester 2026  •  4 Credits',
    fontSize: 14,
    fontWeight: 500,
    color: '#2f4f4f',
    marginTop: 0,
    marginBottom: 14,
    align: 'left',
    letterSpacing: 0,
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  {
    id: 'abstract',
    name: 'Syllabus Abstract',
    type: 'text',
    content: 'This advanced seminar explores the theoretical foundations of quantum computation, including qubit mechanics, quantum entanglement, and polynomial-time algorithms. Students will engage with primary literature and develop novel quantum circuit simulations. A rigorous background in linear algebra is expected.',
    fontSize: 15,
    fontWeight: 400,
    color: '#000000',
    marginTop: 0,
    marginBottom: 20,
    align: 'justify',
    letterSpacing: 0,
    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  {
    id: 'badge',
    name: 'Status Tag',
    type: 'badge',
    content: 'Enrollment Open',
    fontSize: 12,
    fontWeight: 600,
    color: '#002147',
    bgColor: '#f4f1ea',
    marginTop: 0,
    marginBottom: 20,
    align: 'left',
    letterSpacing: 0.5,
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  {
    id: 'button',
    name: 'Action Button',
    type: 'button',
    content: 'Download Full Syllabus (PDF)',
    fontSize: 14,
    fontWeight: 600,
    color: '#ffffff',
    bgColor: '#002147',
    marginTop: 0,
    marginBottom: 0,
    align: 'left',
    letterSpacing: 0,
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }
];

export const COLOR_PALETTE = [
  { label: 'Black (High Contrast)', value: '#000000' },
  { label: 'Oxford Blue', value: '#002147' },
  { label: 'Crimson Red', value: '#990000' },
  { label: 'Forest Green', value: '#228B22' },
  { label: 'Dark Slate', value: '#2f4f4f' },
  { label: 'Medium Gray', value: '#6b7280' },
  { label: 'Light Gray', value: '#9ca3af' },
  { label: 'White', value: '#ffffff' },
];

export const BG_PALETTE = [
  { label: 'Transparent', value: 'transparent' },
  { label: 'Parchment', value: '#f4f1ea' },
  { label: 'Light Gray', value: '#f3f4f6' },
  { label: 'Medium Gray', value: '#e5e7eb' },
  { label: 'Oxford Blue', value: '#002147' },
  { label: 'Crimson Red', value: '#990000' },
  { label: 'Forest Green', value: '#228B22' },
  { label: 'Warning Amber', value: '#fff3cd' },
];