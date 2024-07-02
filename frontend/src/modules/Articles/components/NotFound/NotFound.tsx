// Simple not found component to handle cases when a query does not return any results
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <h1>Oops!</h1>
      <p>Sorry, we couldn't find any articles matching your search.</p>
    </div>
  );
};

export default NotFound;
