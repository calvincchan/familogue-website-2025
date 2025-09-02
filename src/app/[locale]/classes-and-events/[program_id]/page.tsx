import Markdown from "markdown-to-jsx";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { getLocaleDisplayInfo, getProgramById } from "../utils";

interface Props {
  params: Promise<{ locale: string; program_id: number; }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale, program_id } = await params;
  const record = await getProgramById(program_id);
  if (!record) {
    return { title: "Program not found" };
  }
  const { displayName, displayDescription } = getLocaleDisplayInfo(record, locale);
  return {
    title: displayName,
    description: displayDescription || "No description available",
  };
}

const Page: React.FC<Props> = async function ({ params }) {
  const { locale, program_id } = await params;
  const record = await getProgramById(program_id);
  if (!record) {
    return <p>Program not found.</p>;
  }
  const registerLink = "/register";
  // const locale = getLocale();
  const { displayName, displayDescription, displayImage, imageWidth, imageHeight } = getLocaleDisplayInfo(record, locale);
  const { hidden, visible_from, visible_to } = record;
  const t = await getTranslations();
  return (
    <div className="sm:max-w-2xl mx-auto">
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl mb-4">{displayName}</h1>
        <Link href={registerLink} className="x-button">
          {t("General.register_now")} →
        </Link>
      </section>
      {displayImage && (
        <div>
          <Image
            src={displayImage}
            alt={displayName}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
      <div className="prose m-auto p-4">
        <Markdown>
          {displayDescription || t("no_description")}
        </Markdown>
        <p>
          <Link href={registerLink} className="x-button">
            {t("General.register_now")} →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;