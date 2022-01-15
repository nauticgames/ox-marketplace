export default function CapitalizePathname(path) {
  const capitalized =
    path.replace("/", "").charAt(0).toUpperCase() +
    path.replace("/", "").slice(1);

  return capitalized;
}
