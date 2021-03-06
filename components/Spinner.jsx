export default function Spinner() {
  // animation effect while waiting for rendering
  return (
    <span className="flex justify-center items-center mt-[100px]">
      <span className="animate-ping relative flex h-10 w-10  rounded-full bg-black opacity-75"></span>
    </span>
  );
}

