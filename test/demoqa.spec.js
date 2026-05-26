// /**
//  * Playwright automation — demoqa.com/automation-practice-form
//  * Fills all fields and prints the confirmation table.
//  */

// const { chromium } = require('playwright');
// const fs = require('fs');

// const formData = {
//   firstName: 'Naveen',
//   lastName: 'Kumar',
//   email: 'naveen.kumar@example.com',
//   genderRadioId: 'gender-radio-1',   // 1=Male 2=Female 3=Other
//   mobile: '9876543210',
//   dateOfBirth: { day: '15', month: 'March', year: '1990' },
//   subjects: ['Maths', 'Computer Science'],
//   hobbies: ['Sports', 'Reading'],
//   currentAddress: '123, Dwarka Sector 10\nNew Delhi - 110075',
//   state: 'NCR',
//   city: 'Delhi',
// };

// async function clearAds(page) {
//   await page.evaluate(() =>
//     document.querySelectorAll('#fixedban, iframe').forEach((el) => el.remove())
//   );
// }

// function createDummyJpeg(path) {
//   const hex =
//     'ffd8ffe000104a46494600010100000100010000ffdb00430008060607060508' +
//     '0707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720' +
//     '222c231c1c2837292c30313434341f27393d38323c2e333432ffc0000b0800010' +
//     '00101011100ffc4001f0000010501010101010100000000000000000102030405' +
//     '060708090a0bffda00080101000000013fffd9';
//   fs.writeFileSync(path, Buffer.from(hex, 'hex'));
// }

// async function run() {
//   const browser = await chromium.launch({
//     headless: true,
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//   });
//   const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

//   console.log('Navigating...');
//   await page.goto('https://demoqa.com/automation-practice-form', {
//     waitUntil: 'domcontentloaded',
//     timeout: 30000,
//   });
//   await clearAds(page);

//   // 1. First & Last Name
//   console.log('Name...');
//   await page.fill('#firstName', formData.firstName);
//   await page.fill('#lastName', formData.lastName);

//   // 2. Email
//   console.log('Email...');
//   await page.fill('#userEmail', formData.email);

//   // 3. Gender (click the visible label, not the hidden radio)
//   console.log('Gender...');
//   await page.click(`label[for="${formData.genderRadioId}"]`);

//   // 4. Mobile
//   console.log('Mobile...');
//   await page.fill('#userNumber', formData.mobile);

//   // 5. Date of Birth
//   console.log('Date of birth...');
//   await page.click('#dateOfBirthInput');
//   await page.waitForSelector('.react-datepicker', { timeout: 5000 });
//   await page.selectOption('.react-datepicker__year-select', { label: formData.dateOfBirth.year });
//   await page.selectOption('.react-datepicker__month-select', { label: formData.dateOfBirth.month });
//   await page.evaluate((day) => {
//     document
//       .querySelectorAll('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
//       .forEach((d) => { if (d.textContent.trim() === day) d.click(); });
//   }, formData.dateOfBirth.day);

//   // 6. Subjects
//   console.log('Subjects...');
//   for (const subject of formData.subjects) {
//     await page.fill('#subjectsInput', subject);
//     await page.waitForSelector('.subjects-auto-complete__option', { timeout: 5000 });
//     await page.click('.subjects-auto-complete__option');
//   }

//   // 7. Hobbies (click labels by text)
//   console.log('Hobbies...');
//   const hobbyLabels = await page.locator('label[for^="hobbies-checkbox"]').all();
//   for (const label of hobbyLabels) {
//     const text = (await label.textContent()).trim();
//     if (formData.hobbies.includes(text)) await label.click();
//   }

//   // 8. Picture upload
//   console.log('Picture...');
//   const photoPath = '/tmp/playwright-test-photo.jpg';
//   createDummyJpeg(photoPath);
//   await page.locator('#uploadPicture').setInputFiles(photoPath);

//   // 9. Current Address
//   console.log('Address...');
//   await page.fill('#currentAddress', formData.currentAddress);

//   // 10. State
//   console.log('State...');
//   await page.click('#state');
//   await page.waitForSelector('#react-select-3-listbox', { timeout: 5000 });
//   for (const opt of await page.locator('[id^="react-select-3-option"]').all()) {
//     if ((await opt.textContent()).trim() === formData.state) { await opt.click(); break; }
//   }

//   // 11. City
//   console.log('City...');
//   await page.waitForTimeout(400);
//   await page.click('#city');
//   await page.waitForSelector('#react-select-4-listbox', { timeout: 5000 });
//   for (const opt of await page.locator('[id^="react-select-4-option"]').all()) {
//     if ((await opt.textContent()).trim() === formData.city) { await opt.click(); break; }
//   }

//   // 12. Submit
//   console.log('Submitting...');
//   await clearAds(page);
//   await page.evaluate(() => document.querySelector('#submit').scrollIntoView());
//   await page.waitForTimeout(500);
//   await page.evaluate(() => document.querySelector('#submit').click());

//   // 13. Confirmation
//   console.log('Waiting for confirmation...');
//   await page.waitForTimeout(4000);

//   const hasModal = await page.evaluate(() => !!document.querySelector('.modal-dialog'));
//   if (!hasModal) {
//     // Try native Playwright click as fallback
//     await page.click('#submit');
//     await page.waitForTimeout(4000);
//   }

//   const title = await page.textContent('.modal-title').catch(() => 'N/A');
//   console.log('\n✅  Success:', title);

//   const rows = await page.$$eval('.table-responsive tbody tr', (trs) =>
//     trs.map((r) => {
//       const c = r.querySelectorAll('td');
//       return { label: c[0]?.textContent.trim() ?? '', value: c[1]?.textContent.trim() ?? '' };
//     })
//   );

//   console.log('\nConfirmation Table');
//   console.log('═'.repeat(55));
//   rows.forEach((r) => console.log(`  ${(r.label || '').padEnd(22)}: ${r.value}`));
//   console.log('═'.repeat(55));

//   await page.screenshot({ path: '/home/claude/demoqa-automation/form-submitted.png' });
//   console.log('\nScreenshot saved → form-submitted.png');

//   await browser.close();
//   console.log('\nAutomation complete!\n');
// }

// run().catch((e) => { console.error('\n❌ Error:', e.message); process.exit(1); });