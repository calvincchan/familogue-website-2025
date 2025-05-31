/**
 * Placeholder component for images
 */
const ImagePlaceholder: React.FC<{ label?: string; }> = function ({ label }) {
  return (
    <div
      className="x:bg-orange-700 x:w-full x:h-full x:flex x:items-center x:justify-center"
    >
      <div className="x:text-white x:text-center">
        {label && <div className="x:font-bold x:text-2xl">{label}</div>}
        <div>{process.env.SITE_NAME}</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;