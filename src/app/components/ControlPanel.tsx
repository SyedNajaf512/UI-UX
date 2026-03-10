import React from 'react';
import { LayoutElement } from '../types';
import { COLOR_PALETTE, BG_PALETTE, FONT_FAMILIES } from '../data';
import { SlidersHorizontal, Type, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

interface ControlPanelProps {
  element: LayoutElement | null;
  onUpdate: (id: string, updates: Partial<LayoutElement>) => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ element, onUpdate }) => {
  if (!element) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8 text-center bg-[#f4f1ea]/30 rounded-lg">
        <Type className="w-12 h-12 mb-4 opacity-50 text-gray-400" />
        <h3 className="font-semibold text-lg mb-2 text-[#002147]">No Element Selected</h3>
        <p className="text-sm text-gray-500">Click on any text or button in the canvas to adjust its visual hierarchy.</p>
      </div>
    );
  }

  const handleChange = (field: keyof LayoutElement, value: any) => {
    onUpdate(element.id, { [field]: value });
  };

  return (
    <div className="p-6 space-y-8 overflow-y-auto max-h-full bg-white shadow-sm border border-[#e5e7eb]">
      <div className="border-b pb-4 border-[#e5e7eb]">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#002147]">
          <SlidersHorizontal className="w-5 h-5 text-[#990000]" />
          Properties
        </h2>
        <p className="text-sm text-gray-500 mt-1">Editing: <span className="font-medium text-gray-900">{element.name}</span></p>
      </div>

      {/* Typography Section */}
      <section className="space-y-5">
        <h3 className="font-semibold text-[#002147] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">Typography</h3>
        
        <div className="space-y-2">
          <label className="text-sm text-[#2f4f4f] font-medium block">Font Family</label>
          <div className="flex flex-col gap-1">
            {FONT_FAMILIES.map((f) => (
              <button
                key={f.value}
                onClick={() => handleChange('fontFamily', f.value)}
                className={`text-left px-3 py-2 text-sm rounded-md border transition-all ${element.fontFamily === f.value ? 'bg-[#f4f1ea] border-[#002147] text-[#002147] font-medium shadow-sm' : 'border-gray-200 hover:bg-gray-50 text-gray-700'}`}
                style={{ fontFamily: f.value }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex justify-between text-sm text-[#2f4f4f] font-medium">
            <span>Font Size</span>
            <span className="text-gray-500">{element.fontSize}px</span>
          </label>
          <input 
            type="range" 
            min="10" 
            max="72" 
            value={element.fontSize}
            onChange={(e) => handleChange('fontSize', parseInt(e.target.value))}
            className="w-full accent-[#990000]"
          />
        </div>

        <div className="space-y-2">
          <label className="flex justify-between text-sm text-[#2f4f4f] font-medium">
            <span>Font Weight</span>
            <span className="text-gray-500">{element.fontWeight}</span>
          </label>
          <input 
            type="range" 
            min="100" 
            max="900" 
            step="100"
            value={element.fontWeight}
            onChange={(e) => handleChange('fontWeight', parseInt(e.target.value))}
            className="w-full accent-[#990000]"
          />
          <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
            <span>Light</span>
            <span>Normal</span>
            <span>Bold</span>
            <span>Black</span>
          </div>
        </div>
      </section>

      {/* Color/Contrast Section */}
      <section className="space-y-5">
        <h3 className="font-semibold text-[#002147] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">Contrast & Color</h3>
        
        <div className="space-y-2">
          <label className="text-sm text-[#2f4f4f] font-medium block">Text Color</label>
          <div className="grid grid-cols-4 gap-2">
            {COLOR_PALETTE.map((c) => (
              <button
                key={c.value}
                onClick={() => handleChange('color', c.value)}
                className={`w-full h-10 rounded border transition-all ${element.color === c.value ? 'border-[#002147] scale-110 shadow-sm ring-2 ring-white' : 'border-transparent hover:scale-105'}`}
                style={{ backgroundColor: c.value, boxShadow: c.value === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : 'none' }}
                title={c.label}
              />
            ))}
          </div>
        </div>

        {(element.type === 'button' || element.type === 'badge') && (
          <div className="space-y-2 pt-2">
            <label className="text-sm text-[#2f4f4f] font-medium block">Background Color</label>
            <div className="grid grid-cols-4 gap-2">
              {BG_PALETTE.map((c) => (
                <button
                  key={c.value}
                  onClick={() => handleChange('bgColor', c.value)}
                  className={`w-full h-10 rounded border relative transition-all ${element.bgColor === c.value ? 'border-[#002147] scale-110 shadow-sm ring-2 ring-white' : 'border-transparent hover:scale-105'}`}
                  style={{ backgroundColor: c.value === 'transparent' ? '#fff' : c.value, boxShadow: c.value === 'transparent' || c.value === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : 'none' }}
                  title={c.label}
                >
                  {c.value === 'transparent' && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400">None</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Layout & Positioning */}
      <section className="space-y-5">
        <h3 className="font-semibold text-[#002147] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">Positioning</h3>
        
        <div className="space-y-2">
          <label className="text-sm text-[#2f4f4f] font-medium block">Alignment</label>
          <div className="flex border rounded-md overflow-hidden bg-gray-50/50 p-1 border-gray-200">
            <button 
              onClick={() => handleChange('align', 'left')}
              className={`flex-1 p-2 flex justify-center rounded transition-colors ${element.align === 'left' ? 'bg-white text-[#990000] shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900'}`}
              title="Align Left"
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleChange('align', 'center')}
              className={`flex-1 p-2 flex justify-center rounded transition-colors mx-1 ${element.align === 'center' ? 'bg-white text-[#990000] shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900'}`}
              title="Align Center"
            >
              <AlignCenter className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleChange('align', 'right')}
              className={`flex-1 p-2 flex justify-center rounded transition-colors mr-1 ${element.align === 'right' ? 'bg-white text-[#990000] shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900'}`}
              title="Align Right"
            >
              <AlignRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleChange('align', 'justify')}
              className={`flex-1 p-2 flex justify-center rounded transition-colors ${element.align === 'justify' ? 'bg-white text-[#990000] shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900'}`}
              title="Justify"
            >
              <AlignJustify className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="flex justify-between text-sm text-[#2f4f4f] font-medium">
            <span>Spacing Top</span>
            <span className="text-gray-500">{element.marginTop}px</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="128" 
            step="2"
            value={element.marginTop}
            onChange={(e) => handleChange('marginTop', parseInt(e.target.value))}
            className="w-full accent-[#002147]"
          />
        </div>

        <div className="space-y-2">
          <label className="flex justify-between text-sm text-[#2f4f4f] font-medium">
            <span>Spacing Bottom</span>
            <span className="text-gray-500">{element.marginBottom}px</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="128" 
            step="2"
            value={element.marginBottom}
            onChange={(e) => handleChange('marginBottom', parseInt(e.target.value))}
            className="w-full accent-[#002147]"
          />
        </div>

        <div className="space-y-2 pt-2">
          <label className="flex justify-between text-sm text-[#2f4f4f] font-medium">
            <span>Letter Spacing</span>
            <span className="text-gray-500">{element.letterSpacing}px</span>
          </label>
          <input 
            type="range" 
            min="-2" 
            max="12" 
            step="0.5"
            value={element.letterSpacing}
            onChange={(e) => handleChange('letterSpacing', parseFloat(e.target.value))}
            className="w-full accent-[#002147]"
          />
        </div>
      </section>
    </div>
  );
};