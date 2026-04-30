const { test, expect } = require('@playwright/test');

test('포트폴리오 메인 페이지 가독성 및 주요 요소 확인', async ({ page }) => {
  // 로컬 파일 경로 대신 웹 서버를 띄워야 하지만, 여기서는 구조만 작성
  // 실제 제출 시에는 GitHub Pages URL 등으로 테스트 가능
  await page.goto('file:///home/ubuntu/qa-portfolio-manus/index.html');
  
  // 타이틀 확인
  await expect(page).toHaveTitle(/성기현/);
  
  // 핵심 키워드 확인
  const summary = page.locator('.summary-box');
  await expect(summary).toContainText('벙커키즈');
  await expect(summary).toContainText('AI 캐릭터 채팅');
  
  // 경력 사항 확인
  const expItems = page.locator('.exp-item');
  await expect(expItems).toHaveCount(3);
});

test('사이드바 연락처 정보 확인', async ({ page }) => {
  await page.goto('file:///home/ubuntu/qa-portfolio-manus/index.html');
  const sidebar = page.locator('.sidebar');
  await expect(sidebar).toContainText('010-8732-9690');
  await expect(sidebar).toContainText('kihyun.qa@gmail.com');
});
