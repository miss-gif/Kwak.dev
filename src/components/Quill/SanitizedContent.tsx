import { getSanitizedContent } from "@/utils/getSanitizedContent";

interface SanitizedContentProps {
  content: string;
}

const SanitizedContent = ({ content }: SanitizedContentProps) => {
  return (
    <div className="prose">
      <div className="whitespace-pre-wrap py-6" dangerouslySetInnerHTML={getSanitizedContent(content)} />
    </div>
  );
};

export default SanitizedContent;
