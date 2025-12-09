
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  // const [isDark, setIsDark] = useState(true);

  // const toggleTheme = () => {
    // setIsDark(!isDark);
    // Since we're using a dark theme by default, this is just for visual effect
    // In a real implementation, you would toggle between light/dark themes
  // };

  return (
    <Button
      // onClick={toggleTheme}
      // className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-500/20 hover:bg-red-500 border border-red-500/50 backdrop-blur-sm z-40 transition-all duration-300 hover:scale-110"
      size="icon"
    >
      {/* <span className="text-2xl">{isDark ? '🌙' : '🌞'}</span> */}
    </Button>
  );
};

export default ThemeToggle;
