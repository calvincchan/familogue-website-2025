import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import EnglishPage, { metadata as EnglishMetadata } from './en';
import ChinesePage, { metadata as ChineseMetadata } from './zh';

export async function generateMetadata() {
  const locale = await getLocale();
  console.log('locale', locale);
  if (locale === 'en') {
    return EnglishMetadata;
  } else if (locale === 'zh') {
    return ChineseMetadata;
  } else {
    notFound();
  }
}

export default async function Page() {
  const locale = await getLocale();
  if (locale === 'en') {
    return <EnglishPage />;
  } else if (locale === 'zh') {
    return <ChinesePage />;
  } else {
    notFound();
  }
}  