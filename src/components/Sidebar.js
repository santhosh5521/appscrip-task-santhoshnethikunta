import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const filterData = {
  'IDEAL FOR': ['Men', 'Women', 'Baby & Kids'],
  'OCCASION': ['Casual', 'Formal', 'Party', 'Ethnic'],
  'WORK': ['Office', 'Outdoor', 'Home'],
  'FABRIC': ['Cotton', 'Polyester', 'Silk', 'Wool'],
  'SEGMENT': ['Luxury', 'Budget', 'Mid-Range'],
  'SUITABLE FOR': ['Summer', 'Winter', 'All Season'],
  'RAW MATERIALS': ['Organic', 'Recycled', 'Natural'],
  'PATTERN': ['Solid', 'Stripes', 'Floral', 'Abstract'],
};

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({ 'IDEAL FOR': true });
  const [selected, setSelected] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleOption = (section, option) => {
    setSelected((prev) => {
      const sectionSelected = prev[section] || [];
      return {
        ...prev,
        [section]: sectionSelected.includes(option)
          ? sectionSelected.filter((o) => o !== option)
          : [...sectionSelected, option],
      };
    });
  };

  const unselectAll = (section) => {
    setSelected((prev) => ({ ...prev, [section]: [] }));
  };

  return (
    <aside className="sidebar">
      {/* Customizable checkbox */}
      <div className="sidebar__customizable">
        <input type="checkbox" id="customizable" className="sidebar__checkbox" />
        <label htmlFor="customizable" className="sidebar__customizable-label">
          CUSTOMIZABLE
        </label>
      </div>

      {/* Filter Categories */}
      {Object.entries(filterData).map(([category, options]) => (
        <div key={category} className="sidebar__section">
          <button
            className="sidebar__section-header"
            onClick={() => toggleSection(category)}
            aria-expanded={!!openSections[category]}
          >
            <span>{category}</span>
            {openSections[category] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <p className="sidebar__all-label">All</p>

          {openSections[category] && (
            <div className="sidebar__options">
              <button
                className="sidebar__unselect"
                onClick={() => unselectAll(category)}
              >
                Unselect all
              </button>
              {options.map((option) => (
                <label key={option} className="sidebar__option">
                  <input
                    type="checkbox"
                    className="sidebar__checkbox"
                    checked={(selected[category] || []).includes(option)}
                    onChange={() => toggleOption(category, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}