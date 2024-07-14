/**
 * MARK: JSFileDisplay
 * @description This component displays the content of a JS file
 * @param {Object} file The file object to be displayed
 * @returns The JSFileDisplay component
 *
 */
export const JSFileDisplay = ({ file }) => {
  return (
    <>
      <p>
        {file.path} : {file.type}
      </p>

      <p>{file.content}</p>
    </>
  );
};
