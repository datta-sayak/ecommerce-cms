'use client';

import { useEffect, useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { supabase } from '@/utils/supabaseClient';

export function EnquiryCountWidget() {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    try {
      const res = await fetch('/api/enquiry-count', { cache: 'no-store' });
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
    const client = supabase;
    if (!client) {
      console.warn('Supabase URL or Key is missing. Realtime updates are disabled.');
      return;
    }

    // Subscribe to realtime changes on the enquiries table
    const channel = client
      .channel('enquiries-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'enquiries' },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      client.removeChannel(channel);
    };
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
        margin: '0 0 8px 0',
      }}
    >
      <HelpCircle size={16} style={{ color: 'var(--theme-success-500)' }} />
      Enquiries
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
