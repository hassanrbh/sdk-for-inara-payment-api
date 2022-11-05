import { Base } from "./base";
import { Books } from "./books";
import { Order } from "./orders";
import { applyMixins } from "./utils";

class Inara extends Base {}
interface Inara extends Books, Order {}

applyMixins(Inara, [Books, Order]);

export default Inara;
