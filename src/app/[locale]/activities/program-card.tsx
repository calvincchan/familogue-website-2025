import { Database } from "@/types/database.types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Database['public']['Tables']['program']['Row'];
}

export const ProgramCard: React.FC<Props> = ({ post }) => {
  // const { route, title, frontMatter: { description, date, image } } = post;
  const { name, name_zh, description, price, banner, dates } = post;
  const route = `/activities/${post.sku}`;
  return (
    <div key={route} role="listitem" className="x-post-card">
      {banner && (
        <div className="x:float-right x:ml-4 x:mb-4">
          <Image
            src={banner}
            alt={name}
            width={200}
            height={113}
          />
        </div>
      )}
      <Link href={route}>
        <h3>{name}</h3>
        <h4>${price.toFixed(2)}</h4>
      </Link>
      <p>
        {/* {description}{" "} */}
        <Link href={route} className="x-read-more-link">Read More →</Link>
      </p>
    </div>
  );
};