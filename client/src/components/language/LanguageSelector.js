import { LANGUAGE_VERSIONS } from "../../constants";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold text-white">Language:</label>
      <select className="form-select" value={language} onChange={(e) => onSelect(e.target.value)}>
        {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
          <option key={lang} value={lang}>
            {lang} ({version})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;