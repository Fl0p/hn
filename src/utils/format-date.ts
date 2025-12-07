export const formatDate = (date?: Date | null) => {
  if (!date) return "—";
  try {
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "—";
  }
};
