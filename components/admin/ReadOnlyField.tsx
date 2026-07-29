'use client';

import { useField } from '@payloadcms/ui';

type Option = { label: string; value: string };

interface Props {
  path: string;
  field?: {
    label?: string | boolean | null | Record<string, string>;
    options?: (Option | string)[];
  };
}

function resolveLabel(field?: Props['field']): string {
  if (!field?.label || typeof field.label === 'boolean') return '';
  if (typeof field.label === 'string') return field.label;
  return Object.values(field.label as Record<string, string>)[0] ?? '';
}

export function ReadOnlyField({ path, field }: Props) {
  const { value } = useField<string>({ path });

  let display = (value as string) || null;

  // Map select value → human-readable label
  if (field?.options && value) {
    const match = field.options.find((o) =>
      typeof o === 'object' ? o.value === value : o === value,
    );
    if (match && typeof match === 'object') display = match.label;
  }

  const label = resolveLabel(field);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '4px 0',
        gap: '16px',
      }}
    >
      {/* Label column */}
      <p
        style={{
          margin: 0,
          width: '180px',
          flexShrink: 0,
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--theme-elevation-500)',
        }}
      >
        {label}
      </p>

      {/* Value column */}
      <p
        style={{
          margin: 0,
          flex: 1,
          fontSize: '14px',
          color: display ? 'var(--theme-text)' : 'var(--theme-elevation-350)',
          fontStyle: display ? 'normal' : 'italic',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {display ?? '—'}
      </p>
    </div>
  );
}
