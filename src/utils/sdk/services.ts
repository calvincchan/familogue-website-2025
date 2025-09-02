import { airtableClient } from "@/utils/airtable-client";
import { Service, servicesTable } from "../airtable/appl3TN9b8Cik8K34";

export async function getAllServices(locale: string) {
  const records = await airtableClient.scan<Service>(servicesTable, { filterByFormula: `{status} = 'Published'` });
  return records.sort((a, b) => (a.sortKey || 0) - (b.sortKey || 0)).map(record => ({
    title: locale === "zh" ? record.title : record.titleEnglish,
    content: locale === "zh" ? record.content : record.contentEnglish
  }));
};