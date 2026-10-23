# URCODE 일본 고객사 안내

URCODE 기술·도입 상세 답변 한국어 검토본을 게시하는 정적 웹사이트입니다.

- 웹사이트: https://happyness980817.github.io/ur_japan/
- 첫 화면: `index.html`
- 스타일: `urcode-response.css`
- 이미지: `assets/`

## 수정 및 배포

`index.html`, `urcode-response.css`, `assets/`를 수정한 뒤 `main` 브랜치에 커밋하고 푸시합니다.
GitHub Pages는 `main` 브랜치의 저장소 루트(`/`)를 게시합니다. 별도 빌드 과정은 없습니다.

```powershell
cd C:\ur_japan
git add index.html urcode-response.css assets
git commit -m "Update URCODE response"
git push
```