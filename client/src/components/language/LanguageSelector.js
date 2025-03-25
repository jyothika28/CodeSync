import React, { useState } from 'react';
import { LANGUAGE_VERSIONS } from "../../constants";

// Mapping of language keys to display names
const LANGUAGE_DISPLAY_NAMES = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  php: "PHP"
};

const LanguageSelector = ({ language, onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    onSelect(lang);
  };

  return (
    <div className="mb-3">
      <label className="form-label fw-bold text-white">Language:</label>
      <div className="dropdown">
        <button 
          className="btn btn-secondary dropdown-toggle w-40" 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          {LANGUAGE_DISPLAY_NAMES[selectedLanguage]} 
          {/* ({LANGUAGE_VERSIONS[selectedLanguage]}) */}
        </button>
        <ul className="dropdown-menu w-40">
          {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
            <li key={lang}>
              <button 
                className="dropdown-item" 
                onClick={() => handleLanguageSelect(lang)}
              >
                {LANGUAGE_DISPLAY_NAMES[lang]}
                 {/* ({version}) */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;