import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";
import remarkGfm from "remark-gfm";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(
    "Welcome, Pavel!\n\nThis is list.\n- First item\n- Second item\n- One more item\n\nHave a good day, Pavel!"
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Form</title>
      </Helmet>
      <div className="flex flex-col items-center gap-4 pt-12">
        <textarea
          value={markdown}
          onChange={handleChange}
          rows={8}
          className="container-main w-80"
        />

        <div className="container-main w-80">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default MarkdownEditor;
