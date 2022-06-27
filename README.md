# Deluxe ™️ sample project

The easiest way to know if a tool is right for you is to see it in action.

That's why we built the Deluxe sample project—a production-ready composable e-commerce experience that uses the most
popular modern API services and frontend technologies. Check out the store now at
https://deluxe-sample-project.vercel.app/.

This project has two major elements:

- The Next.js frontend
- The TakeShape project that composes the e-commerce services on the backend.

TakeShape's API Mesh functionality empowers e-commerce brands to manage their favorite API services in a single
interface, then generate a GraphQL API that combines all the functionality from those connected services. This generated
API can be consumed by any frontend to build any ecommerce experience for any sales channel.

This project will demonstrate how you can use TakeShape to build a modern e-commerce experience.

You can clone this repo with git to run the Next.js frontend locally
(`git clone https://github.com/takeshape/takeshape-deluxe-sample-project`). To connect it to the unified e-commerce
backend that TakeShape provides, just deploy the pattern in the `.takeshape/pattern` directory.
[The instructions section of this README will teach you how to do that](#instructions).

## How it works

### The TakeShape project pattern

This starter's TakeShape project composes the following services into a unified GraphQL API:

- OpenID for identity management
- ReCAPTCHA for security
- Gorgias for customer support
- Shopify Admin and Storefront for customer data, product info and payment processing
- Recharge for product subscriptions
- Klaviyo for newsletter subscriptions
- REVIEWS.io for product reviews
- Voucherify for customer loyalty rewards
- Ship Engine for shipping management

But TakeShape isn't just the composition layer for the services—it also enables functionality that can take most
headless e-commerce deployments to the next level:

- **TakeShape's [API Indexing](https://app.takeshape.io/docs/schema/api-indexing-guide/) speeds up product queries by
  over 50%—from 400ms to under 200ms—and enables product search on the frontend**
- **TakeShape's [ShapeDB](https://app.takeshape.io/docs/data/modeling) hosts some of the custom content used in this
  build.**

```mermaid
graph TD
    A[Frontend Next.js Client] --> |Unified GraphQL API| Mesh{TakeShape's API Mesh}
    Mesh --> |User Authentication| OpenID
    Mesh --> |DDoS prevention| reCAPTCHA
    Mesh --> P{Products}
    P --> Shopify[Shopify Admin and Storefront]
    Mesh --> UP{User Profile}
    UP --> |Orders, Subscriptions, and Customer Data| Shopify
    UP --> |Newsletter| Klaviyo
    P --> |Product Reviews| REVIEWS.io
    UP --> |Reviews Written| REVIEWS.io
    UP --> |Shipping info| ShipEngine
    UP --> |Loyalty Points| Voucherify
    UP --> |Customer Support| Gorgias
    Shopify --> |Subscriptions| Recharge
```

### The frontend stack

The frontend codebase was built with many features that are important for modern composable e-commerce storefronts,
including:

#### Frameworks, language and styling

To demonstrate TakeShape in the most popular use-case, here are the frameworks, language and styling options we went
with for this build:

- [Next.js](https://nextjs.org/) to build the pages and bundle the frontend up
- [NextAuth](https://next-auth.js.org/) for user authentication
- [Tailwind UI](https://tailwindui.com/) for plug-and-play components that are easy to customize
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Apollo Client](https://www.apollographql.com/docs/react/) for state management when querying the TakeShape project's
  API
- [Jotai](https://jotai.org/) for optimized component state management
- [Storybook](https://storybook.js.org/) for rapid UI prototyping

#### Testing

Testing is a crucial part of modern web development, and our suite of testing tools matches many of the most popular
stacks in the industry:

- [Cypress](https://www.cypress.io/) for frontend end-to-end testing and API service mocking
- [Sentry](https://sentry.io/welcome/) for error reporting and health monitoring
  [with their Next.js-specific SDK](https://docs.sentry.io/platforms/javascript/guides/nextjs/).
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for error checking and code formatting
- [Jest](https://jestjs.io/) for React component testing.
- [Lighthouse](https://web.dev/lighthouse-seo/) for SEO and browser performance metrics
- [Chromatic](https://www.chromatic.com/) for automated testing in github PRs

#### TakeShape's tools

We also used a few tools from TakeShape's ecosystem to simplify our workflow and improve the development process:

- [Next-Auth-All-Access](https://github.com/takeshape/next-auth-all-access#nextauthallaccess) — Our NextAuth wrapper
  that provides JWKS-verifiable access tokens for third-party APIs.
- [@takeshape/cli](https://app.takeshape.io/docs/cli) — Our CLI that makes linking a frontend project with a TakeShape
  project easy. The CLI empowers frontend developers to make updates to their TakeShape project schema, validate changes
  to the schema from the terminal, and generate graphql types from their schema for frontend frameworks like Apollo.
- [@takeshape/graphql-validate](https://www.npmjs.com/package/@takeshape/graphql-validate) — Our GraphQL query
  validation module that supports all graphql-cli options and makes writing queries from the frontend much less painful.
- [@takeshape/routing](https://app.takeshape.io/docs/routing/#:~:text=Routing%E2%80%8B,dynamic%20search%20or%20taxonomy%20pages)
  — Our module for optimized routing in frontend projects that use TakeShape. In this project, we used it to generate
  URLs for image assets stored in TakeShape.

In the next section, you'll find a screenshot of the finished store's homepage.

## Screenshot

![A screenshot of the store's homepage.](/readme-images/store/homepage.png)

## Instructions

To get started with this project, there are two basic steps:

1. Create a TakeShape project using the pattern in this repo. This button will deploy the project for you:

<a href="https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/takeshape-deluxe-sample-project/tree/main/.takeshape/pattern"><img alt="Deploy To TakeShape" src="https://camo.githubusercontent.com/1b580e3ce353d235bde0f376ca35b0fb26d685f3750a3013ae4b225dd3aaf344/68747470733a2f2f696d616765732e74616b6573686170652e696f2f32636363633832352d373062652d343331632d396261302d3130616233386563643361372f6465762f38653266376264612d306530382d346564652d613534362d3664663539626536613862622f4465706c6f79253230746f25323054616b65536861706525343032782e706e673f6175746f3d666f726d6174253243636f6d7072657373" width="205" height="38" data-canonical-src="https://images.takeshape.io/2cccc825-70be-431c-9ba0-10ab38ecd3a7/dev/8e2f7bda-0e08-4ede-a546-6df59be6a8bb/Deploy%20to%20TakeShape%402x.png?auto=format%2Ccompress" style="max-width:100%;"></a>

2. Generate an `anonymous` and a `webhook` TakeShape API key. You need these two API keys, and they must have different
   permissions scopes.

- Navigate to the **Settings** tab in your TakeShape project's dashboard.

- Select the **API Keys** option in the left sidebar.

- Select the **New API Key** button at the top-right of the page.

- Name the first API Key anything you want; just be sure to grant it `anonymous` permissions.

- Save the key somewhere. Later, you must either set it as the value of the `NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY`
  environment variable in your frontend project's `.env.local` file, or set it as an environment variable in your
  hosting provider's UI.

- Do the same process, but this time create a key with `webhook` permissions. The environment variable for this key will
  be `TAKESHAPE_WEBHOOK_API_KEY`.

3. Save your TakeShape project's API Endpoint.

- Navigate to the **Home** tab of your TakeShape project's dashboard in the web client. Scroll down to the **Useful
  Snippets** section, and copy the **API Endpoint** there.
- Save the endpoint somewhere. Later, you must either set it as the value of the `NEXT_PUBLIC_TAKESHAPE_API_URL`
  environment variable in your frontend project's `.env.local` file, or set it as an environment variable in your
  hosting provider's UI.

4. Clone this repo:

```bash
git clone https://github.com/takeshape/takeshape-deluxe-sample-project
```

4. Navigate to the project directory in your local terminal and run the `npm install` command to install all
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

3. Copy the generated url in the **Audience** field and save it somewhere secure. You'll need it for your Next.js
   project's `.env` file.
4. Select the **Save** button at the top-right of the OpenID service page.

5. Now set up your `.env` variables in your Next.js project.

- Set the `NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE` variable to the generated **Audience** URL from your OpenID provider.
- Set the `NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER` variable to the same URL you provided for the **Issuer URL** field on your
  OpenID provider. This should be your store's URL.

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

### Shopify Admin and Shopify Storefront

> Warning! Connecting this project to a live Shopify store **WILL** enable real purchases. If you just want to play
> around without risking real charges,
> [set your store's payments to Test Mode](https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments)
> and use appropriately scoped API keys. When testing purchases, always use
> [Shopify's accepted fake credit card information](https://help.shopify.com/en/partners/dashboard/managing-stores/test-orders-in-dev-stores).

This project uses Shopify for e-commerce functionality. This README assumes you already have a Shopify store set up. You
don't need to have Shopify Plus to use any of the features described here.

Follow these instructions to connect your Shopify store's Admin and Storefront APIs to your TakeShape project, and the
frontend Next.js project.

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

- You'll be taken to your app's settings page. Under the Overview tab, you'll see "Select your scopes to get started."
  Select **Configure Storefront API scopes**.

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

To use Shopify with this project, you'll need to connect your Shopify Admin API and Shopify Storefront API. The
following instructions will help you connect your Shopify APIs to the deluxe sample project pattern, but you can
[connect Shopify to any TakeShape project by following the Shopify guide in our docs](https://app.takeshape.io/docs/services/providers/shopify/).

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

Not interested? [Skip to our REVIEWS.io section below to set up reviews in your store](#setting-up-reviewsio).

#### Setting up test payments in Shopify

### REVIEWS.io

The following section describes how to connect REVIEWS.io to your Deluxe Sample Project pattern in TakeShape. To learn
how to connect REVIEWS.io to any TakeShape project,
[check out our docs](https://app.takeshape.io/docs/services/providers/reviews-io).

1. First, you'll need your Store ID and API Key from REVIEWS.io

- [Navigate to API integrations by clicking here](https://dash.reviews.io/integration/api), or follow the below
  instructions.
- On your REVIEWS.io dashboard, select **Integrations** in the navigation on the left. Select **API** in the list of
  integrations.
- Under **API Credentials**, copy and save the `Store ID` and `API Key`

![A screenshot of the API page in Reviews.io](./readme-images/reviewsio/api-keys-reviewsio.png)

2. Navigate to your TakeShape project's dashboard and select **REVIEWS.io** under the Services list in the **Home** tab.

3. Under **Store ID**, paste your Store ID, and under **API Key**, paste your API Key. **Save** your service.

![A screenshot of the REVIEWS.io service page](./readme-images/reviewsio/service-page-reviewsio.png)

### ShipEngine

The following section describes how to connect ShipEngine to your Deluxe Sample Project pattern in TakeShape. To learn
how to connect ShipEngine to any TakeShape project,
[check out our docs](https://app.takeshape.io/docs/services/providers/ship-engine).

1. First, get your API Key from ShipEngine.

- [Navigate to your ShipEngine API Dashboard by clicking here](https://app.shipengine.com/). Select the **Sandbox** tab
  on the left.
- There should already be an API Key generated, but you can generate a new one instantly by selecting **Create New Key**
  on this page.
- Copy this key to put into your TakeShape project.

![A screenshot of Ship Engine's API Dashboard](./readme-images/shipengine/api-dashboard-shipengine.png)

2. Navigate to your TakeShape project's dashboard and select **Ship Engine** under the services list.

3. Under **Authentication**, set the **Header** field to `API-Key` and the **Token** field to your API Key. **Save**
   your service.

### Voucherify

The following section describes how to connect Voucherify to your Deluxe Sample Project pattern in TakeShape. To learn
how to connect Voucherify to any TakeShape project,
[check out our REST provider docs](https://app.takeshape.io/docs/services/providers/rest). Using our generic REST
provider, you can connect most arbitrary REST APIs, including Voucherify.

1. Get your `Application ID` from Voucherify.

- From your Voucherify dashboard, select **Project Settings → Application Keys**. Create your keys. You will be given an
  `Application ID` and a `Secret Key`.

![A screenshot of the Voucherify dropdown menu](./readme-images/voucherify/project-settings-voucherify.png)

![A screenshot of the Voucherify application keys page](./readme-images/voucherify/application-keys-voucherify.png)

2. Navigate to your TakeShape project's dashboard and select **Voucherify** under your services list.

3. Under **Authentication**, set the Header to `X-App-Id` and the Token to your App ID. **Save** your service.

### Klaviyo

The following section describes how to connect Klaviyo to your Deluxe Sample Project pattern in TakeShape. To learn how
to connect Klaviyo to any TakeShape project,
[check out our docs](https://app.takeshape.io/docs/services/providers/klaviyo).

1. First, get your api key for Klaviyo.

- Log into your Klaviyo account and navigate to **Account → Settings → API Keys**.

2. On your TakeShape project's dashboard, navigate to the **Home** tab and select **Klaviyo** from the list of services.

3. In the **Authentication** field, add your Klaviyo API key, and select the **Save** button at the top-right of the
   page.

4. Be sure to set the `NEXT_PUBLIC_DEFAULT_KLAVIYO_LIST_ID` to
   [the ID of your preferred Klaviyo newsletter](https://help.klaviyo.com/hc/en-us/articles/115005078647-Find-your-List-ID),
   either in a `.env` file or in your hosting provider's UI.

![A screenshot of the Klaviyo service page](./readme-images/klaviyo/add-authentication-klaviyo.png)

### reCAPTCHA

The following section describes how to connect ReCAPTCHA to your Deluxe Sample Project pattern in TakeShape using a
generic REST provider. To learn how to connect ReCAPTCHA to any TakeShape project,
[check out our docs on using a generic REST service](https://app.takeshape.io/docs/services/providers/rest).

1. First, get your **Site Secret** from reCAPTCHA. If you need to create an account,
   [you can visit Google's ReCAPTCHA site registration page here](https://www.google.com/recaptcha/admin/create).

- [Log into Google's reCAPTCHA admin](https://www.google.com/recaptcha/admin) and select your site. Select the
  **Settings** gear icon at the top-right of the page ⚙.

![A screenshot of the reCAPTCHA admin page, where you can select your site.](/readme-images/reCAPTCHA/select-site-recaptcha.png)

- On the **Settings** page, select the **reCAPTCHA keys** dropdown to reveal your **Site Key** and **Secret Key**. Copy
  them somewhere secure, or leave this tab open. You'll need them to connect reCAPTCHA to your TakeShape project.

![A screenshot of the Settings page in reCAPTCHA, where you can copy your site key for TakeShape.](/readme-images/reCAPTCHA/site-key-secret-key-recaptcha.png)

2. Create a `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` environment variable in your hosting provider or in your `.env`, and set
   the value to your **Site Key** from the reCAPTCHA settings.

3. Navigate to your TakeShape project's dashboard, select the **Home** tab and select **ReCAPTCHA** from the list of
   services. You'll be taken to the **ReCAPTCHA** service page.

- In the **Endpoint** field, enter `https://www.google.com/recaptcha/api`.

- In the **Authentication Type** field, ensure **Query Parameter** is selected.

- Under **Authentication**, enter `secret` as the value for the **Query Param** field. Enter your **Site Secret** as the
  value for the **Token** field.

- Select the **Save** button at the top-right of the page.

### Gorgias

The following section describes how to connect Gorgias to your Deluxe Sample Project pattern in TakeShape. To learn how
to connect Gorgias to any TakeShape project,
[check out our REST provider docs](https://app.takeshape.io/docs/services/providers/rest). Using our generic REST
provider, you can connect most arbitrary REST APIs, including Gorgias.

1. You'll need your Gorgias API Endpoint, email address, and a Password API Key. Gorgias uses **Basic Auth**, which
   takes a username and password. Your username will be your Gorgias account email address, and your password will be a
   generated key from Gorgias.

- Navigate to your Gorgias dashboard and select the three dots at the top-left. The button will be labeled **Ticket** if
  you're in the Ticket view of the dashboard, but will change its label based on which view you're in. In the drop-down
  menu that appears, select **Settings**. You should be taken to the Settings view.

  ![A screenshot of the dropdown that appears when you select the **Ticket** button.](/readme-images/gorgias/tickets-settings-gorgias.png)

- In the Settings view, select the **REST API** option in the menu on the left. You'll see the **REST API** panel. Note
  the **Base API URL**. You'll need that to connect Gorgias to TakeShape.

- Select the **Create API Key** button under the **Password (API Key)** heading.

  ![A screenshot of the REST API panel](/readme-images/gorgias/create-api-key-gorgias.png)

  ![A screenshot of the Base API URL, Username (your email address) and Password (API Key) fields in the REST API panel.](/readme-images/gorgias/api-info-gorgias.png)

- Leave this tab open, or copy your **Base API URL, Username, and Password** over to a secure location. It's time to set
  up Gorgias in TakeShape.

2. On your TakeShape project's dashboard, navigate to the **Home** tab and select **Gorgias** from the list of services.
   You'll be taken to the **Generic REST** service page for **Gorgias**.

- In the **Endpoint** field, add your Base API URL.

- In the **Authentication Type** field, ensure **Basic Auth** is selected.

- Under **Authentication**, add your email address in the **Username** field, and your API Key in the **Password**
  field.

- Select the **Save** button at the top-right of the page.

## Sentry

To use Sentry with this project, you need your project's
[Data Source Name](https://docs.sentry.io/product/sentry-basics/dsn-explainer/), as well as your sentry org slug and
project name.

1. Find your Sentry DSN.

- Log into Sentry, and select your project. If you don't have a sentry project ready, create a Next.js project.

- Select **Settings** in the sidebar on the left, and scroll down to select **Client Keys (DSN)**. You will see the
  **Client Keys** panel.

![A screenshot of the sentry settings page with the Client Keys (DSN) panel open](/readme-images/sentry/dsn-sentry.png)

- Save your DSN. You can set it in your `.env.local` or your hosting provider's UI as the `NEXT_PUBLIC_SENTRY_DSN`
  variable.

2. Find your sentry org slug.

- Head to **Settings**, then **General Settings**. At the top of the page you should see **Organization Slug**. Copy the
  value there.

- Set this value in your `.env.local` or your hosting provider's UI as the `SENTRY_ORG` variable.

3. Find your sentry project name.

- Head to **Settings**, then **Projects**. You'll see a list of projects. Select the Next.js project you want to use.

- Under the **Project Details** section on the next page, you'll see a **Name** field. Copy that value.

- Set the value from the **Name** field to the `SENTRY_PROJECT` variable in your `.env.local` or your hosting provider's
  UI.

### Other environment variables

Follow the instructions in the `.env.local-example` file included at the root of this repo to fill out all necessary
environment variables. Then rename the file to `.env.local` to use them.

## Running the starter

1. Head over to your trusty terminal or tool of choice.

- Clone this repo with `git clone https://github.com/takeshape/takeshape-starter-deluxe-sample-project.git`.
- `cd` into the folder that the cloning created.
- Run `cp .env.local-example .env.local` to rename the environment variables file.
- Run `npm install`.

2. Follow the instructions in `.env.local`.

3. Run `npm run dev` to start the application and open [http://localhost:3000](http://localhost:3000) with your browser
   to play around!

## Deploying to production

When deploying this project to production, be sure to replace all public placeholder assets.

### Known limitations

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Development notes

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
