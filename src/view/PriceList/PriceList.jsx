import { dictionary } from "../../dictionary";

export function PriceList() {
  return (
    <>
      <h1>{dictionary.price_page.price_page_head}</h1>
      <h2>{dictionary.price_page.price_page_subscription}</h2>
      <p>{dictionary.price_page.price_page_subscription_price}</p>
      <h2>{dictionary.price_page.price_page_one_offer}</h2>
      <p>{dictionary.price_page.price_page_one_offer_price}</p>
      <h2>{dictionary.price_page.price_page_vip_offer}</h2>
      <p>{dictionary.price_page.price_page_vip_price}</p>
      <h1>{dictionary.price_page.price_page_info_head}</h1>
      <h3>{dictionary.price_page.price_page_info_one}</h3>
      <h3>{dictionary.price_page.price_page_info_two}</h3>
      <h3>{dictionary.price_page.price_page_info_three}</h3>
      <h3>{dictionary.price_page.price_page_info_four}</h3>
    </>
  );
}
