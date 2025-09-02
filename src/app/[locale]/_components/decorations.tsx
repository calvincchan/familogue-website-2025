interface Props {
  className?: string;
}

const Blob: React.FC<Props> = ({ className }) => {
  return <div className={`fixed x-animate-slow-spin origin-center -z-10 sm:w-[360px] sm:h-[360px] ${className}`}>
    <svg viewBox="0 0 900 900" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M428.369,63.574c312.786,-0.083 444.447,162.409 466.66,349.895c22.212,187.485 -252.35,570.961 -563.973,362.682c-311.624,-208.28 -363.983,-442.344 -307.421,-573.084c56.562,-130.741 266.297,-139.457 404.734,-139.493Z" />
    </svg>
  </div >;
};

export const Decorations = () => {
  return (
    <div className="hidden sm:block overflow-hidden w-full h-full">
      <Blob className="-top-40 -left-50 text-emerald-500" />
      <Blob className="-top-40 -right-50 text-amber-500" />
      <Blob className="-bottom-40 -left-50 text-yellow-700" />
      <Blob className="-bottom-40 -right-50 text-yellow-400" />
    </div>
  );
};