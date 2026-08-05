'use client';

interface Props {
  field?: {
    label?: string | boolean | null | Record<string, string>;
  };
}

export function SectionHeading({ field }: Props) {
  let title = '';
  if (field?.label && typeof field.label !== 'boolean') {
    title =
      typeof field.label === 'string'
        ? field.label
        : Object.values(field.label as Record<string, string>)[0] ?? '';
  }

  return (
    <div
      style={{
        marginTop: '28px',
        marginBottom: '0',
        paddingBottom: '8px',
        borderBottom: '2px solid var(--theme-elevation-200)',
      }}
    >
      <p
        style={{
          margin: 0,
          paddingTop: '8px',
          fontSize: '16px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.09em',
          color: 'var(--theme-elevation-500)',
        }}
      >
        [{title}]
      </p>
    </div>
  );
}
