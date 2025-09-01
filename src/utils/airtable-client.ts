// src/utils/airtable-client.ts

type AirtableRecord<T> = {
  id: string;
  fields: T;
  createdTime: string;
};

type AirtableListResponse<T> = {
  records: AirtableRecord<T>[];
  offset?: string;
};

type AirtableCreateResponse<T> = AirtableRecord<T>;
type AirtableUpdateResponse<T> = AirtableRecord<T>;
type AirtableDeleteResponse = { id: string; deleted: boolean; };

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  throw new Error('Missing Airtable API key or base ID in environment variables.');
}

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;

async function fetchRecords<T>(
  table: string,
  params?: Record<string, string>
): Promise<AirtableListResponse<T>> {
  const url = new URL(`${AIRTABLE_API_URL}/${table}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  }
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Airtable fetch failed: ${res.statusText}`);
  return res.json();
}

async function createRecord<T>(
  table: string,
  fields: T
): Promise<AirtableCreateResponse<T>> {
  const res = await fetch(`${AIRTABLE_API_URL}/${table}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) throw new Error(`Airtable create failed: ${res.statusText}`);
  return res.json();
}

async function updateRecord<T>(
  table: string,
  id: string,
  fields: Partial<T>
): Promise<AirtableUpdateResponse<T>> {
  const res = await fetch(`${AIRTABLE_API_URL}/${table}/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) throw new Error(`Airtable update failed: ${res.statusText}`);
  return res.json();
}

async function deleteRecord(
  table: string,
  id: string
): Promise<AirtableDeleteResponse> {
  const res = await fetch(`${AIRTABLE_API_URL}/${table}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Airtable delete failed: ${res.statusText}`);
  return res.json();
}

export {
  createRecord,
  deleteRecord,
  fetchRecords,
  updateRecord
};
export type {
  AirtableCreateResponse,
  AirtableDeleteResponse,
  AirtableListResponse,
  AirtableRecord,
  AirtableUpdateResponse
};

