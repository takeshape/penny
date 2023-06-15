import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter-roman.var.woff2',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: '../../public/fonts/inter-italic.var.woff2',
      weight: '100 900',
      style: 'italic'
    }
  ],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});
