const { Given, When } = require("@cucumber/cucumber");

Given("Selesforce login page should open {string}", async (arg1) => {
  await browser.url(arg1);
  await browser.maximizeWindow();
});

When("i enter {string} as {string}", async (arg2, value) => {
  var x = `(//*[@id='${arg2}'])`;
  console.log("********************", x, value);
  await $(x).setValue(value);
});

When("I will click on {string} Button", async (arg1) => {
  var x = `//*[contains(@value,'${arg1}')]`;
  console.log(x);
  await $(x).click();
});

// When("I click on Contact Name {string} as {string}", async (arg1) => {
// var x = '(//*[contains(text(),"' + arg1 + '")])';
// console.log("***************",x);
// await $(x).click();
// });

When("I click on {string} Tab", async (arg1) => {
  var x = '(//a[contains(text(),"' + arg1 + '")])[1]';
  console.log(x);
  await $(x).click();
});

When("I enter {string}{string}", async (arg1, arg2) => {
  var x = '(//*[contains(text(),"' + arg1 + '")])' + arg2;
  console.log(x);
  await $(x).click();
});

When("I wait for {string}", async (arg1) => {
  await browser.pause(arg1);
});

When("I enter the {string} as {string}", async (arg2, value) => {
  var x = `(//*[@id="${arg2}"])`;
  console.log(x);
  await $(x).setValue(value);
});

When("I click on {string}", async (arg1) => {
  var x = `//th//a[contains(text(),'${arg1}')]`;
  console.log("*********", x);
  await $(x).click();
});

When("I click ok at the time of delete popup", async () => {
  await browser.acceptAlert();
});

When("I will click {string}", async (arg1) => {
  var x = `//*[(@id = "${arg1}")]`;
  await $(x).click();
});
When("I will {string}", async (arg1) => {
  var x = `//*[@title = "${arg1}"]`;
  await $(x).click();
});

When("I select Submit a sample Button", async () => {
  var x = "//a[contains(text(),'View Report (New Expected Date)')]";
  console.log("***********", x);
  await $(x).click();
});
