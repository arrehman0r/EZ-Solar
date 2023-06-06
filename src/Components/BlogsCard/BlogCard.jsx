import React, { useState } from 'react';


// Component for displaying the blog card
export const BlogCard = ({ title, subtitle, imageUrl, content, Link }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const truncatedSubtitle = subtitle.substring(0, 90); // Limit the subtitle to 60 characters
  const shouldTruncate = subtitle.length > 90;

  // const toggleContent = () => {
  //   setShowFullContent(!showFullContent);
  // };

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <img className="rounded-t-lg" src={imageUrl} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            {shouldTruncate && !showFullContent ? `${truncatedSubtitle}...` : subtitle}
          </p>
          {!showFullContent && shouldTruncate && (
            <button
              className="text-blue-600 hover:underline focus:outline-none"
              onClick={Link}
            >
              See More
            </button>
          )}
          {showFullContent && <p>{content}</p>}
        </div>
      </div>
       </div>
  );
};
