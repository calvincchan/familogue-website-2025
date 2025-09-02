import { Button } from "@/components/ui/button";
import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "Volunteer", "/volunteer");
}

const VolunteerForm = ({ label }: { label: string; }) => (
  <Button asChild className="not-prose p-8 text-lg" variant="accent">
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSej0I_UkEB7MZCNf4qVdZT7Ez_lgM1agHokUbxgYOtlTdVUtg/viewform" target="_blank" rel="noopener noreferrer">
      {label}
    </Link>
  </Button >
);

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations();
  return (
    <div className="x-container prose">
      <h1>{t("Volunteer.title")}</h1>
      <h2>{t("Volunteer.subtitle")}</h2>
      <p>{t("Volunteer.description")}</p>
      <p>{t("Volunteer.description_2")}</p>
      <VolunteerForm label={t("Volunteer.volunteerFormButton")} />
    </div>
  );
}

