import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('OurServices');
  return (
    <div className="x-container x:prose">
      <h1>{t("title")} </h1>

      <section>
        <h2>Counseling</h2>
        <p>???</p>
        <p>(Contact us for more details)</p>
      </section>

      <section>
        <h2>Interactive Chinese Literacy Class</h2>
        <p>課程使用香港中文大學「可持續知識轉移項目基金」支持下成立的非牟利機構：<a href="https://www.slco.org.hk/tc" target="_blank" rel="noopener noreferrer">語橋社資</a> 教案、<a href="https://www.greenfieldhk.com/" target="_blank" rel="noopener noreferrer">青田教育中心</a>教材及精選兒童繪本，以有趣及有系統的方法加強小童認字及理解基本句子結構的能力。</p>
        <Link href="/classes-and-events" className="x-button">課程及活動</Link>
      </section>

      <section>
        <h2><del>Language Experience Zone</del></h2>
        <p>(to be cancelled?)</p>
      </section>

      <section>
        <h2>Parent Talk and Workshop</h2>
        <p>我們會定期舉辦家長講座，令家長更了解自己的子女，促進家庭成員間的溝通！</p>
        <Link href="/classes-and-events" className="x-button">課程及活動</Link>
      </section>

      <section>
        <h2>生涯規劃</h2>
        <p>資深教育工作者運用MBTI, DISC個性及九型人格測驗，再通過面談讓青年人認識自己，幫助他們尋求路向。</p>
      </section>

      <section>
        <h2>Storytelling Time</h2>
        <p>???</p>
      </section>

      <section>
        <h2>語你傳書</h2>
        <p>孩子們的閱讀是他們成長過程中非常重要的一部分。我們希望能夠為更多孩子提供閱讀的機會。因此，我們推出了《語你傳書》兒童圖書漂書服務，令更多小朋友可以享受閱讀樂趣，同時連續書本的生命！</p>
        <p>你們可以在《語你傳書》站帶以一書換一書的概念放漂，或者選擇捐助我們換取童書一本。義賣所得之善款將會用作推廣及傳承母語之用。</p>
        <Link href="/books-go-around" className="x-button">了解詳情</Link>
      </section>

      <section>
        <h2>嬰兒雙語手語課程</h2>
        <p>我們提供嬰兒雙語手語課程，由聽障和健聽教師合作授課，使用家長的母語以及美國手語（ASL）這種創新方式，促進孩子的語言發展，從早期培養包容性。</p>
        <p>(Contact us for more details)</p>
      </section>

      <section>
        <h2>全面的溝通服務</h2>
        <p>我們為聽障或聽力有困難的人士提供手語傳譯服務，服務使用美國手語（ASL）或香港手語（HKSL）。敬請預約。</p>
        <p>(Contact us for more details)</p>
      </section>
    </div>
  );
}

