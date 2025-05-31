import { Database } from "@/types/database.types";
import Markdown from "markdown-to-jsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "../_components/image-placeholder";
import { getLocaleDisplayInfo } from "./utils";


interface Props {
  post: Database['public']['Tables']['program']['Row'];
  locale?: string;
}

export const ProgramCard: React.FC<Props> = ({ post, locale }) => {
  // const { route, title, frontMatter: { description, date, image } } = post;
  const { displayName, displayDescription, displayImage, imageWidth = 200, imageHeight = 200 } = getLocaleDisplayInfo(post, locale || 'en');
  const t = useTranslations();
  const route = `/classes-and-events/${post.id}`;
  return (
    <div key={route} className="x-program-card">
      <div className="x-part1">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={displayName}
            width={imageWidth}
            height={imageHeight}
            className="x:bg-stone-700"
          />
        ) : (
          <ImagePlaceholder label={displayName} />
        )}
      </div>
      <div className="x-part2">
        <h2>{displayName}</h2>
        <Markdown>
          {displayDescription || t("Programs.no_description")}
        </Markdown>
        <p>
          <Link href={route} className="x-button">{t("General.view_details")} →</Link>
        </p>
      </div>
    </div>
  );
};