import { Base } from "../base";
import { OrderType } from "./types";

const resource = "api/v2/orders";
export class Order extends Base {
  async Interseptors(inte: OrderType) {
    await this.createOrder(inte);
    await this.getAllOrders();
  }

  createOrder(order: OrderType): Promise<OrderType> {
    return this.rq(`/${resource}`, {
      method: "POST",
      body: JSON.stringify({
        order: {
          status: order.status,
        },
      }),
    });
  }

  getAllOrders() {
    const req = this.rq(`/${resource}`);
    return req.then((res) => console.log(res));
  }
}
