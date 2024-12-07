import DOMPurify from "dompurify";

// HTML을 정화하여 렌더링
export const getSanitizedContent = (content: string) => {
  return { __html: DOMPurify.sanitize(content) };
};
