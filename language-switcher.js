// Keep the Korean document active while the Japanese version is in preparation.
const languageNotice = document.getElementById('language-notice');

document.getElementById('language-ja').addEventListener('click', () => {
  languageNotice.textContent = '일본어 버전은 준비 중입니다.';
});

document.getElementById('language-ko').addEventListener('click', () => {
  languageNotice.textContent = '';
});
