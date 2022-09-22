import ReactMarkdown from "react-markdown";

export const Markdown = (props: any) => (
  <ReactMarkdown
    components={{
      strong: ({ children }) => <b className="font-bold text-blue-300">{children}</b>,
      p: ({ children }) => <p className="text-sm sm:text-base">{children}</p>,
    }}
  >
    {String(props.children.props.value)}
  </ReactMarkdown>
);
