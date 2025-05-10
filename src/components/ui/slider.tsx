'use client';

import { forwardRef } from 'react';

type SliderProps = {
  value?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
};

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ value = [0], onValueChange, min, max, step }, ref) => {
    return (
      <input
        type="range"
        ref={ref}
        value={value[0]}
        onChange={(e) => onValueChange?.([Number(e.target.value)])}
        className="w-full bg-gray-800 rounded-lg h-2 cursor-pointer"
        min={min}
        max={max}
        step={step}
      />
    );
  }
);

Slider.displayName = 'Slider';