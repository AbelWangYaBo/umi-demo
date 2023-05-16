
export function getBaseUrl() {
  return ''
  return process.env.NODE_ENV === 'production' ? '/api' : '/api';
}
