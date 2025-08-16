import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Enhanced smooth scroll utility with macOS-like behavior
export function smoothScrollToSection(
  sectionId: string, 
  options: { centerInViewport?: boolean; offset?: number } = {}
) {
  const { centerInViewport = true, offset = 80 } = options;
  const element = document.getElementById(sectionId) as HTMLElement;
  
  if (!element) return;
  
  const headerHeight = offset;
  const viewportHeight = window.innerHeight;
  const elementHeight = element.offsetHeight;
  
  let scrollTop = element.offsetTop - headerHeight;
  
  // Center the section in viewport for better visual balance
  if (centerInViewport && elementHeight < viewportHeight * 0.8) {
    scrollTop = element.offsetTop - headerHeight - (viewportHeight - elementHeight) / 2;
  }
  
  // Use optimized scroll behavior with momentum
  window.scrollTo({
    top: Math.max(0, scrollTop),
    behavior: 'smooth'
  });
}