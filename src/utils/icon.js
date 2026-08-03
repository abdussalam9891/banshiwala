export function icon(
  name,
  className = "h-5 w-5"
) {
  return `
<i
  data-lucide="${name}"
  class="${className}"
></i>
`;
}
