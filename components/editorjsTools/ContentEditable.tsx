import { HTMLProps, useEffect, useRef } from 'react';

interface ContentEditableProps extends HTMLProps<any> {
  initialInnerHTML: string,
  onContentChange: (newContent: string) => void,
}

export default function ContentEditable(
  { initialInnerHTML, onContentChange, ...props }: ContentEditableProps,
) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    element.current!.innerHTML = initialInnerHTML;

    const observer = new MutationObserver(() => {
      onContentChange(element.current!.innerHTML.replace(/<br>$/, ''));
    });

    observer.observe(element.current!, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [initialInnerHTML, onContentChange]);

  return (
    <div
      {...props}
      contentEditable={true}
      ref={element}
    />
  );
}
