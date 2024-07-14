/**
 * MARK: Markdown File Display
 * @description This component displays the content of a Markdown file
 * @param {Object} file The file object to be displayed
 * @returns The MarkdownFileDisplay component
 *
 */
export const MarkdownFileDisplay = ({ file }) => {
  return (
    <>
      <p>
        {file.path} : {file.type}
      </p>

      <p>{file.content}</p>
    </>
  );
};
