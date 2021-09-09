import bs from 'browser-sync';

export default function browserSync() {
  const files = [
    './*.html',
    './css/*css',
    './js/*.js',
    './img/*.{png,jpg,gif}'
  ];

  bs.init(files, {
    server: {
      baseDir: './'
    }
  });
};