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
        <p>The course uses teaching materials from SLCO Community Resources, a non-profit organization established with the support of the "Sustainable Knowledge Transfer Project Fund" of the Chinese University of Hong Kong, as well as materials from the Greenfield Education Center and children's picture books. It strengthens children's ability to recognize characters and understand basic sentence structures in an interesting and systematic way.</p>
        <Link href="/classes-and-events" className="x-button">Classes and Events</Link>
      </section>

      <section>
        <h2><del>Language Experience Zone</del></h2>
        <p>(to be cancelled?)</p>
      </section>

      <section>
        <h2>Parent Talk and Workshop</h2>
        <p>We regularly organize parent talks to help parents better understand their children and promote communication among family members!</p>
        <Link href="/classes-and-events" className="x-button">Classes and Events</Link>
      </section>

      <section>
        <h2>Career Coaching</h2>
        <p>Experienced educators use MBTI, DISC personality tests, and Enneagram tests, combined with interviews, to help young people understand themselves and find their direction.</p>
      </section>

      <section>
        <h2>Storytelling Time</h2>
        <p>???</p>
      </section>

      <section>
        <h2>Books Go Around</h2>
        <p>Reading is a very important part of children's growth. We hope to provide more children with the opportunity to read. Therefore, we launched the "Books Go Around" children's book exchange service, allowing more children to enjoy the joy of reading while extending the life of books!</p>
        <p>You can participate in the "Books Go Around" program by exchanging one book for another at the station or by donating to receive a children's book. Proceeds from the charity sale will be used to promote and preserve mother tongue education.</p>
        <Link href="/books-go-around" className="x-button">Learn More</Link>
      </section>

      <section>
        <h2>Bilingual Baby Signing Class</h2>
        <p>We offer bilingual baby signing classes taught collaboratively by deaf and hearing teachers. Using parents' mother tongue and American Sign Language (ASL), this innovative approach promotes children's language development and fosters inclusivity from an early age.</p>
        <p>(Contact us for more details)</p>
      </section>

      <section>
        <h2>Comprehensive Communication Services</h2>
        <p>We provide sign language interpretation services for individuals who are deaf or hard of hearing. The service uses American Sign Language (ASL) or Hong Kong Sign Language (HKSL). Please make an appointment.</p>
        <p>(Contact us for more details)</p>
      </section>
    </div>
  );
}

