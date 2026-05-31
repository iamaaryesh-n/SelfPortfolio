import React from 'react';

function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.4a9.6 9.6 0 0 0-3 18.7c.5.1.7-.2.7-.5v-1.8c-2.9.7-3.5-1.2-3.5-1.2-.4-1-.9-1.3-.9-1.3-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2.4-.3-4.8-1.2-4.8-5.2 0-1.2.4-2.1 1-2.9-.1-.3-.4-1.3.1-2.7 0 0 .8-.2 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.2 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.9 0 4-2.4 4.9-4.8 5.2.3.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.6 9.6 0 0 0 12 2.4Z" />
      </svg>
    );
  }

  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="3" />
        <path d="M5.5 7.5 12 12.8l6.5-5.3" />
        <path d="M5.5 16.5 10.2 12" />
        <path d="M18.5 16.5 13.8 12" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3.2" />
        <path d="M8 10v6" />
        <path d="M8 8.2v.1" />
        <path d="M11.5 16v-3.7c0-1.4.8-2.6 2.3-2.6s2.1.9 2.1 2.6V16" />
        <path d="M11.5 12.2V16" />
      </svg>
    );
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="16.7" cy="7.3" r="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 5.5c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.8.5-1.6.9-2.5 1.1a3.8 3.8 0 0 0-6.6 3.5 10.8 10.8 0 0 1-7.8-4c-.4.7-.6 1.5-.6 2.3 0 1.5.8 2.9 2 3.7-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.5 4.3-.4.1-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 1.8 2.4 3 4.4 3.1A7.7 7.7 0 0 1 2 18.1a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    </svg>
  );
}

export default SocialIcon;