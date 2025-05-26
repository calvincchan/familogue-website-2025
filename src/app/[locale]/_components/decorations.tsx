interface Props {
  className?: string;
}

const Blob: React.FC<Props> = ({ className }) => {
  return <div className={`x:fixed x-animate-slow-spin x:origin-center x:-z-10 x:sm:w-[360px] x:sm:h-[360px] ${className}`}>
    <svg viewBox="0 0 900 900" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M428.369,63.574c312.786,-0.083 444.447,162.409 466.66,349.895c22.212,187.485 -252.35,570.961 -563.973,362.682c-311.624,-208.28 -363.983,-442.344 -307.421,-573.084c56.562,-130.741 266.297,-139.457 404.734,-139.493Z" />
    </svg>
  </div >;
};

export const Decorations = () => {
  return (
    <div className="x:hidden x:sm:block x:overflow-hidden x:w-full x:h-full">
      <Blob className="x:-top-40 x:-left-50 x:text-emerald-500" />
      <Blob className="x:-top-40 x:-right-50 x:text-amber-500" />
      <Blob className="x:-bottom-40 x:-left-50 x:text-yellow-700" />
      <Blob className="x:-bottom-40 x:-right-50 x:text-yellow-400" />
    </div>
  );
};