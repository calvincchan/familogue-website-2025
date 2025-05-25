import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('AboutUs');
  return (
    <div className="x-container x:prose">
      <h1>{t("title")}</h1>
      <section>
        <p>
          We are experienced educators and immigrant mothers from Hong Kong now based in Vancouver, Canada. We established "Familogue" in 2022 to help parents and children communicate more effectively by transferring mother tongue skills into other abilities such as written language, second/third languages, social and cognitive skills. Through workshops and seminars, we aim to be a bridge between parents and their children, enabling them to improve and learn together in a familiar context like home.
        </p>
        <p>
          According to UNESCO, mother tongue-based education should start early as it is the foundation of multilingual education. Sweden also found that strong proficiency in mother tongue leads to natural development of other language abilities.
        </p>
        <p>
          Parents using their mother tongue to communicate with their children improves family communication, especially with grandparents who may not speak foreign languages. A University of Washington study found that the mother tongue must be applied in real-life situations to be effective. We are experienced educators and mothers who immigrated to an English-speaking country and hope to help parents and children develop their mother tongue ability to improve communication and growth together.
        </p>
        <p>
          As you may have noticed, our logo has two bubble elements, one representing the big bubble of the parent - Mommy Lingo, and the other representing the child - Kiddo.
        </p>
      </section>
      <section>
        <h2>Founding Members</h2>
        <h3>Dr Fay - 教育學博士</h3>
        <p>
          Dr. Fay, who holds a PhD in Education and has experience in bilingualism, language acquisition, and special education, as well as teacher training and parent education.
        </p>
        <h3>石姨姨 - 卑詩省註冊幼兒教育老師</h3>
        <p>
          Registered Early Childhood Educator in British Columbia who has worked in early childhood education for many years and also participated in a bilingual education program for deaf students at the Chinese University of Hong Kong.
        </p>
        <h3>海豚姨姨 Florence - 註冊言語治療師 RSLP (CSHBC)</h3>
        <p>
          Registered Speech-Language Pathologist with over 10 years of experience in the field, who aims to work alongside parents using her professional knowledge.
        </p>
        <h3>恩恩姨姨 - 香港資深中學老師及特殊教育統籌主任</h3>
        <p>
          Senior high school teacher and special education coordinator in Hong Kong with 20 years of teaching experience, who believes that every individual has unique potential.
        </p>
        <h3>叻薯媽 (Slash Mom) 資深市場營銷人員</h3>
        <p>
          Seasoned marketing professional with experience in branding, public relations, corporate communications, advertising, and business development, who has also received training from 故事爸媽 and volunteered as a teacher assistant in schools.
        </p>
      </section>
    </div>
  );
};
