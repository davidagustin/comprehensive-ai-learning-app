'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalDropdownProps {
  children: React.ReactNode;
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  width?: number;
}

const PortalDropdown: React.FC<PortalDropdownProps> = ({ children, anchorRef, open, width = 320 }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !anchorRef.current || !dropdownRef.current) return;
    
    const anchorRect = anchorRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const mobileWidth = Math.min(width, window.innerWidth - 16); // 16px padding
    
    dropdownRef.current.style.position = 'fixed';
    dropdownRef.current.style.zIndex = '9999';
    
    if (isMobile) {
      // Center on mobile
      dropdownRef.current.style.top = `${anchorRect.bottom + 8}px`;
      dropdownRef.current.style.left = '8px';
      dropdownRef.current.style.right = '8px';
      dropdownRef.current.style.width = 'auto';
    } else {
      // Desktop positioning
      dropdownRef.current.style.top = `${anchorRect.bottom + 8}px`;
      dropdownRef.current.style.left = `${anchorRect.right - width}px`;
      dropdownRef.current.style.width = `${width}px`;
    }
  }, [open, anchorRef, width]);

  if (!open) return null;
  return createPortal(
    <div ref={dropdownRef} style={{ zIndex: 9999 }}>
      {children}
    </div>,
    document.body
  );
};

export default PortalDropdown; 