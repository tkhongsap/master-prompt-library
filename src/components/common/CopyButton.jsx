import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className={`flex items-center px-3 py-1 rounded text-sm ${
        copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
      } hover:bg-opacity-80 transition-all`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-1" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </>
      )}
    </button>
  );
};

export default CopyButton; 