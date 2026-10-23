# URCODE 일본 고객사 안내

URCODE 기술·도입 상세 답변을 한국어와 일본어로 제공하는 정적 웹사이트입니다.

- 웹사이트: https://happyness980817.github.io/ur_japan/
- 첫 화면: `index.html`
- 일본어: `ja.html`
- 스타일: `urcode-response.css`
- 이미지: `assets/`

## 수정 및 배포

`index.html`(한국어), `ja.html`(일본어), `urcode-response.css`, `assets/`를 수정한 뒤 `main` 브랜치에 커밋하고 푸시합니다.
GitHub Pages는 `main` 브랜치의 저장소 루트(`/`)를 게시합니다. 별도 빌드 과정은 없습니다.

상단 언어 버튼은 각 언어의 정적 HTML 페이지로 연결되며, JavaScript 없이도 전환됩니다.
본문을 수정할 때는 두 언어의 내용과 수치, 출처를 함께 확인합니다. 기사 원문 캡처 이미지는 유지하고 일본어 페이지에 번역을 함께 표시합니다.
CSS를 변경하면 두 HTML의 스타일시트 `?v=` 값도 함께 갱신합니다.

```powershell
cd C:\ur_japan
git add index.html ja.html urcode-response.css assets
git commit -m "Update URCODE response"
git push
```
