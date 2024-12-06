import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface CustomQuillEditorProps {
  [key: string]: any;
}

const CustomQuillEditor = forwardRef((props: CustomQuillEditorProps, ref) => {
  const quillRef = useRef<ReactQuill | null>(null);

  // 외부에서 ref로 접근할 수 있도록 useImperativeHandle 사용
  useImperativeHandle(ref, () => ({
    getEditor: () => quillRef.current?.getEditor(),
  }));

  useEffect(() => {
    const observerCallback = (mutations: MutationRecord[]) => {
      mutations.forEach((mutation) => {
        console.log("Mutation detected:", mutation);
      });
    };

    const targetNode = quillRef.current?.getEditor().root; // Quill 에디터의 root 노드 가져오기
    const observer = new MutationObserver(observerCallback);

    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 정리
  }, []);

  return <ReactQuill ref={quillRef} theme="snow" {...props} />;
});

export default CustomQuillEditor;
