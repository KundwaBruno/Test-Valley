const useTheme = () => {
  const theme = localStorage.getItem('theme');

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const switchToLight = () => {
    localStorage.theme = 'light';
  };

  const switchToDark = () => {
    localStorage.theme = 'dark';
  };

  const useSystem = () => {
    localStorage.removeItem('theme');
  };

  return {
    switchToDark,
    switchToLight,
    useSystem,
    theme,
  };
};

export default useTheme;
