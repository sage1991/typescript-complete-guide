import { Writer } from "../Writer";
import fs from "fs";

class HtmlWriter implements Writer {
  write(message: string): void {
    const html = `
      <div>
        <h1>Analysis output</h1>
        <div>${message}</div>
      </div>
    `;
    fs.writeFileSync("report.html", html, { encoding: "utf-8" });
  }
}

export { HtmlWriter };