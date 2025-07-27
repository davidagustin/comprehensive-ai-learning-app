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
    dropdownRef.current.style.position = 'fixed';
    dropdownRef.current.style.top = `${anchorRect.bottom + 8}px`;
    dropdownRef.current.style.left = `${anchorRect.right - width}px`;
    dropdownRef.current.style.width = `${width}px`;
    dropdownRef.current.style.zIndex = '9999';
  }, [open, anchorRef, width]);

  if (!open) return null;
  return createPortal(
    <div ref={dropdownRef} style={{ width, zIndex: 9999 }}>
      {children}
    </div>,
    document.body
  );
};

export default PortalDropdown; 