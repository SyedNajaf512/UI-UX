import React from 'react';
import { LayoutElement } from '../types';

interface CanvasItemProps {
  element: LayoutElement;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isInteractive: boolean;
}

export const CanvasItem: React.FC<CanvasItemProps> = ({ element, isSelected, onSelect, isInteractive }) => {
  const baseStyle: React.CSSProperties = {
    fontSize: `${element.fontSize}px`,
    fontWeight: element.fontWeight,
    color: element.color,
    marginTop: `${element.marginTop}px`,
    marginBottom: `${element.marginBottom}px`,
    textAlign: element.align,
    letterSpacing: `${element.letterSpacing}px`,
    lineHeight: 1.4,
    fontFamily: element.fontFamily || 'inherit',
  };

  const interactiveClasses = isInteractive 
    ? `cursor-pointer transition-all border border-dashed hover:border-blue-400 ${isSelected ? 'border-blue-500 bg-blue-50/20' : 'border-transparent'}`
    : '';

  if (element.type === 'button') {
    return (
      <div 
        className={`w-full ${interactiveClasses}`}
        onClick={() => onSelect(element.id)}
        style={{ textAlign: element.align }}
      >
        <button
          style={{
            ...baseStyle,
            backgroundColor: element.bgColor || '#e5e7eb',
            padding: '12px 24px',
            borderRadius: '4px',
            border: 'none',
            display: 'inline-block',
            width: element.align === 'center' ? 'auto' : (element.align === 'justify' ? '100%' : 'auto'),
            cursor: isInteractive ? 'pointer' : 'default',
          }}
        >
          {element.content}
        </button>
      </div>
    );
  }

  if (element.type === 'badge') {
    return (
      <div 
        className={`w-full ${interactiveClasses}`}
        onClick={() => onSelect(element.id)}
        style={{ textAlign: element.align }}
      >
        <span
          style={{
            ...baseStyle,
            backgroundColor: element.bgColor || 'transparent',
            padding: '4px 10px',
            borderRadius: '2px',
            display: 'inline-block',
            textTransform: 'uppercase',
            border: element.bgColor === 'transparent' ? `1px solid ${element.color}` : `1px solid ${element.bgColor}`,
          }}
        >
          {element.content}
        </span>
      </div>
    );
  }

  // default to text/small text
  return (
    <div
      className={`w-full ${interactiveClasses}`}
      onClick={() => onSelect(element.id)}
    >
      <div style={baseStyle}>
        {element.content}
      </div>
    </div>
  );
};