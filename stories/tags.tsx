import React from 'react';

interface TagProps {
  variant: 'default' | 'secondary' | 'destructive' | 'outline';
}

const Tags: React.FC<TagProps> = ({ variant }) => {
  let tagClass = '';

  switch (variant) {
    case 'destructive':
      tagClass = 'bg-red-500 text-white border-none'; // Tailwind 样式：红色背景，白色文字
      break;
    case 'secondary':
      tagClass = 'bg-gray-200 text-gray-700 border-none'; // 灰色背景，深灰色文字
      break;
    case 'outline':
      tagClass = 'bg-transparent text-gray-700 border border-gray-400'; // 无背景，灰色边框和文字
      break;
    default:
      tagClass = ''; // 保留原来的默认基础样式，不改变
  }

  return (
    <span className={`px-2 py-1 rounded ${tagClass}`}>
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Tag
    </span>
  );
};

export default Tags;
