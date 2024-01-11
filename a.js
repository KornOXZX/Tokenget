function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


process.title = "Processing"
const fs = require("fs");
async function main() {
  console.clear();
  ("use-scrict");
  const ps = require("prompt-sync");
  const prompt = ps();
  const colors = require("colors");
  console.log("[" + "1".brightBlue + "] [" + "TPP TOKEN GEN".green + "]"); //แก้ข้อความตรงโปรแกรม
  let choice = "2"
  let tokensname = "TPP ON TOP"//แก้ชื่อ token
  if (choice == 2) {
    let emailchoice = "2"
    let HowTokens = "10000000"
    const StealthPlugin = require("puppeteer-extra-plugin-stealth");
    const randchars = require("crypto");
    const puppeteer = require("puppeteer-extra");
    const RecaptchaPlugin = require("puppeteer-extra-plugin-recaptcha");
    const { uniqueNamesGenerator, animals } = require("unique-names-generator");
    const { PuppeteerBlocker } = require("@cliqz/adblocker-puppeteer");
    const { fetch } = require("cross-fetch");
    const fs = require("fs");

    const cfg = {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-infobars",
        "--window-position=0,0",
        "--window-size=1366,768",
      ],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      headless: false,
    };

    puppeteer.use(StealthPlugin());
    puppeteer.use(
      RecaptchaPlugin({
        provider: {
          id: "2captcha",
          token: 'b4851dc729c36d6776ac854e762af556'
        },
        visualFeedback: true,
        throwOnError: true,
      })
    );

    const accounts = fs.createWriteStream("token.txt", { flags: "a" });
    async function dsne(page, infoname, info) {
      const p = await page.$("input[name=" + infoname + "]");
      await p.focus();
      await page.keyboard.type(info);
    }

    async function cli(page, name, min, max) {
      var i = await page.$("input[id=" + name + "]");
      await i.click();

      var r = Math.floor(Math.random() * (max - min + 1)) + min;

      await page.waitForSelector("[class*=option]");
      await page.$eval(
        "[class$=option]",
        function (e, r) {
          e.parentNode.childNodes[r].click();
        },
        r
      );

      return r;
    }

    async function discordInput(dspagee, username, password, email) {
      await dspagee.bringToFront();
      await dspagee.goto(`https://discord.com/register`, {
        waitUntil: "networkidle0",
        timeout: 100000,
      });

      await cli(dspagee, "react-select-4-input", 17, 24);
      await cli(dspagee, "react-select-3-input", 0, 28);
      await cli(dspagee, "react-select-2-input", 0, 11);

      dspagee
        .waitForSelector("input[type*=text]")
        .then(() => {
          dspagee.$eval("input[type*=text]", (el) => el.click());
        })
        .catch((e) => { });
      dspagee
        .waitForSelector("input[type*=text]")
        .then(() => {
          dspagee.$eval("input[type*=text]", (el) => el.click());
        })
        .catch((e) => { });

      await dsne(dspagee, "username", username);
      await dsne(dspagee, "password", password);
      await dsne(dspagee, "email", email);
      await dspagee.$eval("button[type=submit]", (el) => el.click());
    }


    async function captchaby(DiscordPage) {
      try {
        await DiscordPage.waitForSelector("[src*=sitekey]");
        await DiscordPage.addScriptTag({ content: `hcaptcha.execute()` });

        while (true) {
          try {
            await DiscordPage.solveRecaptchas();
            return true;
          } catch (err) {
            sleep(3000);
          }
        }
      } catch (e) { }
    }

    async function genmail(page2) {
      if (emailchoice == 1) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction(
            (info_id) =>
              document.querySelector(info_id).value.indexOf("@") != -1,
            {},
            info_id
          );

          var email = await page2.$eval("#mail", (el) => el.value);
          return email;
        } catch (e) {
          return false;
        }
      } else if (emailchoice == 2) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://10minemail.com/", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction(
            (info_id) =>
              document.querySelector(info_id).value.indexOf("@") != -1,
            {},
            info_id
          );

          var email = await page2.$eval("#mail", (el) => el.value);
          return email;
        } catch (e) {
          return false;
        }
      } else if (emailchoice == 3) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#current-mail";

        try {
          await page2.waitForSelector("#current-mail");
          const element = await page2.$("#current-mail");
          const email = await page2.evaluate(
            (element) => element.textContent,
            element
          );
          return email;
        } catch (e) {
          return false;
        }
      }
    }

    async function emailvery(page2) {
      await page2.bringToFront();
      if (emailchoice == 1) {
        while (true) {
          try {
            await page2.waitForSelector("[title*=Discord]", { timeout: 500 });
            await page2.$eval("[title*=Discord]", (e) => e.parentNode.click());

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) { }
        }
      } else if (emailchoice == 2) {
        while (true) {
          try {
            await page2.waitForSelector("[title*=Discord]", { timeout: 500 });
            await page2.$eval("[title*=Discord]", (e) => e.parentNode.click());

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) { }
        }
      } else if (emailchoice == 3) {
        while (true) {
          try {
            await page2.waitForSelector("#inbox-dataList");
            await page2.click("#inbox-dataList");

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) { }
        }
      }
    }

    async function verif2(chrom, link) {
      const page = await chrom.newPage();
      await page.goto(link, { waitUntil: "networkidle0", timeout: 60000 });
      captchaby(page);
    }

    const nickname = [` ${tokensname}`];

    async function create_accinfos(chrome, disc) {
      const username = uniqueNamesGenerator({
        dictionaries: [animals, nickname],
        separator: " ",
        style: "capital",
        length: 2,
      });
      const password = "TPP GEN EZ ON TOP";  //แก้รหัสผ่าน
      const page2 = (await chrome.pages())[0];
      var email;

      while (!email) {
        try {
          email = await genmail(page2);
        } catch (e) { }
      }

      const dspage = disc;
      await discordInput(dspage, username, password, email);

      await captchaby(dspage);

      let verifyy = await emailvery(page2);
      await verif2(chrome, verifyy);
      var token = await dspage.evaluate(async () => {
        const token = (webpackChunkdiscord_app.push([
            [''], {},
            e => {
                m = [];
                for (let c in e.c) m.push(e.c[c])
            }
        ]), m).find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken();
        return token;
    })
      return `${email}|${password}|${token}`;
    }

    (async () => {
      for (let i = 0; i < HowTokens; i++) {
        const browser = await puppeteer.launch(cfg);
        try {
          const page = await browser.newPage();
          const infos = await create_accinfos(browser, page);
          accounts.write(infos + "\n");
        } catch (e) {
          console.log(e);
        } finally {
          try {
            await sleep(60000)
            browser.close();
          } catch (e) { }
        }
        await sleep(60000);
      }
      await sleep(1000);
      main();
    })();
  } else if (choice == 2) {
    console.log("TPP  GEN 999");
    let reactionChoice = prompt("[" + "?".brightBlue + "]>");
    reactionChoice = main();
  } else if (choice == 3) {
    await sleep(1000);
  } else {
    console.log("Whattt".red);
    await sleep(1000);
    main();
  }
}

main();
