import { connect } from "https://deno.land/x/cotton@v0.6.3/mod.ts";
import { Application } from "https://deno.land/x/abc@v1.0.2/mod.ts";
import { reduce, merge } from "https://deno.land/x/lodash@4.17.15-es/lodash.js";

const app = new Application();

const payouts = async () => {
  const db = await connect({
    type: "sqlite",
    database: "../../db/payouts.db",
  });

  let images = [
    { image: "01" },
    { image: "02" },
    { image: "15" },
    { image: "21" },
    { image: "26" },
    { image: "31" },
    { image: "36" },
    { image: "46" },
    { image: "48" },
    { image: "59" },
  ];

  const payouts = await db.query("SELECT merchant_id, SUM(amount) AS amount FROM payouts GROUP BY merchant_id");
  console.log(payouts)
  return merge(payouts,images)
  // return reduce(payouts, (list, item) => {
  //   return {...list, [item.MERCHANT_ID]: item.amount}
  // }, {});
}

app
  .get("/api/payouts", () => payouts())
  .start({ port: 8080 });

console.log(`server listening on http://localhost:8080`);