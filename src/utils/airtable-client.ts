import { AirtableTs } from 'airtable-ts';

export const airtableClient = new AirtableTs({ apiKey: process.env.AIRTABLE_API_KEY });
