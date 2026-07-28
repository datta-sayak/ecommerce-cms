'use client';

import { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

const POLL_INTERVAL_MS = 30_000; // refresh every 30 seconds

export function QuoteCountWidget() {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    try {
      const res = await fetch('/api/quote-count', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setCount(data.count ?? 0);
      }
    } catch {
      // silently ignore network errors
    }
  };

  useEffect(() => {
    fetchCount(); // initial load
    const timer = setInterval(fetchCount, POLL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--theme-elevation-50)',
        border: '1px solid var(--theme-elevation-150)',
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--theme-text)',
        margin: '8px 0',
      }}
    >
      <MessageSquare size={16} style={{ color: 'var(--theme-success-500)' }} />
      Quote Requests
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '24px',
          height: '24px',
          padding: '0 7px',
          background: count === null ? 'var(--theme-elevation-200)' : 'var(--theme-success-500)',
          color: '#fff',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: 1,
          transition: 'background 0.3s',
        }}
      >
        {count === null ? '…' : count}
      </span>
    </div>
  );
}
