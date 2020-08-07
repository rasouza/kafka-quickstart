import { connect } from "https://deno.land/x/cotton@v0.6.3/mod.ts";
import { Application } from "https://deno.land/x/abc@v1.0.2/mod.ts";
import { reduce } from "https://deno.land/x/lodash@4.17.15-es/lodash.js";

const app = new Application();

const payouts = async () => {
  const db = await connect({
    type: "sqlite",
    database: "../../db/payouts.db",
  });

  const payouts = await db.query("SELECT merchant_id, SUM(amount) AS amount FROM payouts GROUP BY merchant_id");
  console.log(payouts)
  return reduce(payouts, (list, item) => {
    return {...list, [item.MERCHANT_ID]: item.amount}
  }, {});
}

app
  .get("/", () => payouts())
  .start({ port: 8080 });

console.log(`server listening on http://localhost:8080`);