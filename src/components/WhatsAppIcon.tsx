import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

interface WhatsAppIconProps {
  className?: string;
}

const IconComponent = FaWhatsapp as React.ComponentType<{ className?: string; 'aria-hidden'?: string }>;

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = 'w-4 h-4' }) => {
  return <IconComponent className={`shrink-0 ${className}`} aria-hidden="true" />;
};
