const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
import { enterPageObj } from "./enterPageObj";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();