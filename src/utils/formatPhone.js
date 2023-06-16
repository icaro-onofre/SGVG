export default function formatPhone(s) {
  return `(${s.substr(0, 2)})${s.substr(2, 5)}-${s.substr(7)}`;
}