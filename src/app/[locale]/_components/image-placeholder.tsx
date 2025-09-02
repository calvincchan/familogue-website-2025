/**
 * Placeholder component for images
 */
const ImagePlaceholder: React.FC<{ label?: string; }> = function ({ label }) {
  return (
    <div
      className="bg-orange-700 w-full h-full flex items-center justify-center"
    >
      <div className="text-white text-center">
        {label && <div className="font-bold text-2xl">{label}</div>}
        <div>{process.env.SITE_NAME}</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;