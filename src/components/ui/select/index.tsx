"use client";

import { cn } from "@/lib/utils";
import { useEffect, useId, useRef, useState, KeyboardEvent } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Label } from "../label";
import { Span } from "../span";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
  id?: string;
}

export const Select = ({
  label,
  error,
  required,
  disabled,
  placeholder = "Selecione uma opção",
  value,
  onChange,
  options,
  className,
  id,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const generatedId = useId();
  const triggerId = id ?? generatedId;

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open && activeIndex >= 0) {
      listRef.current?.children[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeIndex]);

  const openDropdown = () => {
    const index = options.findIndex((option) => option.value === value);
    setActiveIndex(index >= 0 ? index : 0);
    setOpen(true);
  };

  const commitSelection = (option: SelectOption) => {
    if (option.disabled) return;
    onChange(option.value);
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (!open) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        openDropdown();
      }
      return;
    }

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (options[activeIndex]) commitSelection(options[activeIndex]);
        break;
    }
  };

  return (
    <div className="w-full flex flex-col gap-1.5" ref={rootRef}>
      {label && (
        <Label htmlFor={triggerId} required={required}>
          {label}
        </Label>
      )}

      <div className="relative">
        <button
          type="button"
          id={triggerId}
          disabled={disabled}
          onClick={() => (open ? setOpen(false) : openDropdown())}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${triggerId}-listbox`}
          className={cn(
            "w-full py-4 pl-4 pr-11 rounded-2xl border-2 border-slate-100 outline-none transition-all shadow-sm",
            "text-left font-medium bg-white",
            selected ? "text-slate-700" : "text-slate-400",
            open && "border-brand-secondary ring-4 ring-blue-50/50",
            !open && "focus:border-brand-secondary focus:ring-4 focus:ring-blue-50/50",
            disabled && "opacity-50 cursor-not-allowed",
            error && "border-red-400 focus:border-red-400 focus:ring-red-50",
            className
          )}
        >
          {selected ? selected.label : placeholder}
        </button>

        <ChevronDown
          size={18}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-all duration-200",
            open && "rotate-180 text-brand-secondary"
          )}
        />

        {open && (
          <ul
            ref={listRef}
            id={`${triggerId}-listbox`}
            role="listbox"
            tabIndex={-1}
            className={cn(
              "absolute z-50 mt-2 w-full max-h-64 overflow-y-auto py-2",
              "bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/60",
              "animate-dropdown origin-top"
            )}
          >
            {options.length === 0 && (
              <li className="px-4 py-3 text-sm text-slate-400">Nenhuma opção disponível</li>
            )}
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => commitSelection(option)}
                  className={cn(
                    "flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium cursor-pointer transition-colors",
                    option.disabled
                      ? "text-slate-300 cursor-not-allowed"
                      : isSelected
                      ? "text-brand-secondary bg-blue-50/70"
                      : "text-slate-700",
                    isActive && !option.disabled && !isSelected && "bg-slate-50"
                  )}
                >
                  {option.label}
                  {isSelected && <Check size={16} className="text-brand-secondary shrink-0" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && (
        <Span variant="error" size="xs" className="mt-1 self-start">
          {error}
        </Span>
      )}
    </div>
  );
};
