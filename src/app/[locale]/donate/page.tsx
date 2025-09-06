import { Button } from "@/components/ui/button";
import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { Heart } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "Donate", "/donate");
}

const DonationQrcode = () => (
  <Image src="/images/donation-qr-code.png" alt="Donation qr code" width={300} height={300} className="not-prose mt-2" />
);

const DonationButton = ({ label }: { label: string; }) => (
  <Button asChild variant="accent" size="lg" className="not-prose p-10 text-lg mt-2">
    <Link href="https://www.zeffy.com/en-CA/donation-form/please-donate-to-familogue-and-support-our-cause">{label} <Heart /></Link>
  </Button >
);

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations();
  return (
    <div className="x-container prose">
      <h1>{t("Donate.title")}</h1>
      <p>{t("Donate.description")}</p>
      {locale === "zh" && (
        <>
          <h2>捐款及捐贈物資</h2>
          <p>語你童行一直有收集書籍及教學用品，作為漂書活動、教學課堂和社區活動的物資。我們非常感謝各個機構、家庭和每一位朋友一直以來的慷慨支持，將狀況良好但不再需要的物品捐贈給我們，讓資源得以延續使用，不必被浪費。</p>
          {/* <p>(捐贈物的圖)</p> */}
          <p>如果你也希望捐出物資支持我們的工作，歡迎填寫以下表格或直接聯絡我們。我們同時亦歡迎善心人士以捐款方式支持本會的日常運作與發展。</p>
          <h2>捐款</h2>
          <h3>使用信用卡捐款</h3>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div>QR-code 二維碼:</div>
              <DonationQrcode />
            </div>
            <div className="flex-1">
              <div>捐款連結:</div>
              <DonationButton label={t("Donate.donateButton")} />
            </div>
          </div>
          <h3>使用 Interac e-transfer 銀行轉賬</h3>
          <p>請將款項轉至以下電子郵件地址： <code className="text-lg">donation@familogue.ca</code></p>
          <h2>捐贈物資​</h2>
          <p>捐贈物資流程：</p>
          <ol>
            <li>為你希望捐出的物品拍照，並連同物品簡介電郵到 <code className="text-lg">donation@familogue.ca</code>。</li>
            <li>語你童行團隊會回覆你，並確認是否能接收有關物資。</li>
            <li>如成功確認，我們會與你預約交收時間，請於約定時間將物品送到語你童行列治文中心（5530 列治文統一廣場）。</li>
          </ol>
          <h3>捐贈物資指引</h3>
          <p>注意事項：</p>
          <ol>
            <li>本會不接受二手衣物、鞋襪、傢俱等類別物品。</li>
            <li>所有捐贈之書籍與物品必須安全無害、不含色情、不雅或恐怖內容，並不得涉及版權、衞生或道德爭議。</li>
            <li>如為玩具或學習用品，出於安全考慮，我們只接收完整、功能良好、毋須安裝或維修的物品。</li>
          </ol>
        </>
      )}
      {locale === "en" && (
        <>
          <h2>Donation and items</h2>
          <p>Familogue gratefully accepts donations of books and learning materials to support our book-sharing programs, educational classes, and community events. We sincerely thank all organizations, families, and individuals who have generously donated gently used, good-condition items instead of discarding them, helping us extend the life of these resources.</p>
          <p>If you would like to donate, please complete the form below or contact us directly. We also welcome kind-hearted donors to support our work through financial contributions.</p>
          <h2>How to donate money</h2>
          <h3>Donate by credit card</h3>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="text-muted-foreground">QR-code:</div>
              <DonationQrcode />
            </div>
            <div className="flex-1">
              <div className="text-muted-foreground">Donation link:</div>
              <DonationButton label={t("Donate.donateButton")} />
            </div>
          </div>
          <h3>Donate via Interac e-transfer</h3>
          <p>Please send your donation to the following email address: <code className="text-lg">donation@familogue.ca</code></p>
          <h2>How to donate items</h2>
          <p>Donation process:</p>
          <ol>
            <li>Take photos of the items you wish to donate and email them with a brief description to <code className="text-lg">donation@familogue.ca</code>.</li>
            <li>The Familogue team will reply to confirm whether we can accept the items.</li>
            <li>If accepted, we will schedule a drop-off time with you. Please bring the items to Familogue Richmond Centre (5530 Richmond Central Plaza) at the agreed time.</li>
          </ol>
          <h3>Donation guidelines</h3>
          <p>Important notes:</p>
          <ol>
            <li>We do not accept second-hand clothing, shoes, socks, furniture, or similar items.</li>
            <li>All donated books and items must be safe, free from pornographic, indecent, or violent content, and must not involve copyright, hygiene, or ethical issues.</li>
            <li>For toys or learning materials, for safety reasons, we only accept complete, functional items that do not require installation or repair.</li>
          </ol>
        </>
      )}
    </div>
  );
}

