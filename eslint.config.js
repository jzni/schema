import linted from "linted";

export default linted({
  json: {
    files: ["**/*.json"],
  },
  jsoncc: {
    files: ["**/*.jsonc"],
  },
});
