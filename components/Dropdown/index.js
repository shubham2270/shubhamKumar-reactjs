import React from "react";

const Dropdown = ({
  dropdownOpen,
  setDropdownOpen,
  selectedTag,
  setSelectedTag,
  fullWidth,
}) => {
  const tagList = ["All", "tag1", "tag2"];

  const handleDropdownTagSelect = (selected) => {
    if (selected === "All") {
      setSelectedTag("");
      setDropdownOpen(false);
    } else {
      setSelectedTag(selected);
      setDropdownOpen(false);
    }
  };

  return (
    <div
      className={`relative inline-block text-left ${fullWidth ? "w-full" : ""}`}
    >
      <div className='w-full'>
        <button
          type='button'
          className='inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
          id='menu-button'
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedTag.length > 0 ? selectedTag : "Select Tag"}
          {/* <!-- Heroicon name: solid/chevron-down --> */}
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {dropdownOpen ? (
        <div
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
        >
          <div className='py-1' role='none'>
            {tagList.map((item) => {
              return (
                <span
                  key={item}
                  className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-slate-50'
                  onClick={() => handleDropdownTagSelect(item)}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
