export const FORM_TABLES = ['test_drive', 'get_in_touch', 'service', 'request_quote'] as const;
export type FormTable = (typeof FORM_TABLES)[number];

export const FORM_COLUMNS: Record<FormTable, readonly string[]> = {
  test_drive: [
    'first_name',
    'last_name',
    'email',
    'phone',
    'model',
    'emirates',
    'additional_info',
  ],
  get_in_touch: ['first_name', 'last_name', 'email', 'phone', 'message'],
  service: ['first_name', 'last_name', 'email', 'phone', 'message'],
  request_quote: [
    'first_name',
    'last_name',
    'email',
    'phone',
    'subject',
    'message',
    'full_name',
    'company_name',
    'company_size',
    'position',
    'time_of_purchase',
    'source',
  ],
};

export const NEWS_MUTATE_COLUMNS = [
  'title',
  'content',
  'excerpt',
  'image_url',
  'author',
  'featured',
  'published',
  'published_at',
  'seo_title',
  'seo_description',
  'seo_keywords',
] as const;
