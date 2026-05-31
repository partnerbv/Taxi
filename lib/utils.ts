// Lightweight classnames helper (no external deps).
// Accepts strings / falsy values and joins the truthy ones.
export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs.filter(Boolean).join(' ')
}
