## Development Notes

- `storybook-addon-jotai` necessitates the graphql overrides
- `@babel/runtime` is required for issues with nested deps of `@takeshape/cli`'s codegen
- Components with state coming from localstorage via Jotai's `atomWithStorage` should be wrapped in the `<ClientOnly />`
  component. This prevents rendering mismatches and stale / incorrect info.
- Navigation data is loaded into an Apollo cache variable via `addApolloQueryCache`. Files in the `src/data` folder
  should define queries to get data that need to be fetched and cached during `getStaticProps` in order to prevent a
  flash of unloaded data in common high visibility components, like the navigation, footer, etc... Add to the file
  `src/services/apollo/addApolloQueryCache.ts` following the pattern there to get other common data.
- The Shopify store is configured to redirect after checkout via the "Additional scripts" field (see the
  [docs](https://help.shopify.com/en/manual/orders/status-tracking/customize-order-status#add-additional-scripts)) for
  the order status page and uses the `redirect_origin` attribute set at cart creation:
- Captcha can be disabled in the client by removing `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` from the env. The Takeshape API
  will still require Captcha unless the Captcha compose step and `"if": "$resolvers.recaptcha.success == true"` is
  removed from the relevant mutations in the project schema.
- Shopify **must** use the `2022-04` endpoint, like this:
  `https://deluxe-sample-project.myshopify.com/admin/api/2022-04/graphql.json`

```erb
{% if checkout.attributes.redirect_origin %}
<script> window.location = "{{ checkout.attributes.redirect_origin }}/?shopify_checkout_action=success"; </script>
{% else %}
<script> window.location = "https://deluxe-sample-project.vercel.app/?shopify_checkout_action=success"; </script>
{% endif %}
```

# Deluxe ™️ Sample Project

A full-featured e-commerce experience using the best services out there:

- NextAuth for user authentication
- OpenID for greater identity management
- Gorgias for customer support
- Shopify Admin and Storefront for customer data, product info and payment processing
- Recharge for subscriptions
- Klaviyo for newsletter subscriptions
- REVIEWS.io for product reviews
- Voucherify for customer loyalty
- Ship Engine for shipping
- Tailwind UI for styling
- Next.js to build the pages and bundle it all up
- Vercel to host it
- **TakeShape's [ShapeDB](https://app.takeshape.io/docs/data/modeling) to host custom content**
- **TakeShape's [API Indexing](https://app.takeshape.io/docs/schema/api-indexing-guide/) to speed up queries over 50%,
  enable product search, and cache Shopify data**
- **TakeShape's [API Mesh](https://app.takeshape.io/docs/major-concepts) to bring all these features and services
  together in one unified GraphQL API**

```mermaid
graph TD
    A[Frontend NextJS Client] --> |Unified GraphQL API| Mesh{TakeShape's API Mesh}
    Mesh --> |User Authentication| OpenID
    Mesh --> |DDoS prevention| reCAPTCHA
    Mesh --> P{Products}
    P --> Shopify[Shopify Admin and Storefront]
    Mesh --> UP{User Profile}
    UP --> |Referrals| RC(Referral Candy)
    UP --> |Orders, Subscriptions, and Customer Data| Shopify
    UP --> |Newsletter| Klaviyo
    P --> |Product Reviews| REVIEWS.io
    UP --> |Reviews Written| REVIEWS.io
    UP --> |Shipping info| ShipEngine
    UP --> |Loyalty Points| Voucherify
    UP --> |Customer Support| Gorgias
    Shopify --> |Subscriptions| Recharge
```

## Screenshot

TKTK

## Instructions

To get started with this project, there are two basic steps:

1. Create a TakeShape project using the pattern in this repo. This button will deploy the project for you:

   - <a href="https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/takeshape-deluxe-sample-project/tree/main/.takeshape/pattern"><img alt="Deploy To TakeShape" src="https://camo.githubusercontent.com/1b580e3ce353d235bde0f376ca35b0fb26d685f3750a3013ae4b225dd3aaf344/68747470733a2f2f696d616765732e74616b6573686170652e696f2f32636363633832352d373062652d343331632d396261302d3130616233386563643361372f6465762f38653266376264612d306530382d346564652d613534362d3664663539626536613862622f4465706c6f79253230746f25323054616b65536861706525343032782e706e673f6175746f3d666f726d6174253243636f6d7072657373" width="205" height="38" data-canonical-src="https://images.takeshape.io/2cccc825-70be-431c-9ba0-10ab38ecd3a7/dev/8e2f7bda-0e08-4ede-a546-6df59be6a8bb/Deploy%20to%20TakeShape%402x.png?auto=format%2Ccompress" style="max-width:100%;"></a>

2. Clone this repo:

```bash
git clone https://github.com/takeshape/takeshape-deluxe-sample-project
```

3. Navigate to the project directory in your local terminal and run the `npm install` command to install all
   dependencies.

The following instructions will help you configure all of the services this project uses.

### NextAuth and OpenID

This project uses NextAuth in combination with the `@takeshape/next-auth-all-access` package for user authentication and
identity management. The following instructions will walk you through setting up OpenID as a service provider in your
TakeShape project, and configuring NextAuth with `@takeshape/next-auth-all-access`.

#### Setting up OpenID

1. In the **Home** tab of your TakeShape project, select **OpenID** from the list of services. You will be taken to the
   **OpenID** service configuration page.
   ![A screenshot of the Home tab in the deluxe sample project on TakeShape](/readme-images/home-tab-open-id-readme-images.png)

2. Add your store's URL to the **Issuer URL** field, and enter the same URL with
   `/api/auth/all-access/.well-known/openid-configuration` appended to the end of it in the **OpenID Configuration
   URL**.

   > Note: Your store URL should be the public-facing URL of your website, not necessarily your myshopify.com URL.

3. Copy the generated url in the **Audience** field and save it somewhere secure. You'll need it for your NextJS
   project's `.env` file.
4. Select the **Save** button at the top-right of the OpenID service page.

5. Now set up your `.env` variables in your NextJS project.
   - Set the `NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE` variable to the generated **Audience** URL from your OpenID provider.
   - Set the `NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER` variable to the same URL you provided for the **Issuer URL** field on
     your OpenID provider. This should be your store's URL.

#### Setting up NextAuth

To set up NextAuth, use our `@takeshape/next-auth-all-access` package to generate private keys:

```bash
npx @takeshape/next-auth-all-access generate-keys
```

You'll see three messages:

- "Add the following line to your .env file, this is your private key:"
- The generated private key. It should look like this:

```
NEXTAUTHOIDC_PRIVATE_KEY='-----BEGIN PRIVATE KEY-----\nYOUR PRIVATE KEY HERE\n-----END
PRIVATE KEY-----\n'
```

- "Writing your JWKS file to `'./keys/jwks.json'`"

Paste the line containing your private key into your `.env.local` file. If you're deploying with Vercel or another
platform, add the `NEXTAUTHOIDC_PRIVATE_KEY` variable to your environment variables, and set the value to the generated
private key.

You should also have a new `keys` directory with a `jwks.json` file with generated properties. It should look similar to
this:

```json
{
  "keys": [
    {
      "kty": "RSA",
      "n": "-V6bHaN66DSn7BYh97tmr0hnmXoASpGrZokQ",
      "e": "ABGA",
      "use": "sig",
      "alg": "RS256",
      "kid": "abcbf2c1ee7a6b2dc6564b783d334e32"
    }
  ]
}
```

### Setting up Shopify Admin and Shopify Storefront

> Warning! Connecting this project to a live Shopify store **WILL** enable real purchases. If you just want to play
> around without risking real charges,
> [set your store's payments to Test Mode](https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments)
> and use appropriately scoped API keys. When testing purchases, always use
> [Shopify's accepted fake credit card information](https://help.shopify.com/en/partners/dashboard/managing-stores/test-orders-in-dev-stores).

This project uses Shopify for e-commerce functionality. This README assumes you already have a Shopify store set up. You
don't need to have Shopify Plus to use any of the features described here.

Follow these instructions to connect your Shopify store's Admin and Storefront APIs to your TakeShape project, and the
frontend NextJS project.

1. [Create a Shopify store if you don't already have one](https://www.shopify.com/).

2. Navigate to your store's admin site by visiting `https://your-store.myshopify.com/admin`, substituting "your-store"
   with the name of your store.

3. Get your Storefront API keys.

   - In the navigation on the left side of your store's admin page, select **Apps**. A dropdown window should appear.
     Select **⚙ App and Sales Channel Settings** as shown in the image below.

   ![The admin page in shopify](/readme-images/store-admin-page-readme-images.png)

   - Select the **Develop apps for your store** button. On the next page, titled "App Development," select **Create an
     app** and name the app whatever you'd like. "Next.js App" for example.

     ![The Apps and Sales Channels page. Select Develop apps for your store.](/readme-images/admin-settings-page-readme-images.png)

     ![Select the Create an app button on the App development page.](/readme-images/create-app-button-readme-images.png)

   - You'll be taken to your app's settings page. Under the Overview tab, you'll see "Select your scopes to get
     started." Select **Configure Storefront API scopes**.

     ![A screenshot of the app development page where you can select the Configure Storefront API scopes button.](/readme-images/configure-storefront-scopes-readme-images.png)

- Enable the following scopes:

  - `unauthenticated_write_checkouts`
  - `unauthenticated_read_checkouts`
  - `unauthenticated_write_customers`
  - `unauthenticated_read_customers`
  - `unauthenticated_read_product_listings`
  - `unauthenticated_read_selling_plans`

  ![A screenshot of the storefront access scopes page](/readme-images/storefront-scopes-page-readme-images.png)

Then select **Save** at the top right of the page.

- Now select the API credentials tab. You'll see a section titled **Access tokens**. Select the **Install app** button
  within this section (not the button at the top-right).
  ![A screenshot of the API credentials tab, where you can select the Install app button to install your app and enable the Storefront API.](/readme-images/access-tokens-install-app-readme-images.png)
- You'll be returned to your app's settings page, where you can select the "API Credentials" tab again. You will now see
  a **Storefront API access token**. Copy it and save it. You'll need it to configure Shopify Storefront in your
  TakeShape project.

![A screenshot of the Storefront APi access token section](/readme-images/storefront-api-access-token-readme-images.png)

> If you want to test this app without enabling real payments, it's best to set up test payments while you're in
> Shopify's admin UI.
> [Follow our section below on setting up test shopify payments to learn more](#Setting-up-test-payments-in-Shopify).

#### Connecting the Shopify service to TakeShape

To use Shopify with this project, you'll need to connect your Shopify Admin API and Shopify Storefront API.

##### Connecting Shopify Admin

Navigate to your TakeShape project's dashboard and select the **Home** tab. Select the **Shopify** service and add your
store's myshopify.com URL to the **myshopify.com URL** field. The format of the URL is your store's name +
myshopify.com. `https://example-shop.myshopify.com`

Select **Save** and complete the setup flow in the Shopify browser tab that opens up. If you've already connected
TakeShape to this shop before, you may not have to do anything on Shopify. After you complete the Shopify setup flow,
you'll be taken to the API Indexing setup flow in TakeShape. Skip it. No further configuration is needed for Shopify
Admin.

##### Connecting Shopify Storefront

Back in the **Home** tab of your project, select the Shopify Storefront service. It will be a generic GraphQL service,
with the GraphQL logo.

In the **Endpoint** field, enter your store's Shopify Storefront endpoint. It will be of the format
`https://store-name.myshopify.com/api/[version-number]/graphql.json`.

Here's what ours looked like when we set up this project in June of 2022:

```
https://deluxe-store.myshopify.com/api/2022-01/graphql.json
```

For **Authentication Type**, select **Bearer Token**.

- In the **Header** field, enter `X-Shopify-Storefront-Access-Token`.
- In the **Token** field, enter the Storefront API access token you copied from your store's myshopify.com/admin page.

Now your Shopify store is configured for this project. The next section is about setting up test payments if you don't
want to enable real payments.

Not interested? [Skip to our Recharge section below to set up subscriptions in your store](#recharge).

#### Setting up test payments in Shopify

### Setting up Recharge

> NOTE: To add Recharge to your store, you must have payments enabled in your store settings. Just testing things out?
> Set up payments in test mode by following
> [our instructions from earlier in this readme](#setting-up-test-payments-in-shopify).

This section walks you through adding Recharge to your Shopify store, and configuring the Recharge service in your
TakeShape project.

1. To add Recharge to your shop, navigate to Recharge Subscriptions in the shopify app store:
   https://apps.shopify.com/subscription-payments

   - Select the "Add app" button to install it to your shopify store.

2. Configure your products to offer subscriptions through Recharge.

   - Navigate to your store's admin page by visiting your store's myshopify domain and adding /admin to the end of the
     url. It should look like this: `https://your-store.myshopify.com/admin`.

   - Select "Apps" in the navbar on the left, then click on Recharge in the installed apps list.

   ![The installed apps list in your shopify admin page](./readme_images/recharge-installed.png)

   - If Recharge sends you to an error page with the message "Sorry, Shopify says your store is ineligible for
     subscriptions", that means you haven't configured shopify payments for your store yet. Do so by following
     [the instructions above](#setting-up-test-payments). You can also follow
     [Recharge's instructions here](https://support.rechargepayments.com/hc/en-us/articles/360056542474-Shopify-Checkout-Integration-FAQ#h_01EV7H6EQQBTFM78E63RA03R13).

   - If you were redirected to Recharge, navigate to "Products" by selecting "Products" in the navbar at the top, then
     selecting "Products" in the dropdown.

   - Select "Add products" on the top-right of the products page.

   ![The products page](./readme_images/add-products.png)

   - Select the products you would like to add subscriptions for, then configure the subscription type as "One-time and
     subscription". Configure the rest of the product as you'd like, then hit Save.
     - For the purposes of this starter, DO NOT set the product to "Subscription only" or "Pre-paid subscription only".

   ![Product configuration page in recharge](./readme_images/save-product-recharge.jpg)

3. Configure your Recharge account's permissions to enable API access.

   - In your Recharge dashboard, navigate to the Accounts page in the Settings by hovering over the wrench icon and
     selecting "Accounts".

   ![Accounts in settings in recharge](./readme_images/wrench.PNG)

   - On this page, select "Edit store defaults" and check all boxes on the Store default permissions page. When done,
     select "Update store default permissions".

   - Navigate to "Integrations" in the navbar at the top, then select "API Tokens" at the top-right.

   ![API Tokens in recharge](./readme_images/api-tokens.png)

   - Select "Create an API Token", then configure the token with an appropriate name and email. Grant "Read and Write
     access" to all permissions.

   ![Permissions in recharge](./readme_images/recharge-access.PNG)

   - You’ll be taken back to the API tokens page where you’ll see your API key. Save it. It should look like:
     `sk_1x1_abcd123357e5d85ab72250e3116d8a4b1c429ba3cde9a872c827c8ad1f71901d`

4. Configure Recharge in your TakeShape Project.

   - Set up your Recharge service.
     - Select **Recharge** from the list of services in the `API` tab, in the `Patterns & Services` pane.
     - Under **Authentication**, Enter `X-Recharge-Access-Token` into the Header field, and your Recharge access token
       into the Token field.
     - **Save** the service.

- Select "Settings" at the bottom-left of your store's admin page. On the new page that appears, select "Payments" in
  the navigation on the left.

- In the Shopify Payments section, you'll see Shopify Payments. Complete the steps to activate it, then select "Manage".

![The Payments page](./readme_images/manage-payments.png)

- Scroll to the bottom of the next page and check the "Enable test mode" checkbox.

- Select "Save" at the bottom-right of the page.

5. Configure your store's checkout. All of the following instructions require you to navigate to the settings of your
   store's admin page. In the navbar on the left, select Checkout.

   - Enable optional customer accounts for checkouts.

     - Under the "Customer accounts" section of the Checkout page, select "Accounts are optional".

     ![Customer accounts section of the Checkout page](./readme_images/customer-accounts.png)

   - Set up your store to redirect users to `http://localhost:3000/purchases` after they finish a checkout.

     - In the Checkout page of your store's settings, scroll down to the section labeled "Order status page scripts".

     - Enter `<script> window.location = "http://localhost:3000/?shopify_checkout_action=success"; </script>` into the
       "Scripts" textbox.

     ![The Order status page scripts section](./readme_images/checkout-script.png)

6. Configure your store in TakeShape

   - Set up your Shopify Storefront service.
     - Select **Shopify Storefront** from the list of services in the `API` tab, in the `Patterns & Services` pane.
     - Under **Endpoint**, enter your storefront api endpoint. It should look like
       `https://your-store.myshopify.com/api/2022-01/graphql.json`
     - Under **Authentication**, Enter `X-Shopify-Storefront-Access-Token` into the Header field, and your Storefront
       access token into the Token field.
     - **Save** the service.
   - Set up your Shopify Admin service.
     - Select **Shopify Admin** from the list of services on the `API` tab, in the `Patterns & Services` pane.
     - Under **myshopify.com URL**, Enter your store's myshopify.com domain, which will look like
       `https://your-store.myshopify.com`
     - **Save** the service.
     - Select the "Update Schema" button at the bottom-right of the next dialog that appears.
     - Select the "Skip" button at the bottom-right of the dialog that appears asking you to import data, queries and
       mutations.

### Running the Starter

1. Head over to your trusty terminal or tool of choice.

   - Clone this repo with `git clone https://github.com/takeshape/takeshape-starter-auth0-shopify`.
   - `cd` into the folder that the cloning created.
   - Run `mv .env.local-example .env.local` to rename the environment variables file.
   - Run `npm install`.

2. Follow the instructions in `.env.local`.

   - Some of the data you enter will be from Auth0, some will be from your TakeShape project

3. Run `npm run dev` to start the application and open [http://localhost:3000](http://localhost:3000) with your browser
   to play around!

4. First, login using a valid Auth0 or third-party account. You can also sign up for a new account.

5. Go to the homepage, select a product and payment terms then add it to your cart.

6. Click the Cart icon in the top nav. Review your cart, then click `Checkout Now`.

7. On the Shopify Checkout page, use one of the
   [Shopify test credit card numbers](https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments#simulate-successful-transactions).
   `4242 4242 4242 4242` is commonly used, and will allow you to complete a successful purchase with no secondary
   authentication.

8. Upon a successful purchase you should be directed back to your dev site.

9. Try canceling a subscription from your **Purchases** page.

10. Play around, update your profile, create more users, more purchases. Try products with multiple prices...

### Known Limitations

- Due to limitations in the way Recharge interacts with Shopify, products configured for "Subscription only" in Recharge
  may not be rendered on the product page of this starter. We will address this in future updates to this codebase.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Running the Starter

1. Head over to your trusty terminal or tool of choice.

   - Clone this repo with `git clone https://github.com/takeshape/takeshape-starter-deluxe-sample-project.git`.
   - `cd` into the folder that the cloning created.
   - Run `cp .env.local-example .env.local` to rename the environment variables file.
   - Run `npm install`.

2. Follow the instructions in `.env.local`.

3. Run `npm run dev` to start the application and open [http://localhost:3000](http://localhost:3000) with your browser
   to play around!

## Known Limitations

TKTK

## Deploying to Production

1. Replace all public placeholder assets
2. Update `robots.txt`

## Learn More

TKTK

TEST TEST TEST
