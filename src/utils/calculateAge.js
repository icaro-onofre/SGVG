export default function calculateAge(birthDate) {
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let birthday = birthDate;

  birthday.setFullYear(today.getFullYear());

  if (birthday < today) return age + 1;
  return age;
}
