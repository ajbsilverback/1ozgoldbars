import React from "react";

/**
 * Parses markdown-style links in text and returns React elements
 * Supports: [anchor text](url)
 * Monex.com links automatically get rel="nofollow noopener noreferrer"
 * Other external links get rel="noopener noreferrer"
 * Internal links (starting with /) use no special rel
 */
export function parseInlineLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIndex = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const anchorText = match[1];
    const url = match[2];
    const isMonex = url.toLowerCase().includes("monex.com");
    const isExternal = url.startsWith("http");

    // Determine rel attribute
    let rel: string | undefined;
    if (isMonex) {
      rel = "nofollow noopener noreferrer";
    } else if (isExternal) {
      rel = "noopener noreferrer";
    }

    parts.push(
      <a
        key={`link-${keyIndex++}`}
        href={url}
        rel={rel}
        target={isExternal ? "_blank" : undefined}
        className="text-bullion-gold hover:underline"
      >
        {anchorText}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

