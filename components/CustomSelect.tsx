import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CustomSelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function CustomSelect({
  label,
  options,
  value,
  placeholder,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="mb-2 block text-sm font-medium text-cream/75">
        {label}
      </label>

      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between rounded-2xl border border-white/10 bg-primary/50 px-4 py-4 text-left text-cream outline-none transition focus:border-secondary ${
          isOpen ? "border-secondary ring-1 ring-secondary/50" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={value ? "text-cream" : "text-cream/35"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-cream/50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 mt-2 max-h-60 w-full overflow-auto scrollbar-none rounded-2xl border border-white/10 bg-[#17091e] p-2 shadow-2xl backdrop-blur-xl focus:outline-none"
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = value === option;
              return (
                <li
                  key={option}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                    isSelected
                      ? "bg-secondary/20 font-medium text-white"
                      : "text-cream/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{option}</span>
                  {isSelected && <Check className="h-4 w-4 text-secondary" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CustomSelect