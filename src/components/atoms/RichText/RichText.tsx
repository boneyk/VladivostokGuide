import { Fragment, type ReactNode } from 'react';

/** Токены inline-разметки: **жирный** и [подпись](ссылка). */
const TOKEN_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\((?:https?:)?[^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

/**
 * Минимальный инлайновый рендерер разметки: тексты гида хранятся в data-слое
 * как строки, и это единственное место, где они превращаются в JSX.
 */
export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN_PATTERN).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        const link = part.match(LINK_PATTERN);
        if (link) {
          return (
            <a key={index} href={link[2]} target="_blank" rel="noreferrer noopener">
              {link[1]}
            </a>
          );
        }

        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export default RichText;
