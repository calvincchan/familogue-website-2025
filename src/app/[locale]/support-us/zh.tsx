import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('');
  return (
    <div className="x-container prose">
      <h1>{t("SupportUs.title")} </h1>

      <section>
        <h2>成為會員</h2>
        <p>我們的會員計劃旨在為家長提供一個支持和資源的平台，幫助他們在孩子的語言學習旅程中取得成功。加入我們的會員計劃，您將獲得以下福利：</p>
        <ul>
          <li>獨家訪問我們的資源庫，包括教學材料、活動建議和專家建議</li>
          <li>參加我們的網上研討會和工作坊，了解最新的語言學習趨勢和技巧</li>
          <li>與其他家長和教育工作者建立聯繫，分享經驗和最佳實踐</li>
          <li>獲得我們的電子報，了解最新的活動和資源</li>
        </ul>
      </section>

      <section>
        <h2>捐助與你童行</h2>
        <p>我們的非牟利組織依賴社區的支持來提供高質量的資源和服務。</p>
        <Button asChild className="not-prose" variant="accent" size="lg"><Link href="/donate">{t("General.view_details")}</Link></Button>
      </section>

      <section>
        <h2>成為義工</h2>
        <p>我們歡迎義工的參與，無論您是教育工作者、家長還是對語言學習有熱情的人士。我們的義工將有機會：</p>
        <ul>
          <li>參與我們的活動和工作坊，幫助我們提供支持和資源</li>
          <li>與其他義工和專業人士合作，分享經驗和最佳實踐</li>
          <li>為社區做出貢獻，幫助其他家庭在語言學習上取得成功</li>
        </ul>
      </section>

      <section>
        <h2>訂閱我們的社交媒體</h2>
        <p>請訂閱我們的社交媒體，隨時了解我們的最新消息、活動和資源：</p>
        <ul>
          <li><Link href="https://www.facebook.com/Familogue" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
          <li><Link href="https://www.instagram.com/familogue" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
          <li><Link href="https://www.youtube.com/@familogue" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
        </ul>
      </section>
    </div>
  );
}

