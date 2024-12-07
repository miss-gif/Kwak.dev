import { getSanitizedContent } from "@/utils/getSanitizedContent";

interface SanitizedContentProps {
  content: string;
}

const SanitizedContent = ({ content }: SanitizedContentProps) => {
  return <p className="whitespace-pre-wrap py-6" dangerouslySetInnerHTML={getSanitizedContent(content)} />;
};

export default SanitizedContent;
