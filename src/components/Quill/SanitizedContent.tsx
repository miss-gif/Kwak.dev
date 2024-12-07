import { getSanitizedContent } from "@/utils/getSanitizedContent";

interface SanitizedContentProps {
  content: string;
}

const SanitizedContent = ({ content }: SanitizedContentProps) => {
  return (
    <p className="mb-6 whitespace-pre-wrap text-gray-700" dangerouslySetInnerHTML={getSanitizedContent(content)} />
  );
};

export default SanitizedContent;
