import  { useState } from 'react';
import { Terminal,Clipboard } from 'lucide-react';

export default function NpxButton() {
  const [copied, setCopied] = useState(false);
  const npxCommand = 'npx devaditya';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(npxCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={copyToClipboard}
      className="code-button flex items-center group"
    >
      <Terminal size={16} className="mr-2" />
      <span className="font-mono">{npxCommand}</span>
      <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? 'Copied!' : <Clipboard size={20} />}
      </span>
    </button>
  );
}