# Trustpilot

Trustpilot reviews are disabled by default. When enabled, Trustpilot reviews for the matching SKU are shown on the product page. If you want to use Trustpilot reviews complete the following steps:

### 1. Configure Trustpilot
You'll need the [Trustpilot Connect](https://business.trustpilot.com/plans#addons) add-on module to proceed. To check if
you have it, check if "APIs" is available under Integrations > Developers in the
[Trustpilot business site](https://businessapp.b2b.trustpilot.com/integrations/developers).

  1. First, you'll need your business profile name. Go to
   [your business settings](https://businessapp.b2b.trustpilot.com/settings/) and make note of the name next to the text
   "Profile settings:"
  2. Second, you'll need an API Key.
   [Either create an application or select an existing application](https://businessapp.b2b.trustpilot.com/applications/),
   then copy the API key for the application.
  3. Now use the API key to find your business unit ID. The easiest way is to run this command in your terminal after
   replacing YOUR_API_KEY with your API Key and PROFILE_NAME with your business profile name from the previous steps.

```
curl --request GET \
  --url 'https://api.trustpilot.com/v1/business-units/find?apikey=YOUR_API_KEY&name=PROFILE_NAME'
```

- In the JSON response the business unit ID is the value for the `id` property.


### 2. Connect Trustpilot to TakeShape
On your TakeShape project's dashboard, navigate to the **Home** tab and select **Trustpilot** from the list of
   services. You'll be taken to the **Generic REST** service page for **Trustpilot**.

- In the **Endpoint** field, replace the example business unit ID at the end of the URL with your business unit ID. It
  should look like this: `https://api.trustpilot.com/v1/product-reviews/business-units/YOUR_BUSINESS_UNIT_ID`

- In the **Authentication Type** field, ensure **Query Parameter** is selected.

- Under **Authentication**, add `apikey` in the **Query Param** field, and your API Key in the **Token** field.

- Select the **Save** button at the top-right of the page.


### 3. Enable Trustpilot in Penny

- Edit `src/config/reviews.ts` and set `enableTrustpilot` to `true`
- Edit `src/features/ProductPage/queries.takeshape.ts` and add the fragments from `docs/trustpilot/query-fragment.graphql` to the `ProductPageShopifyProduct` query
- Edit `src/features/ProductPage/transforms.ts` and uncomment `getTrustpilotProductReviews`
- Commit changes
- Run `npm run graphql:typegen`
