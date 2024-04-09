/**
 * @alias GenericError
 * @description A generic error component to render when an error isnt handled elsewhere
 *
 * @returns The GenericError component
 */
export const GenericError = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-200">
      <h1 className="text-4xl font-bold">An Error Occurred</h1>
      <p className="text-lg">
        An error occurred that was not handled elsewhere
      </p>
    </div>
  );
};
