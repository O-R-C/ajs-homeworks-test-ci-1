export default function getHealthStatus(character) {
  if (character.health > 50) return "healthy";
  if (character.health >= 15) return "wounded";
  if (character.health > 0) return "critical";
  return "dead";
}
