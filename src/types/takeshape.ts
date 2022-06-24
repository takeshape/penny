export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Decimal: any;
  FormattedString: any;
  Html: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  Json: any;
  Money: any;
  StorefrontId: any;
  UnsignedInt64: any;
  Url: any;
};

export type AddListMembersInput = {
  profiles: Array<AddMembersPropertiesPropertiesProfilesItemsPropertyInput>;
};

export type AddMembersPropertiesPropertiesProfilesItemsPropertyInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type Asset = TsSearchable & {
  __typename?: 'Asset';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['JSON']>;
  captionHtml?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  creditHtml?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  /** @deprecated Use path instead */
  s3Key?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
};


export type AssetCaptionHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type AssetCreditHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type AssetPaginatedList = {
  __typename?: 'AssetPaginatedList';
  items: Array<Asset>;
  total: Scalars['Int'];
};

/** Asset search results */
export type AssetSearchResults = {
  __typename?: 'AssetSearchResults';
  results: Array<Asset>;
  total: Scalars['Int'];
};

export type BackgroundImageComponent = {
  __typename?: 'BackgroundImageComponent';
  components: Array<BackgroundImageComponentComponentsProperty>;
  image?: Maybe<Asset>;
};


export type BackgroundImageComponentImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type BackgroundImageComponentCollectionsComponentHeroComponentOffersComponentSaleComponentTestimonialsComponentInputUnion = {
  backgroundImageComponent?: InputMaybe<BackgroundImageComponentInput>;
  collectionsComponent?: InputMaybe<CollectionsComponentInput>;
  heroComponent?: InputMaybe<HeroComponentInput>;
  offersComponent?: InputMaybe<OffersComponentInput>;
  saleComponent?: InputMaybe<SaleComponentInput>;
  testimonialsComponent?: InputMaybe<TestimonialsComponentInput>;
};

export type BackgroundImageComponentCollectionsComponentHeroComponentOffersComponentSaleComponentTestimonialsComponentTrendingProductsComponentInputUnion = {
  backgroundImageComponent?: InputMaybe<BackgroundImageComponentInput>;
  collectionsComponent?: InputMaybe<CollectionsComponentInput>;
  heroComponent?: InputMaybe<HeroComponentInput>;
  offersComponent?: InputMaybe<OffersComponentInput>;
  saleComponent?: InputMaybe<SaleComponentInput>;
  testimonialsComponent?: InputMaybe<TestimonialsComponentInput>;
  trendingProductsComponent?: InputMaybe<TrendingProductsComponentInput>;
};

export type BackgroundImageComponentComponentsProperty = BackgroundImageComponent | CollectionsComponent | HeroComponent | OffersComponent | SaleComponent | TestimonialsComponent;

export type BackgroundImageComponentInput = {
  components: Array<BackgroundImageComponentCollectionsComponentHeroComponentOffersComponentSaleComponentTestimonialsComponentInputUnion>;
  image: TsRelationshipInput;
};

export type Collection = TsSearchable & {
  __typename?: 'Collection';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  /** An alternate title to use in breadcrumbs */
  breadcrumbTitle?: Maybe<Scalars['String']>;
  /** Initialized with title from shopify */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Collection>;
  searchSummary?: Maybe<Scalars['String']>;
  shopifyCollection?: Maybe<Shopify_Collection>;
  shopifyCollectionId?: Maybe<Scalars['String']>;
};


export type CollectionParentArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type CollectionPaginatedList = {
  __typename?: 'CollectionPaginatedList';
  items: Array<Collection>;
  total: Scalars['Int'];
};

/** Collection search results */
export type CollectionSearchResults = {
  __typename?: 'CollectionSearchResults';
  results: Array<Collection>;
  total: Scalars['Int'];
};

export type CollectionsComponent = {
  __typename?: 'CollectionsComponent';
  collections: Array<CollectionsComponentCollections>;
};

export type CollectionsComponentCollections = {
  __typename?: 'CollectionsComponentCollections';
  description: Scalars['String'];
  href: Scalars['String'];
  image?: Maybe<Asset>;
  name: Scalars['String'];
};


export type CollectionsComponentCollectionsImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type CollectionsComponentCollectionsInput = {
  description: Scalars['String'];
  href: Scalars['String'];
  image: TsRelationshipInput;
  name: Scalars['String'];
};

export type CollectionsComponentInput = {
  collections: Array<CollectionsComponentCollectionsInput>;
};

/** Describes a structural update to an array of data. */
export type ContentStructureInput = {
  /** A deep path to the array being updated (e.g. a.b[1].c). */
  path: Scalars['String'];
  /** An array where the indices represent the to index, and the values represent the from index.For example to transform ["a","b","c","d"] into ["c","a"], this value would be [2,0]. */
  structure?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** create Asset input */
export type CreateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  filename: Scalars['String'];
  mimeType?: InputMaybe<Scalars['String']>;
  path: Scalars['String'];
  s3Key?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
};

export type CreateAssetResult = {
  __typename?: 'CreateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** create CollectionInterface input */
export type CreateCollectionInterfaceInput = {
  _id?: InputMaybe<Scalars['ID']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _version?: InputMaybe<Scalars['Float']>;
  /** An optional title to override the regular title in breadcrumbs */
  breadcrumbTitle?: InputMaybe<Scalars['String']>;
  /** Initialized with title from shopify */
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<TsRelationshipInput>;
  shopifyCollection?: InputMaybe<Shopify_CollectionInput>;
  shopifyCollectionId?: InputMaybe<Scalars['String']>;
};

export type CreateCollectionResult = {
  __typename?: 'CreateCollectionResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Collection>;
};

export type CreateCustomerPayload = {
  __typename?: 'CreateCustomerPayload';
  customer?: Maybe<CreateCustomerPayloadCustomerProperty>;
};

export type CreateCustomerPayloadCustomerProperty = {
  __typename?: 'CreateCustomerPayloadCustomerProperty';
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  verified_email?: Maybe<Scalars['Boolean']>;
};

export type CreateCustomerPropertiesPropertyInput = {
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  recaptchaToken?: InputMaybe<Scalars['String']>;
};

export type CreateMyCheckoutPropertiesLinesItemsPropertyInput = {
  merchandiseId: Scalars['String'];
  quantity: Scalars['Int'];
  sellingPlanId?: InputMaybe<Scalars['String']>;
};

export type CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput = {
  merchandiseId: Scalars['String'];
  quantity: Scalars['Int'];
  sellingPlanId?: InputMaybe<Scalars['String']>;
};

/** create Page input */
export type CreatePageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  relationship?: InputMaybe<Array<InputMaybe<TsRelationshipInput>>>;
  sections?: InputMaybe<Array<InputMaybe<PageSectionMdxPageSectionTitleInputUnion>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePageResult = {
  __typename?: 'CreatePageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Page>;
};

/** create ProductInterface input */
export type CreateProductInterfaceInput = {
  _id?: InputMaybe<Scalars['ID']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _version?: InputMaybe<Scalars['Float']>;
  details?: InputMaybe<TsRelationshipInput>;
  hideBreadcrumbs?: InputMaybe<Scalars['Boolean']>;
  hideRelatedProducts?: InputMaybe<Scalars['Boolean']>;
  hideReviews?: InputMaybe<Scalars['Boolean']>;
  /** Initialized with title from shopify */
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<TsRelationshipInput>;
  productComponent?: InputMaybe<Scalars['String']>;
  shopifyProduct?: InputMaybe<Shopify_ProductInput>;
  shopifyProductId?: InputMaybe<Scalars['String']>;
  showDetails?: InputMaybe<Scalars['Boolean']>;
  showPolicies?: InputMaybe<Scalars['Boolean']>;
};

/** create ProductPageDetails input */
export type CreateProductPageDetailsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  details: Array<ProductPageDetailsDetailsInput>;
  name: Scalars['String'];
  text: ProductPageDetailsTextInput;
};

export type CreateProductPageDetailsResult = {
  __typename?: 'CreateProductPageDetailsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<ProductPageDetails>;
};

/** create ProductPagePolicies input */
export type CreateProductPagePoliciesInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  policies: Array<ProductPagePoliciesPoliciesInput>;
};

export type CreateProductPagePoliciesResult = {
  __typename?: 'CreateProductPagePoliciesResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<ProductPagePolicies>;
};

export type CreateProductResult = {
  __typename?: 'CreateProductResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Product>;
};

export type CreateTicketResponse = {
  __typename?: 'CreateTicketResponse';
  id: Scalars['Int'];
};

/** create TsStaticSite input */
export type CreateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  idKey?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  provider?: Scalars['String'];
  secretKey?: InputMaybe<Scalars['String']>;
  templateHash?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type CreateTsStaticSiteResult = {
  __typename?: 'CreateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export enum DefaultWorkflow {
  Disabled = 'disabled',
  Enabled = 'enabled'
}

/** delete Asset input */
export type DeleteAssetInput = {
  _id: Scalars['ID'];
};

export type DeleteAssetResult = {
  __typename?: 'DeleteAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Collection input */
export type DeleteCollectionInput = {
  _id: Scalars['ID'];
};

export type DeleteCollectionResult = {
  __typename?: 'DeleteCollectionResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Page input */
export type DeletePageInput = {
  _id: Scalars['ID'];
};

export type DeletePageResult = {
  __typename?: 'DeletePageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Product input */
export type DeleteProductInput = {
  _id: Scalars['ID'];
};

/** delete ProductPageDetails input */
export type DeleteProductPageDetailsInput = {
  _id: Scalars['ID'];
};

export type DeleteProductPageDetailsResult = {
  __typename?: 'DeleteProductPageDetailsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete ProductPagePolicies input */
export type DeleteProductPagePoliciesInput = {
  _id: Scalars['ID'];
};

export type DeleteProductPagePoliciesResult = {
  __typename?: 'DeleteProductPagePoliciesResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type DeleteProductResult = {
  __typename?: 'DeleteProductResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete TsStaticSite input */
export type DeleteTsStaticSiteInput = {
  _id: Scalars['ID'];
};

export type DeleteTsStaticSiteResult = {
  __typename?: 'DeleteTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** duplicate Asset input */
export type DuplicateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
};

export type DuplicateAssetResult = {
  __typename?: 'DuplicateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** duplicate Collection input */
export type DuplicateCollectionInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  /** An alternate title to use in breadcrumbs */
  breadcrumbTitle?: InputMaybe<Scalars['String']>;
  /** Initialized with title from shopify */
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<TsRelationshipInput>;
  shopifyCollectionId?: InputMaybe<Scalars['String']>;
};

export type DuplicateCollectionResult = {
  __typename?: 'DuplicateCollectionResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Collection>;
};

/** duplicate Page input */
export type DuplicatePageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  relationship?: InputMaybe<Array<InputMaybe<TsRelationshipInput>>>;
  sections?: InputMaybe<Array<InputMaybe<PageSectionMdxPageSectionTitleInputUnion>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DuplicatePageResult = {
  __typename?: 'DuplicatePageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Page>;
};

/** duplicate Product input */
export type DuplicateProductInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  details?: InputMaybe<TsRelationshipInput>;
  hideBreadcrumbs?: InputMaybe<Scalars['Boolean']>;
  hideRelatedProducts?: InputMaybe<Scalars['Boolean']>;
  hideReviews?: InputMaybe<Scalars['Boolean']>;
  /** Initialized with title from shopify */
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<TsRelationshipInput>;
  productComponent?: InputMaybe<Scalars['String']>;
  shopifyProductId?: InputMaybe<Scalars['String']>;
  showDetails?: InputMaybe<Scalars['Boolean']>;
  showPolicies?: InputMaybe<Scalars['Boolean']>;
};

/** duplicate ProductPageDetails input */
export type DuplicateProductPageDetailsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  details?: InputMaybe<Array<InputMaybe<ProductPageDetailsDetailsInput>>>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<ProductPageDetailsTextInput>;
};

export type DuplicateProductPageDetailsResult = {
  __typename?: 'DuplicateProductPageDetailsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<ProductPageDetails>;
};

/** duplicate ProductPagePolicies input */
export type DuplicateProductPagePoliciesInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<Array<InputMaybe<ProductPagePoliciesPoliciesInput>>>;
};

export type DuplicateProductPagePoliciesResult = {
  __typename?: 'DuplicateProductPagePoliciesResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<ProductPagePolicies>;
};

export type DuplicateProductResult = {
  __typename?: 'DuplicateProductResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Product>;
};

/** duplicate TsStaticSite input */
export type DuplicateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  idKey?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  templateHash?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type DuplicateTsStaticSiteResult = {
  __typename?: 'DuplicateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export type Footer = TsSearchable & {
  __typename?: 'Footer';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  navigation?: Maybe<FooterNavigation>;
  newsletter?: Maybe<FooterNewsletter>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type FooterNavigation = {
  __typename?: 'FooterNavigation';
  sections?: Maybe<Array<Maybe<FooterNavigationSections>>>;
};

export type FooterNavigationInput = {
  sections?: InputMaybe<Array<InputMaybe<FooterNavigationSectionsInputUnion>>>;
};

export type FooterNavigationSections = {
  __typename?: 'FooterNavigationSections';
  items?: Maybe<Array<Maybe<NavigationLink>>>;
  name?: Maybe<Scalars['String']>;
};

export type FooterNavigationSectionsInput = {
  items?: InputMaybe<Array<InputMaybe<NavigationLinkInputUnion>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FooterNavigationSectionsInputUnion = {
  footerNavigationSections?: InputMaybe<FooterNavigationSectionsInput>;
};

export type FooterNewsletter = {
  __typename?: 'FooterNewsletter';
  text?: Maybe<Text>;
};

export type FooterNewsletterInput = {
  text?: InputMaybe<TextInputUnion>;
};

export type HeroComponent = {
  __typename?: 'HeroComponent';
  buttonText: Scalars['String'];
  image?: Maybe<Asset>;
  primaryText: Scalars['String'];
  secondaryText: Scalars['String'];
};


export type HeroComponentImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroComponentInput = {
  buttonText: Scalars['String'];
  image: TsRelationshipInput;
  primaryText: Scalars['String'];
  secondaryText: Scalars['String'];
};

export type Klaviyo_200Ok = {
  __typename?: 'Klaviyo_200Ok';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Klaviyo_AddMembersResponse = {
  __typename?: 'Klaviyo_AddMembersResponse';
  items?: Maybe<Array<Maybe<Klaviyo_AddMembersResponseItemsProperty>>>;
};

export type Klaviyo_AddMembersResponseItemsProperty = {
  __typename?: 'Klaviyo_AddMembersResponseItemsProperty';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

/**
 *
 * The profiles that you would like to remove from the list.
 *
 * Example:
 *
 * {
 *   "emails":["george.washington@klaviyo.com","abraham.lincoln@klaviyo.com"],
 *   "phone_numbers":["+13239169023"],
 *   "push_tokens":["03df25c845d460bcdad7802d2vf6fc1dfde97283bf75cc993eb6dca835ea2e2r"]
 * }
 *
 */
export type Klaviyo_RemoveMembersPropertiesPropertyInput = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_numbers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  push_tokens?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Klaviyo_removeMembers?: Maybe<Klaviyo_200Ok>;
  ReviewsIo_createInvitation?: Maybe<ReviewsIo_CreateInvitationResponse>;
  ShopifyStorefront_cartCreate?: Maybe<ShopifyStorefront_CartCreatePayload>;
  ShopifyStorefront_customerAccessTokenCreate?: Maybe<ShopifyStorefront_CustomerAccessTokenCreatePayload>;
  ShopifyStorefront_customerAddressUpdate?: Maybe<ShopifyStorefront_CustomerAddressUpdatePayload>;
  ShopifyStorefront_customerCreate?: Maybe<ShopifyStorefront_CustomerCreatePayload>;
  ShopifyStorefront_customerUpdate?: Maybe<ShopifyStorefront_CustomerUpdatePayload>;
  /** Create an order in Voucherify */
  Voucherify_createOrder?: Maybe<Voucherify_Order>;
  addMembers?: Maybe<Klaviyo_AddMembersResponse>;
  /** Create Asset */
  createAsset?: Maybe<CreateAssetResult>;
  createCart?: Maybe<ShopifyStorefront_CartCreatePayload>;
  /** Create Collection. If Shopify values are provided, a Shopify collection is also created and the new collection ID is saved. */
  createCollection?: Maybe<CreateCollectionResult>;
  createCustomer?: Maybe<CreateCustomerPayload>;
  createMyCart?: Maybe<ShopifyStorefront_CartCreatePayload>;
  /** Create a Shopify storefront cart. */
  createMyCheckout?: Maybe<ShopifyStorefront_Cart>;
  /** Create a Shopify storefront cart. */
  createMyCheckoutSession?: Maybe<ShopifyStorefront_Cart>;
  /** Create Page */
  createPage?: Maybe<CreatePageResult>;
  /** Create Product. If Shopify values are provided, a Shopify product is also created and the new product ID is saved. */
  createProduct?: Maybe<CreateProductResult>;
  /** Create ProductPageDetails */
  createProductPageDetails?: Maybe<CreateProductPageDetailsResult>;
  /** Create ProductPagePolicies */
  createProductPagePolicies?: Maybe<CreateProductPagePoliciesResult>;
  createTicket?: Maybe<CreateTicketResponse>;
  /** Create TsStaticSite */
  createTsStaticSite?: Maybe<CreateTsStaticSiteResult>;
  /** Delete Asset */
  deleteAsset?: Maybe<DeleteAssetResult>;
  /** Delete Collection */
  deleteCollection?: Maybe<DeleteCollectionResult>;
  /** Delete Page */
  deletePage?: Maybe<DeletePageResult>;
  /** Delete Product */
  deleteProduct?: Maybe<DeleteProductResult>;
  /** Delete ProductPageDetails */
  deleteProductPageDetails?: Maybe<DeleteProductPageDetailsResult>;
  /** Delete ProductPagePolicies */
  deleteProductPagePolicies?: Maybe<DeleteProductPagePoliciesResult>;
  /** Delete TsStaticSite */
  deleteTsStaticSite?: Maybe<DeleteTsStaticSiteResult>;
  /** Duplicate Asset */
  duplicateAsset?: Maybe<DuplicateAssetResult>;
  /** Duplicate Collection */
  duplicateCollection?: Maybe<DuplicateCollectionResult>;
  /** Duplicate Page */
  duplicatePage?: Maybe<DuplicatePageResult>;
  /** Duplicate Product */
  duplicateProduct?: Maybe<DuplicateProductResult>;
  /** Duplicate ProductPageDetails */
  duplicateProductPageDetails?: Maybe<DuplicateProductPageDetailsResult>;
  /** Duplicate ProductPagePolicies */
  duplicateProductPagePolicies?: Maybe<DuplicateProductPagePoliciesResult>;
  /** Duplicate TsStaticSite */
  duplicateTsStaticSite?: Maybe<DuplicateTsStaticSiteResult>;
  recoverCustomerAccount?: Maybe<ShopifyStorefront_CustomerRecoverPayload>;
  /** Replace an asset file */
  replaceAsset?: Maybe<Upload>;
  subscribeMyEmailToNewsletter?: Maybe<Klaviyo_AddMembersResponse>;
  unsubscribeMyEmailFromNewsletter?: Maybe<Klaviyo_200Ok>;
  /** Update Asset */
  updateAsset?: Maybe<UpdateAssetResult>;
  /**
   * Update Collection. If the input has Shopify values and a Shopify ID, the Shopify collection with that ID is updated.
   * If the input has Shopify values and no Shopify ID, a Shopify collection is created.
   */
  updateCollection?: Maybe<UpdateCollectionResult>;
  /** Update Footer */
  updateFooter?: Maybe<UpdateFooterResult>;
  updateMyCustomer?: Maybe<ShopifyStorefront_CustomerUpdatePayload>;
  updateMyCustomerAddress?: Maybe<ShopifyStorefront_CustomerAddressUpdatePayload>;
  /** Update Navigation */
  updateNavigation?: Maybe<UpdateNavigationResult>;
  /** Update Page */
  updatePage?: Maybe<UpdatePageResult>;
  /**
   * Update Product. If the input has Shopify values and a Shopify ID, the Shopify product with that ID is updated.
   * If the input has Shopify values and no Shopify ID, a Shopify product is created.
   */
  updateProduct?: Maybe<UpdateProductResult>;
  /** Update ProductPageDetails */
  updateProductPageDetails?: Maybe<UpdateProductPageDetailsResult>;
  /** Update ProductPagePolicies */
  updateProductPagePolicies?: Maybe<UpdateProductPagePoliciesResult>;
  /** Update Storefront */
  updateStorefront?: Maybe<UpdateStorefrontResult>;
  /** Update TsStaticSite */
  updateTsStaticSite?: Maybe<UpdateTsStaticSiteResult>;
  /** Initiate upload process for asset(s) */
  uploadAssets?: Maybe<Array<Maybe<Upload>>>;
};


export type MutationKlaviyo_RemoveMembersArgs = {
  input?: InputMaybe<Klaviyo_RemoveMembersPropertiesPropertyInput>;
  list_id: Scalars['String'];
};


export type MutationReviewsIo_CreateInvitationArgs = {
  input?: InputMaybe<ReviewsIo_CreateInvitationPropertiesPropertyInput>;
};


export type MutationShopifyStorefront_CartCreateArgs = {
  input?: InputMaybe<ShopifyStorefront_CartInput>;
};


export type MutationShopifyStorefront_CustomerAccessTokenCreateArgs = {
  input: ShopifyStorefront_CustomerAccessTokenCreateInput;
};


export type MutationShopifyStorefront_CustomerAddressUpdateArgs = {
  address: ShopifyStorefront_MailingAddressInput;
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationShopifyStorefront_CustomerCreateArgs = {
  input: ShopifyStorefront_CustomerCreateInput;
};


export type MutationShopifyStorefront_CustomerUpdateArgs = {
  customer: ShopifyStorefront_CustomerUpdateInput;
  customerAccessToken: Scalars['String'];
};


export type MutationVoucherify_CreateOrderArgs = {
  amount?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<Voucherify_OrderItemInput>>>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationAddMembersArgs = {
  input?: InputMaybe<AddListMembersInput>;
  list_id: Scalars['String'];
  recaptchaToken: Scalars['String'];
};


export type MutationCreateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateAssetInput;
};


export type MutationCreateCartArgs = {
  input?: InputMaybe<ShopifyStorefront_CartInput>;
};


export type MutationCreateCollectionArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateCollectionInterfaceInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerPropertiesPropertyInput;
};


export type MutationCreateMyCartArgs = {
  input?: InputMaybe<ShopifyStorefront_CartInput>;
};


export type MutationCreateMyCheckoutArgs = {
  email?: InputMaybe<Scalars['String']>;
  lines: Array<CreateMyCheckoutPropertiesLinesItemsPropertyInput>;
};


export type MutationCreateMyCheckoutSessionArgs = {
  lines: Array<CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput>;
};


export type MutationCreatePageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreatePageInput;
};


export type MutationCreateProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateProductInterfaceInput;
};


export type MutationCreateProductPageDetailsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateProductPageDetailsInput;
};


export type MutationCreateProductPagePoliciesArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateProductPagePoliciesInput;
};


export type MutationCreateTicketArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  recaptchaToken: Scalars['String'];
};


export type MutationCreateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateTsStaticSiteInput;
};


export type MutationDeleteAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteAssetInput;
};


export type MutationDeleteCollectionArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteCollectionInput;
};


export type MutationDeletePageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeletePageInput;
};


export type MutationDeleteProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteProductInput;
};


export type MutationDeleteProductPageDetailsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteProductPageDetailsInput;
};


export type MutationDeleteProductPagePoliciesArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteProductPagePoliciesInput;
};


export type MutationDeleteTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteTsStaticSiteInput;
};


export type MutationDuplicateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateAssetInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateCollectionArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateCollectionInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicatePageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicatePageInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateProductInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateProductPageDetailsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateProductPageDetailsInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateProductPagePoliciesArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateProductPagePoliciesInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateTsStaticSiteInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationRecoverCustomerAccountArgs = {
  email: Scalars['String'];
  recaptchaToken: Scalars['String'];
};


export type MutationReplaceAssetArgs = {
  _id: Scalars['ID'];
  _version: Scalars['Int'];
  file: TsFile;
  projectId?: InputMaybe<Scalars['ID']>;
};


export type MutationSubscribeMyEmailToNewsletterArgs = {
  list_id: Scalars['String'];
};


export type MutationUnsubscribeMyEmailFromNewsletterArgs = {
  list_id: Scalars['String'];
};


export type MutationUpdateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateAssetInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateCollectionArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateCollectionInterfaceInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateFooterArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateFooterInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateMyCustomerArgs = {
  customer: ShopifyStorefront_CustomerUpdateInput;
  customerAccessToken?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMyCustomerAddressArgs = {
  address: ShopifyStorefront_MailingAddressInput;
  customerAccessToken?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateNavigationInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdatePageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdatePageInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateProductArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateProductInterfaceInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateProductPageDetailsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateProductPageDetailsInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateProductPagePoliciesArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateProductPagePoliciesInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateStorefrontArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateStorefrontInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateTsStaticSiteInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUploadAssetsArgs = {
  files: Array<InputMaybe<TsFile>>;
  projectId?: InputMaybe<Scalars['ID']>;
};

export type Navigation = TsSearchable & {
  __typename?: 'Navigation';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  links?: Maybe<NavigationLinks>;
  message?: Maybe<Scalars['JSON']>;
  messageHtml?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type NavigationMessageHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type NavigationLink = {
  __typename?: 'NavigationLink';
  href?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type NavigationLinkInput = {
  href?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NavigationLinkInputUnion = {
  navigationLink?: InputMaybe<NavigationLinkInput>;
};

export type NavigationLinks = {
  __typename?: 'NavigationLinks';
  categories: Array<NavigationLinksCategories>;
  pages: Array<NavigationLinksPages>;
};

export type NavigationLinksCategories = {
  __typename?: 'NavigationLinksCategories';
  brands: Array<NavigationLinksCategoriesBrands>;
  categories: Array<NavigationLinksCategoriesCategories>;
  collection: Array<NavigationLinksCategoriesCollection>;
  featured: Array<NavigationLinksCategoriesFeatured>;
  name: Scalars['String'];
};

export type NavigationLinksCategoriesBrands = {
  __typename?: 'NavigationLinksCategoriesBrands';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesBrandsInput = {
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesCategories = {
  __typename?: 'NavigationLinksCategoriesCategories';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesCategoriesInput = {
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesCollection = {
  __typename?: 'NavigationLinksCategoriesCollection';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesCollectionInput = {
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesFeatured = {
  __typename?: 'NavigationLinksCategoriesFeatured';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesFeaturedInput = {
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksCategoriesInput = {
  brands: Array<NavigationLinksCategoriesBrandsInput>;
  categories: Array<NavigationLinksCategoriesCategoriesInput>;
  collection: Array<NavigationLinksCategoriesCollectionInput>;
  featured: Array<NavigationLinksCategoriesFeaturedInput>;
  name: Scalars['String'];
};

export type NavigationLinksInput = {
  categories: Array<NavigationLinksCategoriesInput>;
  pages: Array<NavigationLinksPagesInput>;
};

export type NavigationLinksPages = {
  __typename?: 'NavigationLinksPages';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type NavigationLinksPagesInput = {
  href: Scalars['String'];
  name: Scalars['String'];
};

export type OffersComponent = {
  __typename?: 'OffersComponent';
  offers: Array<OffersComponentOffers>;
};

export type OffersComponentInput = {
  offers: Array<OffersComponentOffersInput>;
};

export type OffersComponentOffers = {
  __typename?: 'OffersComponentOffers';
  description: Scalars['String'];
  href: Scalars['String'];
  name: Scalars['String'];
};

export type OffersComponentOffersInput = {
  description: Scalars['String'];
  href: Scalars['String'];
  name: Scalars['String'];
};

export type Page = TsSearchable & {
  __typename?: 'Page';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  relationship?: Maybe<Array<Maybe<Collection>>>;
  searchSummary?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<PageSectionsProperty>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
};


export type PageRelationshipArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PagePaginatedList = {
  __typename?: 'PagePaginatedList';
  items: Array<Page>;
  total: Scalars['Int'];
};

/** Page search results */
export type PageSearchResults = {
  __typename?: 'PageSearchResults';
  results: Array<Page>;
  total: Scalars['Int'];
};

export type PageSectionMdx = {
  __typename?: 'PageSectionMdx';
  content?: Maybe<Scalars['String']>;
};


export type PageSectionMdxContentArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<TsmdxSerializationFormat>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type PageSectionMdxInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type PageSectionMdxPageSectionTitleInputUnion = {
  pageSectionMdx?: InputMaybe<PageSectionMdxInput>;
  pageSectionTitle?: InputMaybe<PageSectionTitleInput>;
};

export type PageSectionTitle = {
  __typename?: 'PageSectionTitle';
  heading?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
};

export type PageSectionTitleInput = {
  heading?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
};

export type PageSectionsProperty = PageSectionMdx | PageSectionTitle;

export type Product = TsSearchable & {
  __typename?: 'Product';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  details?: Maybe<ProductPageDetails>;
  hideBreadcrumbs?: Maybe<Scalars['Boolean']>;
  hideRelatedProducts?: Maybe<Scalars['Boolean']>;
  hideReviews?: Maybe<Scalars['Boolean']>;
  /** Initialized with title from shopify */
  name?: Maybe<Scalars['String']>;
  policies?: Maybe<ProductPagePolicies>;
  productComponent?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  shopifyProduct?: Maybe<Shopify_Product>;
  shopifyProductId?: Maybe<Scalars['String']>;
  showDetails?: Maybe<Scalars['Boolean']>;
  showPolicies?: Maybe<Scalars['Boolean']>;
};


export type ProductDetailsArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ProductPoliciesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductPageDetails = TsSearchable & {
  __typename?: 'ProductPageDetails';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  details: Array<ProductPageDetailsDetails>;
  name: Scalars['String'];
  searchSummary?: Maybe<Scalars['String']>;
  text: ProductPageDetailsText;
};

export type ProductPageDetailsDetails = {
  __typename?: 'ProductPageDetailsDetails';
  description: Scalars['JSON'];
  descriptionHtml?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
};


export type ProductPageDetailsDetailsDescriptionHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type ProductPageDetailsDetailsImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductPageDetailsDetailsInput = {
  description: Scalars['JSON'];
  image?: InputMaybe<TsRelationshipInput>;
};

export type ProductPageDetailsPaginatedList = {
  __typename?: 'ProductPageDetailsPaginatedList';
  items: Array<ProductPageDetails>;
  total: Scalars['Int'];
};

/** ProductPageDetails search results */
export type ProductPageDetailsSearchResults = {
  __typename?: 'ProductPageDetailsSearchResults';
  results: Array<ProductPageDetails>;
  total: Scalars['Int'];
};

export type ProductPageDetailsText = {
  __typename?: 'ProductPageDetailsText';
  primary: Scalars['JSON'];
  primaryHtml?: Maybe<Scalars['String']>;
  secondary: Scalars['JSON'];
  secondaryHtml?: Maybe<Scalars['String']>;
};


export type ProductPageDetailsTextPrimaryHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type ProductPageDetailsTextSecondaryHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type ProductPageDetailsTextInput = {
  primary: Scalars['JSON'];
  secondary: Scalars['JSON'];
};

export type ProductPagePolicies = TsSearchable & {
  __typename?: 'ProductPagePolicies';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  policies: Array<ProductPagePoliciesPolicies>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type ProductPagePoliciesPaginatedList = {
  __typename?: 'ProductPagePoliciesPaginatedList';
  items: Array<ProductPagePolicies>;
  total: Scalars['Int'];
};

export type ProductPagePoliciesPolicies = {
  __typename?: 'ProductPagePoliciesPolicies';
  description: Scalars['JSON'];
  descriptionHtml?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  name: Scalars['JSON'];
  nameHtml?: Maybe<Scalars['String']>;
};


export type ProductPagePoliciesPoliciesDescriptionHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type ProductPagePoliciesPoliciesImageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ProductPagePoliciesPoliciesNameHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};

export type ProductPagePoliciesPoliciesInput = {
  description: Scalars['JSON'];
  image: TsRelationshipInput;
  name: Scalars['JSON'];
};

/** ProductPagePolicies search results */
export type ProductPagePoliciesSearchResults = {
  __typename?: 'ProductPagePoliciesSearchResults';
  results: Array<ProductPagePolicies>;
  total: Scalars['Int'];
};

export type ProductPaginatedList = {
  __typename?: 'ProductPaginatedList';
  items: Array<Product>;
  total: Scalars['Int'];
};

/** Product search results */
export type ProductSearchResults = {
  __typename?: 'ProductSearchResults';
  results: Array<Product>;
  total: Scalars['Int'];
};

export type ProfileNewsletterStatus = {
  __typename?: 'ProfileNewsletterStatus';
  listId?: Maybe<Scalars['String']>;
  listName?: Maybe<Scalars['String']>;
  subscribed?: Maybe<Scalars['Boolean']>;
};

/** Root of the Schema */
export type Query = {
  __typename?: 'Query';
  ReviewsIo_listProductReviews?: Maybe<ReviewsIo_ListProductReviewsResponse>;
  ShopifyStorefront_customer?: Maybe<ShopifyStorefront_Customer>;
  ShopifyStorefront_productTypes?: Maybe<ShopifyStorefront_StringConnection>;
  Shopify_collection?: Maybe<Shopify_Collection>;
  Shopify_collectionByHandle?: Maybe<Shopify_Collection>;
  Shopify_collections?: Maybe<Shopify_CollectionConnection>;
  Shopify_customer?: Maybe<Shopify_Customer>;
  Shopify_customerPaymentMethod?: Maybe<Shopify_CustomerPaymentMethod>;
  Shopify_product?: Maybe<Shopify_Product>;
  Shopify_productByHandle?: Maybe<Shopify_Product>;
  Shopify_productVariants?: Maybe<Shopify_ProductVariantConnection>;
  Shopify_products?: Maybe<Shopify_ProductConnection>;
  Shopify_shop?: Maybe<Shopify_Shop>;
  collectionByHandleWithTtl?: Maybe<Shopify_Collection>;
  collectionsWithTtl?: Maybe<Shopify_CollectionConnection>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a Collection by ID */
  getCollection?: Maybe<Collection>;
  /** Returns a list Collection in natural order. */
  getCollectionList?: Maybe<CollectionPaginatedList>;
  /** Returns a list Collection in natural order. */
  getCollectionListWithTtl?: Maybe<CollectionPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Footer by ID */
  getFooter?: Maybe<Footer>;
  getMyAdminCustomer?: Maybe<Shopify_Customer>;
  getMyCustomer?: Maybe<ShopifyStorefront_Customer>;
  /** Get a loyalty card from Voucherify */
  getMyLoyaltyCard?: Maybe<Voucherify_LoyaltyCard>;
  getMyNewsletterSubscriptions?: Maybe<Array<Maybe<ProfileNewsletterStatus>>>;
  /** Get a Navigation by ID */
  getNavigation?: Maybe<Navigation>;
  /** Get a Page by ID */
  getPage?: Maybe<Page>;
  /** Returns a list Page in natural order. */
  getPageList?: Maybe<PagePaginatedList>;
  /** Get a Product by ID */
  getProduct?: Maybe<Product>;
  /** Returns a list Product in natural order. */
  getProductList?: Maybe<ProductPaginatedList>;
  /** Returns a list Product in natural order. */
  getProductListWithTtl?: Maybe<ProductPaginatedList>;
  /** Get a ProductPageDetails by ID */
  getProductPageDetails?: Maybe<ProductPageDetails>;
  /** Returns a list ProductPageDetails in natural order. */
  getProductPageDetailsList?: Maybe<ProductPageDetailsPaginatedList>;
  /** Get a ProductPagePolicies by ID */
  getProductPagePolicies?: Maybe<ProductPagePolicies>;
  /** Returns a list ProductPagePolicies in natural order. */
  getProductPagePoliciesList?: Maybe<ProductPagePoliciesPaginatedList>;
  /** Get a Storefront by ID */
  getStorefront?: Maybe<Storefront>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  productByHandleWithTtl?: Maybe<Shopify_Product>;
  productWithTtl?: Maybe<Shopify_Product>;
  productsWithTtl?: Maybe<Shopify_ProductConnection>;
  search?: Maybe<TsSearchableSearchResults>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchCollectionIndex?: Maybe<CollectionSearchResults>;
  searchPageIndex?: Maybe<PageSearchResults>;
  searchProductIndex?: Maybe<ProductSearchResults>;
  searchProductPageDetailsIndex?: Maybe<ProductPageDetailsSearchResults>;
  searchProductPagePoliciesIndex?: Maybe<ProductPagePoliciesSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  withContext?: Maybe<WithContext>;
};


/** Root of the Schema */
export type QueryReviewsIo_ListProductReviewsArgs = {
  comments_only?: InputMaybe<Scalars['Int']>;
  include_moderated?: InputMaybe<Scalars['Int']>;
  include_unpublished_images?: InputMaybe<Scalars['Int']>;
  max_date?: InputMaybe<Scalars['String']>;
  minRating?: InputMaybe<Scalars['Int']>;
  min_date?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  per_page?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  verified_only?: InputMaybe<Scalars['Int']>;
};


/** Root of the Schema */
export type QueryShopifyStorefront_CustomerArgs = {
  customerAccessToken: Scalars['String'];
};


/** Root of the Schema */
export type QueryShopifyStorefront_ProductTypesArgs = {
  first: Scalars['Int'];
};


/** Root of the Schema */
export type QueryShopify_CollectionArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type QueryShopify_CollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** Root of the Schema */
export type QueryShopify_CollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_CollectionSortKeys>;
};


/** Root of the Schema */
export type QueryShopify_CustomerArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type QueryShopify_CustomerPaymentMethodArgs = {
  id: Scalars['ID'];
  showRevoked?: InputMaybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type QueryShopify_ProductArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type QueryShopify_ProductByHandleArgs = {
  handle: Scalars['String'];
};


/** Root of the Schema */
export type QueryShopify_ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductVariantSortKeys>;
};


/** Root of the Schema */
export type QueryShopify_ProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductSortKeys>;
};


/** Root of the Schema */
export type QueryCollectionByHandleWithTtlArgs = {
  handle: Scalars['String'];
};


/** Root of the Schema */
export type QueryCollectionsWithTtlArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_CollectionSortKeys>;
};


/** Root of the Schema */
export type QueryGetAssetArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetAssetListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type QueryGetCollectionArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetCollectionListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereCollectionInput>;
};


/** Root of the Schema */
export type QueryGetCollectionListWithTtlArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereCollectionInput>;
};


/** Root of the Schema */
export type QueryGetContentVersionArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  version: Scalars['Int'];
};


/** Root of the Schema */
export type QueryGetContentVersionListArgs = {
  from?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  size?: InputMaybe<Scalars['Int']>;
};


/** Root of the Schema */
export type QueryGetFooterArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetNavigationArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetPageArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetPageListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWherePageInput>;
};


/** Root of the Schema */
export type QueryGetProductArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetProductListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductInput>;
};


/** Root of the Schema */
export type QueryGetProductListWithTtlArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductInput>;
};


/** Root of the Schema */
export type QueryGetProductPageDetailsArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetProductPageDetailsListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPageDetailsInput>;
};


/** Root of the Schema */
export type QueryGetProductPagePoliciesArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetProductPagePoliciesListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPagePoliciesInput>;
};


/** Root of the Schema */
export type QueryGetStorefrontArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetTsStaticSiteListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type QueryProductByHandleWithTtlArgs = {
  handle: Scalars['String'];
};


/** Root of the Schema */
export type QueryProductWithTtlArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type QueryProductsWithTtlArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductSortKeys>;
};


/** Root of the Schema */
export type QuerySearchArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


/** Root of the Schema */
export type QuerySearchAssetIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type QuerySearchCollectionIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereCollectionInput>;
};


/** Root of the Schema */
export type QuerySearchPageIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWherePageInput>;
};


/** Root of the Schema */
export type QuerySearchProductIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductInput>;
};


/** Root of the Schema */
export type QuerySearchProductPageDetailsIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPageDetailsInput>;
};


/** Root of the Schema */
export type QuerySearchProductPagePoliciesIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPagePoliciesInput>;
};


/** Root of the Schema */
export type QuerySearchTsStaticSiteIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type QueryTaxonomySuggestArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryWithContextArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ReviewsIo_CreateInvitationPropertiesPropertyInput = {
  country_code?: InputMaybe<Scalars['String']>;
  date_send?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<ReviewsIo_InvitationProductInput>>>;
  /** Template identifier */
  template_id?: InputMaybe<Scalars['String']>;
};

export type ReviewsIo_CreateInvitationResponse = {
  __typename?: 'ReviewsIo_CreateInvitationResponse';
  message?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The status of a response */
  status?: Maybe<ReviewsIo_CreateInvitationResponseStatusProperty>;
};

export enum ReviewsIo_CreateInvitationResponseStatusProperty {
  Error = 'error',
  Success = 'success'
}

export type ReviewsIo_InvitationProductInput = {
  /** Product brand */
  brand?: InputMaybe<Scalars['String']>;
  /** Product category */
  category?: InputMaybe<Scalars['String']>;
  /** Product custom property */
  custom?: InputMaybe<Scalars['String']>;
  /** Product description */
  description?: InputMaybe<Scalars['String']>;
  /** Product GTIN */
  gtin?: InputMaybe<Scalars['String']>;
  /** Product image URL */
  image?: InputMaybe<Scalars['String']>;
  /** Product MPN */
  mpn?: InputMaybe<Scalars['String']>;
  /** Product name */
  name?: InputMaybe<Scalars['String']>;
  /** Product page url */
  pageUrl?: InputMaybe<Scalars['String']>;
  /** Product unique ID */
  sku?: InputMaybe<Scalars['String']>;
};

export type ReviewsIo_ListProductReviewsResponse = {
  __typename?: 'ReviewsIo_ListProductReviewsResponse';
  products?: Maybe<Array<Maybe<ReviewsIo_ListProductReviewsResponseProductsProperty>>>;
  ratings?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  reviews?: Maybe<ReviewsIo_ListProductReviewsResponseReviewsProperty>;
  settings?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  stats?: Maybe<ReviewsIo_ListProductReviewsResponseStatsProperty>;
  store?: Maybe<ReviewsIo_ListProductReviewsResponseStoreProperty>;
  word?: Maybe<Scalars['String']>;
  write_review_link?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ListProductReviewsResponseProductsProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseProductsProperty';
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ListProductReviewsResponseReviewsProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseReviewsProperty';
  current_page?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<ReviewsIo_ProductReview>>>;
  from?: Maybe<Scalars['Int']>;
  last_page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ReviewsIo_ListProductReviewsResponseStatsProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseStatsProperty';
  average?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
};

export type ReviewsIo_ListProductReviewsResponseStoreProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseStoreProperty';
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ReviewsIo_Product = {
  __typename?: 'ReviewsIo_Product';
  /** Product brand */
  brand?: Maybe<Scalars['String']>;
  /** Product category */
  category?: Maybe<Scalars['String']>;
  /** Product custom property */
  custom?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Product GTIN */
  gtin?: Maybe<Scalars['String']>;
  /** Product image URL */
  image_url?: Maybe<Scalars['String']>;
  /** Product link URL */
  link?: Maybe<Scalars['String']>;
  /** Product MPN */
  mpn?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Product page url */
  pageUrl?: Maybe<Scalars['String']>;
  /** Product unique ID */
  sku?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ProductReview = {
  __typename?: 'ReviewsIo_ProductReview';
  author?: Maybe<ReviewsIo_ProductReviewAuthorProperty>;
  date_created?: Maybe<Scalars['String']>;
  date_formatted?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  product?: Maybe<ReviewsIo_Product>;
  product_make?: Maybe<Scalars['String']>;
  product_review_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Array<Maybe<ReviewsIo_ProductReviewRatingsProperty>>>;
  replies?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  review?: Maybe<Scalars['String']>;
  reviewer?: Maybe<ReviewsIo_Reviewer>;
  sku?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeago?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ProductReviewAuthorProperty = {
  __typename?: 'ReviewsIo_ProductReviewAuthorProperty';
  email?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ProductReviewRatingsProperty = {
  __typename?: 'ReviewsIo_ProductReviewRatingsProperty';
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
};

export type ReviewsIo_Reviewer = {
  __typename?: 'ReviewsIo_Reviewer';
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gravatar?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  name_formatted?: Maybe<Scalars['String']>;
  profile_picture?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
  verified_buyer?: Maybe<ReviewsIo_ReviewerVerifiedBuyerProperty>;
};

export enum ReviewsIo_ReviewerVerifiedBuyerProperty {
  No = 'no',
  Yes = 'yes'
}

export type SaleComponent = {
  __typename?: 'SaleComponent';
  buttonText: Scalars['String'];
  primaryText: Scalars['String'];
  secondaryText: Scalars['String'];
};

export type SaleComponentInput = {
  buttonText: Scalars['String'];
  primaryText: Scalars['String'];
  secondaryText: Scalars['String'];
};

/** Details about the gift card used on the checkout. */
export type ShopifyStorefront_AppliedGiftCard = {
  __typename?: 'ShopifyStorefront_AppliedGiftCard';
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: Scalars['Money'];
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: ShopifyStorefront_MoneyV2;
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: Scalars['Money'];
  /** The amount left on the gift card. */
  balanceV2: ShopifyStorefront_MoneyV2;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String'];
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: ShopifyStorefront_MoneyV2;
};

/** An article in an online store blog. */
export type ShopifyStorefront_Article = {
  __typename?: 'ShopifyStorefront_Article';
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
   */
  author: ShopifyStorefront_ArticleAuthor;
  /** The article's author. */
  authorV2?: Maybe<ShopifyStorefront_ArticleAuthor>;
  /** The blog that the article belongs to. */
  blog: ShopifyStorefront_Blog;
  /** List of comments posted on the article. */
  comments: ShopifyStorefront_CommentConnection;
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['Html'];
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>;
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['Html']>;
  /** A human-friendly unique string for the Article automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the article. */
  image?: Maybe<ShopifyStorefront_Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['Url']>;
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime'];
  /** The article’s SEO information. */
  seo?: Maybe<ShopifyStorefront_Seo>;
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>;
  /** The article’s name. */
  title: Scalars['String'];
};


/** An article in an online store blog. */
export type ShopifyStorefront_ArticleCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An article in an online store blog. */
export type ShopifyStorefront_ArticleContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ShopifyStorefront_ArticleExcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ShopifyStorefront_ArticleMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An article in an online store blog. */
export type ShopifyStorefront_ArticleMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** The author of an article. */
export type ShopifyStorefront_ArticleAuthor = {
  __typename?: 'ShopifyStorefront_ArticleAuthor';
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>;
  /** The author’s email. */
  email: Scalars['String'];
  /** The author's first name. */
  firstName: Scalars['String'];
  /** The author's last name. */
  lastName: Scalars['String'];
  /** The author's full name. */
  name: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Articles. */
export type ShopifyStorefront_ArticleConnection = {
  __typename?: 'ShopifyStorefront_ArticleConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_ArticleEdge>;
  /** A list of the nodes contained in ArticleEdge. */
  nodes: Array<ShopifyStorefront_Article>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one Article and a cursor during pagination. */
export type ShopifyStorefront_ArticleEdge = {
  __typename?: 'ShopifyStorefront_ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ArticleEdge. */
  node: ShopifyStorefront_Article;
};

export enum ShopifyStorefront_ArticleSortKeys {
  Author = 'AUTHOR',
  BlogTitle = 'BLOG_TITLE',
  Id = 'ID',
  PublishedAt = 'PUBLISHED_AT',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

/** Represents a generic custom attribute. */
export type ShopifyStorefront_Attribute = {
  __typename?: 'ShopifyStorefront_Attribute';
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the input fields required for an attribute. */
export type ShopifyStorefront_AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value: Scalars['String'];
};

/** A collection of available shipping rates for a checkout. */
export type ShopifyStorefront_AvailableShippingRates = {
  __typename?: 'ShopifyStorefront_AvailableShippingRates';
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   */
  ready: Scalars['Boolean'];
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<Maybe<ShopifyStorefront_ShippingRate>>>;
};

/** An online store blog. */
export type ShopifyStorefront_Blog = {
  __typename?: 'ShopifyStorefront_Blog';
  /** Find an article by its handle. */
  articleByHandle?: Maybe<ShopifyStorefront_Article>;
  /** List of the blog's articles. */
  articles: ShopifyStorefront_ArticleConnection;
  /** The authors who have contributed to the blog. */
  authors: Array<ShopifyStorefront_ArticleAuthor>;
  /** A human-friendly unique string for the Blog automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['Url']>;
  /** The blog's SEO information. */
  seo?: Maybe<ShopifyStorefront_Seo>;
  /** The blogs’s title. */
  title: Scalars['String'];
};


/** An online store blog. */
export type ShopifyStorefront_BlogArticleByHandleArgs = {
  handle: Scalars['String'];
};


/** An online store blog. */
export type ShopifyStorefront_BlogArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyStorefront_ArticleSortKeys>;
};


/** An online store blog. */
export type ShopifyStorefront_BlogMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An online store blog. */
export type ShopifyStorefront_BlogMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

export enum ShopifyStorefront_CardBrand {
  AmericanExpress = 'AMERICAN_EXPRESS',
  DinersClub = 'DINERS_CLUB',
  Discover = 'DISCOVER',
  Jcb = 'JCB',
  Mastercard = 'MASTERCARD',
  Visa = 'VISA'
}

/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ShopifyStorefront_Cart = {
  __typename?: 'ShopifyStorefront_Cart';
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<ShopifyStorefront_Attribute>;
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: ShopifyStorefront_CartBuyerIdentity;
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['Url'];
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime'];
  /** The delivery groups available for the cart, based on the default address of the logged-in customer. */
  deliveryGroups: ShopifyStorefront_CartDeliveryGroupConnection;
  /** The case-insensitive discount codes that the customer added at checkout. */
  discountCodes: Array<ShopifyStorefront_CartDiscountCode>;
  /**
   * The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-cart).
   * @deprecated Use `cost` instead
   */
  estimatedCost: ShopifyStorefront_CartEstimatedCost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: ShopifyStorefront_CartLineConnection;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>;
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ShopifyStorefront_CartDeliveryGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ShopifyStorefront_CartLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Represents information about the buyer that is interacting with the cart. */
export type ShopifyStorefront_CartBuyerIdentity = {
  __typename?: 'ShopifyStorefront_CartBuyerIdentity';
  /** The country where the buyer is located. */
  countryCode?: Maybe<ShopifyStorefront_CountryCode>;
  /** The customer account associated with the cart. */
  customer?: Maybe<ShopifyStorefront_Customer>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>;
};

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout)
 * and should match the customer's shipping address.
 */
export type ShopifyStorefront_CartBuyerIdentityInput = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<ShopifyStorefront_CountryCode>;
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `cartCreate` mutation. */
export type ShopifyStorefront_CartCreatePayload = {
  __typename?: 'ShopifyStorefront_CartCreatePayload';
  /** The new cart. */
  cart?: Maybe<ShopifyStorefront_Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyStorefront_CartUserError>;
};

/** Information about the options available for one or more line items to be delivered to a specific address. */
export type ShopifyStorefront_CartDeliveryGroup = {
  __typename?: 'ShopifyStorefront_CartDeliveryGroup';
  /** A list of cart lines for the delivery group. */
  cartLines: ShopifyStorefront_CartLineConnection;
  /** The destination address for the delivery group. */
  deliveryAddress: ShopifyStorefront_MailingAddress;
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<ShopifyStorefront_CartDeliveryOption>;
  /** The ID for the delivery group. */
  id: Scalars['ID'];
};


/** Information about the options available for one or more line items to be delivered to a specific address. */
export type ShopifyStorefront_CartDeliveryGroupCartLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple CartDeliveryGroups. */
export type ShopifyStorefront_CartDeliveryGroupConnection = {
  __typename?: 'ShopifyStorefront_CartDeliveryGroupConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_CartDeliveryGroupEdge>;
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<ShopifyStorefront_CartDeliveryGroup>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination. */
export type ShopifyStorefront_CartDeliveryGroupEdge = {
  __typename?: 'ShopifyStorefront_CartDeliveryGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartDeliveryGroupEdge. */
  node: ShopifyStorefront_CartDeliveryGroup;
};

/** Information about a delivery option. */
export type ShopifyStorefront_CartDeliveryOption = {
  __typename?: 'ShopifyStorefront_CartDeliveryOption';
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']>;
  /** The method for the delivery option. */
  deliveryMethodType: ShopifyStorefront_DeliveryMethodType;
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']>;
  /** The estimated cost for the delivery option. */
  estimatedCost: ShopifyStorefront_MoneyV2;
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']>;
};

/** The discounts that have been applied to the cart line. */
export type ShopifyStorefront_CartDiscountAllocation = {
  __typename?: 'ShopifyStorefront_CartDiscountAllocation';
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: ShopifyStorefront_MoneyV2;
};

/** The discount codes applied to the cart. */
export type ShopifyStorefront_CartDiscountCode = {
  __typename?: 'ShopifyStorefront_CartDiscountCode';
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean'];
  /** The code for the discount. */
  code: Scalars['String'];
};

export enum ShopifyStorefront_CartErrorCode {
  Invalid = 'INVALID',
  InvalidMerchandiseLine = 'INVALID_MERCHANDISE_LINE',
  LessThan = 'LESS_THAN',
  MissingDiscountCode = 'MISSING_DISCOUNT_CODE',
  MissingNote = 'MISSING_NOTE'
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * It uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-cart).
 */
export type ShopifyStorefront_CartEstimatedCost = {
  __typename?: 'ShopifyStorefront_CartEstimatedCost';
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: ShopifyStorefront_MoneyV2;
  /** The estimated total amount for the customer to pay. */
  totalAmount: ShopifyStorefront_MoneyV2;
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<ShopifyStorefront_MoneyV2>;
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<ShopifyStorefront_MoneyV2>;
};

/** Specifies the input fields to create a cart. */
export type ShopifyStorefront_CartInput = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<InputMaybe<ShopifyStorefront_AttributeInput>>>;
  /** The customer associated with the cart. Used to determine [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout). Buyer identity should match the customer's shipping address. */
  buyerIdentity?: InputMaybe<ShopifyStorefront_CartBuyerIdentityInput>;
  /** The case-insensitive discount codes that the customer added at checkout. */
  discountCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<InputMaybe<ShopifyStorefront_CartLineInput>>>;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>;
};

/** Represents information about the merchandise in the cart. */
export type ShopifyStorefront_CartLine = {
  __typename?: 'ShopifyStorefront_CartLine';
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<ShopifyStorefront_Attribute>;
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<ShopifyStorefront_CartDiscountAllocation>;
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead
   */
  estimatedCost: ShopifyStorefront_CartLineEstimatedCost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The merchandise that the buyer intends to purchase. */
  merchandise: ShopifyStorefront_Merchandise;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<ShopifyStorefront_SellingPlanAllocation>;
};

/** An auto-generated type for paginating through multiple CartLines. */
export type ShopifyStorefront_CartLineConnection = {
  __typename?: 'ShopifyStorefront_CartLineConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_CartLineEdge>;
  /** A list of the nodes contained in CartLineEdge. */
  nodes: Array<ShopifyStorefront_CartLine>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one CartLine and a cursor during pagination. */
export type ShopifyStorefront_CartLineEdge = {
  __typename?: 'ShopifyStorefront_CartLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartLineEdge. */
  node: ShopifyStorefront_CartLine;
};

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export type ShopifyStorefront_CartLineEstimatedCost = {
  __typename?: 'ShopifyStorefront_CartLineEstimatedCost';
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: ShopifyStorefront_MoneyV2;
  /** The estimated total cost of the merchandise line. */
  totalAmount: ShopifyStorefront_MoneyV2;
};

/** Specifies the input fields to create a merchandise line on a cart. */
export type ShopifyStorefront_CartLineInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<InputMaybe<ShopifyStorefront_AttributeInput>>>;
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID'];
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Represents an error that happens during execution of a cart mutation. */
export type ShopifyStorefront_CartUserError = {
  __typename?: 'ShopifyStorefront_CartUserError';
  /** The error code. */
  code?: Maybe<ShopifyStorefront_CartErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A container for all the information required to checkout items and pay. */
export type ShopifyStorefront_Checkout = {
  __typename?: 'ShopifyStorefront_Checkout';
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<ShopifyStorefront_AppliedGiftCard>;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   */
  availableShippingRates?: Maybe<ShopifyStorefront_AvailableShippingRates>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: ShopifyStorefront_CheckoutBuyerIdentity;
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime'];
  /** The currency code for the checkout. */
  currencyCode: ShopifyStorefront_CurrencyCode;
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<ShopifyStorefront_Attribute>;
  /** Discounts that have been applied on the checkout. */
  discountApplications: ShopifyStorefront_DiscountApplicationConnection;
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: ShopifyStorefront_CheckoutLineItemConnection;
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: ShopifyStorefront_MoneyV2;
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>;
  /** The resulting order from a paid checkout. */
  order?: Maybe<ShopifyStorefront_Order>;
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['Url']>;
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: Scalars['Money'];
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards. */
  paymentDueV2: ShopifyStorefront_MoneyV2;
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   */
  ready: Scalars['Boolean'];
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<ShopifyStorefront_MailingAddress>;
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<ShopifyStorefront_DiscountAllocation>;
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShopifyStorefront_ShippingRate>;
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: Scalars['Money'];
  /** Price of the checkout before duties, shipping and taxes. */
  subtotalPriceV2: ShopifyStorefront_MoneyV2;
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean'];
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean'];
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<ShopifyStorefront_MoneyV2>;
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money'];
  /** The sum of all the prices of all the items in the checkout, duties, taxes and discounts included. */
  totalPriceV2: ShopifyStorefront_MoneyV2;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax: Scalars['Money'];
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTaxV2: ShopifyStorefront_MoneyV2;
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['Url'];
};


/** A container for all the information required to checkout items and pay. */
export type ShopifyStorefront_CheckoutDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A container for all the information required to checkout items and pay. */
export type ShopifyStorefront_CheckoutLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** The identity of the customer associated with the checkout. */
export type ShopifyStorefront_CheckoutBuyerIdentity = {
  __typename?: 'ShopifyStorefront_CheckoutBuyerIdentity';
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<ShopifyStorefront_CountryCode>;
};

/** A single line item in the checkout, grouped by variant and attributes. */
export type ShopifyStorefront_CheckoutLineItem = {
  __typename?: 'ShopifyStorefront_CheckoutLineItem';
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<ShopifyStorefront_Attribute>;
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<ShopifyStorefront_DiscountAllocation>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String'];
  /** Unit price of the line item. */
  unitPrice?: Maybe<ShopifyStorefront_MoneyV2>;
  /** Product variant of the line item. */
  variant?: Maybe<ShopifyStorefront_ProductVariant>;
};

/** An auto-generated type for paginating through multiple CheckoutLineItems. */
export type ShopifyStorefront_CheckoutLineItemConnection = {
  __typename?: 'ShopifyStorefront_CheckoutLineItemConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_CheckoutLineItemEdge>;
  /** A list of the nodes contained in CheckoutLineItemEdge. */
  nodes: Array<ShopifyStorefront_CheckoutLineItem>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one CheckoutLineItem and a cursor during pagination. */
export type ShopifyStorefront_CheckoutLineItemEdge = {
  __typename?: 'ShopifyStorefront_CheckoutLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CheckoutLineItemEdge. */
  node: ShopifyStorefront_CheckoutLineItem;
};

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyStorefront_Collection = {
  __typename?: 'ShopifyStorefront_Collection';
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['Html'];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the collection. */
  image?: Maybe<ShopifyStorefront_Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['Url']>;
  /** List of products in the collection. */
  products: ShopifyStorefront_ProductConnection;
  /** The collection's SEO information. */
  seo: ShopifyStorefront_Seo;
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String'];
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyStorefront_CollectionDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyStorefront_CollectionMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyStorefront_CollectionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyStorefront_CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<InputMaybe<ShopifyStorefront_ProductFilterInput>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyStorefront_ProductCollectionSortKeys>;
};

/** An auto-generated type for paginating through multiple Collections. */
export type ShopifyStorefront_CollectionConnection = {
  __typename?: 'ShopifyStorefront_CollectionConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_CollectionEdge>;
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<ShopifyStorefront_Collection>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one Collection and a cursor during pagination. */
export type ShopifyStorefront_CollectionEdge = {
  __typename?: 'ShopifyStorefront_CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionEdge. */
  node: ShopifyStorefront_Collection;
};

/** A comment on an article. */
export type ShopifyStorefront_Comment = {
  __typename?: 'ShopifyStorefront_Comment';
  /** The comment’s author. */
  author: ShopifyStorefront_CommentAuthor;
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['Html'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};


/** A comment on an article. */
export type ShopifyStorefront_CommentContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};

/** The author of a comment. */
export type ShopifyStorefront_CommentAuthor = {
  __typename?: 'ShopifyStorefront_CommentAuthor';
  /** The author's email. */
  email: Scalars['String'];
  /** The author’s name. */
  name: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Comments. */
export type ShopifyStorefront_CommentConnection = {
  __typename?: 'ShopifyStorefront_CommentConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_CommentEdge>;
  /** A list of the nodes contained in CommentEdge. */
  nodes: Array<ShopifyStorefront_Comment>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one Comment and a cursor during pagination. */
export type ShopifyStorefront_CommentEdge = {
  __typename?: 'ShopifyStorefront_CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CommentEdge. */
  node: ShopifyStorefront_Comment;
};

export enum ShopifyStorefront_CountryCode {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Ar = 'AR',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Ps = 'PS',
  Pt = 'PT',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Ta = 'TA',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
  Zz = 'ZZ'
}

export enum ShopifyStorefront_CropRegion {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum ShopifyStorefront_CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jep = 'JEP',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kid = 'KID',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Std = 'STD',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Xxx = 'XXX',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyStorefront_Customer = {
  __typename?: 'ShopifyStorefront_Customer';
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean'];
  /** A list of addresses for the customer. */
  addresses: ShopifyStorefront_MailingAddressConnection;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime'];
  /** The customer’s default address. */
  defaultAddress?: Maybe<ShopifyStorefront_MailingAddress>;
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String'];
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** A unique identifier for the customer. */
  id: Scalars['ID'];
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<ShopifyStorefront_Checkout>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** The orders associated with the customer. */
  orders: ShopifyStorefront_OrderConnection;
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   */
  tags: Array<Scalars['String']>;
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyStorefront_CustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyStorefront_CustomerMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyStorefront_CustomerMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyStorefront_CustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyStorefront_OrderSortKeys>;
};

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export type ShopifyStorefront_CustomerAccessToken = {
  __typename?: 'ShopifyStorefront_CustomerAccessToken';
  /** The customer’s access token. */
  accessToken: Scalars['String'];
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime'];
};

/** Specifies the input fields required to create a customer access token. */
export type ShopifyStorefront_CustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String'];
  /** The login password to be used by the customer. */
  password: Scalars['String'];
};

/** Return type for `customerAccessTokenCreate` mutation. */
export type ShopifyStorefront_CustomerAccessTokenCreatePayload = {
  __typename?: 'ShopifyStorefront_CustomerAccessTokenCreatePayload';
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<ShopifyStorefront_CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyStorefront_CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyStorefront_UserError>;
};

/** Return type for `customerAddressUpdate` mutation. */
export type ShopifyStorefront_CustomerAddressUpdatePayload = {
  __typename?: 'ShopifyStorefront_CustomerAddressUpdatePayload';
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<ShopifyStorefront_MailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyStorefront_CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyStorefront_UserError>;
};

/** The fields required to create a new customer. */
export type ShopifyStorefront_CustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email: Scalars['String'];
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password: Scalars['String'];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `customerCreate` mutation. */
export type ShopifyStorefront_CustomerCreatePayload = {
  __typename?: 'ShopifyStorefront_CustomerCreatePayload';
  /** The created customer object. */
  customer?: Maybe<ShopifyStorefront_Customer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyStorefront_CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyStorefront_UserError>;
};

export enum ShopifyStorefront_CustomerErrorCode {
  AlreadyEnabled = 'ALREADY_ENABLED',
  BadDomain = 'BAD_DOMAIN',
  Blank = 'BLANK',
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  ContainsUrl = 'CONTAINS_URL',
  CustomerDisabled = 'CUSTOMER_DISABLED',
  Invalid = 'INVALID',
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
  NotFound = 'NOT_FOUND',
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  Taken = 'TAKEN',
  TokenInvalid = 'TOKEN_INVALID',
  TooLong = 'TOO_LONG',
  TooShort = 'TOO_SHORT',
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER'
}

/** Return type for `customerRecover` mutation. */
export type ShopifyStorefront_CustomerRecoverPayload = {
  __typename?: 'ShopifyStorefront_CustomerRecoverPayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyStorefront_CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyStorefront_UserError>;
};

/** Specifies the fields required to update the Customer information. */
export type ShopifyStorefront_CustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `customerUpdate` mutation. */
export type ShopifyStorefront_CustomerUpdatePayload = {
  __typename?: 'ShopifyStorefront_CustomerUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<ShopifyStorefront_Customer>;
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   */
  customerAccessToken?: Maybe<ShopifyStorefront_CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyStorefront_CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyStorefront_UserError>;
};

/** Represents an error that happens during execution of a customer mutation. */
export type ShopifyStorefront_CustomerUserError = {
  __typename?: 'ShopifyStorefront_CustomerUserError';
  /** The error code. */
  code?: Maybe<ShopifyStorefront_CustomerErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The error message. */
  message: Scalars['String'];
};

export enum ShopifyStorefront_DeliveryMethodType {
  Local = 'LOCAL',
  None = 'NONE',
  PickupPoint = 'PICKUP_POINT',
  PickUp = 'PICK_UP',
  Retail = 'RETAIL',
  Shipping = 'SHIPPING'
}

export enum ShopifyStorefront_DigitalWallet {
  AndroidPay = 'ANDROID_PAY',
  ApplePay = 'APPLE_PAY',
  GooglePay = 'GOOGLE_PAY',
  ShopifyPay = 'SHOPIFY_PAY'
}

/** An amount discounting the line that has been allocated by a discount. */
export type ShopifyStorefront_DiscountAllocation = {
  __typename?: 'ShopifyStorefront_DiscountAllocation';
  /** Amount of discount allocated. */
  allocatedAmount: ShopifyStorefront_MoneyV2;
  /** The discount this allocated amount originated from. */
  discountApplication: ShopifyStorefront_DiscountApplication;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 */
export type ShopifyStorefront_DiscountApplication = {
  __typename?: 'ShopifyStorefront_DiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: ShopifyStorefront_DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: ShopifyStorefront_DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: ShopifyStorefront_DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: ShopifyStorefront_PricingValue;
};

export enum ShopifyStorefront_DiscountApplicationAllocationMethod {
  Across = 'ACROSS',
  Each = 'EACH',
  One = 'ONE'
}

/** An auto-generated type for paginating through multiple DiscountApplications. */
export type ShopifyStorefront_DiscountApplicationConnection = {
  __typename?: 'ShopifyStorefront_DiscountApplicationConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_DiscountApplicationEdge>;
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<ShopifyStorefront_DiscountApplication>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one DiscountApplication and a cursor during pagination. */
export type ShopifyStorefront_DiscountApplicationEdge = {
  __typename?: 'ShopifyStorefront_DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountApplicationEdge. */
  node: ShopifyStorefront_DiscountApplication;
};

export enum ShopifyStorefront_DiscountApplicationTargetSelection {
  All = 'ALL',
  Entitled = 'ENTITLED',
  Explicit = 'EXPLICIT'
}

export enum ShopifyStorefront_DiscountApplicationTargetType {
  LineItem = 'LINE_ITEM',
  ShippingLine = 'SHIPPING_LINE'
}

/** Represents a web address. */
export type ShopifyStorefront_Domain = {
  __typename?: 'ShopifyStorefront_Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['Url'];
};

/** A filter that is supported on the parent field. */
export type ShopifyStorefront_Filter = {
  __typename?: 'ShopifyStorefront_Filter';
  /** A unique identifier. */
  id: Scalars['String'];
  /** A human-friendly string for this filter. */
  label: Scalars['String'];
  /** An enumeration that denotes the type of data this filter represents. */
  type: ShopifyStorefront_FilterType;
  /** The list of values for this filter. */
  values: Array<ShopifyStorefront_FilterValue>;
};

export enum ShopifyStorefront_FilterType {
  Boolean = 'BOOLEAN',
  List = 'LIST',
  PriceRange = 'PRICE_RANGE'
}

/** A selectable value within a filter. */
export type ShopifyStorefront_FilterValue = {
  __typename?: 'ShopifyStorefront_FilterValue';
  /** The number of results that match this filter value. */
  count: Scalars['Int'];
  /** A unique identifier. */
  id: Scalars['String'];
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
   */
  input: Scalars['Json'];
  /** A human-friendly string for this filter value. */
  label: Scalars['String'];
};

/** Represents a single fulfillment in an order. */
export type ShopifyStorefront_Fulfillment = {
  __typename?: 'ShopifyStorefront_Fulfillment';
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: ShopifyStorefront_FulfillmentLineItemConnection;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   */
  trackingInfo: Array<ShopifyStorefront_FulfillmentTrackingInfo>;
};


/** Represents a single fulfillment in an order. */
export type ShopifyStorefront_FulfillmentFulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a single fulfillment in an order. */
export type ShopifyStorefront_FulfillmentTrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export type ShopifyStorefront_FulfillmentLineItem = {
  __typename?: 'ShopifyStorefront_FulfillmentLineItem';
  /** The associated order's line item. */
  lineItem: ShopifyStorefront_OrderLineItem;
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int'];
};

/** An auto-generated type for paginating through multiple FulfillmentLineItems. */
export type ShopifyStorefront_FulfillmentLineItemConnection = {
  __typename?: 'ShopifyStorefront_FulfillmentLineItemConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_FulfillmentLineItemEdge>;
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<ShopifyStorefront_FulfillmentLineItem>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination. */
export type ShopifyStorefront_FulfillmentLineItemEdge = {
  __typename?: 'ShopifyStorefront_FulfillmentLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: ShopifyStorefront_FulfillmentLineItem;
};

/** Tracking information associated with the fulfillment. */
export type ShopifyStorefront_FulfillmentTrackingInfo = {
  __typename?: 'ShopifyStorefront_FulfillmentTrackingInfo';
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['Url']>;
};

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
export type ShopifyStorefront_GenericFile = {
  __typename?: 'ShopifyStorefront_GenericFile';
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']>;
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']>;
  /** The preview image for the file. */
  previewImage?: Maybe<ShopifyStorefront_Image>;
  /** The URL of the file. */
  url?: Maybe<Scalars['Url']>;
};

/** Represents an image resource. */
export type ShopifyStorefront_Image = {
  __typename?: 'ShopifyStorefront_Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   * @deprecated Use `url` instead
   */
  originalSrc: Scalars['Url'];
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead
   */
  src: Scalars['Url'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['Url'];
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   */
  url: Scalars['Url'];
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ShopifyStorefront_ImageTransformedSrcArgs = {
  crop?: InputMaybe<ShopifyStorefront_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  preferredContentType?: InputMaybe<ShopifyStorefront_ImageContentType>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ShopifyStorefront_ImageUrlArgs = {
  transform?: InputMaybe<ShopifyStorefront_ImageTransformInput>;
};

/** An auto-generated type for paginating through multiple Images. */
export type ShopifyStorefront_ImageConnection = {
  __typename?: 'ShopifyStorefront_ImageConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_ImageEdge>;
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<ShopifyStorefront_Image>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

export enum ShopifyStorefront_ImageContentType {
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

/** An auto-generated type which holds one Image and a cursor during pagination. */
export type ShopifyStorefront_ImageEdge = {
  __typename?: 'ShopifyStorefront_ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: ShopifyStorefront_Image;
};

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
 */
export type ShopifyStorefront_ImageTransformInput = {
  /**
   * Region of the image to remain after cropping.
   * Must be used in conjunction with maxWidth and/or maxHeight fields where the maxWidth / maxHeight are not equal.
   * The crop parameter should coincide with the smaller value (i.e. smaller maxWidth indicates a LEFT / RIGHT crop, while
   * smaller maxHeight indicates a TOP / BOTTOM crop). For example, { maxWidth: 5, maxHeight: 10, crop: LEFT } will result
   * in an image with width 5 and height 10, where the right side of the image is removed.
   */
  crop?: InputMaybe<ShopifyStorefront_CropRegion>;
  /** Image height in pixels between 1 and 5760. */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /** Image width in pixels between 1 and 5760. */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   */
  preferredContentType?: InputMaybe<ShopifyStorefront_ImageContentType>;
  /** Image size multiplier for high-resolution retina displays. Must be within 1..3. */
  scale?: InputMaybe<Scalars['Int']>;
};

/** Represents a location where product inventory is held. */
export type ShopifyStorefront_Location = {
  __typename?: 'ShopifyStorefront_Location';
  /** The address of the location. */
  address: ShopifyStorefront_LocationAddress;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the location. */
  name: Scalars['String'];
};

/** Represents the address of a location. */
export type ShopifyStorefront_LocationAddress = {
  __typename?: 'ShopifyStorefront_LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /** The code for the province, state, or district of the address of the location. */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

/** Represents a mailing address for customers and shipping. */
export type ShopifyStorefront_MailingAddress = {
  __typename?: 'ShopifyStorefront_MailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<ShopifyStorefront_CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};


/** Represents a mailing address for customers and shipping. */
export type ShopifyStorefront_MailingAddressFormattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>;
  withName?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple MailingAddresses. */
export type ShopifyStorefront_MailingAddressConnection = {
  __typename?: 'ShopifyStorefront_MailingAddressConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_MailingAddressEdge>;
  /** A list of the nodes contained in MailingAddressEdge. */
  nodes: Array<ShopifyStorefront_MailingAddress>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one MailingAddress and a cursor during pagination. */
export type ShopifyStorefront_MailingAddressEdge = {
  __typename?: 'ShopifyStorefront_MailingAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MailingAddressEdge. */
  node: ShopifyStorefront_MailingAddress;
};

/** Specifies the fields accepted to create or update a mailing address. */
export type ShopifyStorefront_MailingAddressInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: InputMaybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: InputMaybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: InputMaybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: InputMaybe<Scalars['String']>;
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>;
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: InputMaybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>;
};

/** Represents a media interface. */
export type ShopifyStorefront_Media = {
  __typename?: 'ShopifyStorefront_Media';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: ShopifyStorefront_MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyStorefront_Image>;
};

/** An auto-generated type for paginating through multiple Media. */
export type ShopifyStorefront_MediaConnection = {
  __typename?: 'ShopifyStorefront_MediaConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_MediaEdge>;
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<ShopifyStorefront_Media>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

export enum ShopifyStorefront_MediaContentType {
  ExternalVideo = 'EXTERNAL_VIDEO',
  Image = 'IMAGE',
  Model_3D = 'MODEL_3D',
  Video = 'VIDEO'
}

/** An auto-generated type which holds one Media and a cursor during pagination. */
export type ShopifyStorefront_MediaEdge = {
  __typename?: 'ShopifyStorefront_MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MediaEdge. */
  node: ShopifyStorefront_Media;
};

/** Represents a Shopify hosted image. */
export type ShopifyStorefront_MediaImage = {
  __typename?: 'ShopifyStorefront_MediaImage';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image for the media. */
  image?: Maybe<ShopifyStorefront_Image>;
  /** The media content type. */
  mediaContentType: ShopifyStorefront_MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyStorefront_Image>;
};

/** The merchandise to be purchased at checkout. */
export type ShopifyStorefront_Merchandise = ShopifyStorefront_ProductVariant;

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export type ShopifyStorefront_Metafield = {
  __typename?: 'ShopifyStorefront_Metafield';
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key name for a metafield. */
  key: Scalars['String'];
  /** The namespace for a metafield. */
  namespace: Scalars['String'];
  /** The parent object that the metafield belongs to. */
  parentResource: ShopifyStorefront_MetafieldParentResource;
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<ShopifyStorefront_MetafieldReference>;
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   */
  type: Scalars['String'];
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a metafield. */
  value: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Metafields. */
export type ShopifyStorefront_MetafieldConnection = {
  __typename?: 'ShopifyStorefront_MetafieldConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_MetafieldEdge>;
  /** A list of the nodes contained in MetafieldEdge. */
  nodes: Array<ShopifyStorefront_Metafield>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one Metafield and a cursor during pagination. */
export type ShopifyStorefront_MetafieldEdge = {
  __typename?: 'ShopifyStorefront_MetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldEdge. */
  node: ShopifyStorefront_Metafield;
};

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 */
export type ShopifyStorefront_MetafieldFilterInput = {
  /** The key of the metafield to filter on. */
  key: Scalars['String'];
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String'];
  /** The value of the metafield. */
  value: Scalars['String'];
};

/** A resource that the metafield belongs to. */
export type ShopifyStorefront_MetafieldParentResource = ShopifyStorefront_Article | ShopifyStorefront_Blog | ShopifyStorefront_Collection | ShopifyStorefront_Customer | ShopifyStorefront_Order | ShopifyStorefront_Page | ShopifyStorefront_Product | ShopifyStorefront_ProductVariant | ShopifyStorefront_Shop;

/** Returns the resource which is being referred to by a metafield. */
export type ShopifyStorefront_MetafieldReference = ShopifyStorefront_GenericFile | ShopifyStorefront_MediaImage | ShopifyStorefront_Page | ShopifyStorefront_Product | ShopifyStorefront_ProductVariant | ShopifyStorefront_Video;

/** A monetary value with currency. */
export type ShopifyStorefront_MoneyV2 = {
  __typename?: 'ShopifyStorefront_MoneyV2';
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: ShopifyStorefront_CurrencyCode;
};

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyStorefront_Order = {
  __typename?: 'ShopifyStorefront_Order';
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<ShopifyStorefront_OrderCancelReason>;
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The code of the currency used for the payment. */
  currencyCode: ShopifyStorefront_CurrencyCode;
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: ShopifyStorefront_MoneyV2;
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<ShopifyStorefront_MoneyV2>;
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: ShopifyStorefront_MoneyV2;
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: ShopifyStorefront_MoneyV2;
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>;
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['Url']>;
  /** Discounts that have been applied on the order. */
  discountApplications: ShopifyStorefront_DiscountApplicationConnection;
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The financial status of the order. */
  financialStatus?: Maybe<ShopifyStorefront_OrderFinancialStatus>;
  /** The fulfillment status for the order. */
  fulfillmentStatus: ShopifyStorefront_OrderFulfillmentStatus;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of the order’s line items. */
  lineItems: ShopifyStorefront_OrderLineItemConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   */
  name: Scalars['String'];
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int'];
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<ShopifyStorefront_MoneyV2>;
  /** The total price of the order before any applied edits. */
  originalTotalPrice: ShopifyStorefront_MoneyV2;
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   */
  processedAt: Scalars['DateTime'];
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<ShopifyStorefront_MailingAddress>;
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<ShopifyStorefront_DiscountAllocation>;
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['Url'];
  /**
   * Price of the order before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice?: Maybe<Scalars['Money']>;
  /** Price of the order before duties, shipping and taxes. */
  subtotalPriceV2?: Maybe<ShopifyStorefront_MoneyV2>;
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<Maybe<ShopifyStorefront_Fulfillment>>>;
  /**
   * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money'];
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPriceV2: ShopifyStorefront_MoneyV2;
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefundedV2` instead
   */
  totalRefunded: Scalars['Money'];
  /** The total amount that has been refunded. */
  totalRefundedV2: ShopifyStorefront_MoneyV2;
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPriceV2` instead
   */
  totalShippingPrice: Scalars['Money'];
  /** The total cost of shipping. */
  totalShippingPriceV2: ShopifyStorefront_MoneyV2;
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax?: Maybe<Scalars['Money']>;
  /** The total cost of taxes. */
  totalTaxV2?: Maybe<ShopifyStorefront_MoneyV2>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyStorefront_OrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyStorefront_OrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyStorefront_OrderMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyStorefront_OrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyStorefront_OrderSuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export enum ShopifyStorefront_OrderCancelReason {
  Customer = 'CUSTOMER',
  Declined = 'DECLINED',
  Fraud = 'FRAUD',
  Inventory = 'INVENTORY',
  Other = 'OTHER'
}

/** An auto-generated type for paginating through multiple Orders. */
export type ShopifyStorefront_OrderConnection = {
  __typename?: 'ShopifyStorefront_OrderConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_OrderEdge>;
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<ShopifyStorefront_Order>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one Order and a cursor during pagination. */
export type ShopifyStorefront_OrderEdge = {
  __typename?: 'ShopifyStorefront_OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderEdge. */
  node: ShopifyStorefront_Order;
};

export enum ShopifyStorefront_OrderFinancialStatus {
  Authorized = 'AUTHORIZED',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Voided = 'VOIDED'
}

export enum ShopifyStorefront_OrderFulfillmentStatus {
  Fulfilled = 'FULFILLED',
  InProgress = 'IN_PROGRESS',
  OnHold = 'ON_HOLD',
  Open = 'OPEN',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  PendingFulfillment = 'PENDING_FULFILLMENT',
  Restocked = 'RESTOCKED',
  Scheduled = 'SCHEDULED',
  Unfulfilled = 'UNFULFILLED'
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export type ShopifyStorefront_OrderLineItem = {
  __typename?: 'ShopifyStorefront_OrderLineItem';
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int'];
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<ShopifyStorefront_Attribute>;
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<ShopifyStorefront_DiscountAllocation>;
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: ShopifyStorefront_MoneyV2;
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: ShopifyStorefront_MoneyV2;
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int'];
  /** The title of the product combined with title of the variant. */
  title: Scalars['String'];
  /** The product variant object associated to the line item. */
  variant?: Maybe<ShopifyStorefront_ProductVariant>;
};

/** An auto-generated type for paginating through multiple OrderLineItems. */
export type ShopifyStorefront_OrderLineItemConnection = {
  __typename?: 'ShopifyStorefront_OrderLineItemConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_OrderLineItemEdge>;
  /** A list of the nodes contained in OrderLineItemEdge. */
  nodes: Array<ShopifyStorefront_OrderLineItem>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one OrderLineItem and a cursor during pagination. */
export type ShopifyStorefront_OrderLineItemEdge = {
  __typename?: 'ShopifyStorefront_OrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderLineItemEdge. */
  node: ShopifyStorefront_OrderLineItem;
};

export enum ShopifyStorefront_OrderSortKeys {
  Id = 'ID',
  ProcessedAt = 'PROCESSED_AT',
  Relevance = 'RELEVANCE',
  TotalPrice = 'TOTAL_PRICE'
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type ShopifyStorefront_Page = {
  __typename?: 'ShopifyStorefront_Page';
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['Html'];
  /** Summary of the page body. */
  bodySummary: Scalars['String'];
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime'];
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['Url']>;
  /** The page's SEO information. */
  seo?: Maybe<ShopifyStorefront_Seo>;
  /** The title of the page. */
  title: Scalars['String'];
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type ShopifyStorefront_PageMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type ShopifyStorefront_PageMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 */
export type ShopifyStorefront_PageInfo = {
  __typename?: 'ShopifyStorefront_PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Settings related to payments. */
export type ShopifyStorefront_PaymentSettings = {
  __typename?: 'ShopifyStorefront_PaymentSettings';
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<ShopifyStorefront_CardBrand>;
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['Url'];
  /** The country where the shop is located. */
  countryCode: ShopifyStorefront_CountryCode;
  /** The three-letter code for the shop's primary currency. */
  currencyCode: ShopifyStorefront_CurrencyCode;
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<ShopifyStorefront_CurrencyCode>;
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>;
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<ShopifyStorefront_DigitalWallet>;
};

/** A filter used to view a subset of products in a collection matching a specific price range. */
export type ShopifyStorefront_PriceRangeFilterInput = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']>;
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']>;
};

/** The value of the percentage pricing object. */
export type ShopifyStorefront_PricingPercentageValue = {
  __typename?: 'ShopifyStorefront_PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The price value (fixed or percentage) for a discount application. */
export type ShopifyStorefront_PricingValue = ShopifyStorefront_MoneyV2 | ShopifyStorefront_PricingPercentageValue;

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_Product = {
  __typename?: 'ShopifyStorefront_Product';
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** List of collections a product belongs to. */
  collections: ShopifyStorefront_CollectionConnection;
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ShopifyStorefront_ProductPriceRange;
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['Html'];
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   */
  featuredImage?: Maybe<ShopifyStorefront_Image>;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of images associated with the product. */
  images: ShopifyStorefront_ImageConnection;
  /** The media associated with the product. */
  media: ShopifyStorefront_MediaConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['Url']>;
  /** List of product options. */
  options: Array<ShopifyStorefront_ProductOption>;
  /** The price range. */
  priceRange: ShopifyStorefront_ProductPriceRange;
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String'];
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime'];
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean'];
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: ShopifyStorefront_SellingPlanGroupConnection;
  /** The product's SEO information. */
  seo: ShopifyStorefront_Seo;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: Array<Scalars['String']>;
  /** The product’s title. */
  title: Scalars['String'];
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: Scalars['DateTime'];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions?: Maybe<ShopifyStorefront_ProductVariant>;
  /** List of the product’s variants. */
  variants: ShopifyStorefront_ProductVariantConnection;
  /** The product’s vendor name. */
  vendor: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyStorefront_ProductImageSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductMediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyStorefront_ProductMediaSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<ShopifyStorefront_SelectedOptionInput>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyStorefront_ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyStorefront_ProductVariantSortKeys>;
};

export enum ShopifyStorefront_ProductCollectionSortKeys {
  BestSelling = 'BEST_SELLING',
  CollectionDefault = 'COLLECTION_DEFAULT',
  Created = 'CREATED',
  Id = 'ID',
  Manual = 'MANUAL',
  Price = 'PRICE',
  Relevance = 'RELEVANCE',
  Title = 'TITLE'
}

/** An auto-generated type for paginating through multiple Products. */
export type ShopifyStorefront_ProductConnection = {
  __typename?: 'ShopifyStorefront_ProductConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_ProductEdge>;
  /** A list of available filters. */
  filters: Array<ShopifyStorefront_Filter>;
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<ShopifyStorefront_Product>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one Product and a cursor during pagination. */
export type ShopifyStorefront_ProductEdge = {
  __typename?: 'ShopifyStorefront_ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: ShopifyStorefront_Product;
};

/** A filter used to view a subset of products in a collection. */
export type ShopifyStorefront_ProductFilterInput = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']>;
  /** A range of prices to filter with-in. */
  price?: InputMaybe<ShopifyStorefront_PriceRangeFilterInput>;
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<ShopifyStorefront_MetafieldFilterInput>;
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']>;
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']>;
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<ShopifyStorefront_MetafieldFilterInput>;
  /** A variant option to filter on. */
  variantOption?: InputMaybe<ShopifyStorefront_VariantOptionFilterInput>;
};

export enum ShopifyStorefront_ProductImageSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Position = 'POSITION',
  Relevance = 'RELEVANCE'
}

export enum ShopifyStorefront_ProductMediaSortKeys {
  Id = 'ID',
  Position = 'POSITION',
  Relevance = 'RELEVANCE'
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export type ShopifyStorefront_ProductOption = {
  __typename?: 'ShopifyStorefront_ProductOption';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The product option’s name. */
  name: Scalars['String'];
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>;
};

/** The price range of the product. */
export type ShopifyStorefront_ProductPriceRange = {
  __typename?: 'ShopifyStorefront_ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: ShopifyStorefront_MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: ShopifyStorefront_MoneyV2;
};

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyStorefront_ProductVariant = {
  __typename?: 'ShopifyStorefront_ProductVariant';
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']>;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead
   */
  compareAtPrice?: Maybe<Scalars['Money']>;
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
  compareAtPriceV2?: Maybe<ShopifyStorefront_MoneyV2>;
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the product variant. This field falls back to the product image if no image is available. */
  image?: Maybe<ShopifyStorefront_Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money'];
  /** The product variant’s price. */
  priceV2: ShopifyStorefront_MoneyV2;
  /** The product object that the product variant belongs to. */
  product: ShopifyStorefront_Product;
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<ShopifyStorefront_SelectedOption>;
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: ShopifyStorefront_SellingPlanAllocationConnection;
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: ShopifyStorefront_StoreAvailabilityConnection;
  /** The product variant’s title. */
  title: Scalars['String'];
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<ShopifyStorefront_MoneyV2>;
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<ShopifyStorefront_UnitPriceMeasurement>;
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>;
  /** Unit of measurement for weight. */
  weightUnit: ShopifyStorefront_WeightUnit;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyStorefront_ProductVariantMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyStorefront_ProductVariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyStorefront_ProductVariantSellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyStorefront_ProductVariantStoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple ProductVariants. */
export type ShopifyStorefront_ProductVariantConnection = {
  __typename?: 'ShopifyStorefront_ProductVariantConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_ProductVariantEdge>;
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ShopifyStorefront_ProductVariant>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one ProductVariant and a cursor during pagination. */
export type ShopifyStorefront_ProductVariantEdge = {
  __typename?: 'ShopifyStorefront_ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantEdge. */
  node: ShopifyStorefront_ProductVariant;
};

export enum ShopifyStorefront_ProductVariantSortKeys {
  Id = 'ID',
  Position = 'POSITION',
  Relevance = 'RELEVANCE',
  Sku = 'SKU',
  Title = 'TITLE'
}

/** SEO information. */
export type ShopifyStorefront_Seo = {
  __typename?: 'ShopifyStorefront_SEO';
  /** The meta description. */
  description?: Maybe<Scalars['String']>;
  /** The SEO title. */
  title?: Maybe<Scalars['String']>;
};

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
export type ShopifyStorefront_SelectedOption = {
  __typename?: 'ShopifyStorefront_SelectedOption';
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Specifies the input fields required for a selected option. */
export type ShopifyStorefront_SelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Represents how products and variants can be sold and purchased. */
export type ShopifyStorefront_SellingPlan = {
  __typename?: 'ShopifyStorefront_SellingPlan';
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String'];
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<ShopifyStorefront_SellingPlanOption>;
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<ShopifyStorefront_SellingPlanPriceAdjustment>;
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean'];
};

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export type ShopifyStorefront_SellingPlanAllocation = {
  __typename?: 'ShopifyStorefront_SellingPlanAllocation';
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<ShopifyStorefront_SellingPlanAllocationPriceAdjustment>;
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: ShopifyStorefront_SellingPlan;
};

/** An auto-generated type for paginating through multiple SellingPlanAllocations. */
export type ShopifyStorefront_SellingPlanAllocationConnection = {
  __typename?: 'ShopifyStorefront_SellingPlanAllocationConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_SellingPlanAllocationEdge>;
  /** A list of the nodes contained in SellingPlanAllocationEdge. */
  nodes: Array<ShopifyStorefront_SellingPlanAllocation>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination. */
export type ShopifyStorefront_SellingPlanAllocationEdge = {
  __typename?: 'ShopifyStorefront_SellingPlanAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanAllocationEdge. */
  node: ShopifyStorefront_SellingPlanAllocation;
};

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export type ShopifyStorefront_SellingPlanAllocationPriceAdjustment = {
  __typename?: 'ShopifyStorefront_SellingPlanAllocationPriceAdjustment';
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: ShopifyStorefront_MoneyV2;
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: ShopifyStorefront_MoneyV2;
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: ShopifyStorefront_MoneyV2;
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<ShopifyStorefront_MoneyV2>;
};

/** An auto-generated type for paginating through multiple SellingPlans. */
export type ShopifyStorefront_SellingPlanConnection = {
  __typename?: 'ShopifyStorefront_SellingPlanConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_SellingPlanEdge>;
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<ShopifyStorefront_SellingPlan>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one SellingPlan and a cursor during pagination. */
export type ShopifyStorefront_SellingPlanEdge = {
  __typename?: 'ShopifyStorefront_SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanEdge. */
  node: ShopifyStorefront_SellingPlan;
};

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export type ShopifyStorefront_SellingPlanFixedAmountPriceAdjustment = {
  __typename?: 'ShopifyStorefront_SellingPlanFixedAmountPriceAdjustment';
  /** The money value of the price adjustment. */
  adjustmentAmount: ShopifyStorefront_MoneyV2;
};

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export type ShopifyStorefront_SellingPlanFixedPriceAdjustment = {
  __typename?: 'ShopifyStorefront_SellingPlanFixedPriceAdjustment';
  /** A new price of the variant when it's purchased with the selling plan. */
  price: ShopifyStorefront_MoneyV2;
};

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type ShopifyStorefront_SellingPlanGroup = {
  __typename?: 'ShopifyStorefront_SellingPlanGroup';
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>;
  /** The name of the selling plan group. */
  name: Scalars['String'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<ShopifyStorefront_SellingPlanGroupOption>;
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: ShopifyStorefront_SellingPlanConnection;
};


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type ShopifyStorefront_SellingPlanGroupSellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple SellingPlanGroups. */
export type ShopifyStorefront_SellingPlanGroupConnection = {
  __typename?: 'ShopifyStorefront_SellingPlanGroupConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_SellingPlanGroupEdge>;
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<ShopifyStorefront_SellingPlanGroup>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one SellingPlanGroup and a cursor during pagination. */
export type ShopifyStorefront_SellingPlanGroupEdge = {
  __typename?: 'ShopifyStorefront_SellingPlanGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanGroupEdge. */
  node: ShopifyStorefront_SellingPlanGroup;
};

/** Represents an option on a selling plan group that's available in the drop-down list in the storefront. */
export type ShopifyStorefront_SellingPlanGroupOption = {
  __typename?: 'ShopifyStorefront_SellingPlanGroupOption';
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String'];
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>;
};

/** An option provided by a Selling Plan. */
export type ShopifyStorefront_SellingPlanOption = {
  __typename?: 'ShopifyStorefront_SellingPlanOption';
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>;
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>;
};

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export type ShopifyStorefront_SellingPlanPercentagePriceAdjustment = {
  __typename?: 'ShopifyStorefront_SellingPlanPercentagePriceAdjustment';
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int'];
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type ShopifyStorefront_SellingPlanPriceAdjustment = {
  __typename?: 'ShopifyStorefront_SellingPlanPriceAdjustment';
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: ShopifyStorefront_SellingPlanPriceAdjustmentValue;
  /** The number of orders that the price adjustment applies to If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>;
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type ShopifyStorefront_SellingPlanPriceAdjustmentValue = ShopifyStorefront_SellingPlanFixedAmountPriceAdjustment | ShopifyStorefront_SellingPlanFixedPriceAdjustment | ShopifyStorefront_SellingPlanPercentagePriceAdjustment;

/** A shipping rate to be applied to a checkout. */
export type ShopifyStorefront_ShippingRate = {
  __typename?: 'ShopifyStorefront_ShippingRate';
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'];
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money'];
  /** Price of this shipping rate. */
  priceV2: ShopifyStorefront_MoneyV2;
  /** Title of this shipping rate. */
  title: Scalars['String'];
};

/** Shop represents a collection of the general settings and information about the shop. */
export type ShopifyStorefront_Shop = {
  __typename?: 'ShopifyStorefront_Shop';
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyStorefront_Metafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyStorefront_MetafieldConnection;
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String'];
  /** The shop’s name. */
  name: Scalars['String'];
  /** Settings related to payments. */
  paymentSettings: ShopifyStorefront_PaymentSettings;
  /** The shop’s primary domain. */
  primaryDomain: ShopifyStorefront_Domain;
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopifyStorefront_ShopPolicy>;
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopifyStorefront_ShopPolicy>;
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopifyStorefront_ShopPolicy>;
  /** Countries that the shop ships to. */
  shipsToCountries: Array<ShopifyStorefront_CountryCode>;
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopifyStorefront_ShopPolicyWithDefault>;
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopifyStorefront_ShopPolicy>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopifyStorefront_ShopMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopifyStorefront_ShopMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopifyStorefront_ShopPolicy = {
  __typename?: 'ShopifyStorefront_ShopPolicy';
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String'];
  /** Policy’s handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Policy’s title. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['Url'];
};

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 */
export type ShopifyStorefront_ShopPolicyWithDefault = {
  __typename?: 'ShopifyStorefront_ShopPolicyWithDefault';
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String'];
  /** The handle of the policy. */
  handle: Scalars['String'];
  /** The unique identifier of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']>;
  /** The title of the policy. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['Url'];
};

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 */
export type ShopifyStorefront_StoreAvailability = {
  __typename?: 'ShopifyStorefront_StoreAvailability';
  /** Whether or not this product variant is in-stock at this location. */
  available: Scalars['Boolean'];
  /** The location where this product variant is stocked at. */
  location: ShopifyStorefront_Location;
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String'];
};

/** An auto-generated type for paginating through multiple StoreAvailabilities. */
export type ShopifyStorefront_StoreAvailabilityConnection = {
  __typename?: 'ShopifyStorefront_StoreAvailabilityConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_StoreAvailabilityEdge>;
  /** A list of the nodes contained in StoreAvailabilityEdge. */
  nodes: Array<ShopifyStorefront_StoreAvailability>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one StoreAvailability and a cursor during pagination. */
export type ShopifyStorefront_StoreAvailabilityEdge = {
  __typename?: 'ShopifyStorefront_StoreAvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StoreAvailabilityEdge. */
  node: ShopifyStorefront_StoreAvailability;
};

/** An auto-generated type for paginating through a list of Strings. */
export type ShopifyStorefront_StringConnection = {
  __typename?: 'ShopifyStorefront_StringConnection';
  /** A list of edges. */
  edges: Array<ShopifyStorefront_StringEdge>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyStorefront_PageInfo;
};

/** An auto-generated type which holds one String and a cursor during pagination. */
export type ShopifyStorefront_StringEdge = {
  __typename?: 'ShopifyStorefront_StringEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/** The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml). */
export type ShopifyStorefront_UnitPriceMeasurement = {
  __typename?: 'ShopifyStorefront_UnitPriceMeasurement';
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<ShopifyStorefront_UnitPriceMeasurementMeasuredType>;
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<ShopifyStorefront_UnitPriceMeasurementMeasuredUnit>;
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float'];
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<ShopifyStorefront_UnitPriceMeasurementMeasuredUnit>;
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int'];
};

export enum ShopifyStorefront_UnitPriceMeasurementMeasuredType {
  Area = 'AREA',
  Length = 'LENGTH',
  Volume = 'VOLUME',
  Weight = 'WEIGHT'
}

export enum ShopifyStorefront_UnitPriceMeasurementMeasuredUnit {
  Cl = 'CL',
  Cm = 'CM',
  G = 'G',
  Kg = 'KG',
  L = 'L',
  M = 'M',
  M2 = 'M2',
  M3 = 'M3',
  Mg = 'MG',
  Ml = 'ML',
  Mm = 'MM'
}

/** Represents an error in the input of a mutation. */
export type ShopifyStorefront_UserError = {
  __typename?: 'ShopifyStorefront_UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A filter used to view a subset of products in a collection matching a specific variant option. */
export type ShopifyStorefront_VariantOptionFilterInput = {
  /** The name of the variant option to filter on. */
  name: Scalars['String'];
  /** The value of the variant option to filter on. */
  value: Scalars['String'];
};

/** Represents a Shopify hosted video. */
export type ShopifyStorefront_Video = {
  __typename?: 'ShopifyStorefront_Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: ShopifyStorefront_MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyStorefront_Image>;
  /** The sources for a video. */
  sources: Array<ShopifyStorefront_VideoSource>;
};

/** Represents a source for a Shopify hosted video. */
export type ShopifyStorefront_VideoSource = {
  __typename?: 'ShopifyStorefront_VideoSource';
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
};

export enum ShopifyStorefront_WeightUnit {
  Grams = 'GRAMS',
  Kilograms = 'KILOGRAMS',
  Ounces = 'OUNCES',
  Pounds = 'POUNDS'
}

/** The permission required to access a Shopify Admin API or Storefront API resource for a shop. Merchants grant access scopes that are requested by applications. */
export type Shopify_AccessScope = {
  __typename?: 'Shopify_AccessScope';
  /** A description of the actions that the access scope allows an app to perform. */
  description: Scalars['String'];
  /** A readable string that represents the access scope. The string usually follows the format `{action}_{resource}`. `{action}` is `read` or `write`, and `{resource}` is the resource that the action can be performed on. `{action}` and `{resource}` are separated by an underscore. For example, `read_orders` or `write_products`. */
  handle: Scalars['String'];
};

/** A Shopify application. */
export type Shopify_App = {
  __typename?: 'Shopify_App';
  /** A unique application API identifier. */
  apiKey: Scalars['String'];
  /** App store page URL of the app. */
  appStoreAppUrl?: Maybe<Scalars['Url']>;
  /** App store page URL of the developer who created the app. */
  appStoreDeveloperUrl?: Maybe<Scalars['Url']>;
  /** The access scopes available to the app. */
  availableAccessScopes: Array<Shopify_AccessScope>;
  /** Banner image for the app. */
  banner: Shopify_Image;
  /** Description of the app. */
  description?: Maybe<Scalars['String']>;
  /** The name of the app developer. */
  developerName?: Maybe<Scalars['String']>;
  /** The type of app developer. */
  developerType: Shopify_AppDeveloperType;
  /**
   * Website of the developer who created the app.
   * @deprecated Use `appStoreDeveloperUrl` instead
   */
  developerUrl: Scalars['Url'];
  /** Whether the app uses the Embedded App SDK. */
  embedded: Scalars['Boolean'];
  /** Requirements that must be met before the app can be installed. */
  failedRequirements: Array<Shopify_FailedRequirement>;
  /** A list of app features that are shown in the Shopify App Store listing. */
  features: Array<Scalars['String']>;
  /** Feedback from this app about the store. */
  feedback?: Maybe<Shopify_AppFeedback>;
  /** Handle of the app. */
  handle?: Maybe<Scalars['String']>;
  /** Icon that represents the app. */
  icon: Shopify_Image;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Webpage where you can install the app. */
  installUrl?: Maybe<Scalars['Url']>;
  /**
   * Corresponding AppInstallation for this shop and App.
   * Returns null if the App is not installed.
   */
  installation?: Maybe<Shopify_AppInstallation>;
  /** Whether the app is the [post purchase](https://shopify.dev/apps/checkout/post-purchase) app in use. */
  isPostPurchaseAppInUse: Scalars['Boolean'];
  /**
   * Webpage that the app starts in.
   * @deprecated Use AppInstallation.launchUrl instead
   */
  launchUrl: Scalars['Url'];
  /**
   * Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use AppInstallation.navigationItems instead
   */
  navigationItems: Array<Shopify_NavigationItem>;
  /** Whether the app was previously installed on the current shop. */
  previouslyInstalled: Scalars['Boolean'];
  /** Detailed information about the app pricing. */
  pricingDetails?: Maybe<Scalars['String']>;
  /** Summary of the app pricing details. */
  pricingDetailsSummary: Scalars['String'];
  /** Link to app privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars['Url']>;
  /** The public category for the app. */
  publicCategory: Shopify_AppPublicCategory;
  /** Whether the app is published to the Shopify App Store. */
  published: Scalars['Boolean'];
  /** The access scopes requested by the app. */
  requestedAccessScopes: Array<Shopify_AccessScope>;
  /** Screenshots of the app. */
  screenshots: Array<Shopify_Image>;
  /** Whether the app was developed by Shopify. */
  shopifyDeveloped: Scalars['Boolean'];
  /** Name of the app. */
  title: Scalars['String'];
  /**
   * Message that appears when the app is uninstalled. For example:
   * By removing this app, you will no longer be able to publish products to MySocialSite or view this app in your Shopify admin. You can re-enable this channel at any time.
   */
  uninstallMessage: Scalars['String'];
  /**
   * Webpage where you can uninstall the app.
   * @deprecated Use AppInstallation.uninstallUrl instead
   */
  uninstallUrl?: Maybe<Scalars['Url']>;
  /** The webhook API version for the app. */
  webhookApiVersion: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Apps. */
export type Shopify_AppConnection = {
  __typename?: 'Shopify_AppConnection';
  /** A list of edges. */
  edges: Array<Shopify_AppEdge>;
  /** A list of the nodes contained in AppEdge. */
  nodes: Array<Shopify_App>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** App credits can be applied by the merchant towards future app purchases, subscriptions, or usage records in Shopify. */
export type Shopify_AppCredit = {
  __typename?: 'Shopify_AppCredit';
  /** The amount that can be used towards future app purchases in Shopify. */
  amount: Shopify_MoneyV2;
  /** The date and time when the app credit was created. */
  createdAt: Scalars['DateTime'];
  /** The description of the app credit. */
  description: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Whether the app credit is a test transaction. */
  test: Scalars['Boolean'];
};

/** An auto-generated type for paginating through multiple AppCredits. */
export type Shopify_AppCreditConnection = {
  __typename?: 'Shopify_AppCreditConnection';
  /** A list of edges. */
  edges: Array<Shopify_AppCreditEdge>;
  /** A list of the nodes contained in AppCreditEdge. */
  nodes: Array<Shopify_AppCredit>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one AppCredit and a cursor during pagination. */
export type Shopify_AppCreditEdge = {
  __typename?: 'Shopify_AppCreditEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppCreditEdge. */
  node: Shopify_AppCredit;
};

export enum Shopify_AppDeveloperType {
  Merchant = 'MERCHANT',
  Partner = 'PARTNER',
  Shopify = 'SHOPIFY',
  Unknown = 'UNKNOWN'
}

/** An auto-generated type which holds one App and a cursor during pagination. */
export type Shopify_AppEdge = {
  __typename?: 'Shopify_AppEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppEdge. */
  node: Shopify_App;
};

/**
 * Reports the status of shops and their resources and displays this information
 * within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
 * to set up an app on their store.
 */
export type Shopify_AppFeedback = {
  __typename?: 'Shopify_AppFeedback';
  /** The application associated to the feedback. */
  app: Shopify_App;
  /** A link to where merchants can resolve errors. */
  link?: Maybe<Shopify_Link>;
  /** The feedback message presented to the merchant. */
  messages: Array<Shopify_UserError>;
};

/** Represents an installed application on a shop. */
export type Shopify_AppInstallation = {
  __typename?: 'Shopify_AppInstallation';
  /** The access scopes granted to the application by a merchant during installation. */
  accessScopes: Array<Shopify_AccessScope>;
  /** The active application subscriptions billed to the shop on a recurring basis. */
  activeSubscriptions: Array<Shopify_AppSubscription>;
  /** All subscriptions created for a shop. */
  allSubscriptions: Shopify_AppSubscriptionConnection;
  /** Application which is installed. */
  app: Shopify_App;
  /**
   * Channel associated with the installed application.
   * @deprecated Use `publication` instead
   */
  channel?: Maybe<Shopify_Channel>;
  /** Credits that can be used towards future app purchases. */
  credits: Shopify_AppCreditConnection;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The URL to launch the application. */
  launchUrl: Scalars['Url'];
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** One-time purchases to a shop. */
  oneTimePurchases: Shopify_AppPurchaseOneTimeConnection;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /** The publication associated with the installed application. */
  publication?: Maybe<Shopify_Publication>;
  /** The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes. */
  revenueAttributionRecords: Shopify_AppRevenueAttributionRecordConnection;
  /**
   * Subscriptions charge to a shop on a recurring basis.
   * @deprecated Use `activeSubscriptions` instead
   */
  subscriptions: Array<Shopify_AppSubscription>;
  /** The URL to uninstall the application. */
  uninstallUrl?: Maybe<Scalars['Url']>;
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationAllSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_AppSubscriptionSortKeys>;
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationCreditsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_AppTransactionSortKeys>;
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationOneTimePurchasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_AppTransactionSortKeys>;
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents an installed application on a shop. */
export type Shopify_AppInstallationRevenueAttributionRecordsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_AppRevenueAttributionRecordSortKeys>;
};

/** The app plan that the merchant is subscribed to. */
export type Shopify_AppPlanV2 = {
  __typename?: 'Shopify_AppPlanV2';
  /** The plan billed to a shop on a recurring basis. */
  pricingDetails: Shopify_AppPricingDetails;
};

/**
 * The information about the price that's charged to a shop every plan period.
 * The concrete type can be `AppRecurringPricing` for recurring billing or `AppUsagePricing` for usage-based billing.
 */
export type Shopify_AppPricingDetails = Shopify_AppRecurringPricing | Shopify_AppUsagePricing;

export enum Shopify_AppPricingInterval {
  Annual = 'ANNUAL',
  Every_30Days = 'EVERY_30_DAYS'
}

export enum Shopify_AppPublicCategory {
  Custom = 'CUSTOM',
  Other = 'OTHER',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** Services and features purchased once by a store. */
export type Shopify_AppPurchaseOneTime = {
  __typename?: 'Shopify_AppPurchaseOneTime';
  /** The date and time when the app purchase occurred. */
  createdAt: Scalars['DateTime'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the app purchase. */
  name: Scalars['String'];
  /** The amount to be charged to the store for the app purchase. */
  price: Shopify_MoneyV2;
  /** The status of the app purchase. */
  status: Shopify_AppPurchaseStatus;
  /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean'];
};

/** An auto-generated type for paginating through multiple AppPurchaseOneTimes. */
export type Shopify_AppPurchaseOneTimeConnection = {
  __typename?: 'Shopify_AppPurchaseOneTimeConnection';
  /** A list of edges. */
  edges: Array<Shopify_AppPurchaseOneTimeEdge>;
  /** A list of the nodes contained in AppPurchaseOneTimeEdge. */
  nodes: Array<Shopify_AppPurchaseOneTime>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one AppPurchaseOneTime and a cursor during pagination. */
export type Shopify_AppPurchaseOneTimeEdge = {
  __typename?: 'Shopify_AppPurchaseOneTimeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppPurchaseOneTimeEdge. */
  node: Shopify_AppPurchaseOneTime;
};

export enum Shopify_AppPurchaseStatus {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
  Pending = 'PENDING'
}

/**
 * The pricing information about a subscription app.
 * The object contains an interval (the frequency at which the shop is billed for an app subscription) and
 * a price (the amount to be charged to the subscribing shop at each interval).
 */
export type Shopify_AppRecurringPricing = {
  __typename?: 'Shopify_AppRecurringPricing';
  /** The discount applied to the subscription for a given number of billing intervals. */
  discount?: Maybe<Shopify_AppSubscriptionDiscount>;
  /** The frequency at which the subscribing shop is billed for an app subscription. */
  interval: Shopify_AppPricingInterval;
  /** The amount and currency to be charged to the subscribing shop every billing interval. */
  price: Shopify_MoneyV2;
};

/** Represents app revenue that was captured externally by the partner. */
export type Shopify_AppRevenueAttributionRecord = {
  __typename?: 'Shopify_AppRevenueAttributionRecord';
  /** The financial amount captured in this attribution. */
  amount: Shopify_MoneyV2;
  /** The timestamp when the financial amount was captured. */
  capturedAt: Scalars['DateTime'];
  /** The timestamp at which this revenue attribution was issued. */
  createdAt: Scalars['DateTime'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * The unique value submitted during the creation of the app revenue attribution record.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   */
  idempotencyKey: Scalars['String'];
  /** Indicates whether this is a test submission. */
  test: Scalars['Boolean'];
  /** The type of revenue attribution. */
  type: Shopify_AppRevenueAttributionType;
};

/** An auto-generated type for paginating through multiple AppRevenueAttributionRecords. */
export type Shopify_AppRevenueAttributionRecordConnection = {
  __typename?: 'Shopify_AppRevenueAttributionRecordConnection';
  /** A list of edges. */
  edges: Array<Shopify_AppRevenueAttributionRecordEdge>;
  /** A list of the nodes contained in AppRevenueAttributionRecordEdge. */
  nodes: Array<Shopify_AppRevenueAttributionRecord>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one AppRevenueAttributionRecord and a cursor during pagination. */
export type Shopify_AppRevenueAttributionRecordEdge = {
  __typename?: 'Shopify_AppRevenueAttributionRecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppRevenueAttributionRecordEdge. */
  node: Shopify_AppRevenueAttributionRecord;
};

export enum Shopify_AppRevenueAttributionRecordSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

export enum Shopify_AppRevenueAttributionType {
  ApplicationPurchase = 'APPLICATION_PURCHASE',
  ApplicationSubscription = 'APPLICATION_SUBSCRIPTION',
  ApplicationUsage = 'APPLICATION_USAGE',
  Other = 'OTHER'
}

/** Provides users access to services and/or features for a duration of time. */
export type Shopify_AppSubscription = {
  __typename?: 'Shopify_AppSubscription';
  /** The date and time when the app subscription was created. */
  createdAt: Scalars['DateTime'];
  /** The date and time when the current app subscription period ends. */
  currentPeriodEnd?: Maybe<Scalars['DateTime']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The plans attached to the app subscription. */
  lineItems: Array<Shopify_AppSubscriptionLineItem>;
  /** The name of the app subscription. */
  name: Scalars['String'];
  /** The URL that the merchant is redirected to after approving the app subscription. */
  returnUrl: Scalars['Url'];
  /** The status of the app subscription. */
  status: Shopify_AppSubscriptionStatus;
  /** Specifies whether the app subscription is a test transaction. */
  test: Scalars['Boolean'];
  /** The number of free trial days, starting at the subscription's creation date, by which billing is delayed. */
  trialDays: Scalars['Int'];
};

/** An auto-generated type for paginating through multiple AppSubscriptions. */
export type Shopify_AppSubscriptionConnection = {
  __typename?: 'Shopify_AppSubscriptionConnection';
  /** A list of edges. */
  edges: Array<Shopify_AppSubscriptionEdge>;
  /** A list of the nodes contained in AppSubscriptionEdge. */
  nodes: Array<Shopify_AppSubscription>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** Discount applied to the recurring pricing portion of a subscription. */
export type Shopify_AppSubscriptionDiscount = {
  __typename?: 'Shopify_AppSubscriptionDiscount';
  /**
   * The total number of billing intervals to which the discount will be applied.
   * The discount will be applied to an indefinite number of billing intervals if this value is blank.
   */
  durationLimitInIntervals?: Maybe<Scalars['Int']>;
  /** The price of the subscription after the discount is applied. */
  priceAfterDiscount: Shopify_MoneyV2;
  /** The remaining number of billing intervals to which the discount will be applied. */
  remainingDurationInIntervals?: Maybe<Scalars['Int']>;
  /** The value of the discount applied every billing interval. */
  value: Shopify_AppSubscriptionDiscountValue;
};

/** The fixed amount value of a discount. */
export type Shopify_AppSubscriptionDiscountAmount = {
  __typename?: 'Shopify_AppSubscriptionDiscountAmount';
  /** The fixed amount value of a discount. */
  amount: Shopify_MoneyV2;
};

/** The percentage value of a discount. */
export type Shopify_AppSubscriptionDiscountPercentage = {
  __typename?: 'Shopify_AppSubscriptionDiscountPercentage';
  /** The percentage value of a discount. */
  percentage: Scalars['Float'];
};

/** The value of the discount. */
export type Shopify_AppSubscriptionDiscountValue = Shopify_AppSubscriptionDiscountAmount | Shopify_AppSubscriptionDiscountPercentage;

/** An auto-generated type which holds one AppSubscription and a cursor during pagination. */
export type Shopify_AppSubscriptionEdge = {
  __typename?: 'Shopify_AppSubscriptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppSubscriptionEdge. */
  node: Shopify_AppSubscription;
};

/** The plan attached to an app subscription. */
export type Shopify_AppSubscriptionLineItem = {
  __typename?: 'Shopify_AppSubscriptionLineItem';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The pricing model for the app subscription. */
  plan: Shopify_AppPlanV2;
  /** A list of the store's usage records for a usage pricing plan. */
  usageRecords: Shopify_AppUsageRecordConnection;
};


/** The plan attached to an app subscription. */
export type Shopify_AppSubscriptionLineItemUsageRecordsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_AppUsageRecordSortKeys>;
};

export enum Shopify_AppSubscriptionSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

export enum Shopify_AppSubscriptionStatus {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
  Frozen = 'FROZEN',
  Pending = 'PENDING'
}

export enum Shopify_AppTransactionSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

/**
 * Defines a usage pricing model for the app subscription.
 * These charges are variable based on how much the merchant uses the app.
 */
export type Shopify_AppUsagePricing = {
  __typename?: 'Shopify_AppUsagePricing';
  /** The total usage records for interval. */
  balanceUsed: Shopify_MoneyV2;
  /**
   * The capped amount prevents the merchant from being charged for any usage over that amount during a billing period.
   * This prevents billing from exceeding a maximum threshold over the duration of the billing period.
   * For the merchant to continue using the app after exceeding a capped amount, they would need to agree to a new usage charge.
   */
  cappedAmount: Shopify_MoneyV2;
  /** The frequency with which the app usage records are billed. */
  interval: Shopify_AppPricingInterval;
  /**
   * The terms and conditions for app usage pricing.
   * Must be present in order to create usage charges.
   * The terms are presented to the merchant when they approve an app's usage charges.
   */
  terms: Scalars['String'];
};

/** Store usage for app subscriptions with usage pricing. */
export type Shopify_AppUsageRecord = {
  __typename?: 'Shopify_AppUsageRecord';
  /** The date and time when the usage record was created. */
  createdAt: Scalars['DateTime'];
  /** The description of the app usage record. */
  description: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The price of the usage record. The only permitted currency code is USD. */
  price: Shopify_MoneyV2;
  /** Defines the usage pricing plan the merchant is subscribed to. */
  subscriptionLineItem: Shopify_AppSubscriptionLineItem;
};

/** An auto-generated type for paginating through multiple AppUsageRecords. */
export type Shopify_AppUsageRecordConnection = {
  __typename?: 'Shopify_AppUsageRecordConnection';
  /** A list of edges. */
  edges: Array<Shopify_AppUsageRecordEdge>;
  /** A list of the nodes contained in AppUsageRecordEdge. */
  nodes: Array<Shopify_AppUsageRecord>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one AppUsageRecord and a cursor during pagination. */
export type Shopify_AppUsageRecordEdge = {
  __typename?: 'Shopify_AppUsageRecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppUsageRecordEdge. */
  node: Shopify_AppUsageRecord;
};

export enum Shopify_AppUsageRecordSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

/** Represents a generic custom attribute. */
export type Shopify_Attribute = {
  __typename?: 'Shopify_Attribute';
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Represents an object containing all information for channels available to a shop. */
export type Shopify_AvailableChannelDefinitionsByChannel = {
  __typename?: 'Shopify_AvailableChannelDefinitionsByChannel';
  /** The channel definitions for channels installed on a shop. */
  channelDefinitions: Array<Shopify_ChannelDefinition>;
  /** The name of the channel. */
  channelName: Scalars['String'];
};

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type Shopify_Channel = {
  __typename?: 'Shopify_Channel';
  /** Underlying app used by the channel. */
  app: Shopify_App;
  /** The collection publications for the list of collections published to the channel. */
  collectionPublicationsV3: Shopify_ResourcePublicationConnection;
  /** The list of collections published to the channel. */
  collections: Shopify_CollectionConnection;
  /**
   * Unique identifier for the channel.
   * @deprecated Use `id` instead
   */
  handle: Scalars['String'];
  /** Whether the collection is available to the channel. */
  hasCollection: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Name of the channel. */
  name: Scalars['String'];
  /**
   * Menu items for the channel, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use App.navigationItems instead
   */
  navigationItems: Array<Shopify_NavigationItem>;
  /**
   * Home page for the channel.
   * @deprecated Use App.launchUrl instead
   */
  overviewPath?: Maybe<Scalars['Url']>;
  /** The product publications for the list of products published to the channel. */
  productPublicationsV3: Shopify_ResourcePublicationConnection;
  /** The list of products published to the channel. */
  products: Shopify_ProductConnection;
  /** Whether or not this channel supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean'];
};


/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type Shopify_ChannelCollectionPublicationsV3Args = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type Shopify_ChannelCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type Shopify_ChannelHasCollectionArgs = {
  id: Scalars['ID'];
};


/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type Shopify_ChannelProductPublicationsV3Args = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type Shopify_ChannelProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple Channels. */
export type Shopify_ChannelConnection = {
  __typename?: 'Shopify_ChannelConnection';
  /** A list of edges. */
  edges: Array<Shopify_ChannelEdge>;
  /** A list of the nodes contained in ChannelEdge. */
  nodes: Array<Shopify_Channel>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/**
 * A channel definition represents channels surfaces on the platform.
 * A channel definition can be a platform or a subsegment of it such as Facebook Home, Instagram Live, Instagram Shops, or WhatsApp chat.
 */
export type Shopify_ChannelDefinition = {
  __typename?: 'Shopify_ChannelDefinition';
  /** Name of the channel that this sub channel belongs to. */
  channelName: Scalars['String'];
  /** Unique string used as a public identifier for the channel definition. */
  handle: Scalars['String'];
  /** The unique identifier for the channel definition. */
  id: Scalars['ID'];
  /** Name of the sub channel (e.g. Online Store, Instagram Shopping, TikTok Live). */
  subChannelName: Scalars['String'];
  /** Icon displayed when showing the channel in admin. */
  svgIcon?: Maybe<Scalars['String']>;
};

/** An auto-generated type which holds one Channel and a cursor during pagination. */
export type Shopify_ChannelEdge = {
  __typename?: 'Shopify_ChannelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ChannelEdge. */
  node: Shopify_Channel;
};

/** Contains the information for a given sales channel. */
export type Shopify_ChannelInformation = {
  __typename?: 'Shopify_ChannelInformation';
  /** The app associated with the channel. */
  app: Shopify_App;
  /** The channel definition associated with the channel. */
  channelDefinition?: Maybe<Shopify_ChannelDefinition>;
  /** The unique identifier for the channel. */
  channelId: Scalars['ID'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

export type Shopify_Collection = {
  __typename?: 'Shopify_Collection';
  /** A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description. */
  description: Scalars['String'];
  /** The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme. */
  descriptionHtml: Scalars['Html'];
  /** Information about the collection that's provided through resource feedback. */
  feedback?: Maybe<Shopify_ResourceFeedback>;
  /**
   * A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.
   *
   * If the title is changed, the handle doesn't automatically change.
   *
   * The handle can be used in themes by the Liquid templating language to refer to the collection, but using the ID is preferred because it never changes.
   */
  handle: Scalars['String'];
  /** Whether the collection includes the specified product. */
  hasProduct: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the collection. */
  image?: Maybe<Shopify_Image>;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafield definitions. */
  metafieldDefinitions: Shopify_MetafieldDefinitionConnection;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /** The products that are included in the collection. */
  products: Shopify_ProductConnection;
  /** The number of products in the collection. */
  productsCount: Scalars['Int'];
  /**
   * Check to see whether the resource is published to a given channel.
   * @deprecated Use `publishedOnPublication` instead
   */
  publishedOnChannel: Scalars['Boolean'];
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'];
  /** For a smart (automated) collection, specifies the rules that determine whether a product is included. */
  ruleSet?: Maybe<Shopify_CollectionRuleSet>;
  /** If the default SEO fields for page title and description have been modified, contains the modified information. */
  seo: Shopify_Seo;
  /** The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store. */
  sortOrder: Shopify_CollectionSortOrder;
  /**
   * The Storefront GraphQL API ID of the `Collection`.
   *
   * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
   * @deprecated Use `id` instead
   */
  storefrontId: Scalars['StorefrontId'];
  takeshape?: Maybe<Collection>;
  /** The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template. */
  templateSuffix?: Maybe<Scalars['String']>;
  /** The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store. */
  title: Scalars['String'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified. */
  updatedAt: Scalars['DateTime'];
};


export type Shopify_CollectionDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


export type Shopify_CollectionHasProductArgs = {
  id: Scalars['ID'];
};


export type Shopify_CollectionImageArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['Int']>;
};


export type Shopify_CollectionMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


export type Shopify_CollectionMetafieldDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  pinnedStatus?: InputMaybe<Shopify_MetafieldDefinitionPinnedStatus>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MetafieldDefinitionSortKeys>;
};


export type Shopify_CollectionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


export type Shopify_CollectionPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


export type Shopify_CollectionPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


export type Shopify_CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_ProductCollectionSortKeys>;
};


export type Shopify_CollectionPublishedOnChannelArgs = {
  channelId: Scalars['ID'];
};


export type Shopify_CollectionPublishedOnPublicationArgs = {
  publicationId: Scalars['ID'];
};


export type Shopify_CollectionTranslationsArgs = {
  locale: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Collections. */
export type Shopify_CollectionConnection = {
  __typename?: 'Shopify_CollectionConnection';
  /** A list of edges. */
  edges: Array<Shopify_CollectionEdge>;
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<Shopify_Collection>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one Collection and a cursor during pagination. */
export type Shopify_CollectionEdge = {
  __typename?: 'Shopify_CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionEdge. */
  node: Shopify_Collection;
};

/** Specifies the input fields required to create a collection. */
export type Shopify_CollectionInput = {
  /** The description of the collection, in HTML format. */
  descriptionHtml?: InputMaybe<Scalars['String']>;
  /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
  handle?: InputMaybe<Scalars['String']>;
  /** Specifies the collection to update or create a new collection if absent. */
  id?: InputMaybe<Scalars['ID']>;
  /** The image associated with the collection. */
  image?: InputMaybe<Shopify_ImageInput>;
  /** The metafields to associate with this collection. */
  metafields?: InputMaybe<Array<InputMaybe<Shopify_MetafieldInput>>>;
  /** The private metafields to associated with this product. */
  privateMetafields?: InputMaybe<Array<InputMaybe<Shopify_PrivateMetafieldInput>>>;
  /** Initial list of collection products. Only valid with `productCreate` and without rules. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /**
   * Indicates whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
   */
  redirectNewHandle?: InputMaybe<Scalars['Boolean']>;
  /** The rules used to assign products to the collection. */
  ruleSet?: InputMaybe<Shopify_CollectionRuleSetInput>;
  /** SEO information for the collection. */
  seo?: InputMaybe<Shopify_SeoInput>;
  /** The order in which the collection's products are sorted. */
  sortOrder?: InputMaybe<Shopify_CollectionSortOrder>;
  /** The theme template used when viewing the collection in a store. */
  templateSuffix?: InputMaybe<Scalars['String']>;
  /** Required for creating a new collection. */
  title?: InputMaybe<Scalars['String']>;
};

/** Represents at rule that's used to assign products to a collection. */
export type Shopify_CollectionRule = {
  __typename?: 'Shopify_CollectionRule';
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: Shopify_CollectionRuleColumn;
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String'];
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: Shopify_CollectionRuleRelation;
};

export enum Shopify_CollectionRuleColumn {
  IsPriceReduced = 'IS_PRICE_REDUCED',
  Tag = 'TAG',
  Title = 'TITLE',
  Type = 'TYPE',
  VariantCompareAtPrice = 'VARIANT_COMPARE_AT_PRICE',
  VariantInventory = 'VARIANT_INVENTORY',
  VariantPrice = 'VARIANT_PRICE',
  VariantTitle = 'VARIANT_TITLE',
  VariantWeight = 'VARIANT_WEIGHT',
  Vendor = 'VENDOR'
}

/** Specifies a rule to associate with a collection. */
export type Shopify_CollectionRuleInput = {
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: Shopify_CollectionRuleColumn;
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String'];
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: Shopify_CollectionRuleRelation;
};

export enum Shopify_CollectionRuleRelation {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Equals = 'EQUALS',
  GreaterThan = 'GREATER_THAN',
  IsNotSet = 'IS_NOT_SET',
  IsSet = 'IS_SET',
  LessThan = 'LESS_THAN',
  NotContains = 'NOT_CONTAINS',
  NotEquals = 'NOT_EQUALS',
  StartsWith = 'STARTS_WITH'
}

/** The set of rules that are used to determine which products are included in the collection. */
export type Shopify_CollectionRuleSet = {
  __typename?: 'Shopify_CollectionRuleSet';
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean'];
  /** The rules used to assign products to the collection. */
  rules: Array<Shopify_CollectionRule>;
};

/** Specifies a rule set for the collection. */
export type Shopify_CollectionRuleSetInput = {
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean'];
  /** The rules used to assign products to the collection. */
  rules?: InputMaybe<Array<InputMaybe<Shopify_CollectionRuleInput>>>;
};

export enum Shopify_CollectionSortKeys {
  Id = 'ID',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export enum Shopify_CollectionSortOrder {
  AlphaAsc = 'ALPHA_ASC',
  AlphaDesc = 'ALPHA_DESC',
  BestSelling = 'BEST_SELLING',
  Created = 'CREATED',
  CreatedDesc = 'CREATED_DESC',
  Manual = 'MANUAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC'
}

/** The context data that determines the pricing of a variant. */
export type Shopify_ContextualPricingContextInput = {
  /** The country code used to fetch country-specific prices. */
  country?: InputMaybe<Shopify_CountryCode>;
};

/** The list of all the countries from the combined shipping zones for the shop. */
export type Shopify_CountriesInShippingZones = {
  __typename?: 'Shopify_CountriesInShippingZones';
  /** The list of all the countries from all the combined shipping zones. */
  countryCodes: Array<Shopify_CountryCode>;
  /** Whether 'Rest of World' has been defined in any of the shipping zones. */
  includeRestOfWorld: Scalars['Boolean'];
};

export enum Shopify_CountryCode {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Ar = 'AR',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Ps = 'PS',
  Pt = 'PT',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Ta = 'TA',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
  Zz = 'ZZ'
}

/** The country-specific harmonized system code and ISO country code for an inventory item. */
export type Shopify_CountryHarmonizedSystemCode = {
  __typename?: 'Shopify_CountryHarmonizedSystemCode';
  /** The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code. */
  countryCode: Shopify_CountryCode;
  /** The country-specific harmonized system code. These are usually longer than 6 digits. */
  harmonizedSystemCode: Scalars['String'];
};

/** An auto-generated type for paginating through multiple CountryHarmonizedSystemCodes. */
export type Shopify_CountryHarmonizedSystemCodeConnection = {
  __typename?: 'Shopify_CountryHarmonizedSystemCodeConnection';
  /** A list of edges. */
  edges: Array<Shopify_CountryHarmonizedSystemCodeEdge>;
  /** A list of the nodes contained in CountryHarmonizedSystemCodeEdge. */
  nodes: Array<Shopify_CountryHarmonizedSystemCode>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one CountryHarmonizedSystemCode and a cursor during pagination. */
export type Shopify_CountryHarmonizedSystemCodeEdge = {
  __typename?: 'Shopify_CountryHarmonizedSystemCodeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CountryHarmonizedSystemCodeEdge. */
  node: Shopify_CountryHarmonizedSystemCode;
};

export enum Shopify_CropRegion {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum Shopify_CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jep = 'JEP',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kid = 'KID',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Std = 'STD',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Xxx = 'XXX',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

/** Currency formats configured for the merchant. These formats are available to use within Liquid. */
export type Shopify_CurrencyFormats = {
  __typename?: 'Shopify_CurrencyFormats';
  /** Money without currency in HTML. */
  moneyFormat: Scalars['FormattedString'];
  /** Money without currency in emails. */
  moneyInEmailsFormat: Scalars['String'];
  /** Money with currency in HTML. */
  moneyWithCurrencyFormat: Scalars['FormattedString'];
  /** Money with currency in emails. */
  moneyWithCurrencyInEmailsFormat: Scalars['String'];
};

/** A setting for a presentment currency. */
export type Shopify_CurrencySetting = {
  __typename?: 'Shopify_CurrencySetting';
  /** The currency's ISO code. */
  currencyCode: Shopify_CurrencyCode;
  /** The full name of the currency. */
  currencyName: Scalars['String'];
  /** Whether the currency is enabled or not. An enabled currency setting is visible to buyers and allows orders to be generated with that currency as presentment. */
  enabled: Scalars['Boolean'];
  /** The date and time when the active exchange rate for the currency was last modified. It can be the automatic rate's creation date, or the manual rate's last updated at date if active. */
  rateUpdatedAt?: Maybe<Scalars['DateTime']>;
};

/** An auto-generated type for paginating through multiple CurrencySettings. */
export type Shopify_CurrencySettingConnection = {
  __typename?: 'Shopify_CurrencySettingConnection';
  /** A list of edges. */
  edges: Array<Shopify_CurrencySettingEdge>;
  /** A list of the nodes contained in CurrencySettingEdge. */
  nodes: Array<Shopify_CurrencySetting>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one CurrencySetting and a cursor during pagination. */
export type Shopify_CurrencySettingEdge = {
  __typename?: 'Shopify_CurrencySettingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CurrencySettingEdge. */
  node: Shopify_CurrencySetting;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_Customer = {
  __typename?: 'Shopify_Customer';
  /**
   * Whether the customer has agreed to receive marketing material.
   * @deprecated Use `emailMarketingConsent` instead
   */
  acceptsMarketing: Scalars['Boolean'];
  /**
   * The date and time when the customer consented or objected to receiving marketing material by email.
   * @deprecated Use `emailMarketingConsent` instead
   */
  acceptsMarketingUpdatedAt: Scalars['DateTime'];
  /** A list of addresses associated with the customer. */
  addresses: Array<Shopify_MailingAddress>;
  /** The total amount that the customer has spent on orders in their lifetime. */
  amountSpent: Shopify_MoneyV2;
  /**
   * The average amount that the customer spent per order.
   * @deprecated Use `averageOrderAmountV2` instead
   */
  averageOrderAmount?: Maybe<Scalars['Money']>;
  /** The average amount that the customer spent per order. */
  averageOrderAmountV2?: Maybe<Shopify_MoneyV2>;
  /**
   * Whether the merchant can delete the customer from their store.
   *
   * A customer can be deleted from a store only if they have not yet made an order. After a customer makes an
   * order, they can't be deleted from a store.
   */
  canDelete: Scalars['Boolean'];
  /** The date and time when the customer was added to the store. */
  createdAt: Scalars['DateTime'];
  /** The default address associated with the customer. */
  defaultAddress?: Maybe<Shopify_MailingAddress>;
  /**
   * The full name of the customer, based on the values for first_name and last_name. If the first_name and
   * last_name are not available, then this falls back to the customer's email address, and if that is not available, the customer's phone number.
   */
  displayName: Scalars['String'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /**
   * The current email marketing state for the customer.
   * If the customer doesn't have an email address, then this property is `null`.
   */
  emailMarketingConsent?: Maybe<Shopify_CustomerEmailMarketingConsentState>;
  /** A list of events associated with the customer. */
  events: Shopify_EventConnection;
  /** The customer's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Whether the timeline subject has a timeline comment. If true, then a timeline comment exists. */
  hasTimelineComment: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the customer. */
  image: Shopify_Image;
  /** The customer's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The customer's last order. */
  lastOrder?: Maybe<Shopify_Order>;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /**
   * The amount of time since the customer was first added to the store.
   *
   * Example: 'about 12 years'.
   */
  lifetimeDuration: Scalars['String'];
  /** The customer's locale. */
  locale: Scalars['String'];
  /**
   * The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines, that the
   * customer gave when they consented to receive marketing material by email.
   *
   * If the customer does not accept email marketing, then this property is `null`.
   * @deprecated Use `emailMarketingConsent` instead
   */
  marketingOptInLevel?: Maybe<Shopify_CustomerMarketingOptInLevel>;
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafield definitions. */
  metafieldDefinitions: Shopify_MetafieldDefinitionConnection;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** A unique identifier for the customer that's used with Multipass login. */
  multipassIdentifier?: Maybe<Scalars['String']>;
  /** A note about the customer. */
  note?: Maybe<Scalars['String']>;
  /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars['UnsignedInt64'];
  /** A list of the customer's orders. */
  orders: Shopify_OrderConnection;
  /** A list of the customer's payment methods. */
  paymentMethods: Shopify_CustomerPaymentMethodConnection;
  /** The customer's phone number. */
  phone?: Maybe<Scalars['String']>;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /** Possible subscriber states of a customer defined by their subscription contracts. */
  productSubscriberStatus: Shopify_CustomerProductSubscriberStatus;
  /**
   * The current SMS marketing state for the customer's phone number.
   *
   * If the customer does not have a phone number, then this property is `null`.
   */
  smsMarketingConsent?: Maybe<Shopify_CustomerSmsMarketingConsentState>;
  /** The state of the customer's account with the shop. */
  state: Shopify_CustomerState;
  /** A list of the customer's subscription contracts. */
  subscriptionContracts: Shopify_SubscriptionContractConnection;
  /** A comma separated list of tags that have been added to the customer. */
  tags: Array<Scalars['String']>;
  /** Whether the customer is exempt from being charged taxes on their orders. */
  taxExempt: Scalars['Boolean'];
  /** The list of tax exemptions applied to the customer. */
  taxExemptions: Array<Shopify_TaxExemption>;
  /** The URL to unsubscribe the customer from the mailing list. */
  unsubscribeUrl: Scalars['Url'];
  /** The date and time when the customer was last updated. */
  updatedAt: Scalars['DateTime'];
  /**
   * Whether the email address is formatted correctly. This does not
   * guarantee that the email address actually exists.
   */
  validEmailAddress: Scalars['Boolean'];
  /** Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API. */
  verifiedEmail: Scalars['Boolean'];
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_EventSortKeys>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerImageArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerMetafieldDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  pinnedStatus?: InputMaybe<Shopify_MetafieldDefinitionPinnedStatus>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MetafieldDefinitionSortKeys>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_OrderSortKeys>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  showRevoked?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_CustomerSubscriptionContractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple Customers. */
export type Shopify_CustomerConnection = {
  __typename?: 'Shopify_CustomerConnection';
  /** A list of edges. */
  edges: Array<Shopify_CustomerEdge>;
  /** A list of the nodes contained in CustomerEdge. */
  nodes: Array<Shopify_Customer>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

export enum Shopify_CustomerConsentCollectedFrom {
  Other = 'OTHER',
  Shopify = 'SHOPIFY'
}

/** Represents a card instrument for customer payment method. */
export type Shopify_CustomerCreditCard = {
  __typename?: 'Shopify_CustomerCreditCard';
  /** The billing address of the card. */
  billingAddress?: Maybe<Shopify_CustomerCreditCardBillingAddress>;
  /** The brand of the card. */
  brand: Scalars['String'];
  /** Whether the card is about to expire. */
  expiresSoon: Scalars['Boolean'];
  /** The expiry month of the card. */
  expiryMonth: Scalars['Int'];
  /** The expiry year of the card. */
  expiryYear: Scalars['Int'];
  /** The card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars['Boolean'];
  /** The last 4 digits of the card. */
  lastDigits: Scalars['String'];
  /** The masked card number with only the last 4 digits displayed. */
  maskedNumber: Scalars['String'];
  /** The name of the card holder. */
  name: Scalars['String'];
  /** The source of the card if coming from a wallet such as Apple Pay. */
  source?: Maybe<Scalars['String']>;
  /** The last 4 digits of the Device Account Number. */
  virtualLastDigits?: Maybe<Scalars['String']>;
};

/** The billing address of a credit card payment instrument. */
export type Shopify_CustomerCreditCardBillingAddress = {
  __typename?: 'Shopify_CustomerCreditCardBillingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   */
  countryCode?: Maybe<Shopify_CountryCode>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};

/** An auto-generated type which holds one Customer and a cursor during pagination. */
export type Shopify_CustomerEdge = {
  __typename?: 'Shopify_CustomerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CustomerEdge. */
  node: Shopify_Customer;
};

/** The record of when a customer consented to receive marketing material by email. */
export type Shopify_CustomerEmailMarketingConsentState = {
  __typename?: 'Shopify_CustomerEmailMarketingConsentState';
  /**
   * The date and time at which the customer consented to receive marketing material by email.
   * The customer's consent state reflects the consent record with the most recent `consent_updated_at` date.
   * If no date is provided, then the date and time at which the consent information was sent is used.
   */
  consentUpdatedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
   * that the customer gave when they consented to receive marketing material by email.
   */
  marketingOptInLevel?: Maybe<Shopify_CustomerMarketingOptInLevel>;
  /** The current email marketing state for the customer. */
  marketingState: Shopify_CustomerEmailMarketingState;
};

export enum Shopify_CustomerEmailMarketingState {
  Invalid = 'INVALID',
  NotSubscribed = 'NOT_SUBSCRIBED',
  Pending = 'PENDING',
  Redacted = 'REDACTED',
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED'
}

/** Represents a customer's visiting activities on a shop's online store. */
export type Shopify_CustomerJourney = {
  __typename?: 'Shopify_CustomerJourney';
  /** The position of the current order within the customer's order history. */
  customerOrderIndex: Scalars['Int'];
  /** The amount of days between first session and order creation date. First session represents first session since the last order, or first session within the 30 day attribution window, if more than 30 days has passed since the last order. */
  daysToConversion: Scalars['Int'];
  /** The customer's first session going into the shop. */
  firstVisit: Shopify_CustomerVisit;
  /** The last session before an order is made. */
  lastVisit?: Maybe<Shopify_CustomerVisit>;
  /** Events preceding a customer order, such as shop sessions. */
  moments: Array<Shopify_CustomerMoment>;
};

/** Represents a customer's visiting activities on a shop's online store. */
export type Shopify_CustomerJourneySummary = {
  __typename?: 'Shopify_CustomerJourneySummary';
  /** The position of the current order within the customer's order history. Test orders aren't included. */
  customerOrderIndex?: Maybe<Scalars['Int']>;
  /** The number of days between the first session and the order creation date. The first session represents the first session since the last order, or the first session within the 30 day attribution window, if more than 30 days have passed since the last order. */
  daysToConversion?: Maybe<Scalars['Int']>;
  /** The customer's first session going into the shop. */
  firstVisit?: Maybe<Shopify_CustomerVisit>;
  /** The last session before an order is made. */
  lastVisit?: Maybe<Shopify_CustomerVisit>;
  /** The events preceding a customer's order, such as shop sessions. */
  moments?: Maybe<Shopify_CustomerMomentConnection>;
  /** The total number of customer moments associated with this order. Returns null if the order is still in the process of being attributed. */
  momentsCount?: Maybe<Scalars['Int']>;
  /** Whether or not the attributed sessions for the order have been created yet. */
  ready: Scalars['Boolean'];
};


/** Represents a customer's visiting activities on a shop's online store. */
export type Shopify_CustomerJourneySummaryMomentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

export enum Shopify_CustomerMarketingOptInLevel {
  ConfirmedOptIn = 'CONFIRMED_OPT_IN',
  SingleOptIn = 'SINGLE_OPT_IN',
  Unknown = 'UNKNOWN'
}

/** Represents a session preceding an order, often used for building a timeline of events leading to an order. */
export type Shopify_CustomerMoment = {
  __typename?: 'Shopify_CustomerMoment';
  /** The date and time when the customer's session occurred. */
  occurredAt: Scalars['DateTime'];
};

/** An auto-generated type for paginating through multiple CustomerMoments. */
export type Shopify_CustomerMomentConnection = {
  __typename?: 'Shopify_CustomerMomentConnection';
  /** A list of edges. */
  edges: Array<Shopify_CustomerMomentEdge>;
  /** A list of the nodes contained in CustomerMomentEdge. */
  nodes: Array<Shopify_CustomerMoment>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one CustomerMoment and a cursor during pagination. */
export type Shopify_CustomerMomentEdge = {
  __typename?: 'Shopify_CustomerMomentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CustomerMomentEdge. */
  node: Shopify_CustomerMoment;
};

/** All possible instruments for CustomerPaymentMethods. */
export type Shopify_CustomerPaymentInstrument = Shopify_CustomerCreditCard | Shopify_CustomerPaypalBillingAgreement | Shopify_CustomerShopPayAgreement;

/** The billing address of a payment instrument. */
export type Shopify_CustomerPaymentInstrumentBillingAddress = {
  __typename?: 'Shopify_CustomerPaymentInstrumentBillingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   */
  countryCode?: Maybe<Shopify_CountryCode>;
  /** The name of the buyer of the address. */
  name?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};

/** A customer's payment method. */
export type Shopify_CustomerPaymentMethod = {
  __typename?: 'Shopify_CustomerPaymentMethod';
  /** The customer to whom the payment method belongs. */
  customer?: Maybe<Shopify_Customer>;
  /** The ID of this payment method. */
  id: Scalars['ID'];
  /** The instrument for this payment method. */
  instrument?: Maybe<Shopify_CustomerPaymentInstrument>;
  /** The time that the payment method was revoked. */
  revokedAt?: Maybe<Scalars['DateTime']>;
  /** The revocation reason for this payment method. */
  revokedReason?: Maybe<Shopify_CustomerPaymentMethodRevocationReason>;
  /** List Subscription Contracts. */
  subscriptionContracts: Shopify_SubscriptionContractConnection;
};


/** A customer's payment method. */
export type Shopify_CustomerPaymentMethodSubscriptionContractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple CustomerPaymentMethods. */
export type Shopify_CustomerPaymentMethodConnection = {
  __typename?: 'Shopify_CustomerPaymentMethodConnection';
  /** A list of edges. */
  edges: Array<Shopify_CustomerPaymentMethodEdge>;
  /** A list of the nodes contained in CustomerPaymentMethodEdge. */
  nodes: Array<Shopify_CustomerPaymentMethod>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one CustomerPaymentMethod and a cursor during pagination. */
export type Shopify_CustomerPaymentMethodEdge = {
  __typename?: 'Shopify_CustomerPaymentMethodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CustomerPaymentMethodEdge. */
  node: Shopify_CustomerPaymentMethod;
};

export enum Shopify_CustomerPaymentMethodRevocationReason {
  AuthorizeNetGatewayNotEnabled = 'AUTHORIZE_NET_GATEWAY_NOT_ENABLED',
  AuthorizeNetReturnedNoPaymentMethod = 'AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD',
  FailedToUpdateCreditCard = 'FAILED_TO_UPDATE_CREDIT_CARD',
  ManuallyRevoked = 'MANUALLY_REVOKED',
  Merged = 'MERGED',
  StripeApiAuthenticationError = 'STRIPE_API_AUTHENTICATION_ERROR',
  StripeApiInvalidRequestError = 'STRIPE_API_INVALID_REQUEST_ERROR',
  StripeGatewayNotEnabled = 'STRIPE_GATEWAY_NOT_ENABLED',
  StripePaymentMethodNotCard = 'STRIPE_PAYMENT_METHOD_NOT_CARD',
  StripeReturnedNoPaymentMethod = 'STRIPE_RETURNED_NO_PAYMENT_METHOD'
}

/** Represents a PayPal instrument for customer payment method. */
export type Shopify_CustomerPaypalBillingAgreement = {
  __typename?: 'Shopify_CustomerPaypalBillingAgreement';
  /** The billing address of this payment method. */
  billingAddress?: Maybe<Shopify_CustomerPaymentInstrumentBillingAddress>;
  /** Whether the PayPal billing agreement is inactive. */
  inactive: Scalars['Boolean'];
  /** Whether the payment method can be revoked.The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars['Boolean'];
  /** The customers's PayPal account email address. */
  paypalAccountEmail?: Maybe<Scalars['String']>;
};

export enum Shopify_CustomerProductSubscriberStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  NeverSubscribed = 'NEVER_SUBSCRIBED',
  Paused = 'PAUSED'
}

export enum Shopify_CustomerSavedSearchSortKeys {
  Id = 'ID',
  Name = 'NAME',
  Relevance = 'RELEVANCE'
}

/** Represents a Shop Pay card instrument for customer payment method. */
export type Shopify_CustomerShopPayAgreement = {
  __typename?: 'Shopify_CustomerShopPayAgreement';
  /** Whether the card is about to expire. */
  expiresSoon: Scalars['Boolean'];
  /** The expiry month of the card. */
  expiryMonth: Scalars['Int'];
  /** The expiry year of the card. */
  expiryYear: Scalars['Int'];
  /** Whether the Shop Pay billing agreement is inactive. */
  inactive: Scalars['Boolean'];
  /** The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars['Boolean'];
  /** The last 4 digits of the card. */
  lastDigits: Scalars['String'];
  /** The masked card number with only the last 4 digits displayed. */
  maskedNumber: Scalars['String'];
  /** The name of the card holder. */
  name: Scalars['String'];
};

/**
 * The record of when a customer consented to receive marketing material by SMS.
 *
 * The customer's consent state reflects the record with the most recent date when consent was updated.
 */
export type Shopify_CustomerSmsMarketingConsentState = {
  __typename?: 'Shopify_CustomerSmsMarketingConsentState';
  /** The source from which the SMS marketing information for the customer was collected. */
  consentCollectedFrom?: Maybe<Shopify_CustomerConsentCollectedFrom>;
  /**
   * The date and time when the customer consented to receive marketing material by SMS.
   * If no date is provided, then the date and time when the consent information was sent is used.
   */
  consentUpdatedAt?: Maybe<Scalars['DateTime']>;
  /** The marketing subscription opt-in level that was set when the customer consented to receive marketing information. */
  marketingOptInLevel: Shopify_CustomerMarketingOptInLevel;
  /** The current SMS marketing state for the customer. */
  marketingState: Shopify_CustomerSmsMarketingState;
};

export enum Shopify_CustomerSmsMarketingState {
  NotSubscribed = 'NOT_SUBSCRIBED',
  Pending = 'PENDING',
  Redacted = 'REDACTED',
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export enum Shopify_CustomerSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  LastOrderDate = 'LAST_ORDER_DATE',
  Location = 'LOCATION',
  Name = 'NAME',
  OrdersCount = 'ORDERS_COUNT',
  Relevance = 'RELEVANCE',
  TotalSpent = 'TOTAL_SPENT',
  UpdatedAt = 'UPDATED_AT'
}

export enum Shopify_CustomerState {
  Declined = 'DECLINED',
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Invited = 'INVITED'
}

/** Represents a customer's session visiting a shop's online store, including information about the marketing activity attributed to starting the session. */
export type Shopify_CustomerVisit = {
  __typename?: 'Shopify_CustomerVisit';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** URL of the first page the customer landed on for the session. */
  landingPage?: Maybe<Scalars['Url']>;
  /** Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1. */
  landingPageHtml?: Maybe<Scalars['Html']>;
  /**
   * Represent actions taken by an app, on behalf of a merchant,
   * to market Shopify resources such as products, collections, and discounts.
   */
  marketingEvent?: Maybe<Shopify_MarketingEvent>;
  /** The date and time when the customer's session occurred. */
  occurredAt: Scalars['DateTime'];
  /**
   * Marketing referral code from the link that the customer clicked to visit the store.
   * Supports the following URL attributes: _ref_, _source_, or _r_.
   * For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
   */
  referralCode?: Maybe<Scalars['String']>;
  /** Referral information with URLs linked in HTML. */
  referralInfoHtml: Scalars['FormattedString'];
  /**
   * Webpage where the customer clicked a link that sent them to the online store.
   * For example, _https://randomblog.com/page1_ or _android-app://com.google.android.gm_.
   */
  referrerUrl?: Maybe<Scalars['Url']>;
  /**
   * Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
   * a website domain, QR code, or unknown.
   */
  source: Scalars['String'];
  /** Describes the source explicitly for first or last session. */
  sourceDescription?: Maybe<Scalars['String']>;
  /** Type of marketing tactic. */
  sourceType?: Maybe<Shopify_MarketingTactic>;
  /** A set of UTM parameters gathered from the URL parameters of the referrer. */
  utmParameters?: Maybe<Shopify_UtmParameters>;
};

export enum Shopify_DayOfTheWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

/** A shipping service and a list of countries that the service is available for. */
export type Shopify_DeliveryAvailableService = {
  __typename?: 'Shopify_DeliveryAvailableService';
  /** The countries the service provider ships to. */
  countries: Shopify_DeliveryCountryCodesOrRestOfWorld;
  /** The name of the service. */
  name: Scalars['String'];
};

/** A shipping service provider or a carrier account. */
export type Shopify_DeliveryCarrierService = {
  __typename?: 'Shopify_DeliveryCarrierService';
  /** The list of services offered for given destinations. */
  availableServicesForCountries: Array<Shopify_DeliveryAvailableService>;
  /** The properly formatted name of the shipping service provider, ready to display. */
  formattedName?: Maybe<Scalars['String']>;
  /** The logo of the service provider. */
  icon: Shopify_Image;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the shipping service provider. */
  name?: Maybe<Scalars['String']>;
};


/** A shipping service provider or a carrier account. */
export type Shopify_DeliveryCarrierServiceAvailableServicesForCountriesArgs = {
  countryCodes?: InputMaybe<Array<InputMaybe<Shopify_CountryCode>>>;
  origins?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  restOfWorld: Scalars['Boolean'];
};

/** A condition that must pass for a delivery method definition to be applied to an order. */
export type Shopify_DeliveryCondition = {
  __typename?: 'Shopify_DeliveryCondition';
  /** The value (weight or price) that the condition field is compared to. */
  conditionCriteria: Shopify_DeliveryConditionCriteria;
  /** The field to compare the criterion value against, using the operator. */
  field: Shopify_DeliveryConditionField;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The operator to compare the field and criterion value. */
  operator: Shopify_DeliveryConditionOperator;
};

/** The value (weight or price) that the condition field is compared to. */
export type Shopify_DeliveryConditionCriteria = Shopify_MoneyV2 | Shopify_Weight;

export enum Shopify_DeliveryConditionField {
  TotalPrice = 'TOTAL_PRICE',
  TotalWeight = 'TOTAL_WEIGHT'
}

export enum Shopify_DeliveryConditionOperator {
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO'
}

/** A country that is used to define a shipping zone. */
export type Shopify_DeliveryCountry = {
  __typename?: 'Shopify_DeliveryCountry';
  /**
   * A two-letter country code in ISO 3166-1 alpha-2 standard.
   * It also includes a flag indicating whether the country should be
   * a part of the 'Rest Of World' shipping zone.
   */
  code: Shopify_DeliveryCountryCodeOrRestOfWorld;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The full name of the country. */
  name: Scalars['String'];
  /** The list of regions associated with this country. */
  provinces: Array<Shopify_DeliveryProvince>;
  /** The translated name of the country. The translation returned is based on the system's locale. */
  translatedName: Scalars['String'];
};

/** The country details and the associated shipping zone. */
export type Shopify_DeliveryCountryAndZone = {
  __typename?: 'Shopify_DeliveryCountryAndZone';
  /** The country details. */
  country: Shopify_DeliveryCountry;
  /** The name of the shipping zone. */
  zone: Scalars['String'];
};

/** The country code and whether the country is a part of the 'Rest Of World' shipping zone. */
export type Shopify_DeliveryCountryCodeOrRestOfWorld = {
  __typename?: 'Shopify_DeliveryCountryCodeOrRestOfWorld';
  /** The country code in the ISO 3166-1 alpha-2 format. */
  countryCode?: Maybe<Shopify_CountryCode>;
  /** Whether the country is a part of the 'Rest of World' shipping zone. */
  restOfWorld: Scalars['Boolean'];
};

/**
 * The list of country codes and information whether the countries
 * are a part of the 'Rest Of World' shipping zone.
 */
export type Shopify_DeliveryCountryCodesOrRestOfWorld = {
  __typename?: 'Shopify_DeliveryCountryCodesOrRestOfWorld';
  /** List of applicable country codes in the ISO 3166-1 alpha-2 format. */
  countryCodes: Array<Shopify_CountryCode>;
  /** Whether the countries are a part of the 'Rest of World' shipping zone. */
  restOfWorld: Scalars['Boolean'];
};

/**
 * A location group is a collection of active locations. They share zones and delivery methods across delivery
 * profiles.
 */
export type Shopify_DeliveryLocationGroup = {
  __typename?: 'Shopify_DeliveryLocationGroup';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of active locations that are part of this location group. */
  locations: Shopify_LocationConnection;
};


/**
 * A location group is a collection of active locations. They share zones and delivery methods across delivery
 * profiles.
 */
export type Shopify_DeliveryLocationGroupLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeInactive?: InputMaybe<Scalars['Boolean']>;
  includeLegacy?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_LocationSortKeys>;
};

/** Links a location group with a zone and the associated method definitions. */
export type Shopify_DeliveryLocationGroupZone = {
  __typename?: 'Shopify_DeliveryLocationGroupZone';
  /** The number of method definitions for the zone. */
  methodDefinitionCounts: Shopify_DeliveryMethodDefinitionCounts;
  /** The method definitions associated to a zone and location group. */
  methodDefinitions: Shopify_DeliveryMethodDefinitionConnection;
  /** The zone associated to a location group. */
  zone: Shopify_DeliveryZone;
};


/** Links a location group with a zone and the associated method definitions. */
export type Shopify_DeliveryLocationGroupZoneMethodDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eligible?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MethodDefinitionSortKeys>;
  type?: InputMaybe<Shopify_DeliveryMethodDefinitionType>;
};

/** An auto-generated type for paginating through multiple DeliveryLocationGroupZones. */
export type Shopify_DeliveryLocationGroupZoneConnection = {
  __typename?: 'Shopify_DeliveryLocationGroupZoneConnection';
  /** A list of edges. */
  edges: Array<Shopify_DeliveryLocationGroupZoneEdge>;
  /** A list of the nodes contained in DeliveryLocationGroupZoneEdge. */
  nodes: Array<Shopify_DeliveryLocationGroupZone>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one DeliveryLocationGroupZone and a cursor during pagination. */
export type Shopify_DeliveryLocationGroupZoneEdge = {
  __typename?: 'Shopify_DeliveryLocationGroupZoneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryLocationGroupZoneEdge. */
  node: Shopify_DeliveryLocationGroupZone;
};

/** The delivery method used by a fulfillment order. */
export type Shopify_DeliveryMethod = {
  __typename?: 'Shopify_DeliveryMethod';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The maximum date and time by which the delivery is expected to be completed. */
  maxDeliveryDateTime?: Maybe<Scalars['DateTime']>;
  /** The type of the delivery method. */
  methodType: Shopify_DeliveryMethodType;
  /** The minimum date and time by which the delivery is expected to be completed. */
  minDeliveryDateTime?: Maybe<Scalars['DateTime']>;
};

/**
 * A method definition contains the delivery rate and the conditions that must be met for the method to be
 * applied.
 */
export type Shopify_DeliveryMethodDefinition = {
  __typename?: 'Shopify_DeliveryMethodDefinition';
  /** Whether this method definition is active. */
  active: Scalars['Boolean'];
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The method conditions that must pass for this method definition to be applied to an order. */
  methodConditions: Array<Shopify_DeliveryCondition>;
  /** The name of the method definition. */
  name: Scalars['String'];
  /** The provided rate for this method definition, from a rate definition or participant. */
  rateProvider: Shopify_DeliveryRateProvider;
};

/** An auto-generated type for paginating through multiple DeliveryMethodDefinitions. */
export type Shopify_DeliveryMethodDefinitionConnection = {
  __typename?: 'Shopify_DeliveryMethodDefinitionConnection';
  /** A list of edges. */
  edges: Array<Shopify_DeliveryMethodDefinitionEdge>;
  /** A list of the nodes contained in DeliveryMethodDefinitionEdge. */
  nodes: Array<Shopify_DeliveryMethodDefinition>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** The number of method definitions for a zone, separated into merchant-owned and participant definitions. */
export type Shopify_DeliveryMethodDefinitionCounts = {
  __typename?: 'Shopify_DeliveryMethodDefinitionCounts';
  /** The number of participant method definitions for the specified zone. */
  participantDefinitionsCount: Scalars['Int'];
  /** The number of merchant-defined method definitions for the specified zone. */
  rateDefinitionsCount: Scalars['Int'];
};

/** An auto-generated type which holds one DeliveryMethodDefinition and a cursor during pagination. */
export type Shopify_DeliveryMethodDefinitionEdge = {
  __typename?: 'Shopify_DeliveryMethodDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryMethodDefinitionEdge. */
  node: Shopify_DeliveryMethodDefinition;
};

export enum Shopify_DeliveryMethodDefinitionType {
  Merchant = 'MERCHANT',
  Participant = 'PARTICIPANT'
}

export enum Shopify_DeliveryMethodType {
  Local = 'LOCAL',
  None = 'NONE',
  PickUp = 'PICK_UP',
  Retail = 'RETAIL',
  Shipping = 'SHIPPING'
}

/**
 * A participant defines carrier-calculated rates for shipping services
 * with a possible merchant-defined fixed fee or a percentage-of-rate fee.
 */
export type Shopify_DeliveryParticipant = {
  __typename?: 'Shopify_DeliveryParticipant';
  /** Whether to display new shipping services automatically to the customer when the service becomes available. */
  adaptToNewServicesFlag: Scalars['Boolean'];
  /** The carrier used for this participant. */
  carrierService: Shopify_DeliveryCarrierService;
  /** The merchant-defined fixed fee for this participant. */
  fixedFee?: Maybe<Shopify_MoneyV2>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The carrier-specific services offered by the participant, and whether each service is active. */
  participantServices: Array<Shopify_DeliveryParticipantService>;
  /** The merchant-defined percentage-of-rate fee for this participant. */
  percentageOfRateFee: Scalars['Float'];
};

/** A mail service provided by the participant. */
export type Shopify_DeliveryParticipantService = {
  __typename?: 'Shopify_DeliveryParticipantService';
  /** Whether the service is active. */
  active: Scalars['Boolean'];
  /** The name of the service. */
  name: Scalars['String'];
};

/** How many product variants are in a profile. This count is capped at 500. */
export type Shopify_DeliveryProductVariantsCount = {
  __typename?: 'Shopify_DeliveryProductVariantsCount';
  /** Whether the count has reached the cap of 500. */
  capped: Scalars['Boolean'];
  /** The product variant count. */
  count: Scalars['Int'];
};

/** A shipping profile. In Shopify, a shipping profile is a set of shipping rates scoped to a set of products or variants that can be shipped from selected locations to zones. */
export type Shopify_DeliveryProfile = {
  __typename?: 'Shopify_DeliveryProfile';
  /** The number of active shipping rates for the profile. */
  activeMethodDefinitionsCount: Scalars['Int'];
  /** Whether this is the default profile. */
  default: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Whether this shop has enabled legacy compatibility mode for delivery profiles. */
  legacyMode: Scalars['Boolean'];
  /** The number of locations without rates defined. */
  locationsWithoutRatesCount: Scalars['Int'];
  /** The name of the delivery profile. */
  name: Scalars['String'];
  /** The number of active origin locations for the profile. */
  originLocationCount: Scalars['Int'];
  /**
   * The number of product variants for this profile. The count for the default profile is not supported and will return -1.
   * @deprecated Use `productVariantsCountV2` instead
   */
  productVariantsCount: Scalars['Int'];
  /** How many product variants are in this profile. */
  productVariantsCountV2: Shopify_DeliveryProductVariantsCount;
  /** The products and variants associated with this profile. */
  profileItems: Shopify_DeliveryProfileItemConnection;
  /** The location groups and associated zones using this profile. */
  profileLocationGroups: Array<Shopify_DeliveryProfileLocationGroup>;
  /** Selling plan groups associated with the specified delivery profile. */
  sellingPlanGroups: Shopify_SellingPlanGroupConnection;
  /** List of locations that have not been assigned to a location group for this profile. */
  unassignedLocations: Array<Shopify_Location>;
  /** The number of countries with active rates to deliver to. */
  zoneCountryCount: Scalars['Int'];
};


/** A shipping profile. In Shopify, a shipping profile is a set of shipping rates scoped to a set of products or variants that can be shipped from selected locations to zones. */
export type Shopify_DeliveryProfileProfileItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_ProfileItemSortKeys>;
};


/** A shipping profile. In Shopify, a shipping profile is a set of shipping rates scoped to a set of products or variants that can be shipped from selected locations to zones. */
export type Shopify_DeliveryProfileSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** A product and the subset of associated variants that are part of this delivery profile. */
export type Shopify_DeliveryProfileItem = {
  __typename?: 'Shopify_DeliveryProfileItem';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A product associated with this profile. */
  product: Shopify_Product;
  /** The product variants associated with this delivery profile. */
  variants: Shopify_ProductVariantConnection;
};


/** A product and the subset of associated variants that are part of this delivery profile. */
export type Shopify_DeliveryProfileItemVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_ProductVariantSortKeys>;
};

/** An auto-generated type for paginating through multiple DeliveryProfileItems. */
export type Shopify_DeliveryProfileItemConnection = {
  __typename?: 'Shopify_DeliveryProfileItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_DeliveryProfileItemEdge>;
  /** A list of the nodes contained in DeliveryProfileItemEdge. */
  nodes: Array<Shopify_DeliveryProfileItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one DeliveryProfileItem and a cursor during pagination. */
export type Shopify_DeliveryProfileItemEdge = {
  __typename?: 'Shopify_DeliveryProfileItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryProfileItemEdge. */
  node: Shopify_DeliveryProfileItem;
};

/** Links a location group with zones. Both are associated to a delivery profile. */
export type Shopify_DeliveryProfileLocationGroup = {
  __typename?: 'Shopify_DeliveryProfileLocationGroup';
  /** The countries already selected in any zone for the specified location group. */
  countriesInAnyZone: Array<Shopify_DeliveryCountryAndZone>;
  /** The collection of locations that make up the specified location group. */
  locationGroup: Shopify_DeliveryLocationGroup;
  /** The applicable zones associated to the specified location group. */
  locationGroupZones: Shopify_DeliveryLocationGroupZoneConnection;
};


/** Links a location group with zones. Both are associated to a delivery profile. */
export type Shopify_DeliveryProfileLocationGroupLocationGroupZonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** A region that is used to define a shipping zone. */
export type Shopify_DeliveryProvince = {
  __typename?: 'Shopify_DeliveryProvince';
  /** The code of the region. */
  code: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The full name of the region. */
  name: Scalars['String'];
  /** The translated name of the region. The translation returned is based on the system's locale. */
  translatedName: Scalars['String'];
};

/** The merchant-defined rate of the [DeliveryMethodDefinition](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryMethodDefinition). */
export type Shopify_DeliveryRateDefinition = {
  __typename?: 'Shopify_DeliveryRateDefinition';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The price of this rate. */
  price: Shopify_MoneyV2;
};

/** A rate provided by a merchant-defined rate or a participant. */
export type Shopify_DeliveryRateProvider = Shopify_DeliveryParticipant | Shopify_DeliveryRateDefinition;

/** A zone is a group of countries that have the same shipping rates. Customers can order products from a store only if they choose a shipping destination that's included in one of the store's zones. */
export type Shopify_DeliveryZone = {
  __typename?: 'Shopify_DeliveryZone';
  /** The list of countries within the zone. */
  countries: Array<Shopify_DeliveryCountry>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the zone. */
  name: Scalars['String'];
};

export enum Shopify_DigitalWallet {
  AndroidPay = 'ANDROID_PAY',
  ApplePay = 'APPLE_PAY',
  GooglePay = 'GOOGLE_PAY',
  ShopifyPay = 'SHOPIFY_PAY'
}

/** An amount that's allocated to a line based on an associated discount application. */
export type Shopify_DiscountAllocation = {
  __typename?: 'Shopify_DiscountAllocation';
  /**
   * The money amount that's allocated to a line based on the associated discount application.
   * @deprecated Use `allocatedAmountSet` instead
   */
  allocatedAmount: Shopify_MoneyV2;
  /** The money amount that's allocated to a line based on the associated discount application in shop and presentment currencies. */
  allocatedAmountSet: Shopify_MoneyBag;
  /** The discount application that the allocated amount originated from. */
  discountApplication: Shopify_DiscountApplication;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 *
 * Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.
 */
export type Shopify_DiscountApplication = {
  __typename?: 'Shopify_DiscountApplication';
  /** The method by which the discount's value is applied to its entitled items. */
  allocationMethod: Shopify_DiscountApplicationAllocationMethod;
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int'];
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: Shopify_DiscountApplicationTargetSelection;
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: Shopify_DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: Shopify_PricingValue;
};

export enum Shopify_DiscountApplicationAllocationMethod {
  Across = 'ACROSS',
  Each = 'EACH',
  One = 'ONE'
}

/** An auto-generated type for paginating through multiple DiscountApplications. */
export type Shopify_DiscountApplicationConnection = {
  __typename?: 'Shopify_DiscountApplicationConnection';
  /** A list of edges. */
  edges: Array<Shopify_DiscountApplicationEdge>;
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<Shopify_DiscountApplication>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one DiscountApplication and a cursor during pagination. */
export type Shopify_DiscountApplicationEdge = {
  __typename?: 'Shopify_DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountApplicationEdge. */
  node: Shopify_DiscountApplication;
};

export enum Shopify_DiscountApplicationTargetSelection {
  All = 'ALL',
  Entitled = 'ENTITLED',
  Explicit = 'EXPLICIT'
}

export enum Shopify_DiscountApplicationTargetType {
  LineItem = 'LINE_ITEM',
  ShippingLine = 'SHIPPING_LINE'
}

export enum Shopify_DiscountCodeSortKeys {
  Code = 'CODE',
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

export enum Shopify_DiscountTargetType {
  LineItem = 'LINE_ITEM',
  ShippingLine = 'SHIPPING_LINE'
}

export enum Shopify_DiscountType {
  CodeDiscount = 'CODE_DISCOUNT',
  Manual = 'MANUAL'
}

export enum Shopify_DisputeStatus {
  Accepted = 'ACCEPTED',
  ChargeRefunded = 'CHARGE_REFUNDED',
  Lost = 'LOST',
  NeedsResponse = 'NEEDS_RESPONSE',
  UnderReview = 'UNDER_REVIEW',
  Won = 'WON'
}

export enum Shopify_DisputeType {
  Chargeback = 'CHARGEBACK',
  Inquiry = 'INQUIRY'
}

/** A unique string that represents the address of a Shopify store on the Internet. */
export type Shopify_Domain = {
  __typename?: 'Shopify_Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The localization of the domain, if it does not redirect. */
  localization?: Maybe<Shopify_DomainLocalization>;
  /** The web presence of the domain. */
  marketWebPresence?: Maybe<Shopify_MarketWebPresence>;
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['Url'];
};

/** The country and language settings assigned to a domain. */
export type Shopify_DomainLocalization = {
  __typename?: 'Shopify_DomainLocalization';
  /** The ISO codes for the domain’s alternate locales. */
  alternateLocales: Array<Scalars['String']>;
  /** The ISO code for the country assigned to the domain, or "*" for a domain set to "Rest of world". */
  country?: Maybe<Scalars['String']>;
  /** The ISO code for the domain’s default locale. */
  defaultLocale: Scalars['String'];
};

/** Returns unfulfilled line items grouped by their fulfillment service. Each draft fulfillment contains additional information, such as whether the fulfillment requires shipping and whether a shipping label can be printed for it. */
export type Shopify_DraftFulfillment = {
  __typename?: 'Shopify_DraftFulfillment';
  /** Whether a label can be purchased. */
  allowLabelPurchase: Scalars['Boolean'];
  /** The line items (which might correspond to a variant) that are part of this draft fulfillment. */
  lineItems: Array<Shopify_LineItem>;
  /** Whether a fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The service responsible for fulfilling the fulfillment. */
  service: Shopify_FulfillmentService;
};

/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrder = {
  __typename?: 'Shopify_DraftOrder';
  /** Order-level discount applied to the draft order. */
  appliedDiscount?: Maybe<Shopify_DraftOrderAppliedDiscount>;
  /** The billing address of the customer. */
  billingAddress?: Maybe<Shopify_MailingAddress>;
  /**
   * Date and time when the draft order converted to a new order,
   * and the draft order's status changed to **Completed**.
   */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** Date and time when the draft order was created in Shopify. */
  createdAt: Scalars['DateTime'];
  /** Three letter code for the currency of the store at the time that the invoice is sent. */
  currencyCode: Shopify_CurrencyCode;
  /** Custom information added to the draft order on behalf of your customer. */
  customAttributes: Array<Shopify_Attribute>;
  /** Customer who will be sent an invoice for the draft order, if there is one. */
  customer?: Maybe<Shopify_Customer>;
  /** Email address of the customer, which is used to send notifications to. */
  email?: Maybe<Scalars['String']>;
  /** List of events associated with the draft order. */
  events: Shopify_EventConnection;
  /** Whether the merchant has added timeline comments to the draft order. */
  hasTimelineComment: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Date and time when the invoice was last emailed to the customer. */
  invoiceSentAt?: Maybe<Scalars['DateTime']>;
  /** Link to the checkout, which is sent to your customer in the invoice email. */
  invoiceUrl?: Maybe<Scalars['Url']>;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** List of the line items in the draft order. */
  lineItems: Shopify_DraftOrderLineItemConnection;
  /** List of localization extensions for the resource. */
  localizationExtensions: Shopify_LocalizationExtensionConnection;
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** Unique identifier for the draft order, which is unique within the store. For example, _#D1223_. */
  name: Scalars['String'];
  /** Text from an optional note attached to the draft order. */
  note2?: Maybe<Scalars['String']>;
  /** Order that was created from this draft order. */
  order?: Maybe<Shopify_Order>;
  /** The associated payment term for this draft order. */
  paymentTerms?: Maybe<Shopify_PaymentTerms>;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /**
   * Whether or not the Draft Order is ready and can be completed. Draft Orders
   *         may have asynchronous operations that can take time to finish.
   */
  ready: Scalars['Boolean'];
  /** The shipping address of the customer. */
  shippingAddress?: Maybe<Shopify_MailingAddress>;
  /** Line item that contains the shipping costs. */
  shippingLine?: Maybe<Shopify_ShippingLine>;
  /** Status of the draft order. */
  status: Shopify_DraftOrderStatus;
  /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
  subtotalPrice: Scalars['Money'];
  /**
   * A comma separated list of tags associated with the draft order. Updating `tags` overwrites
   * any existing tags that were previously added to the draft order. To add new tags without overwriting
   * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
   * mutation.
   */
  tags: Array<Scalars['String']>;
  /** Whether the draft order is tax exempt. */
  taxExempt: Scalars['Boolean'];
  /** Total amount of taxes charged for each line item and shipping line. */
  taxLines: Array<Shopify_TaxLine>;
  /** Whether the line item prices include taxes. */
  taxesIncluded: Scalars['Boolean'];
  /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
  totalPrice: Scalars['Money'];
  /** Total shipping charge for the draft order. */
  totalShippingPrice: Scalars['Money'];
  /** Total amount of taxes for the draft order. */
  totalTax: Scalars['Money'];
  /** Total weight (grams) of the draft order. */
  totalWeight: Scalars['UnsignedInt64'];
  /**
   * Date and time when the draft order was last changed.
   * The format is YYYY-MM-DD HH:mm:ss (for example, 2016-02-05 17:04:01).
   */
  updatedAt: Scalars['DateTime'];
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_EventSortKeys>;
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderLocalizationExtensionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  countryCodes?: InputMaybe<Array<InputMaybe<Shopify_CountryCode>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  purposes?: InputMaybe<Array<InputMaybe<Shopify_LocalizationExtensionPurpose>>>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers.
 *
 * ***Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_DraftOrderPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** The order-level discount applied to a draft order. */
export type Shopify_DraftOrderAppliedDiscount = {
  __typename?: 'Shopify_DraftOrderAppliedDiscount';
  /**
   * Amount of the order-level discount that is applied to the draft order.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money'];
  /** Amount of money discounted. */
  amountV2: Shopify_MoneyV2;
  /** Description of the order-level discount. */
  description: Scalars['String'];
  /** Name of the order-level discount. */
  title?: Maybe<Scalars['String']>;
  /**
   * Amount of the order level discount (when value_type is percentage,
   * the value in this field is the percentage discount).
   */
  value: Scalars['Float'];
  /** Type of the order-level discount. */
  valueType: Shopify_DraftOrderAppliedDiscountType;
};

export enum Shopify_DraftOrderAppliedDiscountType {
  FixedAmount = 'FIXED_AMOUNT',
  Percentage = 'PERCENTAGE'
}

/** An auto-generated type for paginating through multiple DraftOrders. */
export type Shopify_DraftOrderConnection = {
  __typename?: 'Shopify_DraftOrderConnection';
  /** A list of edges. */
  edges: Array<Shopify_DraftOrderEdge>;
  /** A list of the nodes contained in DraftOrderEdge. */
  nodes: Array<Shopify_DraftOrder>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one DraftOrder and a cursor during pagination. */
export type Shopify_DraftOrderEdge = {
  __typename?: 'Shopify_DraftOrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DraftOrderEdge. */
  node: Shopify_DraftOrder;
};

/** A line item included in a draft order. */
export type Shopify_DraftOrderLineItem = {
  __typename?: 'Shopify_DraftOrderLineItem';
  /** The discount that will be applied to the line item or the overall order. */
  appliedDiscount?: Maybe<Shopify_DraftOrderAppliedDiscount>;
  /** Whether the line item is a custom line item (`true`) or a product variant line item (`false`). */
  custom: Scalars['Boolean'];
  /** List of additional information, often representing custom features or special requests. */
  customAttributes: Array<Shopify_Attribute>;
  /** The line item price after discounts are applied. */
  discountedTotal: Scalars['Money'];
  /** The `discountedTotal` divided by `quantity`, resulting in the value of the discount per unit. */
  discountedUnitPrice: Scalars['Money'];
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   *
   * Deleted fulfillment services will return null.
   */
  fulfillmentService?: Maybe<Shopify_FulfillmentService>;
  /**
   * The weight of the line item in grams. The weight can only be specified if the line item is a custom
   * line item.
   * @deprecated Use `weight` instead
   */
  grams?: Maybe<Scalars['Int']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the draft order line item. */
  image?: Maybe<Shopify_Image>;
  /** Whether the line item is a gift card. */
  isGiftCard: Scalars['Boolean'];
  /** Name of the product. */
  name: Scalars['String'];
  /** The total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: Scalars['Money'];
  /** The variant price without any discounts applied. */
  originalUnitPrice: Scalars['Money'];
  /** The product corresponding to the line item’s product variant. */
  product?: Maybe<Shopify_Product>;
  /** The number of product variants that are requested in the draft order. */
  quantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** A list of tax line objects, each of which details the total taxes applicable to the order. */
  taxLines: Array<Shopify_TaxLine>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'];
  /** The total value of the discount that is applied to the line item. */
  totalDiscount: Scalars['Money'];
  /** The associated variant for the line item. */
  variant?: Maybe<Shopify_ProductVariant>;
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
  /** The weight unit and value for a draft order line item. */
  weight?: Maybe<Shopify_Weight>;
};


/** A line item included in a draft order. */
export type Shopify_DraftOrderLineItemImageArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple DraftOrderLineItems. */
export type Shopify_DraftOrderLineItemConnection = {
  __typename?: 'Shopify_DraftOrderLineItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_DraftOrderLineItemEdge>;
  /** A list of the nodes contained in DraftOrderLineItemEdge. */
  nodes: Array<Shopify_DraftOrderLineItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one DraftOrderLineItem and a cursor during pagination. */
export type Shopify_DraftOrderLineItemEdge = {
  __typename?: 'Shopify_DraftOrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DraftOrderLineItemEdge. */
  node: Shopify_DraftOrderLineItem;
};

export enum Shopify_DraftOrderSortKeys {
  CustomerName = 'CUSTOMER_NAME',
  Id = 'ID',
  Number = 'NUMBER',
  Relevance = 'RELEVANCE',
  Status = 'STATUS',
  TotalPrice = 'TOTAL_PRICE',
  UpdatedAt = 'UPDATED_AT'
}

export enum Shopify_DraftOrderStatus {
  Completed = 'COMPLETED',
  InvoiceSent = 'INVOICE_SENT',
  Open = 'OPEN'
}

/** The duty details for a line item. */
export type Shopify_Duty = {
  __typename?: 'Shopify_Duty';
  /** The ISO 3166-1 alpha-2 country code of the country of origin used in calculating the duty. */
  countryCodeOfOrigin?: Maybe<Shopify_CountryCode>;
  /** The harmonized system code of the item used in calculating the duty. */
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The amount of the duty. */
  price: Shopify_MoneyBag;
  /** A list of taxes charged on the duty. */
  taxLines: Array<Shopify_TaxLine>;
};

/** The attribute editable information. */
export type Shopify_EditableProperty = {
  __typename?: 'Shopify_EditableProperty';
  /** Whether the attribute is locked for editing. */
  locked: Scalars['Boolean'];
  /** The reason the attribute is locked for editing. */
  reason?: Maybe<Scalars['FormattedString']>;
};

/**
 * Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
 * addition of a product.
 */
export type Shopify_Event = {
  __typename?: 'Shopify_Event';
  /** The name of the app that created the event. */
  appTitle?: Maybe<Scalars['String']>;
  /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean'];
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean'];
  /** The date and time when the event was created. */
  createdAt: Scalars['DateTime'];
  /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Human readable text that describes the event. */
  message: Scalars['FormattedString'];
};

/** An auto-generated type for paginating through multiple Events. */
export type Shopify_EventConnection = {
  __typename?: 'Shopify_EventConnection';
  /** A list of edges. */
  edges: Array<Shopify_EventEdge>;
  /** A list of the nodes contained in EventEdge. */
  nodes: Array<Shopify_Event>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one Event and a cursor during pagination. */
export type Shopify_EventEdge = {
  __typename?: 'Shopify_EventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of EventEdge. */
  node: Shopify_Event;
};

export enum Shopify_EventSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

/** Requirements that must be met before an app can be installed. */
export type Shopify_FailedRequirement = {
  __typename?: 'Shopify_FailedRequirement';
  /** Action to be taken to resolve a failed requirement, including URL link. */
  action?: Maybe<Shopify_NavigationItem>;
  /**
   * A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
   * encounters when trying to make use of their Shop and its resources.
   */
  message: Scalars['String'];
};

/** A file error. */
export type Shopify_FileError = {
  __typename?: 'Shopify_FileError';
  /** Code representing the type of error. */
  code: Shopify_FileErrorCode;
  /** Additional details regarding the error. */
  details?: Maybe<Scalars['String']>;
  /** Translated error message. */
  message: Scalars['String'];
};

export enum Shopify_FileErrorCode {
  ExternalVideoEmbedDisabled = 'EXTERNAL_VIDEO_EMBED_DISABLED',
  ExternalVideoEmbedNotFoundOrTranscoding = 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING',
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  FileStorageLimitExceeded = 'FILE_STORAGE_LIMIT_EXCEEDED',
  GenericFileDownloadFailure = 'GENERIC_FILE_DOWNLOAD_FAILURE',
  GenericFileInvalidSize = 'GENERIC_FILE_INVALID_SIZE',
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  InvalidImageAspectRatio = 'INVALID_IMAGE_ASPECT_RATIO',
  InvalidImageFileSize = 'INVALID_IMAGE_FILE_SIZE',
  InvalidImageResolution = 'INVALID_IMAGE_RESOLUTION',
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  Model3DGlbOutputCreationError = 'MODEL3D_GLB_OUTPUT_CREATION_ERROR',
  Model3DGlbToUsdzConversionError = 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR',
  Model3DProcessingFailure = 'MODEL3D_PROCESSING_FAILURE',
  Model3DThumbnailGenerationError = 'MODEL3D_THUMBNAIL_GENERATION_ERROR',
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  Unknown = 'UNKNOWN',
  UnsupportedImageFileType = 'UNSUPPORTED_IMAGE_FILE_TYPE',
  VideoInvalidFiletypeError = 'VIDEO_INVALID_FILETYPE_ERROR',
  VideoMaxDurationError = 'VIDEO_MAX_DURATION_ERROR',
  VideoMaxHeightError = 'VIDEO_MAX_HEIGHT_ERROR',
  VideoMaxWidthError = 'VIDEO_MAX_WIDTH_ERROR',
  VideoMetadataReadError = 'VIDEO_METADATA_READ_ERROR',
  VideoMinDurationError = 'VIDEO_MIN_DURATION_ERROR',
  VideoMinHeightError = 'VIDEO_MIN_HEIGHT_ERROR',
  VideoMinWidthError = 'VIDEO_MIN_WIDTH_ERROR',
  VideoValidationError = 'VIDEO_VALIDATION_ERROR'
}

export enum Shopify_FileStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

/** A filter option is one possible value in a search filter. */
export type Shopify_FilterOption = {
  __typename?: 'Shopify_FilterOption';
  /** The filter option's label for display purposes. */
  label: Scalars['String'];
  /** The filter option's value. */
  value: Scalars['String'];
};

/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type Shopify_Fulfillment = {
  __typename?: 'Shopify_Fulfillment';
  /** The date and time when the fulfillment was created. */
  createdAt: Scalars['DateTime'];
  /** The date that this fulfillment was delivered. */
  deliveredAt?: Maybe<Scalars['DateTime']>;
  /** Human readable display status for this fulfillment. */
  displayStatus?: Maybe<Shopify_FulfillmentDisplayStatus>;
  /** The estimated date that this fulfillment will arrive. */
  estimatedDeliveryAt?: Maybe<Scalars['DateTime']>;
  /** The history of events associated with this fulfillment. */
  events: Shopify_FulfillmentEventConnection;
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: Shopify_FulfillmentLineItemConnection;
  /** A paginated list of fulfillment orders for the fulfillment. */
  fulfillmentOrders: Shopify_FulfillmentOrderConnection;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The date and time when the fulfillment went into transit. */
  inTransitAt?: Maybe<Scalars['DateTime']>;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The location that the fulfillment was processed at. */
  location?: Maybe<Shopify_Location>;
  /** Human readable reference identifier for this fulfillment. */
  name: Scalars['String'];
  /** The order for which the fulfillment was created. */
  order: Shopify_Order;
  /** The address at which the fulfillment occurred. Typically this is the address of the warehouse or fulfillment center. */
  originAddress?: Maybe<Shopify_FulfillmentOriginAddress>;
  /** Whether any of the line items in the fulfillment require shipping. */
  requiresShipping: Scalars['Boolean'];
  /** Fulfillment service associated with the fulfillment. */
  service?: Maybe<Shopify_FulfillmentService>;
  /** The status of the fulfillment. */
  status: Shopify_FulfillmentStatus;
  /** Sum of all line item quantities for the fulfillment. */
  totalQuantity: Scalars['Int'];
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking company, tracking number, and tracking URL.
   */
  trackingInfo: Array<Shopify_FulfillmentTrackingInfo>;
  /** The date and time when the fulfillment was last modified. */
  updatedAt: Scalars['DateTime'];
};


/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type Shopify_FulfillmentEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_FulfillmentEventSortKeys>;
};


/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type Shopify_FulfillmentFulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type Shopify_FulfillmentFulfillmentOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type Shopify_FulfillmentTrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple Fulfillments. */
export type Shopify_FulfillmentConnection = {
  __typename?: 'Shopify_FulfillmentConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentEdge>;
  /** A list of the nodes contained in FulfillmentEdge. */
  nodes: Array<Shopify_Fulfillment>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

export enum Shopify_FulfillmentDisplayStatus {
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Failure = 'FAILURE',
  Fulfilled = 'FULFILLED',
  InTransit = 'IN_TRANSIT',
  LabelPrinted = 'LABEL_PRINTED',
  LabelPurchased = 'LABEL_PURCHASED',
  LabelVoided = 'LABEL_VOIDED',
  MarkedAsFulfilled = 'MARKED_AS_FULFILLED',
  NotDelivered = 'NOT_DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  PickedUp = 'PICKED_UP',
  ReadyForPickup = 'READY_FOR_PICKUP',
  Submitted = 'SUBMITTED'
}

/** An auto-generated type which holds one Fulfillment and a cursor during pagination. */
export type Shopify_FulfillmentEdge = {
  __typename?: 'Shopify_FulfillmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentEdge. */
  node: Shopify_Fulfillment;
};

/** The fulfillment event that describes the fulfilllment status at a particular time. */
export type Shopify_FulfillmentEvent = {
  __typename?: 'Shopify_FulfillmentEvent';
  /** The time at which this fulfillment event happened. */
  happenedAt: Scalars['DateTime'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The status of this fulfillment event. */
  status: Shopify_FulfillmentEventStatus;
};

/** An auto-generated type for paginating through multiple FulfillmentEvents. */
export type Shopify_FulfillmentEventConnection = {
  __typename?: 'Shopify_FulfillmentEventConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentEventEdge>;
  /** A list of the nodes contained in FulfillmentEventEdge. */
  nodes: Array<Shopify_FulfillmentEvent>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one FulfillmentEvent and a cursor during pagination. */
export type Shopify_FulfillmentEventEdge = {
  __typename?: 'Shopify_FulfillmentEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentEventEdge. */
  node: Shopify_FulfillmentEvent;
};

export enum Shopify_FulfillmentEventSortKeys {
  HappenedAt = 'HAPPENED_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

export enum Shopify_FulfillmentEventStatus {
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Failure = 'FAILURE',
  InTransit = 'IN_TRANSIT',
  LabelPrinted = 'LABEL_PRINTED',
  LabelPurchased = 'LABEL_PURCHASED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  ReadyForPickup = 'READY_FOR_PICKUP'
}

/** A fulfillment hold currently applied on a fulfillment order. */
export type Shopify_FulfillmentHold = {
  __typename?: 'Shopify_FulfillmentHold';
  /** The reason for the fulfillment hold. */
  reason: Shopify_FulfillmentHoldReason;
  /** Additional information about the fulfillment hold reason. */
  reasonNotes?: Maybe<Scalars['String']>;
};

export enum Shopify_FulfillmentHoldReason {
  AwaitingPayment = 'AWAITING_PAYMENT',
  HighRiskOfFraud = 'HIGH_RISK_OF_FRAUD',
  IncorrectAddress = 'INCORRECT_ADDRESS',
  InventoryOutOfStock = 'INVENTORY_OUT_OF_STOCK',
  Other = 'OTHER'
}

/** Represents a line item from an order that's included in a fulfillment. */
export type Shopify_FulfillmentLineItem = {
  __typename?: 'Shopify_FulfillmentLineItem';
  /**
   * The total price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money'];
  /** The total price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: Shopify_MoneyBag;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The associated order's line item. */
  lineItem: Shopify_LineItem;
  /**
   * The total price before discounts are applied.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money'];
  /** The total price before discounts are applied in shop and presentment currencies. */
  originalTotalSet: Shopify_MoneyBag;
  /** Number of line items in the fulfillment. */
  quantity?: Maybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple FulfillmentLineItems. */
export type Shopify_FulfillmentLineItemConnection = {
  __typename?: 'Shopify_FulfillmentLineItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentLineItemEdge>;
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<Shopify_FulfillmentLineItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination. */
export type Shopify_FulfillmentLineItemEdge = {
  __typename?: 'Shopify_FulfillmentLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: Shopify_FulfillmentLineItem;
};

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type Shopify_FulfillmentOrder = {
  __typename?: 'Shopify_FulfillmentOrder';
  /** The fulfillment order's assigned location. This is the location expected to perform fulfillment. */
  assignedLocation: Shopify_FulfillmentOrderAssignedLocation;
  /** Delivery method of this fulfillment order. */
  deliveryMethod?: Maybe<Shopify_DeliveryMethod>;
  /** The destination where the items should be sent. */
  destination?: Maybe<Shopify_FulfillmentOrderDestination>;
  /** The date and time at which the fulfillment order will be fulfillable. */
  fulfillAt?: Maybe<Scalars['DateTime']>;
  /** The latest date and time by which all items in the fulfillment order need to be fulfilled. */
  fulfillBy?: Maybe<Scalars['DateTime']>;
  /** The fulfillment holds applied on the fulfillment order. */
  fulfillmentHolds: Array<Shopify_FulfillmentHold>;
  /** A list of fulfillments for the fulfillment order. */
  fulfillments: Shopify_FulfillmentConnection;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The duties delivery method of this fulfillment order. */
  internationalDuties?: Maybe<Shopify_FulfillmentOrderInternationalDuties>;
  /** A list of the fulfillment order's line items. */
  lineItems: Shopify_FulfillmentOrderLineItemConnection;
  /** A list of locations that the fulfillment order can potentially move to. */
  locationsForMove: Shopify_FulfillmentOrderLocationForMoveConnection;
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order. */
  merchantRequests: Shopify_FulfillmentOrderMerchantRequestConnection;
  /** The order that's associated with the fulfillment order. */
  order: Shopify_Order;
  /** The request status of the fulfillment order. */
  requestStatus: Shopify_FulfillmentOrderRequestStatus;
  /** The status of the fulfillment order. */
  status: Shopify_FulfillmentOrderStatus;
  /** The actions that can be performed on this fulfillment order. */
  supportedActions: Array<Shopify_FulfillmentOrderSupportedAction>;
};


/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type Shopify_FulfillmentOrderFulfillmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type Shopify_FulfillmentOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type Shopify_FulfillmentOrderLocationsForMoveArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type Shopify_FulfillmentOrderMerchantRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  kind?: InputMaybe<Shopify_FulfillmentOrderMerchantRequestKind>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

export enum Shopify_FulfillmentOrderAction {
  CancelFulfillmentOrder = 'CANCEL_FULFILLMENT_ORDER',
  CreateFulfillment = 'CREATE_FULFILLMENT',
  External = 'EXTERNAL',
  Hold = 'HOLD',
  MarkAsOpen = 'MARK_AS_OPEN',
  Move = 'MOVE',
  ReleaseHold = 'RELEASE_HOLD',
  RequestCancellation = 'REQUEST_CANCELLATION',
  RequestFulfillment = 'REQUEST_FULFILLMENT'
}

/**
 * Represents the assigned location of a fulfillment order, which is a snapshot of the location
 * at which the fulfillment order was created. The assigned location is expected to perform fulfillment.
 */
export type Shopify_FulfillmentOrderAssignedLocation = {
  __typename?: 'Shopify_FulfillmentOrderAssignedLocation';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The two-letter country code of the location. */
  countryCode: Shopify_CountryCode;
  /**
   * The location where the fulfillment order was created. This can differ from the
   * `FulfillmentOrderAssignedLocation` if the location was updated since the fulfillment order
   * was closed.
   */
  location?: Maybe<Shopify_Location>;
  /** The name of the location. */
  name: Scalars['String'];
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

export enum Shopify_FulfillmentOrderAssignmentStatus {
  CancellationRequested = 'CANCELLATION_REQUESTED',
  FulfillmentAccepted = 'FULFILLMENT_ACCEPTED',
  FulfillmentRequested = 'FULFILLMENT_REQUESTED'
}

/** An auto-generated type for paginating through multiple FulfillmentOrders. */
export type Shopify_FulfillmentOrderConnection = {
  __typename?: 'Shopify_FulfillmentOrderConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentOrderEdge>;
  /** A list of the nodes contained in FulfillmentOrderEdge. */
  nodes: Array<Shopify_FulfillmentOrder>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** Represents the destination where the items should be sent upon fulfillment. */
export type Shopify_FulfillmentOrderDestination = {
  __typename?: 'Shopify_FulfillmentOrderDestination';
  /** The first line of the address of the destination. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address of the destination. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the destination. */
  city?: Maybe<Scalars['String']>;
  /** The company of the destination. */
  company?: Maybe<Scalars['String']>;
  /** The two-letter country code of the destination. */
  countryCode?: Maybe<Shopify_CountryCode>;
  /** The email of the customer at the destination. */
  email?: Maybe<Scalars['String']>;
  /** The first name of the customer at the destination. */
  firstName?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer at the destination. */
  lastName?: Maybe<Scalars['String']>;
  /** The phone number of the customer at the destination. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the destination. */
  province?: Maybe<Scalars['String']>;
  /** The ZIP code of the destination. */
  zip?: Maybe<Scalars['String']>;
};

/** An auto-generated type which holds one FulfillmentOrder and a cursor during pagination. */
export type Shopify_FulfillmentOrderEdge = {
  __typename?: 'Shopify_FulfillmentOrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderEdge. */
  node: Shopify_FulfillmentOrder;
};

/** The international duties relevant to a fulfillment order. */
export type Shopify_FulfillmentOrderInternationalDuties = {
  __typename?: 'Shopify_FulfillmentOrderInternationalDuties';
  /** The method of duties payment. Example values: `DDP`, `DAP`. */
  incoterm: Scalars['String'];
};

/** Represents a line item belonging to a fulfillment order. */
export type Shopify_FulfillmentOrderLineItem = {
  __typename?: 'Shopify_FulfillmentOrderLineItem';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The associated order line item. */
  lineItem: Shopify_LineItem;
  /** The number of units remaining to be fulfilled. */
  remainingQuantity: Scalars['Int'];
  /** The total number of units to be fulfilled. */
  totalQuantity: Scalars['Int'];
};

/** An auto-generated type for paginating through multiple FulfillmentOrderLineItems. */
export type Shopify_FulfillmentOrderLineItemConnection = {
  __typename?: 'Shopify_FulfillmentOrderLineItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentOrderLineItemEdge>;
  /** A list of the nodes contained in FulfillmentOrderLineItemEdge. */
  nodes: Array<Shopify_FulfillmentOrderLineItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one FulfillmentOrderLineItem and a cursor during pagination. */
export type Shopify_FulfillmentOrderLineItemEdge = {
  __typename?: 'Shopify_FulfillmentOrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderLineItemEdge. */
  node: Shopify_FulfillmentOrderLineItem;
};

/** A location that a fulfillment order can potentially move to. */
export type Shopify_FulfillmentOrderLocationForMove = {
  __typename?: 'Shopify_FulfillmentOrderLocationForMove';
  /** The location being considered as the fulfillment order's new assigned location. */
  location: Shopify_Location;
  /**
   * A human-readable string with the reason why the fulfillment order, or some of its line items, can't be
   * moved to the location.
   */
  message?: Maybe<Scalars['String']>;
  /** Whether the fulfillment order can be moved to the location. */
  movable: Scalars['Boolean'];
};

/** An auto-generated type for paginating through multiple FulfillmentOrderLocationForMoves. */
export type Shopify_FulfillmentOrderLocationForMoveConnection = {
  __typename?: 'Shopify_FulfillmentOrderLocationForMoveConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentOrderLocationForMoveEdge>;
  /** A list of the nodes contained in FulfillmentOrderLocationForMoveEdge. */
  nodes: Array<Shopify_FulfillmentOrderLocationForMove>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one FulfillmentOrderLocationForMove and a cursor during pagination. */
export type Shopify_FulfillmentOrderLocationForMoveEdge = {
  __typename?: 'Shopify_FulfillmentOrderLocationForMoveEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderLocationForMoveEdge. */
  node: Shopify_FulfillmentOrderLocationForMove;
};

/** Represents a request made by the merchant to a fulfillment service for a fulfillment order. */
export type Shopify_FulfillmentOrderMerchantRequest = {
  __typename?: 'Shopify_FulfillmentOrderMerchantRequest';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The kind of request made. */
  kind: Shopify_FulfillmentOrderMerchantRequestKind;
  /** The optional message that the merchant included in the request. */
  message?: Maybe<Scalars['String']>;
  /**
   * Additional options requested by the merchant. These depend on the `kind` of the request.
   * For example, for a `FULFILLMENT_REQUEST`, one option is `notify_customer`, which indicates whether the
   * merchant intends to notify the customer upon fulfillment. The fulfillment service can then set
   * `notifyCustomer` when making calls to `FulfillmentCreateV2`.
   */
  requestOptions?: Maybe<Scalars['Json']>;
  /** The response from the fulfillment service. */
  responseData?: Maybe<Scalars['Json']>;
  /** The timestamp when the request was made. */
  sentAt: Scalars['DateTime'];
};

/** An auto-generated type for paginating through multiple FulfillmentOrderMerchantRequests. */
export type Shopify_FulfillmentOrderMerchantRequestConnection = {
  __typename?: 'Shopify_FulfillmentOrderMerchantRequestConnection';
  /** A list of edges. */
  edges: Array<Shopify_FulfillmentOrderMerchantRequestEdge>;
  /** A list of the nodes contained in FulfillmentOrderMerchantRequestEdge. */
  nodes: Array<Shopify_FulfillmentOrderMerchantRequest>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one FulfillmentOrderMerchantRequest and a cursor during pagination. */
export type Shopify_FulfillmentOrderMerchantRequestEdge = {
  __typename?: 'Shopify_FulfillmentOrderMerchantRequestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderMerchantRequestEdge. */
  node: Shopify_FulfillmentOrderMerchantRequest;
};

export enum Shopify_FulfillmentOrderMerchantRequestKind {
  CancellationRequest = 'CANCELLATION_REQUEST',
  FulfillmentRequest = 'FULFILLMENT_REQUEST'
}

export enum Shopify_FulfillmentOrderRequestStatus {
  Accepted = 'ACCEPTED',
  CancellationAccepted = 'CANCELLATION_ACCEPTED',
  CancellationRejected = 'CANCELLATION_REJECTED',
  CancellationRequested = 'CANCELLATION_REQUESTED',
  Closed = 'CLOSED',
  Rejected = 'REJECTED',
  Submitted = 'SUBMITTED',
  Unsubmitted = 'UNSUBMITTED'
}

export enum Shopify_FulfillmentOrderSortKeys {
  Id = 'ID',
  Relevance = 'RELEVANCE'
}

export enum Shopify_FulfillmentOrderStatus {
  Cancelled = 'CANCELLED',
  Closed = 'CLOSED',
  Incomplete = 'INCOMPLETE',
  InProgress = 'IN_PROGRESS',
  OnHold = 'ON_HOLD',
  Open = 'OPEN',
  Scheduled = 'SCHEDULED'
}

/** One of the actions that the fulfillment order supports in its current state. */
export type Shopify_FulfillmentOrderSupportedAction = {
  __typename?: 'Shopify_FulfillmentOrderSupportedAction';
  /** The action value. */
  action: Shopify_FulfillmentOrderAction;
  /**
   * The external URL to be used to initiate the fulfillment process outside Shopify.
   * Applicable only when the `action` value is `EXTERNAL`.
   */
  externalUrl?: Maybe<Scalars['Url']>;
};

/** The address at which the fulfillment occurred. Typically this is the address of the warehouse or fulfillment center. */
export type Shopify_FulfillmentOriginAddress = {
  __typename?: 'Shopify_FulfillmentOriginAddress';
  /** The street address of the fulfillment location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The city in which the fulfillment location is located. */
  city?: Maybe<Scalars['String']>;
  /** The country code of the fulfillment location. */
  countryCode: Scalars['String'];
  /** The province code of the fulfillment location. */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip code of the fulfillment location. */
  zip?: Maybe<Scalars['String']>;
};

/** Represents a fulfillment service. A fulfillment service is a third-party service that prepares and ships orders on behalf of the store owner. */
export type Shopify_FulfillmentService = {
  __typename?: 'Shopify_FulfillmentService';
  /** The callback URL the fulfillment service has registered for requests. */
  callbackUrl?: Maybe<Scalars['Url']>;
  /** Whether the fulfillment service has opted into fulfillment order based requests. */
  fulfillmentOrdersOptIn: Scalars['Boolean'];
  /** Human-readable unique identifier for this fulfillment service. */
  handle: Scalars['String'];
  /** The ID of the fulfillment service. */
  id: Scalars['ID'];
  /** Whether the fulfillment service tracks product inventory and provides updates to Shopify. */
  inventoryManagement: Scalars['Boolean'];
  /** Location associated with the fulfillment service. */
  location?: Maybe<Shopify_Location>;
  /** Whether the fulfillment service supports local deliveries. */
  productBased: Scalars['Boolean'];
  /** The name of the fulfillment service as seen by merchants. */
  serviceName: Scalars['String'];
  /** Shipping methods associated with the fulfillment service provider. */
  shippingMethods: Array<Shopify_ShippingMethod>;
  /** Type associated with the fulfillment service. */
  type: Shopify_FulfillmentServiceType;
};

export enum Shopify_FulfillmentServiceType {
  GiftCard = 'GIFT_CARD',
  Manual = 'MANUAL',
  ThirdParty = 'THIRD_PARTY'
}

export enum Shopify_FulfillmentStatus {
  Cancelled = 'CANCELLED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Open = 'OPEN',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Represents the tracking information for a fulfillment. */
export type Shopify_FulfillmentTrackingInfo = {
  __typename?: 'Shopify_FulfillmentTrackingInfo';
  /** The name of the tracking company. */
  company?: Maybe<Scalars['String']>;
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URLs to track the fulfillment. */
  url?: Maybe<Scalars['Url']>;
};

/** A generic file. */
export type Shopify_GenericFile = {
  __typename?: 'Shopify_GenericFile';
  /** A word or phrase to describe the contents or the function of a file. */
  alt?: Maybe<Scalars['String']>;
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Any errors that have occurred on the file. */
  fileErrors: Array<Shopify_FileError>;
  /** The status of the file. */
  fileStatus: Shopify_FileStatus;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']>;
  /** The preview image for the media. */
  preview?: Maybe<Shopify_MediaPreviewImage>;
  /** The URL of the file. */
  url?: Maybe<Scalars['Url']>;
};

/** Represents information about the metafields associated to the specified resource. */
export type Shopify_HasMetafields = {
  __typename?: 'Shopify_HasMetafields';
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
};


/** Represents information about the metafields associated to the specified resource. */
export type Shopify_HasMetafieldsMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents information about the metafields associated to the specified resource. */
export type Shopify_HasMetafieldsMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents information about the metafields associated to the specified resource. */
export type Shopify_HasMetafieldsPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents information about the metafields associated to the specified resource. */
export type Shopify_HasMetafieldsPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Represents an image resource. */
export type Shopify_Image = {
  __typename?: 'Shopify_Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   * @deprecated Use `url` instead
   */
  originalSrc: Scalars['Url'];
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead
   */
  src: Scalars['Url'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['Url'];
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   */
  url: Scalars['Url'];
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type Shopify_ImageMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents an image resource. */
export type Shopify_ImageMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents an image resource. */
export type Shopify_ImagePrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents an image resource. */
export type Shopify_ImagePrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents an image resource. */
export type Shopify_ImageTransformedSrcArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  preferredContentType?: InputMaybe<Shopify_ImageContentType>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type Shopify_ImageUrlArgs = {
  transform?: InputMaybe<Shopify_ImageTransformInput>;
};

/** An auto-generated type for paginating through multiple Images. */
export type Shopify_ImageConnection = {
  __typename?: 'Shopify_ImageConnection';
  /** A list of edges. */
  edges: Array<Shopify_ImageEdge>;
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<Shopify_Image>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

export enum Shopify_ImageContentType {
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

/** An auto-generated type which holds one Image and a cursor during pagination. */
export type Shopify_ImageEdge = {
  __typename?: 'Shopify_ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: Shopify_Image;
};

/** Specifies the input fields for an image. */
export type Shopify_ImageInput = {
  /** A word or phrase to share the nature or contents of an image. */
  altText?: InputMaybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id?: InputMaybe<Scalars['ID']>;
  /** The URL of the image. May be a signed upload URL. */
  src?: InputMaybe<Scalars['String']>;
};

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
 */
export type Shopify_ImageTransformInput = {
  /** Crop the image according to the specified region. */
  crop?: InputMaybe<Shopify_CropRegion>;
  /** Image height in pixels between 1 and 5760. */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /** Image width in pixels between 1 and 5760. */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   */
  preferredContentType?: InputMaybe<Shopify_ImageContentType>;
  /** Image size multiplier for high-resolution retina displays. Must be within 1..3. */
  scale?: InputMaybe<Scalars['Int']>;
};

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type Shopify_InventoryItem = {
  __typename?: 'Shopify_InventoryItem';
  /** The ISO 3166-1 alpha-2 country code of where the item originated from. */
  countryCodeOfOrigin?: Maybe<Shopify_CountryCode>;
  /** A list of country specific harmonized system codes. */
  countryHarmonizedSystemCodes: Shopify_CountryHarmonizedSystemCodeConnection;
  /** The date and time when the inventory item was created. */
  createdAt: Scalars['DateTime'];
  /** The number of inventory items that share the same SKU with this item. */
  duplicateSkuCount: Scalars['Int'];
  /** The harmonized system code of the item. */
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The URL that points to the inventory history for the item. */
  inventoryHistoryUrl?: Maybe<Scalars['Url']>;
  /** The inventory item's quantities at the specified location. */
  inventoryLevel?: Maybe<Shopify_InventoryLevel>;
  /** A list of the inventory item's quantities for each location that the inventory item can be stocked at. */
  inventoryLevels: Shopify_InventoryLevelConnection;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The number of locations where this inventory item is stocked. */
  locationsCount: Scalars['Int'];
  /** The ISO 3166-2 alpha-2 province code of where the item originated from. */
  provinceCodeOfOrigin?: Maybe<Scalars['String']>;
  /** Whether the inventory item requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** Inventory item SKU. */
  sku?: Maybe<Scalars['String']>;
  /** Whether inventory levels are tracked for the item. */
  tracked: Scalars['Boolean'];
  /** Whether the value of the `tracked` field for the inventory item can be changed. */
  trackedEditable: Shopify_EditableProperty;
  /** Unit cost associated with the inventory item. */
  unitCost?: Maybe<Shopify_MoneyV2>;
  /** The date and time when the inventory item was updated. */
  updatedAt: Scalars['DateTime'];
  /** The variant that owns this inventory item. */
  variant: Shopify_ProductVariant;
};


/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type Shopify_InventoryItemCountryHarmonizedSystemCodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type Shopify_InventoryItemInventoryLevelArgs = {
  locationId: Scalars['ID'];
};


/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type Shopify_InventoryItemInventoryLevelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple InventoryItems. */
export type Shopify_InventoryItemConnection = {
  __typename?: 'Shopify_InventoryItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_InventoryItemEdge>;
  /** A list of the nodes contained in InventoryItemEdge. */
  nodes: Array<Shopify_InventoryItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one InventoryItem and a cursor during pagination. */
export type Shopify_InventoryItemEdge = {
  __typename?: 'Shopify_InventoryItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of InventoryItemEdge. */
  node: Shopify_InventoryItem;
};

/** Specifies the input fields for an inventory item. */
export type Shopify_InventoryItemInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: InputMaybe<Scalars['Decimal']>;
  /** Whether the inventory item is tracked. */
  tracked?: InputMaybe<Scalars['Boolean']>;
};

/** The quantities of an inventory item that are related to a specific location. */
export type Shopify_InventoryLevel = {
  __typename?: 'Shopify_InventoryLevel';
  /** The quantity of inventory items that are available at the inventory level's associated location. */
  available: Scalars['Int'];
  /** Whether the inventory items associated with the inventory level can be deactivated. */
  canDeactivate: Scalars['Boolean'];
  /** The date and time when the inventory level was created. */
  createdAt: Scalars['DateTime'];
  /** Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated. */
  deactivationAlert?: Maybe<Scalars['String']>;
  /** Describes, in HTML with embedded URLs, either the impact of deactivating the inventory level or why the inventory level can't be deactivated. */
  deactivationAlertHtml?: Maybe<Scalars['FormattedString']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantity of inventory items that are going to the inventory level's associated location. */
  incoming: Scalars['Int'];
  /** Inventory item associated with the inventory level. */
  item: Shopify_InventoryItem;
  /** The location associated with the inventory level. */
  location: Shopify_Location;
  /** The date and time when the inventory level was updated. */
  updatedAt: Scalars['DateTime'];
};

/** An auto-generated type for paginating through multiple InventoryLevels. */
export type Shopify_InventoryLevelConnection = {
  __typename?: 'Shopify_InventoryLevelConnection';
  /** A list of edges. */
  edges: Array<Shopify_InventoryLevelEdge>;
  /** A list of the nodes contained in InventoryLevelEdge. */
  nodes: Array<Shopify_InventoryLevel>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one InventoryLevel and a cursor during pagination. */
export type Shopify_InventoryLevelEdge = {
  __typename?: 'Shopify_InventoryLevelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of InventoryLevelEdge. */
  node: Shopify_InventoryLevel;
};

/** Specifies the input fields for an inventory level. */
export type Shopify_InventoryLevelInput = {
  /** The available quantity of an inventory item at a location. */
  availableQuantity: Scalars['Int'];
  /** The ID of a location. */
  locationId: Scalars['ID'];
};

/**
 * The total number of pending orders on a shop if less then a maximum, or that maximum.
 * The atMax field indicates when this maximum has been reached.
 */
export type Shopify_LimitedPendingOrderCount = {
  __typename?: 'Shopify_LimitedPendingOrderCount';
  /** This is set when the number of pending orders has reached the maximum. */
  atMax: Scalars['Boolean'];
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   */
  count: Scalars['Int'];
};

/** Represents a single line item on an order. */
export type Shopify_LineItem = {
  __typename?: 'Shopify_LineItem';
  /**
   * Whether the line item can be restocked.
   * @deprecated Use `restockable` instead
   */
  canRestock: Scalars['Boolean'];
  /** The subscription contract associated with this line item. */
  contract?: Maybe<Shopify_SubscriptionContract>;
  /** The line item's quantity, minus the removed quantity. */
  currentQuantity: Scalars['Int'];
  /** List of additional information, often representing custom features or special requests. */
  customAttributes: Array<Shopify_Attribute>;
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<Shopify_DiscountAllocation>;
  /**
   * The total line price after discounts are applied, in shop currency.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money'];
  /** The total line price after discounts are applied, in shop and presentment currencies. */
  discountedTotalSet: Shopify_MoneyBag;
  /**
   * The approximate split price of a line item unit, in shop currency. This value doesn't include discounts applied to the entire order.
   * @deprecated Use `discountedUnitPriceSet` instead
   */
  discountedUnitPrice: Scalars['Money'];
  /** The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order. */
  discountedUnitPriceSet: Shopify_MoneyBag;
  /** The duties associated with the line item. */
  duties: Array<Shopify_Duty>;
  /**
   * The total number of units to fulfill.
   * @deprecated Use [FulfillmentOrderLineItem#remainingQuantity](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-fulfillmentorderlineitem-remainingquantity) instead.
   */
  fulfillableQuantity: Scalars['Int'];
  /**
   * The service provider that fulfills the line item.
   *
   * Deleted fulfillment services will return null.
   * @deprecated Use [FulfillmentOrder#assignedLocation](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder#field-fulfillmentorder-assignedlocation) instead.
   */
  fulfillmentService?: Maybe<Shopify_FulfillmentService>;
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   * @deprecated Use [FulfillmentOrderLineItem#remainingQuantity](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-fulfillmentorderlineitem-remainingquantity) instead
   */
  fulfillmentStatus: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated to the line item's variant. */
  image?: Maybe<Shopify_Image>;
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean'];
  /** The name of the product. */
  name: Scalars['String'];
  /**
   * The total number of units that can't be fulfilled.
   *         For example, if items have been refunded, or the item is not something that can be fulfilled,
   *         like a tip.Please see the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object for more fulfillment details.
   */
  nonFulfillableQuantity: Scalars['Int'];
  /**
   * The total price without discounts applied, in shop currency.
   * This value is based on the unit price of the variant x quantity.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money'];
  /** The total price in shop and presentment currencies, without discounts applied. This value is based on the unit price of the variant x quantity. */
  originalTotalSet: Shopify_MoneyBag;
  /**
   * The variant unit price without discounts applied, in shop currency.
   * @deprecated Use `originalUnitPriceSet` instead
   */
  originalUnitPrice: Scalars['Money'];
  /** The variant unit price without discounts applied, in shop and presentment currencies. */
  originalUnitPriceSet: Shopify_MoneyBag;
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Shopify_Product>;
  /** The number of variant units ordered. */
  quantity: Scalars['Int'];
  /** The line item's quantity, minus the removed quantity. */
  refundableQuantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Whether the line item can be restocked. */
  restockable: Scalars['Boolean'];
  /** The selling plan details associated with the line item. */
  sellingPlan?: Maybe<Shopify_LineItemSellingPlan>;
  /** The variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** Staff attributed to the initial sale of the line item. */
  staffMember?: Maybe<Shopify_StaffMember>;
  /** The taxes charged for this line item. */
  taxLines: Array<Shopify_TaxLine>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** The title of the product. */
  title: Scalars['String'];
  /**
   * The sum of all AppliedDiscounts on this line item, in shop currency.
   * @deprecated Use `totalDiscountSet` instead
   */
  totalDiscount: Scalars['Money'];
  /** The sum of all AppliedDiscounts on this line item, in shop and presentment currencies. */
  totalDiscountSet: Shopify_MoneyBag;
  /**
   * The total discounted value of unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead
   */
  unfulfilledDiscountedTotal: Scalars['Money'];
  /** The total discounted value of unfulfilled units, in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: Shopify_MoneyBag;
  /**
   * The total price, without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead
   */
  unfulfilledOriginalTotal: Scalars['Money'];
  /** The total price, without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: Shopify_MoneyBag;
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int'];
  /** The Variant object associated with this line item. */
  variant?: Maybe<Shopify_ProductVariant>;
  /** The name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
};


/** Represents a single line item on an order. */
export type Shopify_LineItemImageArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents a single line item on an order. */
export type Shopify_LineItemTaxLinesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple LineItems. */
export type Shopify_LineItemConnection = {
  __typename?: 'Shopify_LineItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_LineItemEdge>;
  /** A list of the nodes contained in LineItemEdge. */
  nodes: Array<Shopify_LineItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one LineItem and a cursor during pagination. */
export type Shopify_LineItemEdge = {
  __typename?: 'Shopify_LineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LineItemEdge. */
  node: Shopify_LineItem;
};

/** Represents a single line item on an order. */
export type Shopify_LineItemMutable = {
  __typename?: 'Shopify_LineItemMutable';
  /**
   * Whether the line item can be restocked.
   * @deprecated Use `restockable` instead
   */
  canRestock: Scalars['Boolean'];
  /** List of additional information, often representing custom features or special requests. */
  customAttributes: Array<Shopify_Attribute>;
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<Shopify_DiscountAllocation>;
  /**
   * The total line price after discounts are applied, in shop currency.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money'];
  /** The total line price after discounts are applied, in shop and presentment currencies. */
  discountedTotalSet: Shopify_MoneyBag;
  /**
   * The approximate split price of a line item unit, in shop currency. This value doesn't include discounts applied to the entire order.
   * @deprecated Use `discountedUnitPriceSet` instead
   */
  discountedUnitPrice: Scalars['Money'];
  /** The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order. */
  discountedUnitPriceSet: Shopify_MoneyBag;
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars['Int'];
  /**
   * The service provider that fulfills the line item.
   *
   * Deleted fulfillment services will return null.
   */
  fulfillmentService?: Maybe<Shopify_FulfillmentService>;
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   */
  fulfillmentStatus: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated to the line item's variant. */
  image?: Maybe<Shopify_Image>;
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean'];
  /** The name of the product. */
  name: Scalars['String'];
  /** The total number of units that can't be fulfilled. For example, if items have been refunded, or the item is not something that can be fulfilled, like a tip. */
  nonFulfillableQuantity: Scalars['Int'];
  /**
   * The total price without any discounts applied, in shop currency. ""This value is based on the unit price of the variant x quantity.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money'];
  /** The total price in shop and presentment currencies, without discounts applied. This value is based on the unit price of the variant x quantity. */
  originalTotalSet: Shopify_MoneyBag;
  /**
   * The variant unit price without discounts applied, in shop currency.
   * @deprecated Use `originalUnitPriceSet` instead
   */
  originalUnitPrice: Scalars['Money'];
  /** The variant unit price without discounts applied, in shop and presentment currencies. */
  originalUnitPriceSet: Shopify_MoneyBag;
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Shopify_Product>;
  /** The number of variant units ordered. */
  quantity: Scalars['Int'];
  /** The line item's quantity, minus the removed quantity. */
  refundableQuantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Whether the line item can be restocked. */
  restockable: Scalars['Boolean'];
  /** The variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** Staff attributed to the initial sale of the line item. */
  staffMember?: Maybe<Shopify_StaffMember>;
  /** The TaxLine object connected to this line item. */
  taxLines: Array<Shopify_TaxLine>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** The title of the product. */
  title: Scalars['String'];
  /**
   * The sum of all AppliedDiscounts on this line item, in shop currency.
   * @deprecated Use `totalDiscountSet` instead
   */
  totalDiscount: Scalars['Money'];
  /** The sum of all AppliedDiscounts on this line item in shop and presentment currencies. */
  totalDiscountSet: Shopify_MoneyBag;
  /**
   * The total discounted value of unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead
   */
  unfulfilledDiscountedTotal: Scalars['Money'];
  /** The total discounted value of unfulfilled units, in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: Shopify_MoneyBag;
  /**
   * The total price without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead
   */
  unfulfilledOriginalTotal: Scalars['Money'];
  /** The total price without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: Shopify_MoneyBag;
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int'];
  /** The Variant object associated with this line item. */
  variant?: Maybe<Shopify_ProductVariant>;
  /** The name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
};


/** Represents a single line item on an order. */
export type Shopify_LineItemMutableImageArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents a single line item on an order. */
export type Shopify_LineItemMutableTaxLinesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple LineItemMutables. */
export type Shopify_LineItemMutableConnection = {
  __typename?: 'Shopify_LineItemMutableConnection';
  /** A list of edges. */
  edges: Array<Shopify_LineItemMutableEdge>;
  /** A list of the nodes contained in LineItemMutableEdge. */
  nodes: Array<Shopify_LineItemMutable>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one LineItemMutable and a cursor during pagination. */
export type Shopify_LineItemMutableEdge = {
  __typename?: 'Shopify_LineItemMutableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LineItemMutableEdge. */
  node: Shopify_LineItemMutable;
};

/** Represents the selling plan for a line item. */
export type Shopify_LineItemSellingPlan = {
  __typename?: 'Shopify_LineItemSellingPlan';
  /** The name of the selling plan for display purposes. */
  name: Scalars['String'];
};

/** A link to direct users to. */
export type Shopify_Link = {
  __typename?: 'Shopify_Link';
  /** A context-sensitive label for the link. */
  label: Scalars['String'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /** The URL that the link visits. */
  url: Scalars['Url'];
};


/** A link to direct users to. */
export type Shopify_LinkTranslationsArgs = {
  locale: Scalars['String'];
};

/** Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers. */
export type Shopify_LocalizationExtension = {
  __typename?: 'Shopify_LocalizationExtension';
  /** Country ISO 3166-1 alpha-2 code. */
  countryCode: Shopify_CountryCode;
  /** The localized extension keys that are allowed. */
  key: Shopify_LocalizationExtensionKey;
  /** The purpose of this localization extension. */
  purpose: Shopify_LocalizationExtensionPurpose;
  /** The localized extension title. */
  title: Scalars['String'];
  /** The value of the field. */
  value: Scalars['String'];
};

/** An auto-generated type for paginating through multiple LocalizationExtensions. */
export type Shopify_LocalizationExtensionConnection = {
  __typename?: 'Shopify_LocalizationExtensionConnection';
  /** A list of edges. */
  edges: Array<Shopify_LocalizationExtensionEdge>;
  /** A list of the nodes contained in LocalizationExtensionEdge. */
  nodes: Array<Shopify_LocalizationExtension>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one LocalizationExtension and a cursor during pagination. */
export type Shopify_LocalizationExtensionEdge = {
  __typename?: 'Shopify_LocalizationExtensionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LocalizationExtensionEdge. */
  node: Shopify_LocalizationExtension;
};

export enum Shopify_LocalizationExtensionKey {
  ShippingCredentialBr = 'SHIPPING_CREDENTIAL_BR',
  ShippingCredentialCn = 'SHIPPING_CREDENTIAL_CN',
  ShippingCredentialKr = 'SHIPPING_CREDENTIAL_KR',
  TaxCredentialBr = 'TAX_CREDENTIAL_BR',
  TaxCredentialIt = 'TAX_CREDENTIAL_IT',
  TaxEmailIt = 'TAX_EMAIL_IT'
}

export enum Shopify_LocalizationExtensionPurpose {
  Shipping = 'SHIPPING',
  Tax = 'TAX'
}

/** Represents the location where the physical good resides. */
export type Shopify_Location = {
  __typename?: 'Shopify_Location';
  /** Whether this location can be reactivated. */
  activatable: Scalars['Boolean'];
  /** The address of this location. */
  address: Shopify_LocationAddress;
  /** Whether the location address has been verified. */
  addressVerified: Scalars['Boolean'];
  /** Whether this location can be deactivated. */
  deactivatable: Scalars['Boolean'];
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was deactivated at. For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Universal Time Coordinated) is represented as `"2019-09-07T15:50:00Z`". */
  deactivatedAt?: Maybe<Scalars['String']>;
  /** Whether this location can be deleted. */
  deletable: Scalars['Boolean'];
  /** Name of the service provider that fulfills from this location. */
  fulfillmentService?: Maybe<Shopify_FulfillmentService>;
  /** Whether this location can fulfill online orders. */
  fulfillsOnlineOrders: Scalars['Boolean'];
  /** Whether this location has active inventory. */
  hasActiveInventory: Scalars['Boolean'];
  /** Whether this location has orders that need to be fulfilled. */
  hasUnfulfilledOrders: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantities of an inventory item at this location. */
  inventoryLevel?: Maybe<Shopify_InventoryLevel>;
  /** A list of the quantities of the inventory items that can be stocked at this location. */
  inventoryLevels: Shopify_InventoryLevelConnection;
  /** Whether the location is active. */
  isActive: Scalars['Boolean'];
  /**
   * Whether the location is your primary location for shipping inventory.
   * @deprecated The concept of a primary location is deprecated, shipsInventory can be used to get a fallback location
   */
  isPrimary: Scalars['Boolean'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** List of metafield definitions. */
  metafieldDefinitions: Shopify_MetafieldDefinitionConnection;
  /** The name of the location. */
  name: Scalars['String'];
  /** Whether this location is used for calculating shipping rates. In multi-origin shipping mode, this flag is ignored. */
  shipsInventory: Scalars['Boolean'];
  /** List of suggested addresses for this location (empty if none). */
  suggestedAddresses: Array<Shopify_LocationSuggestedAddress>;
};


/** Represents the location where the physical good resides. */
export type Shopify_LocationInventoryLevelArgs = {
  inventoryItemId: Scalars['ID'];
};


/** Represents the location where the physical good resides. */
export type Shopify_LocationInventoryLevelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents the location where the physical good resides. */
export type Shopify_LocationMetafieldDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  pinnedStatus?: InputMaybe<Shopify_MetafieldDefinitionPinnedStatus>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MetafieldDefinitionSortKeys>;
};

/** Represents the address of a location. */
export type Shopify_LocationAddress = {
  __typename?: 'Shopify_LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /** The code for the province, state, or district of the address of the location. */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple Locations. */
export type Shopify_LocationConnection = {
  __typename?: 'Shopify_LocationConnection';
  /** A list of edges. */
  edges: Array<Shopify_LocationEdge>;
  /** A list of the nodes contained in LocationEdge. */
  nodes: Array<Shopify_Location>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one Location and a cursor during pagination. */
export type Shopify_LocationEdge = {
  __typename?: 'Shopify_LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LocationEdge. */
  node: Shopify_Location;
};

export enum Shopify_LocationSortKeys {
  Id = 'ID',
  Name = 'NAME',
  Relevance = 'RELEVANCE'
}

/** Represents a suggested address for a location. */
export type Shopify_LocationSuggestedAddress = {
  __typename?: 'Shopify_LocationSuggestedAddress';
  /** The first line of the suggested address. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the suggested address. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the suggested address. */
  city?: Maybe<Scalars['String']>;
  /** The country of the suggested address. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the suggested address. */
  countryCode?: Maybe<Shopify_CountryCode>;
  /** A formatted version of the suggested address. */
  formatted: Array<Scalars['String']>;
  /** The province of the suggested address. */
  province?: Maybe<Scalars['String']>;
  /** The code for the province, state, or district of the suggested address. */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the suggested address. */
  zip?: Maybe<Scalars['String']>;
};

/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type Shopify_MailingAddress = {
  __typename?: 'Shopify_MailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<Shopify_CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};


/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type Shopify_MailingAddressFormattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>;
  withName?: InputMaybe<Scalars['Boolean']>;
};

/**
 * A market is a group of one or more regions that you want to target for international sales.
 * By creating a market, you can configure a distinct, localized shopping experience for
 * customers from a specific area of the world. For example, you can
 * [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate),
 * [configure international pricing](https://shopify.dev/api/examples/product-price-lists),
 * or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).
 */
export type Shopify_Market = {
  __typename?: 'Shopify_Market';
  /** The market’s currency settings. */
  currencySettings: Shopify_MarketCurrencySettings;
  /**
   * Whether the market is enabled to receive visitors and sales. **Note**: Regions in inactive
   * markets cannot be selected on the storefront or in checkout.
   */
  enabled: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the market. Not shown to customers. */
  name: Scalars['String'];
  /**
   * The market’s price list, which specifies a percentage-based price adjustment as well as
   * fixed price overrides for specific variants.
   */
  priceList?: Maybe<Shopify_PriceList>;
  /** Whether the market is the shop’s primary market. */
  primary: Scalars['Boolean'];
  /** The regions that comprise the market. */
  regions: Shopify_MarketRegionConnection;
  /**
   * The market’s web presence, which defines its SEO strategy. This can be a different domain,
   * subdomain, or subfolders of the primary domain. Each web presence comprises one or more
   * language variants. If a market doesn't have its own web presence, then the market is accessible on the
   * shop’s primary domain using [country
   * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
   */
  webPresence?: Maybe<Shopify_MarketWebPresence>;
};


/**
 * A market is a group of one or more regions that you want to target for international sales.
 * By creating a market, you can configure a distinct, localized shopping experience for
 * customers from a specific area of the world. For example, you can
 * [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate),
 * [configure international pricing](https://shopify.dev/api/examples/product-price-lists),
 * or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).
 */
export type Shopify_MarketRegionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** A market's currency settings. */
export type Shopify_MarketCurrencySettings = {
  __typename?: 'Shopify_MarketCurrencySettings';
  /**
   * The currency which this market's prices are defined in, and the
   * currency which its customers must use if local currencies are disabled.
   */
  baseCurrency: Shopify_CurrencySetting;
  /**
   * Whether or not local currencies are enabled. If enabled, then prices will
   * be converted to give each customer the best experience based on their
   * region. If disabled, then all customers in this market will see prices
   * in the market's base currency.
   */
  localCurrencies: Scalars['Boolean'];
};

/** A geographic region which comprises a market. */
export type Shopify_MarketRegion = {
  __typename?: 'Shopify_MarketRegion';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the region. */
  name: Scalars['String'];
};

/** An auto-generated type for paginating through multiple MarketRegions. */
export type Shopify_MarketRegionConnection = {
  __typename?: 'Shopify_MarketRegionConnection';
  /** A list of edges. */
  edges: Array<Shopify_MarketRegionEdge>;
  /** A list of the nodes contained in MarketRegionEdge. */
  nodes: Array<Shopify_MarketRegion>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one MarketRegion and a cursor during pagination. */
export type Shopify_MarketRegionEdge = {
  __typename?: 'Shopify_MarketRegionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MarketRegionEdge. */
  node: Shopify_MarketRegion;
};

/**
 * The market’s web presence, which defines its SEO strategy. This can be a different domain
 * (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary
 * domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language
 * variants. If a market does not have its own web presence, it is accessible on the shop’s
 * primary domain via [country
 * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
 *
 * Note: while the domain/subfolders defined by a market’s web presence are not applicable to
 * custom storefronts, which must manage their own domains and routing, the languages chosen
 * here do govern [the languages available on the Storefront
 * API](https://shopify.dev/api/examples/multiple-languages) for the countries in
 * this market.
 */
export type Shopify_MarketWebPresence = {
  __typename?: 'Shopify_MarketWebPresence';
  /**
   * The ISO codes for the alternate locales. When a domain is used, these locales will be
   * available as language-specific subfolders. For example, if English is an
   * alternate locale, and `example.ca` is the market’s domain, then
   * `example.ca/en` will load in English.
   */
  alternateLocales: Array<Scalars['String']>;
  /**
   * The ISO code for the default locale. When a domain is used, this is the locale that will
   * be used when the domain root is accessed. For example, if French is the default locale,
   * and `example.ca` is the market’s domian, then `example.ca` will load in French.
   */
  defaultLocale: Scalars['String'];
  /**
   * The web presence’s domain.
   * This field will be null if `subfolderSuffix` isn't null.
   */
  domain?: Maybe<Shopify_Domain>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The associated market. */
  market: Shopify_Market;
  /** The list of root URLs for each of the web presence’s locales. */
  rootUrls: Array<Shopify_MarketWebPresenceRootUrl>;
  /** The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null. */
  subfolderSuffix?: Maybe<Scalars['String']>;
};

/**
 * The URL for the homepage of the online store in the context of a particular market and a
 * particular locale.
 */
export type Shopify_MarketWebPresenceRootUrl = {
  __typename?: 'Shopify_MarketWebPresenceRootUrl';
  /** The locale that the storefront loads in. */
  locale: Scalars['String'];
  /** The URL. */
  url: Scalars['Url'];
};

export enum Shopify_MarketingChannel {
  Display = 'DISPLAY',
  Email = 'EMAIL',
  Referral = 'REFERRAL',
  Search = 'SEARCH',
  Social = 'SOCIAL'
}

/** Represents actions that market a merchant's store or products. */
export type Shopify_MarketingEvent = {
  __typename?: 'Shopify_MarketingEvent';
  /** The app that the marketing event is attributed to. */
  app: Shopify_App;
  /** The marketing channel used by the marketing event. */
  channel?: Maybe<Shopify_MarketingChannel>;
  /** A human-readable description of the marketing event. */
  description?: Maybe<Scalars['String']>;
  /** The date and time when the marketing event ended. */
  endedAt?: Maybe<Scalars['DateTime']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The URL where the marketing event can be managed. */
  manageUrl?: Maybe<Scalars['Url']>;
  /** The URL where the marketing event can be previewed. */
  previewUrl?: Maybe<Scalars['Url']>;
  /** An optional ID that helps Shopify validate engagement data. */
  remoteId?: Maybe<Scalars['String']>;
  /** The date and time when the marketing event is scheduled to end. */
  scheduledToEndAt?: Maybe<Scalars['DateTime']>;
  /**
   * Where the `MarketingEvent` occurred and what kind of content was used.
   * Because `utmSource` and `utmMedium` are often used interchangeably, this is
   * based on a combination of `marketingChannel`, `referringDomain`, and `type` to
   * provide a consistent representation for any given piece of marketing
   * regardless of the app that created it.
   */
  sourceAndMedium: Scalars['String'];
  /** The date and time when the marketing event started. */
  startedAt: Scalars['DateTime'];
  /**
   * The display text for the marketing event type.
   * @deprecated Use `sourceAndMedium` instead
   */
  targetTypeDisplayText: Scalars['String'];
  /** The marketing event type. */
  type: Shopify_MarketingTactic;
  /** The name of the marketing campaign. */
  utmCampaign?: Maybe<Scalars['String']>;
  /** The medium that the marketing campaign is using. Example values: `cpc`, `banner`. */
  utmMedium?: Maybe<Scalars['String']>;
  /** The referrer of the marketing event. Example values: `google`, `newsletter`. */
  utmSource?: Maybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple MarketingEvents. */
export type Shopify_MarketingEventConnection = {
  __typename?: 'Shopify_MarketingEventConnection';
  /** A list of edges. */
  edges: Array<Shopify_MarketingEventEdge>;
  /** A list of the nodes contained in MarketingEventEdge. */
  nodes: Array<Shopify_MarketingEvent>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one MarketingEvent and a cursor during pagination. */
export type Shopify_MarketingEventEdge = {
  __typename?: 'Shopify_MarketingEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MarketingEventEdge. */
  node: Shopify_MarketingEvent;
};

export enum Shopify_MarketingEventSortKeys {
  Id = 'ID',
  Relevance = 'RELEVANCE',
  StartedAt = 'STARTED_AT'
}

export enum Shopify_MarketingTactic {
  AbandonedCart = 'ABANDONED_CART',
  Ad = 'AD',
  Affiliate = 'AFFILIATE',
  Direct = 'DIRECT',
  Display = 'DISPLAY',
  FollowUp = 'FOLLOW_UP',
  Link = 'LINK',
  Loyalty = 'LOYALTY',
  Message = 'MESSAGE',
  Newsletter = 'NEWSLETTER',
  Notification = 'NOTIFICATION',
  Post = 'POST',
  Receipt = 'RECEIPT',
  Retargeting = 'RETARGETING',
  Search = 'SEARCH',
  Seo = 'SEO',
  StorefrontApp = 'STOREFRONT_APP',
  Transactional = 'TRANSACTIONAL'
}

/** Represents a media interface. */
export type Shopify_Media = {
  __typename?: 'Shopify_Media';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: Shopify_MediaContentType;
  /** Any errors which have occurred on the media. */
  mediaErrors: Array<Shopify_MediaError>;
  /** The warnings attached to the media. */
  mediaWarnings: Array<Shopify_MediaWarning>;
  /** The preview image for the media. */
  preview?: Maybe<Shopify_MediaPreviewImage>;
  /** Current status of the media. */
  status: Shopify_MediaStatus;
};

/** An auto-generated type for paginating through multiple Media. */
export type Shopify_MediaConnection = {
  __typename?: 'Shopify_MediaConnection';
  /** A list of edges. */
  edges: Array<Shopify_MediaEdge>;
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<Shopify_Media>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

export enum Shopify_MediaContentType {
  ExternalVideo = 'EXTERNAL_VIDEO',
  Image = 'IMAGE',
  Model_3D = 'MODEL_3D',
  Video = 'VIDEO'
}

/** An auto-generated type which holds one Media and a cursor during pagination. */
export type Shopify_MediaEdge = {
  __typename?: 'Shopify_MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MediaEdge. */
  node: Shopify_Media;
};

/** Represents a media error. */
export type Shopify_MediaError = {
  __typename?: 'Shopify_MediaError';
  /** Code representing the type of error. */
  code: Shopify_MediaErrorCode;
  /** Additional details regarding the error. */
  details?: Maybe<Scalars['String']>;
  /** Translated error message. */
  message: Scalars['String'];
};

export enum Shopify_MediaErrorCode {
  ExternalVideoEmbedDisabled = 'EXTERNAL_VIDEO_EMBED_DISABLED',
  ExternalVideoEmbedNotFoundOrTranscoding = 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING',
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  FileStorageLimitExceeded = 'FILE_STORAGE_LIMIT_EXCEEDED',
  GenericFileDownloadFailure = 'GENERIC_FILE_DOWNLOAD_FAILURE',
  GenericFileInvalidSize = 'GENERIC_FILE_INVALID_SIZE',
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  InvalidImageAspectRatio = 'INVALID_IMAGE_ASPECT_RATIO',
  InvalidImageFileSize = 'INVALID_IMAGE_FILE_SIZE',
  InvalidImageResolution = 'INVALID_IMAGE_RESOLUTION',
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  Model3DGlbOutputCreationError = 'MODEL3D_GLB_OUTPUT_CREATION_ERROR',
  Model3DGlbToUsdzConversionError = 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR',
  Model3DProcessingFailure = 'MODEL3D_PROCESSING_FAILURE',
  Model3DThumbnailGenerationError = 'MODEL3D_THUMBNAIL_GENERATION_ERROR',
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  Unknown = 'UNKNOWN',
  UnsupportedImageFileType = 'UNSUPPORTED_IMAGE_FILE_TYPE',
  VideoInvalidFiletypeError = 'VIDEO_INVALID_FILETYPE_ERROR',
  VideoMaxDurationError = 'VIDEO_MAX_DURATION_ERROR',
  VideoMaxHeightError = 'VIDEO_MAX_HEIGHT_ERROR',
  VideoMaxWidthError = 'VIDEO_MAX_WIDTH_ERROR',
  VideoMetadataReadError = 'VIDEO_METADATA_READ_ERROR',
  VideoMinDurationError = 'VIDEO_MIN_DURATION_ERROR',
  VideoMinHeightError = 'VIDEO_MIN_HEIGHT_ERROR',
  VideoMinWidthError = 'VIDEO_MIN_WIDTH_ERROR',
  VideoValidationError = 'VIDEO_VALIDATION_ERROR'
}

/** An image hosted on Shopify. */
export type Shopify_MediaImage = {
  __typename?: 'Shopify_MediaImage';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Any errors that have occurred on the file. */
  fileErrors: Array<Shopify_FileError>;
  /** The status of the file. */
  fileStatus: Shopify_FileStatus;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image for the media. Returns `null` until `status` is `READY`. */
  image?: Maybe<Shopify_Image>;
  /** The media content type. */
  mediaContentType: Shopify_MediaContentType;
  /** Any errors which have occurred on the media. */
  mediaErrors: Array<Shopify_MediaError>;
  /** The warnings attached to the media. */
  mediaWarnings: Array<Shopify_MediaWarning>;
  /** The MIME type of the image. */
  mimeType?: Maybe<Scalars['String']>;
  /** The original source of the image. */
  originalSource?: Maybe<Shopify_MediaImageOriginalSource>;
  /** The preview image for the media. */
  preview?: Maybe<Shopify_MediaPreviewImage>;
  /** Current status of the media. */
  status: Shopify_MediaStatus;
};

/** Represents the original source for an Image. */
export type Shopify_MediaImageOriginalSource = {
  __typename?: 'Shopify_MediaImageOriginalSource';
  /** The size of the original file in bytes. */
  fileSize?: Maybe<Scalars['Int']>;
};

/** Represents the preview image for a media. */
export type Shopify_MediaPreviewImage = {
  __typename?: 'Shopify_MediaPreviewImage';
  /** The preview image for the media. Returns `null` until `status` is `READY`. */
  image?: Maybe<Shopify_Image>;
  /** Current status of the preview image. */
  status: Shopify_MediaPreviewImageStatus;
};

export enum Shopify_MediaPreviewImageStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

export enum Shopify_MediaStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

/** Represents a media warning. */
export type Shopify_MediaWarning = {
  __typename?: 'Shopify_MediaWarning';
  /** The code representing the type of warning. */
  code: Shopify_MediaWarningCode;
  /** Translated warning message. */
  message?: Maybe<Scalars['String']>;
};

export enum Shopify_MediaWarningCode {
  ModelLargePhysicalSize = 'MODEL_LARGE_PHYSICAL_SIZE',
  ModelSmallPhysicalSize = 'MODEL_SMALL_PHYSICAL_SIZE'
}

/** Merchant approval for accelerated onboarding to channel integration apps. */
export type Shopify_MerchantApprovalSignals = {
  __typename?: 'Shopify_MerchantApprovalSignals';
  /** Whether the shop's Shopify Payments account identity is verified. Returns `false` if the identity is unverified or if the shop doesn't have a Shopify Payments account. */
  identityVerified: Scalars['Boolean'];
  /** Whether Shopify has pre-verified the merchant's business for onboarding to channel integration apps. Returns `false` if the shop is not marked for verification. */
  verifiedByShopify: Scalars['Boolean'];
};

/**
 * Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection).
 * For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin/graphql/reference/common-objects/HasMetafields).
 * Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers.
 * Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.
 */
export type Shopify_Metafield = {
  __typename?: 'Shopify_Metafield';
  /** The date and time when the metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The optional, associated metafield definition that maps to this metafield's namespace and key pair. */
  definition?: Maybe<Shopify_MetafieldDefinition>;
  /** The description of the metafield. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The unique identifier for the metafield in its namespace. */
  key: Scalars['String'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /**
   * A container for a group of metafields.
   * Grouping metafields within a namespace prevents your metafields from conflicting with other metafields that have the same key name.
   */
  namespace: Scalars['String'];
  /** The resource that the metafield is attached to. */
  owner: Shopify_HasMetafields;
  /** The resource that the metafield is attached to. */
  ownerType: Shopify_MetafieldOwnerType;
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<Shopify_MetafieldReference>;
  /**
   * The type of data that the metafield stores in the `value` field.
   * See the list of [supported types](https://shopify.dev/apps/metafields/types).
   */
  type: Scalars['String'];
  /** The date and time when the metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The data to store in the metafield. The data is always stored as a string, regardless of the metafield's type. */
  value: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Metafields. */
export type Shopify_MetafieldConnection = {
  __typename?: 'Shopify_MetafieldConnection';
  /** A list of edges. */
  edges: Array<Shopify_MetafieldEdge>;
  /** A list of the nodes contained in MetafieldEdge. */
  nodes: Array<Shopify_Metafield>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/**
 * Metafield definitions enable you to define additional validation constraints for metafields, and enable the
 * merchant to edit metafield values in context.
 */
export type Shopify_MetafieldDefinition = {
  __typename?: 'Shopify_MetafieldDefinition';
  /** The description of a metafield definition. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key name used to identify a metafield definition within a namespace. */
  key: Scalars['String'];
  /** The list of metafields associated with a metafield definition. */
  metafields: Shopify_MetafieldConnection;
  /** The count of metafields under a metafield definition. */
  metafieldsCount: Scalars['Int'];
  /** The human-readable name for the metafield definition. */
  name: Scalars['String'];
  /** The namespace of the metafield definition. You can use a namespace to group related metafields. */
  namespace: Scalars['String'];
  /** The resource type that the metafield definition is attached to. For example, `Product` or `Collection`. */
  ownerType: Shopify_MetafieldOwnerType;
  /** The position of the metafield definition in the pinned list. */
  pinnedPosition?: Maybe<Scalars['Int']>;
  /** The standard metafield definition template associated with a metafield definition. */
  standardTemplate?: Maybe<Shopify_StandardMetafieldDefinitionTemplate>;
  /** The type of data that the metafield will store. */
  type: Shopify_MetafieldDefinitionType;
  /** The validation status for the existing metafields within a metafield definition. */
  validationStatus: Shopify_MetafieldDefinitionValidationStatus;
  /**
   * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
   * the metafield. For example, for a metafield with the type `date`, you can set a minimum date validation, so
   * that the metafield will only store dates after the specific minimum date.
   */
  validations: Array<Shopify_MetafieldDefinitionValidation>;
  /** Whether metafields for the metafield definition are visible using the Storefront API. */
  visibleToStorefrontApi: Scalars['Boolean'];
};


/**
 * Metafield definitions enable you to define additional validation constraints for metafields, and enable the
 * merchant to edit metafield values in context.
 */
export type Shopify_MetafieldDefinitionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  validationStatus?: InputMaybe<Shopify_MetafieldValidationStatus>;
};


/**
 * Metafield definitions enable you to define additional validation constraints for metafields, and enable the
 * merchant to edit metafield values in context.
 */
export type Shopify_MetafieldDefinitionMetafieldsCountArgs = {
  validationStatus?: InputMaybe<Shopify_MetafieldValidationStatus>;
};

/** An auto-generated type for paginating through multiple MetafieldDefinitions. */
export type Shopify_MetafieldDefinitionConnection = {
  __typename?: 'Shopify_MetafieldDefinitionConnection';
  /** A list of edges. */
  edges: Array<Shopify_MetafieldDefinitionEdge>;
  /** A list of the nodes contained in MetafieldDefinitionEdge. */
  nodes: Array<Shopify_MetafieldDefinition>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one MetafieldDefinition and a cursor during pagination. */
export type Shopify_MetafieldDefinitionEdge = {
  __typename?: 'Shopify_MetafieldDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldDefinitionEdge. */
  node: Shopify_MetafieldDefinition;
};

export enum Shopify_MetafieldDefinitionPinnedStatus {
  Any = 'ANY',
  Pinned = 'PINNED',
  Unpinned = 'UNPINNED'
}

export enum Shopify_MetafieldDefinitionSortKeys {
  Id = 'ID',
  Name = 'NAME',
  PinnedPosition = 'PINNED_POSITION',
  Relevance = 'RELEVANCE'
}

/**
 * The type and name for the optional validation configuration of a metafield.
 *
 * For example, a supported validation might consist of a `max` name and a `number_integer` type.
 * This validation can then be used to enforce a maximum character length for a `single_line_text_field` metafield.
 */
export type Shopify_MetafieldDefinitionSupportedValidation = {
  __typename?: 'Shopify_MetafieldDefinitionSupportedValidation';
  /** The name of the metafield definition validation. */
  name: Scalars['String'];
  /** The type of input for the validation. */
  type: Scalars['String'];
};

/** A metafield definition type provides basic foundation and validation for a metafield. */
export type Shopify_MetafieldDefinitionType = {
  __typename?: 'Shopify_MetafieldDefinitionType';
  /** The category associated with the metafield definition type. */
  category: Scalars['String'];
  /**
   * The name of the type for the metafield definition.
   * See the list of [supported types](https://shopify.dev/apps/metafields/types).
   */
  name: Scalars['String'];
  /** The supported validations for a metafield definition type. */
  supportedValidations: Array<Shopify_MetafieldDefinitionSupportedValidation>;
  /** Whether metafields without a definition can be migrated to a definition of this type. */
  supportsDefinitionMigrations: Scalars['Boolean'];
  /**
   * The value type for a metafield created with this definition type.
   * @deprecated `valueType` is deprecated and `name` should be used for type information.
   */
  valueType: Shopify_MetafieldValueType;
};

/**
 * A configured metafield definition validation.
 *
 * For example, for a metafield definition of `number_integer` type, you can set a validation with the name `max`
 * and a value of `15`. This validation will ensure that the value of the metafield is a number less than or equal to 15.
 *
 * Refer to the [list of supported validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).
 */
export type Shopify_MetafieldDefinitionValidation = {
  __typename?: 'Shopify_MetafieldDefinitionValidation';
  /** The validation name. */
  name: Scalars['String'];
  /** The name for the metafield type of this validation. */
  type: Scalars['String'];
  /** The validation value. */
  value?: Maybe<Scalars['String']>;
};

export enum Shopify_MetafieldDefinitionValidationStatus {
  AllValid = 'ALL_VALID',
  InProgress = 'IN_PROGRESS',
  SomeInvalid = 'SOME_INVALID'
}

/** An auto-generated type which holds one Metafield and a cursor during pagination. */
export type Shopify_MetafieldEdge = {
  __typename?: 'Shopify_MetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldEdge. */
  node: Shopify_Metafield;
};

/**
 * The input fields to use to create or update a metafield through a mutation on the owning resource.
 * An alternative way to create or update a metafield is by using the
 * [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsSet) mutation.
 */
export type Shopify_MetafieldInput = {
  /** The description of the metafield. */
  description?: InputMaybe<Scalars['String']>;
  /**
   * The unique ID of the metafield. You don't include an ID when you create a metafield because the metafield ID
   * is created automatically. The ID is required when you update a metafield.
   */
  id?: InputMaybe<Scalars['ID']>;
  /** The key name of the metafield. Required when creating but optional when updating. */
  key?: InputMaybe<Scalars['String']>;
  /**
   * The namespace for a metafield. The namespace is required when you create a metafield and is optional when you
   * update a metafield.
   */
  namespace?: InputMaybe<Scalars['String']>;
  /**
   * The metafield's [type](https://shopify.dev/apps/metafields/types). The metafield type is required
   * when you create a metafield and is optional when you update a metafield.
   */
  type?: InputMaybe<Scalars['String']>;
  /** The value of a metafield. */
  value?: InputMaybe<Scalars['String']>;
};

export enum Shopify_MetafieldOwnerType {
  ApiPermission = 'API_PERMISSION',
  Article = 'ARTICLE',
  Blog = 'BLOG',
  Collection = 'COLLECTION',
  Customer = 'CUSTOMER',
  Draftorder = 'DRAFTORDER',
  Order = 'ORDER',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Productimage = 'PRODUCTIMAGE',
  Productvariant = 'PRODUCTVARIANT',
  Shop = 'SHOP'
}

/** The resource referenced by the metafield value. */
export type Shopify_MetafieldReference = Shopify_GenericFile | Shopify_MediaImage | Shopify_OnlineStorePage | Shopify_Product | Shopify_ProductVariant | Shopify_Video;

export enum Shopify_MetafieldValidationStatus {
  Any = 'ANY',
  Invalid = 'INVALID',
  Valid = 'VALID'
}

export enum Shopify_MetafieldValueType {
  Boolean = 'BOOLEAN',
  Integer = 'INTEGER',
  JsonString = 'JSON_STRING',
  String = 'STRING'
}

export enum Shopify_MethodDefinitionSortKeys {
  Id = 'ID',
  RateProviderType = 'RATE_PROVIDER_TYPE',
  Relevance = 'RELEVANCE'
}

/**
 * A collection of monetary values in their respective currencies. Typically used in the context of multi-currency pricing and transactions,
 * when an amount in the shop's currency is converted to the customer's currency of choice (the presentment currency).
 */
export type Shopify_MoneyBag = {
  __typename?: 'Shopify_MoneyBag';
  /** Amount in presentment currency. */
  presentmentMoney: Shopify_MoneyV2;
  /** Amount in shop currency. */
  shopMoney: Shopify_MoneyV2;
};

/** A monetary value with currency. */
export type Shopify_MoneyV2 = {
  __typename?: 'Shopify_MoneyV2';
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: Shopify_CurrencyCode;
};

/** A navigation item, holding basic link attributes. */
export type Shopify_NavigationItem = {
  __typename?: 'Shopify_NavigationItem';
  /** The unique identifier of the navigation item. */
  id: Scalars['String'];
  /** The name of the navigation item. */
  title: Scalars['String'];
  /** The URL of the page that the navigation item links to. */
  url: Scalars['Url'];
};

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 */
export type Shopify_Node = {
  __typename?: 'Shopify_Node';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/** A custom page on the Online Store. */
export type Shopify_OnlineStorePage = {
  __typename?: 'Shopify_OnlineStorePage';
  /** A default cursor that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
};


/** A custom page on the Online Store. */
export type Shopify_OnlineStorePageTranslationsArgs = {
  locale: Scalars['String'];
};

/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_Order = {
  __typename?: 'Shopify_Order';
  /** A list of sales agreements associated with the order. */
  agreements: Shopify_SalesAgreementConnection;
  /** A list of messages that appear on the order page in the Shopify admin. */
  alerts: Array<Shopify_ResourceAlert>;
  /** The application that created the order. */
  app?: Maybe<Shopify_OrderApp>;
  /** The billing address of the customer. */
  billingAddress?: Maybe<Shopify_MailingAddress>;
  /** Whether the billing address matches the shipping address. */
  billingAddressMatchesShippingAddress: Scalars['Boolean'];
  /** Whether the order can be manually marked as paid. */
  canMarkAsPaid: Scalars['Boolean'];
  /** Whether a customer email exists for the order. */
  canNotifyCustomer: Scalars['Boolean'];
  /**
   * The reason provided when the order was canceled.
   * Returns `null` if the order wasn't canceled.
   */
  cancelReason?: Maybe<Shopify_OrderCancelReason>;
  /**
   * The date and time when the order was canceled.
   * Returns `null` if the order wasn't canceled.
   */
  cancelledAt?: Maybe<Scalars['DateTime']>;
  /** Whether payment for the order can be captured. */
  capturable: Scalars['Boolean'];
  /**
   * The total order-level discount amount, before returns, in shop currency.
   * @deprecated Use `cartDiscountAmountSet` instead
   */
  cartDiscountAmount?: Maybe<Scalars['Money']>;
  /** The total order-level discount amount, before returns, in shop and presentment currencies. */
  cartDiscountAmountSet?: Maybe<Shopify_MoneyBag>;
  /**
   * The channel that created the order.
   * @deprecated Use `publication` instead
   */
  channel?: Maybe<Shopify_Channel>;
  /** Details about the channel that created the order. */
  channelInformation?: Maybe<Shopify_ChannelInformation>;
  /** The IP address of the API client that created the order. */
  clientIp?: Maybe<Scalars['String']>;
  /** Whether the order is closed. */
  closed: Scalars['Boolean'];
  /**
   * The date and time when the order was closed.
   * Returns `null` if the order is not closed.
   */
  closedAt?: Maybe<Scalars['DateTime']>;
  /** Whether inventory has been reserved for the order. */
  confirmed: Scalars['Boolean'];
  /** Date and time when the order was created in Shopify. */
  createdAt: Scalars['DateTime'];
  /** The shop currency when the order was placed. */
  currencyCode: Shopify_CurrencyCode;
  /** The current order-level discount amount after all order updates, in shop and presentment currencies. */
  currentCartDiscountAmountSet: Shopify_MoneyBag;
  /** The sum of the quantities for all line items that contribute to the order's current subtotal price. */
  currentSubtotalLineItemsQuantity: Scalars['Int'];
  /**
   * The sum of the prices for all line items after discounts and returns, in shop and presentment currencies.
   * If `taxesIncluded` is `true`, then the subtotal also includes tax.
   */
  currentSubtotalPriceSet: Shopify_MoneyBag;
  /**
   * A list of all tax lines applied to line items on the order, after returns.
   * Tax line prices represent the total price for all tax lines with the same `rate` and `title`.
   */
  currentTaxLines: Array<Shopify_TaxLine>;
  /**
   * The total amount discounted on the order after returns, in shop and presentment currencies.
   * This includes both order and line level discounts.
   */
  currentTotalDiscountsSet: Shopify_MoneyBag;
  /**
   * The total amount of duties after returns, in shop and presentment currencies.
   * Returns `null` if duties aren't applicable.
   */
  currentTotalDutiesSet?: Maybe<Shopify_MoneyBag>;
  /**
   * The total price of the order, after returns, in shop and presentment currencies.
   * This includes taxes and discounts.
   */
  currentTotalPriceSet: Shopify_MoneyBag;
  /** The sum of the prices of all tax lines applied to line items on the order, after returns, in shop and presentment currencies. */
  currentTotalTaxSet: Shopify_MoneyBag;
  /** The total weight of the order after returns, in grams. */
  currentTotalWeight: Scalars['UnsignedInt64'];
  /** A list of the custom attributes added to the order. */
  customAttributes: Array<Shopify_Attribute>;
  /** The customer that placed the order. */
  customer?: Maybe<Shopify_Customer>;
  /** Whether the customer agreed to receive marketing materials. */
  customerAcceptsMarketing: Scalars['Boolean'];
  /**
   * The customer's visits and interactions with the online store before placing the order.
   * @deprecated Use `customerJourneySummary` instead
   */
  customerJourney?: Maybe<Shopify_CustomerJourney>;
  /** The customer's visits and interactions with the online store before placing the order. */
  customerJourneySummary?: Maybe<Shopify_CustomerJourneySummary>;
  /** A two-letter or three-letter language code, optionally followed by a region modifier. */
  customerLocale?: Maybe<Scalars['String']>;
  /** A list of discounts that are applied to the order. */
  discountApplications: Shopify_DiscountApplicationConnection;
  /** The discount code used for the order. */
  discountCode?: Maybe<Scalars['String']>;
  /**
   * The primary address of the customer.
   * Returns `null` if neither the shipping address nor the billing address was provided.
   */
  displayAddress?: Maybe<Shopify_MailingAddress>;
  /**
   * The financial status of the order that can be shown to the merchant.
   * This field does not capture all the details of an order's financial state. It should only be used for display summary purposes.
   */
  displayFinancialStatus?: Maybe<Shopify_OrderDisplayFinancialStatus>;
  /**
   * The fulfillment status for the order that can be shown to the merchant.
   * This field does not capture all the details of an order's fulfillment state. It should only be used for display summary purposes.
   * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
   */
  displayFulfillmentStatus: Shopify_OrderDisplayFulfillmentStatus;
  /** A list of the disputes associated with the order. */
  disputes: Array<Shopify_OrderDisputeSummary>;
  /**
   * A list of draft fulfillments that can be created for the order, which includes line items that can be partially fulfilled.
   * @deprecated Use `fulfillmentOrders` instead
   */
  draftFulfillments: Array<Shopify_DraftFulfillment>;
  /** Whether the order has had any edits applied. */
  edited: Scalars['Boolean'];
  /** The email address associated with the customer. */
  email?: Maybe<Scalars['String']>;
  /**
   * Whether taxes on the order are estimated.
   * This field returns `false` when taxes on the order are finalized and aren't subject to any changes.
   */
  estimatedTaxes: Scalars['Boolean'];
  /** A list of events associated with the order. */
  events: Shopify_EventConnection;
  /**
   * Whether there are line items that can be fulfilled.
   * This field returns `false` when the order has no fulfillable line items.
   * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
   */
  fulfillable: Scalars['Boolean'];
  /** A list of fulfillment orders for the order. */
  fulfillmentOrders: Shopify_FulfillmentOrderConnection;
  /** List of shipments for the order. */
  fulfillments: Array<Shopify_Fulfillment>;
  /** Whether the order has been paid in full. */
  fullyPaid: Scalars['Boolean'];
  /** Whether the merchant added a timeline comment to the order. */
  hasTimelineComment: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * The URL of the first page of the online store that the customer visited before they submitted the order.
   * @deprecated Use `customerJourneySummary.lastVisit.landingPageHtml` instead
   */
  landingPageDisplayText?: Maybe<Scalars['String']>;
  /**
   * The first page of the online store that the customer visited before they submitted the order.
   * @deprecated Use `customerJourneySummary.lastVisit.landingPage` instead
   */
  landingPageUrl?: Maybe<Scalars['Url']>;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** A list of the order's line items. */
  lineItems: Shopify_LineItemConnection;
  /**
   * A list of the order's line items.
   * @deprecated Use `lineItems` instead
   */
  lineItemsMutable: Shopify_LineItemMutableConnection;
  /** List of localization extensions for the resource. */
  localizationExtensions: Shopify_LocalizationExtensionConnection;
  /**
   * The fulfillment location that was assigned when the order was created.
   * Use the [`FulfillmentOrder`](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder) object for up-to-date fulfillment location information.
   * @deprecated Use `physicalLocation` instead
   */
  location?: Maybe<Scalars['String']>;
  /** Whether the order can be edited by the merchant. For example, canceled orders can’t be edited. */
  merchantEditable: Scalars['Boolean'];
  /** A list of reasons why the order can't be edited. For example, "Canceled orders can’t be edited". */
  merchantEditableErrors: Array<Scalars['String']>;
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafield definitions. */
  metafieldDefinitions: Shopify_MetafieldDefinitionConnection;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /**
   * The unique identifier for the order that appears on the order page in the Shopify admin and the order status page.
   * For example, "#1001", "EN1001", or "1001-A".
   * This value isn't unique across multiple stores.
   */
  name: Scalars['String'];
  /**
   * The net payment for the order, based on the total amount received minus the total amount refunded, in shop currency.
   * @deprecated Use `netPaymentSet` instead
   */
  netPayment: Scalars['Money'];
  /** The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies. */
  netPaymentSet: Shopify_MoneyBag;
  /**
   * A list of line items that can't be fulfilled.
   * For example, tips and fully refunded line items can't be fulfilled.
   * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
   */
  nonFulfillableLineItems: Shopify_LineItemConnection;
  /** The contents of the note associated with the order. */
  note?: Maybe<Scalars['String']>;
  /**
   * The total amount of duties before returns, in shop and presentment currencies.
   * Returns `null` if duties aren't applicable.
   */
  originalTotalDutiesSet?: Maybe<Shopify_MoneyBag>;
  /** The total price of the order at the time of order creation, in shop and presentment currencies. */
  originalTotalPriceSet: Shopify_MoneyBag;
  /** The payment collection details for the order. */
  paymentCollectionDetails: Shopify_OrderPaymentCollectionDetails;
  /**
   * A list of the names of all payment gateways used for the order.
   * For example, "Shopify Payments" and "Cash on Delivery (COD)".
   */
  paymentGatewayNames: Array<Scalars['String']>;
  /** The payment terms associated with the order. */
  paymentTerms?: Maybe<Shopify_PaymentTerms>;
  /** The phone number associated with the customer. */
  phone?: Maybe<Scalars['String']>;
  /**
   * The fulfillment location that was assigned when the order was created.
   * Use the [`FulfillmentOrder`](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder) object for up to date fulfillment location information.
   */
  physicalLocation?: Maybe<Shopify_Location>;
  /** The payment `CurrencyCode` of the customer for the order. */
  presentmentCurrencyCode: Shopify_CurrencyCode;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /**
   * The date and time when the order was processed.
   * This date and time might not match the date and time when the order was created.
   */
  processedAt: Scalars['DateTime'];
  /** The publication that the order was created from. */
  publication?: Maybe<Shopify_Publication>;
  /**
   * The marketing referral code from the link that the customer clicked to visit the store.
   * Supports the following URL attributes: "ref", "source", or "r".
   * For example, if the URL is `{shop}.myshopify.com/products/slide?ref=j2tj1tn2`, then this value is `j2tj1tn2`.
   * @deprecated Use `customerJourneySummary.lastVisit.referralCode` instead
   */
  referralCode?: Maybe<Scalars['String']>;
  /**
   * A web domain or short description of the source that sent the customer to your online store. For example, "shopify.com" or "email".
   * @deprecated Use `customerJourneySummary.lastVisit.referralInfoHtml` instead
   */
  referrerDisplayText?: Maybe<Scalars['String']>;
  /**
   * The URL of the webpage where the customer clicked a link that sent them to your online store.
   * @deprecated Use `customerJourneySummary.lastVisit.referrerUrl` instead
   */
  referrerUrl?: Maybe<Scalars['Url']>;
  /** The difference between the suggested and actual refund amount of all refunds that have been applied to the order. A positive value indicates a difference in the merchant's favor, and a negative value indicates a difference in the customer's favor. */
  refundDiscrepancySet: Shopify_MoneyBag;
  /** Whether the order can be refunded. */
  refundable: Scalars['Boolean'];
  /** A list of refunds that have been applied to the order. */
  refunds: Array<Shopify_Refund>;
  /** The URL of the source that the order originated from, if found in the domain registry. */
  registeredSourceUrl?: Maybe<Scalars['Url']>;
  /** Whether the order has shipping lines or at least one line item on the order that requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** Whether any line item on the order can be restocked. */
  restockable: Scalars['Boolean'];
  /** The fraud risk level of the order. */
  riskLevel: Shopify_OrderRiskLevel;
  /** A list of risks associated with the order. */
  risks: Array<Shopify_OrderRisk>;
  /** The mailing address of the customer. */
  shippingAddress?: Maybe<Shopify_MailingAddress>;
  /** A summary of all shipping costs on the order. */
  shippingLine?: Maybe<Shopify_ShippingLine>;
  /** A list of the order's shipping lines. */
  shippingLines: Shopify_ShippingLineConnection;
  /**
   * A unique POS or third party order identifier.
   * For example, "1234-12-1000" or "111-98567-54". The `receipt_number` field is derived from this value for POS orders.
   */
  sourceIdentifier?: Maybe<Scalars['String']>;
  /** The sum of the quantities for all line items that contribute to the order's subtotal price. */
  subtotalLineItemsQuantity: Scalars['Int'];
  /**
   * The sum of the prices for all line items after discounts and before returns, in shop currency.
   * If `taxesIncluded` is `true`, then the subtotal also includes tax.
   * @deprecated Use `subtotalPriceSet` instead
   */
  subtotalPrice?: Maybe<Scalars['Money']>;
  /**
   * The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies.
   * If `taxesIncluded` is `true`, then the subtotal also includes tax.
   */
  subtotalPriceSet?: Maybe<Shopify_MoneyBag>;
  /** A suggested refund for the order. */
  suggestedRefund?: Maybe<Shopify_SuggestedRefund>;
  /**
   * A comma separated list of tags associated with the order. Updating `tags` overwrites
   * any existing tags that were previously added to the order. To add new tags without overwriting
   * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
   * mutation.
   */
  tags: Array<Scalars['String']>;
  /**
   * A list of all tax lines applied to line items on the order, before returns.
   * Tax line prices represent the total price for all tax lines with the same `rate` and `title`.
   */
  taxLines: Array<Shopify_TaxLine>;
  /** Whether taxes are included in the subtotal price of the order. */
  taxesIncluded: Scalars['Boolean'];
  /**
   * Whether the order is a test.
   * Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled.
   * A test order cannot be converted into a real order and vice versa.
   */
  test: Scalars['Boolean'];
  /**
   * The authorized amount that is uncaptured or undercaptured, in shop currency.
   * This amount isn't adjusted for returns.
   * @deprecated Use `totalCapturableSet` instead
   */
  totalCapturable: Scalars['Money'];
  /**
   * The authorized amount that is uncaptured or undercaptured, in shop and presentment currencies.
   * This amount isn't adjusted for returns.
   */
  totalCapturableSet: Shopify_MoneyBag;
  /**
   * The total amount discounted on the order before returns, in shop currency.
   * This includes both order and line level discounts.
   * @deprecated Use `totalDiscountsSet` instead
   */
  totalDiscounts?: Maybe<Scalars['Money']>;
  /**
   * The total amount discounted on the order before returns, in shop and presentment currencies.
   * This includes both order and line level discounts.
   */
  totalDiscountsSet?: Maybe<Shopify_MoneyBag>;
  /**
   * The total amount not yet transacted for the order, in shop and presentment currencies.
   * A positive value indicates a difference in the merchant's favor (payment from customer to merchant) and a negative value indicates a difference in the customer's favor (refund from merchant to customer).
   */
  totalOutstandingSet: Shopify_MoneyBag;
  /**
   * The total price of the order, before returns, in shop currency.
   * This includes taxes and discounts.
   * @deprecated Use `totalPriceSet` instead
   */
  totalPrice: Scalars['Money'];
  /**
   * The total price of the order, before returns, in shop and presentment currencies.
   * This includes taxes and discounts.
   */
  totalPriceSet: Shopify_MoneyBag;
  /**
   * The total amount received from the customer before returns, in shop currency.
   * @deprecated Use `totalReceivedSet` instead
   */
  totalReceived: Scalars['Money'];
  /** The total amount received from the customer before returns, in shop and presentment currencies. */
  totalReceivedSet: Shopify_MoneyBag;
  /**
   * The total amount that was refunded, in shop currency.
   * @deprecated Use `totalRefundedSet` instead
   */
  totalRefunded: Scalars['Money'];
  /** The total amount that was refunded, in shop and presentment currencies. */
  totalRefundedSet: Shopify_MoneyBag;
  /** The total amount of shipping that was refunded, in shop and presentment currencies. */
  totalRefundedShippingSet: Shopify_MoneyBag;
  /**
   * The total shipping amount before discounts and returns, in shop currency.
   * @deprecated Use `totalShippingPriceSet` instead
   */
  totalShippingPrice: Scalars['Money'];
  /** The total shipping amount before discounts and returns, in shop and presentment currencies. */
  totalShippingPriceSet: Shopify_MoneyBag;
  /**
   * The total tax amount before returns, in shop currency.
   * @deprecated Use `totalTaxSet` instead
   */
  totalTax?: Maybe<Scalars['Money']>;
  /** The total tax amount before returns, in shop and presentment currencies. */
  totalTaxSet?: Maybe<Shopify_MoneyBag>;
  /**
   * The sum of all tip amounts for the order, in shop currency.
   * @deprecated Use `totalTipReceivedSet` instead
   */
  totalTipReceived: Shopify_MoneyV2;
  /** The sum of all tip amounts for the order, in shop and presentment currencies. */
  totalTipReceivedSet: Shopify_MoneyBag;
  /** The total weight of the order before returns, in grams. */
  totalWeight?: Maybe<Scalars['UnsignedInt64']>;
  /** A list of transactions associated with the order. */
  transactions: Array<Shopify_OrderTransaction>;
  /** Whether no payments have been made for the order. */
  unpaid: Scalars['Boolean'];
  /** The date and time when the order was modified last. */
  updatedAt: Scalars['DateTime'];
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderAgreementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_EventSortKeys>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderFulfillmentOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  displayable?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderLineItemsMutableArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderLocalizationExtensionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  countryCodes?: InputMaybe<Array<InputMaybe<Shopify_CountryCode>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  purposes?: InputMaybe<Array<InputMaybe<Shopify_LocalizationExtensionPurpose>>>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderMetafieldDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  pinnedStatus?: InputMaybe<Shopify_MetafieldDefinitionPinnedStatus>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MetafieldDefinitionSortKeys>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderNonFulfillableLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderRefundsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderRisksArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderShippingLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderSuggestedRefundArgs = {
  refundDuties?: InputMaybe<Array<InputMaybe<Shopify_RefundDutyInput>>>;
  refundLineItems?: InputMaybe<Array<InputMaybe<Shopify_RefundLineItemInput>>>;
  refundShipping?: InputMaybe<Scalars['Boolean']>;
  shippingAmount?: InputMaybe<Scalars['Money']>;
  suggestFullRefund?: InputMaybe<Scalars['Boolean']>;
};


/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the Order object.
 * Learn more about [editing an existing order with the Admin API](https://shopify.dev/api/examples/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/apps/auth/oauth#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
export type Shopify_OrderTransactionsArgs = {
  capturable?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  manuallyResolvable?: InputMaybe<Scalars['Boolean']>;
};

export enum Shopify_OrderActionType {
  Order = 'ORDER',
  OrderEdit = 'ORDER_EDIT',
  Refund = 'REFUND',
  Unknown = 'UNKNOWN'
}

/** The [application](https://shopify.dev/apps) that created the order. */
export type Shopify_OrderApp = {
  __typename?: 'Shopify_OrderApp';
  /** The application icon. */
  icon: Shopify_Image;
  /** The name of the application. */
  name: Scalars['String'];
};

export enum Shopify_OrderCancelReason {
  Customer = 'CUSTOMER',
  Declined = 'DECLINED',
  Fraud = 'FRAUD',
  Inventory = 'INVENTORY',
  Other = 'OTHER'
}

/** An auto-generated type for paginating through multiple Orders. */
export type Shopify_OrderConnection = {
  __typename?: 'Shopify_OrderConnection';
  /** A list of edges. */
  edges: Array<Shopify_OrderEdge>;
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<Shopify_Order>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

export enum Shopify_OrderDisplayFinancialStatus {
  Authorized = 'AUTHORIZED',
  Expired = 'EXPIRED',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Voided = 'VOIDED'
}

export enum Shopify_OrderDisplayFulfillmentStatus {
  Fulfilled = 'FULFILLED',
  InProgress = 'IN_PROGRESS',
  OnHold = 'ON_HOLD',
  Open = 'OPEN',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  PendingFulfillment = 'PENDING_FULFILLMENT',
  Restocked = 'RESTOCKED',
  Scheduled = 'SCHEDULED',
  Unfulfilled = 'UNFULFILLED'
}

/** A summary of the important details for a dispute on an order. */
export type Shopify_OrderDisputeSummary = {
  __typename?: 'Shopify_OrderDisputeSummary';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The type that the dispute was initiated as. */
  initiatedAs: Shopify_DisputeType;
  /** The current status of the dispute. */
  status: Shopify_DisputeStatus;
};

/** An auto-generated type which holds one Order and a cursor during pagination. */
export type Shopify_OrderEdge = {
  __typename?: 'Shopify_OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderEdge. */
  node: Shopify_Order;
};

/** The payment collection details for an order that requires additional payment following an edit to the order. */
export type Shopify_OrderPaymentCollectionDetails = {
  __typename?: 'Shopify_OrderPaymentCollectionDetails';
  /** The URL to use for collecting an additional payment on the order. */
  additionalPaymentCollectionUrl?: Maybe<Scalars['Url']>;
};

/** Represents a fraud check on an order. */
export type Shopify_OrderRisk = {
  __typename?: 'Shopify_OrderRisk';
  /** Whether the risk level is shown in the Shopify admin. If false, then this order risk is ignored when Shopify determines the overall risk level for the order. */
  display: Scalars['Boolean'];
  /**
   * The likelihood that an order is fraudulent, based on this order risk.
   *
   * The level can be set by Shopify risk analysis or by an app.
   */
  level?: Maybe<Shopify_OrderRiskLevel>;
  /** The risk message that's shown to the merchant in the Shopify admin. */
  message?: Maybe<Scalars['String']>;
};

export enum Shopify_OrderRiskLevel {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum Shopify_OrderSortKeys {
  CreatedAt = 'CREATED_AT',
  CustomerName = 'CUSTOMER_NAME',
  FinancialStatus = 'FINANCIAL_STATUS',
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  Id = 'ID',
  OrderNumber = 'ORDER_NUMBER',
  ProcessedAt = 'PROCESSED_AT',
  Relevance = 'RELEVANCE',
  TotalPrice = 'TOTAL_PRICE',
  UpdatedAt = 'UPDATED_AT'
}

/** A payment transaction in the context of an order. */
export type Shopify_OrderTransaction = {
  __typename?: 'Shopify_OrderTransaction';
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>;
  /**
   * The amount of money.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The amount and currency of the transaction in shop and presentment currencies. */
  amountSet: Shopify_MoneyBag;
  /**
   * The amount and currency of the transaction.
   * @deprecated Use `amountSet` instead
   */
  amountV2: Shopify_MoneyV2;
  /** Authorization code associated with the transaction. */
  authorizationCode?: Maybe<Scalars['String']>;
  /** The time when the authorization expires. This field is available only to stores on a Shopify Plus plan and is populated only for Shopify Payments authorizations. */
  authorizationExpiresAt?: Maybe<Scalars['DateTime']>;
  /** Date and time when the transaction was created. */
  createdAt: Scalars['DateTime'];
  /** A standardized error code, independent of the payment provider. */
  errorCode?: Maybe<Shopify_OrderTransactionErrorCode>;
  /** The transaction fees charged on the order transaction. Only present for Shopify Payments transactions. */
  fees: Array<Shopify_TransactionFee>;
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>;
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The kind of transaction. */
  kind: Shopify_OrderTransactionKind;
  /** Whether the transaction can be manually captured. */
  manuallyCapturable: Scalars['Boolean'];
  /**
   * Specifies the available amount to refund on the gateway.
   * This value is only available for transactions of type `SuggestedRefund`.
   * @deprecated Use `maximumRefundableV2` instead
   */
  maximumRefundable?: Maybe<Scalars['Money']>;
  /**
   * Specifies the available amount with currency to refund on the gateway.
   * This value is only available for transactions of type `SuggestedRefund`.
   */
  maximumRefundableV2?: Maybe<Shopify_MoneyV2>;
  /** The associated order. */
  order?: Maybe<Shopify_Order>;
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<Shopify_OrderTransaction>;
  /** The payment icon to display for the transaction. */
  paymentIcon?: Maybe<Shopify_Image>;
  /**
   * The payment method used for the transaction. This value is `null` if the payment method is unknown.
   * @deprecated Use `paymentIcon` instead
   */
  paymentMethod?: Maybe<Shopify_PaymentMethods>;
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The transaction receipt that the payment gateway attaches to the transaction.
   * The value of this field depends on which payment gateway processed the transaction.
   * @deprecated Use `receiptJson` instead
   */
  receipt?: Maybe<Scalars['String']>;
  /**
   * The transaction receipt that the payment gateway attaches to the transaction.
   * The value of this field depends on which payment gateway processed the transaction.
   */
  receiptJson?: Maybe<Scalars['Json']>;
  /** The settlement currency. */
  settlementCurrency?: Maybe<Shopify_CurrencyCode>;
  /** The rate used when converting the transaction amount to settlement currency. */
  settlementCurrencyRate?: Maybe<Scalars['Decimal']>;
  /** Contains all Shopify Payments information related to an order transaction. This field is available only to stores on a Shopify Plus plan. */
  shopifyPaymentsSet?: Maybe<Shopify_ShopifyPaymentsTransactionSet>;
  /** The status of this transaction. */
  status: Shopify_OrderTransactionStatus;
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean'];
  /**
   * Specifies the available amount to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   * @deprecated Use `totalUnsettledSet` instead
   */
  totalUnsettled?: Maybe<Scalars['Money']>;
  /**
   * Specifies the available amount with currency to capture on the gateway in shop and presentment currencies.
   * Only available when an amount is capturable or manually mark as paid.
   */
  totalUnsettledSet?: Maybe<Shopify_MoneyBag>;
  /**
   * Specifies the available amount with currency to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   * @deprecated Use `totalUnsettledSet` instead
   */
  totalUnsettledV2?: Maybe<Shopify_MoneyV2>;
  /** Staff member who was logged into the Shopify POS device when the transaction was processed. */
  user?: Maybe<Shopify_StaffMember>;
};


/** A payment transaction in the context of an order. */
export type Shopify_OrderTransactionPaymentIconArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple OrderTransactions. */
export type Shopify_OrderTransactionConnection = {
  __typename?: 'Shopify_OrderTransactionConnection';
  /** A list of edges. */
  edges: Array<Shopify_OrderTransactionEdge>;
  /** A list of the nodes contained in OrderTransactionEdge. */
  nodes: Array<Shopify_OrderTransaction>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one OrderTransaction and a cursor during pagination. */
export type Shopify_OrderTransactionEdge = {
  __typename?: 'Shopify_OrderTransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderTransactionEdge. */
  node: Shopify_OrderTransaction;
};

export enum Shopify_OrderTransactionErrorCode {
  AmazonPaymentsInvalidPaymentMethod = 'AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD',
  AmazonPaymentsMaxAmountCharged = 'AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED',
  AmazonPaymentsMaxAmountRefunded = 'AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED',
  AmazonPaymentsMaxAuthorizationsCaptured = 'AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED',
  AmazonPaymentsMaxRefundsProcessed = 'AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED',
  AmazonPaymentsOrderReferenceCanceled = 'AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED',
  AmazonPaymentsStale = 'AMAZON_PAYMENTS_STALE',
  CallIssuer = 'CALL_ISSUER',
  CardDeclined = 'CARD_DECLINED',
  ConfigError = 'CONFIG_ERROR',
  ExpiredCard = 'EXPIRED_CARD',
  GenericError = 'GENERIC_ERROR',
  IncorrectAddress = 'INCORRECT_ADDRESS',
  IncorrectCvc = 'INCORRECT_CVC',
  IncorrectNumber = 'INCORRECT_NUMBER',
  IncorrectPin = 'INCORRECT_PIN',
  IncorrectZip = 'INCORRECT_ZIP',
  InvalidAmount = 'INVALID_AMOUNT',
  InvalidCountry = 'INVALID_COUNTRY',
  InvalidCvc = 'INVALID_CVC',
  InvalidExpiryDate = 'INVALID_EXPIRY_DATE',
  InvalidNumber = 'INVALID_NUMBER',
  PaymentMethodUnavailable = 'PAYMENT_METHOD_UNAVAILABLE',
  PickUpCard = 'PICK_UP_CARD',
  ProcessingError = 'PROCESSING_ERROR',
  TestModeLiveCard = 'TEST_MODE_LIVE_CARD',
  UnsupportedFeature = 'UNSUPPORTED_FEATURE'
}

export enum Shopify_OrderTransactionKind {
  Authorization = 'AUTHORIZATION',
  Capture = 'CAPTURE',
  Change = 'CHANGE',
  EmvAuthorization = 'EMV_AUTHORIZATION',
  Refund = 'REFUND',
  Sale = 'SALE',
  SuggestedRefund = 'SUGGESTED_REFUND',
  Void = 'VOID'
}

export enum Shopify_OrderTransactionStatus {
  AwaitingResponse = 'AWAITING_RESPONSE',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Unknown = 'UNKNOWN'
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 */
export type Shopify_PageInfo = {
  __typename?: 'Shopify_PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
};

export enum Shopify_PaymentMethods {
  AmericanExpress = 'AMERICAN_EXPRESS',
  Bitcoin = 'BITCOIN',
  Bogus = 'BOGUS',
  Dankort = 'DANKORT',
  DinersClub = 'DINERS_CLUB',
  Discover = 'DISCOVER',
  Dogecoin = 'DOGECOIN',
  Elo = 'ELO',
  Forbrugsforeningen = 'FORBRUGSFORENINGEN',
  Interac = 'INTERAC',
  Jcb = 'JCB',
  Litecoin = 'LITECOIN',
  Maestro = 'MAESTRO',
  Mastercard = 'MASTERCARD',
  Paypal = 'PAYPAL',
  Unionpay = 'UNIONPAY',
  Visa = 'VISA'
}

/** Represents the payment schedule for a single payment defined in the payment terms. */
export type Shopify_PaymentSchedule = {
  __typename?: 'Shopify_PaymentSchedule';
  /** Amount owed for this payment schedule. */
  amount: Shopify_MoneyV2;
  /** Date and time when the payment schedule is paid or fulfilled. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** Date and time when the payment schedule is due. */
  dueAt?: Maybe<Scalars['DateTime']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Date and time when the invoice is sent. */
  issuedAt?: Maybe<Scalars['DateTime']>;
};

/** An auto-generated type for paginating through multiple PaymentSchedules. */
export type Shopify_PaymentScheduleConnection = {
  __typename?: 'Shopify_PaymentScheduleConnection';
  /** A list of edges. */
  edges: Array<Shopify_PaymentScheduleEdge>;
  /** A list of the nodes contained in PaymentScheduleEdge. */
  nodes: Array<Shopify_PaymentSchedule>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one PaymentSchedule and a cursor during pagination. */
export type Shopify_PaymentScheduleEdge = {
  __typename?: 'Shopify_PaymentScheduleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PaymentScheduleEdge. */
  node: Shopify_PaymentSchedule;
};

/** Settings related to payments. */
export type Shopify_PaymentSettings = {
  __typename?: 'Shopify_PaymentSettings';
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<Shopify_DigitalWallet>;
};

/** Represents the payment terms for an order or draft order. */
export type Shopify_PaymentTerms = {
  __typename?: 'Shopify_PaymentTerms';
  /** Duration of payment terms in days based on the payment terms template used to create the payment terms. */
  dueInDays?: Maybe<Scalars['Int']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Whether the payment terms have overdue payment schedules. */
  overdue: Scalars['Boolean'];
  /** List of schedules for the payment terms. */
  paymentSchedules: Shopify_PaymentScheduleConnection;
  /** The name of the payment terms template used to create the payment terms. */
  paymentTermsName: Scalars['String'];
  /** The type of a payment terms template used to create the payment terms. */
  paymentTermsType: Shopify_PaymentTermsType;
  /** The translated payment terms name. */
  translatedName: Scalars['String'];
};


/** Represents the payment terms for an order or draft order. */
export type Shopify_PaymentTermsPaymentSchedulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

export enum Shopify_PaymentTermsType {
  Fixed = 'FIXED',
  Net = 'NET',
  Receipt = 'RECEIPT',
  Unknown = 'UNKNOWN'
}

export enum Shopify_PaypalExpressSubscriptionsGatewayStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Pending = 'PENDING'
}

/**
 * Represents a price list, including information about related prices and eligibility rules.
 * You can use price lists to specify either fixed prices or adjusted relative prices that
 * override initial product variant prices. Price lists are applied to customers
 * using context rules, which determine price list eligibility.
 *
 *   For more information on price lists, refer to
 *   [*Support different pricing models using the price list API*](https://shopify.dev/api/examples/product-price-lists#update-an-existing-price-list).
 */
export type Shopify_PriceList = {
  __typename?: 'Shopify_PriceList';
  /** A set of facts about the customer, used to determine price list eligibility. */
  contextRule?: Maybe<Shopify_PriceListContextRule>;
  /** The currency for fixed prices associated with this price list. */
  currency: Shopify_CurrencyCode;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The unique name of the price list, used as a human-readable identifier. */
  name: Scalars['String'];
  /** Relative adjustments to other prices. */
  parent?: Maybe<Shopify_PriceListParent>;
  /** A list of prices associated with the price list. */
  prices: Shopify_PriceListPriceConnection;
};


/**
 * Represents a price list, including information about related prices and eligibility rules.
 * You can use price lists to specify either fixed prices or adjusted relative prices that
 * override initial product variant prices. Price lists are applied to customers
 * using context rules, which determine price list eligibility.
 *
 *   For more information on price lists, refer to
 *   [*Support different pricing models using the price list API*](https://shopify.dev/api/examples/product-price-lists#update-an-existing-price-list).
 */
export type Shopify_PriceListPricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  originType?: InputMaybe<Shopify_PriceListPriceOriginType>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The type and value of a price list adjustment.
 *
 * For more information on price lists, refer to
 * [Support different pricing models using the price list API](https://shopify.dev/api/examples/product-price-lists#price-lists).
 */
export type Shopify_PriceListAdjustment = {
  __typename?: 'Shopify_PriceListAdjustment';
  /** The type of price adjustment, such as percentage increase or decrease. */
  type: Shopify_PriceListAdjustmentType;
  /**
   * The value of price adjustment, where positive numbers reduce the prices and negative numbers
   * increase them.
   */
  value: Scalars['Float'];
};

export enum Shopify_PriceListAdjustmentType {
  PercentageDecrease = 'PERCENTAGE_DECREASE',
  PercentageIncrease = 'PERCENTAGE_INCREASE'
}

/**
 * Facts about the customer that was used to determine the price list eligibility.
 * For example, if the `PriceListContextRule` is for a US market, then the price list will be eligible to all customers in the US.
 * For more information on price lists, refer to
 * [Support different pricing models using the price list API](https://shopify.dev/api/examples/product-price-lists#price-lists).
 */
export type Shopify_PriceListContextRule = {
  __typename?: 'Shopify_PriceListContextRule';
  /** A list of two letter country codes that determines price list eligibility. */
  countries: Array<Shopify_CountryCode>;
  /** The associated market. */
  market?: Maybe<Shopify_Market>;
};

/**
 * Represents relative adjustments from one price list to other prices.
 *   You can use a `PriceListParent` to specify an adjusted relative price using a percentage-based
 *   adjustment. Adjusted prices work in conjunction with exchange rules and rounding.
 *
 *   [Adjustment types](https://shopify.dev/api/admin-graphql/latest/enums/pricelistadjustmenttype)
 *   support both percentage increases and decreases.
 */
export type Shopify_PriceListParent = {
  __typename?: 'Shopify_PriceListParent';
  /** A price list adjustment. */
  adjustment: Shopify_PriceListAdjustment;
};

/**
 * Represents information about pricing for a product variant
 *         as defined on a price list, such as the price, compare at price, and origin type. You can use a PriceListPrice to specify a fixed price for a specific product variant.
 */
export type Shopify_PriceListPrice = {
  __typename?: 'Shopify_PriceListPrice';
  /** The compare-at price of the product variant on this price list. */
  compareAtPrice?: Maybe<Shopify_MoneyV2>;
  /**
   * The origin of this price, either fixed (defined on the price list)
   *           or relative (calculated using an adjustment via a price list parent configuration).
   */
  originType: Shopify_PriceListPriceOriginType;
  /** The price of the product variant on this price list. */
  price: Shopify_MoneyV2;
  /** The product variant associated with this price. */
  variant: Shopify_ProductVariant;
};

/** An auto-generated type for paginating through multiple PriceListPrices. */
export type Shopify_PriceListPriceConnection = {
  __typename?: 'Shopify_PriceListPriceConnection';
  /** A list of edges. */
  edges: Array<Shopify_PriceListPriceEdge>;
  /** A list of the nodes contained in PriceListPriceEdge. */
  nodes: Array<Shopify_PriceListPrice>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one PriceListPrice and a cursor during pagination. */
export type Shopify_PriceListPriceEdge = {
  __typename?: 'Shopify_PriceListPriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PriceListPriceEdge. */
  node: Shopify_PriceListPrice;
};

export enum Shopify_PriceListPriceOriginType {
  Fixed = 'FIXED',
  Relative = 'RELATIVE'
}

/** Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply. We recommend using the [Discount types](https://shopify.dev/api/examples/discounts) available in the GraphQL Admin API, which are intended to replace the GraphQL `PriceRule` object and REST Admin `PriceRule` and `DiscountCode` resources. */
export type Shopify_PriceRule = {
  __typename?: 'Shopify_PriceRule';
  /** The maximum number of times that the price rule can be allocated onto an order. */
  allocationLimit?: Maybe<Scalars['Int']>;
  /** The method by which the price rule's value is allocated to its entitled items. */
  allocationMethod: Shopify_PriceRuleAllocationMethod;
  /** The application that created the price rule. */
  app?: Maybe<Shopify_App>;
  /** The date and time when the price rule was created. */
  createdAt: Scalars['DateTime'];
  /** The customers that can use this price rule. */
  customerSelection: Shopify_PriceRuleCustomerSelection;
  /** List of the price rule's discount codes. */
  discountCodes: Shopify_PriceRuleDiscountCodeConnection;
  /** How many discount codes associated with the price rule. */
  discountCodesCount: Scalars['Int'];
  /** The date and time when the price rule ends. For open-ended price rules, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /**
   * Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items.
   * @deprecated Use `prerequisiteToEntitlementQuantityRatio` instead
   */
  entitlementToPrerequisiteQuantityRatio?: Maybe<Shopify_PriceRuleEntitlementToPrerequisiteQuantityRatio>;
  /** The paginated list of events associated with the price rule. */
  events: Shopify_EventConnection;
  /** A list of the price rule's features. */
  features: Array<Shopify_PriceRuleFeature>;
  /** Indicates whether there are any timeline comments on the price rule. */
  hasTimelineComment: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The items to which the price rule applies. */
  itemEntitlements: Shopify_PriceRuleItemEntitlements;
  /** The items required for the price rule to be applicable. */
  itemPrerequisites: Shopify_PriceRuleLineItemPrerequisites;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** Whether the price rule can be applied only once per customer. */
  oncePerCustomer: Scalars['Boolean'];
  /** The number of the entitled items must fall within this range for the price rule to be applicable. */
  prerequisiteQuantityRange?: Maybe<Shopify_PriceRuleQuantityRange>;
  /** The shipping cost must fall within this range for the price rule to be applicable. */
  prerequisiteShippingPriceRange?: Maybe<Shopify_PriceRuleMoneyRange>;
  /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
  prerequisiteSubtotalRange?: Maybe<Shopify_PriceRuleMoneyRange>;
  /** Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items. */
  prerequisiteToEntitlementQuantityRatio?: Maybe<Shopify_PriceRulePrerequisiteToEntitlementQuantityRatio>;
  /** URLs that can be used to share the discount. */
  shareableUrls: Array<Shopify_PriceRuleShareableUrl>;
  /** The shipping lines to which the price rule applies. */
  shippingEntitlements: Shopify_PriceRuleShippingLineEntitlements;
  /** The date and time when the price rule starts. */
  startsAt: Scalars['DateTime'];
  /** The status of the price rule. */
  status: Shopify_PriceRuleStatus;
  /** A detailed summary of the price rule. */
  summary?: Maybe<Scalars['String']>;
  /** The type of lines (line_item or shipping_line) to which the price rule applies. */
  target: Shopify_PriceRuleTarget;
  /** The title of the price rule. */
  title: Scalars['String'];
  /** The total sales from orders where the price rule was used. */
  totalSales?: Maybe<Shopify_MoneyV2>;
  /**
   * A list of the price rule's features.
   * @deprecated Use `features` instead
   */
  traits: Array<Shopify_PriceRuleTrait>;
  /** The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count. */
  usageCount: Scalars['Int'];
  /** The maximum number of times that the price rule can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** A time period during which a price rule is applicable. */
  validityPeriod: Shopify_PriceRuleValidityPeriod;
  /**
   * The value of the price rule.
   * @deprecated Use `valueV2` instead
   */
  value: Shopify_PriceRuleValue;
  /** The value of the price rule. */
  valueV2: Shopify_PricingValue;
};


/** Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply. We recommend using the [Discount types](https://shopify.dev/api/examples/discounts) available in the GraphQL Admin API, which are intended to replace the GraphQL `PriceRule` object and REST Admin `PriceRule` and `DiscountCode` resources. */
export type Shopify_PriceRuleDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_DiscountCodeSortKeys>;
};


/** Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply. We recommend using the [Discount types](https://shopify.dev/api/examples/discounts) available in the GraphQL Admin API, which are intended to replace the GraphQL `PriceRule` object and REST Admin `PriceRule` and `DiscountCode` resources. */
export type Shopify_PriceRuleEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_EventSortKeys>;
};

export enum Shopify_PriceRuleAllocationMethod {
  Across = 'ACROSS',
  Each = 'EACH'
}

/** An auto-generated type for paginating through multiple PriceRules. */
export type Shopify_PriceRuleConnection = {
  __typename?: 'Shopify_PriceRuleConnection';
  /** A list of edges. */
  edges: Array<Shopify_PriceRuleEdge>;
  /** A list of the nodes contained in PriceRuleEdge. */
  nodes: Array<Shopify_PriceRule>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** A selection of customers for whom the price rule applies. */
export type Shopify_PriceRuleCustomerSelection = {
  __typename?: 'Shopify_PriceRuleCustomerSelection';
  /** List of customers to whom the price rule applies. */
  customers: Shopify_CustomerConnection;
  /** Whether the price rule applies to all customers. */
  forAllCustomers: Scalars['Boolean'];
  /** A list of customer segments that contain the customers who can use the price rule. */
  segments: Array<Shopify_Segment>;
};


/** A selection of customers for whom the price rule applies. */
export type Shopify_PriceRuleCustomerSelectionCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_CustomerSortKeys>;
};

/** A discount code of a price rule. */
export type Shopify_PriceRuleDiscountCode = {
  __typename?: 'Shopify_PriceRuleDiscountCode';
  /** The application that created the discount code. */
  app?: Maybe<Shopify_App>;
  /** The code to apply the discount. */
  code: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count. */
  usageCount: Scalars['Int'];
};

/** An auto-generated type for paginating through multiple PriceRuleDiscountCodes. */
export type Shopify_PriceRuleDiscountCodeConnection = {
  __typename?: 'Shopify_PriceRuleDiscountCodeConnection';
  /** A list of edges. */
  edges: Array<Shopify_PriceRuleDiscountCodeEdge>;
  /** A list of the nodes contained in PriceRuleDiscountCodeEdge. */
  nodes: Array<Shopify_PriceRuleDiscountCode>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one PriceRuleDiscountCode and a cursor during pagination. */
export type Shopify_PriceRuleDiscountCodeEdge = {
  __typename?: 'Shopify_PriceRuleDiscountCodeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PriceRuleDiscountCodeEdge. */
  node: Shopify_PriceRuleDiscountCode;
};

/** An auto-generated type which holds one PriceRule and a cursor during pagination. */
export type Shopify_PriceRuleEdge = {
  __typename?: 'Shopify_PriceRuleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PriceRuleEdge. */
  node: Shopify_PriceRule;
};

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type Shopify_PriceRuleEntitlementToPrerequisiteQuantityRatio = {
  __typename?: 'Shopify_PriceRuleEntitlementToPrerequisiteQuantityRatio';
  /** The quantity of entitled items in the ratio. */
  entitlementQuantity: Scalars['Int'];
  /** The quantity of prerequisite items in the ratio. */
  prerequisiteQuantity: Scalars['Int'];
};

export enum Shopify_PriceRuleFeature {
  Bulk = 'BULK',
  BuyOneGetOne = 'BUY_ONE_GET_ONE',
  BuyOneGetOneWithAllocationLimit = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  QuantityDiscounts = 'QUANTITY_DISCOUNTS',
  SpecificCustomers = 'SPECIFIC_CUSTOMERS'
}

/** The value of a fixed amount price rule. */
export type Shopify_PriceRuleFixedAmountValue = {
  __typename?: 'Shopify_PriceRuleFixedAmountValue';
  /** The monetary value of the price rule. */
  amount: Scalars['Money'];
};

/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type Shopify_PriceRuleItemEntitlements = {
  __typename?: 'Shopify_PriceRuleItemEntitlements';
  /** The collections to which the price rule applies. */
  collections: Shopify_CollectionConnection;
  /** The product variants to which the price rule applies. */
  productVariants: Shopify_ProductVariantConnection;
  /** The products to which the price rule applies. */
  products: Shopify_ProductConnection;
  /** Whether the price rule applies to all line items. */
  targetAllLineItems: Scalars['Boolean'];
};


/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type Shopify_PriceRuleItemEntitlementsCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type Shopify_PriceRuleItemEntitlementsProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type Shopify_PriceRuleItemEntitlementsProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type Shopify_PriceRuleLineItemPrerequisites = {
  __typename?: 'Shopify_PriceRuleLineItemPrerequisites';
  /** The collections required for the price rule to be applicable. */
  collections: Shopify_CollectionConnection;
  /** The product variants required for the price rule to be applicable. */
  productVariants: Shopify_ProductVariantConnection;
  /** The products required for the price rule to be applicable. */
  products: Shopify_ProductConnection;
};


/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type Shopify_PriceRuleLineItemPrerequisitesCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type Shopify_PriceRuleLineItemPrerequisitesProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type Shopify_PriceRuleLineItemPrerequisitesProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** A money range within which the price rule is applicable. */
export type Shopify_PriceRuleMoneyRange = {
  __typename?: 'Shopify_PriceRuleMoneyRange';
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>;
  /** The lower bound or equal of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>;
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>;
  /** The upper bound or equal of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>;
};

/** The value of a percent price rule. */
export type Shopify_PriceRulePercentValue = {
  __typename?: 'Shopify_PriceRulePercentValue';
  /** The percent value of the price rule. */
  percentage: Scalars['Float'];
};

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type Shopify_PriceRulePrerequisiteToEntitlementQuantityRatio = {
  __typename?: 'Shopify_PriceRulePrerequisiteToEntitlementQuantityRatio';
  /** The quantity of entitled items in the ratio. */
  entitlementQuantity: Scalars['Int'];
  /** The quantity of prerequisite items in the ratio. */
  prerequisiteQuantity: Scalars['Int'];
};

/** A quantity range within which the price rule is applicable. */
export type Shopify_PriceRuleQuantityRange = {
  __typename?: 'Shopify_PriceRuleQuantityRange';
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** The lower bound or equal of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>;
  /** The upper bound or equal of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
};

/** Shareable URL for the discount code associated with the price rule. */
export type Shopify_PriceRuleShareableUrl = {
  __typename?: 'Shopify_PriceRuleShareableUrl';
  /** The image URL of the item (product or collection) to which the discount applies. */
  targetItemImage?: Maybe<Shopify_Image>;
  /** The type of page that's associated with the URL. */
  targetType: Shopify_PriceRuleShareableUrlTargetType;
  /** The title of the page that's associated with the URL. */
  title: Scalars['String'];
  /** The URL for the discount code. */
  url: Scalars['Url'];
};

export enum Shopify_PriceRuleShareableUrlTargetType {
  Collection = 'COLLECTION',
  Home = 'HOME',
  Product = 'PRODUCT'
}

/** The shipping lines to which the price rule applies to. */
export type Shopify_PriceRuleShippingLineEntitlements = {
  __typename?: 'Shopify_PriceRuleShippingLineEntitlements';
  /** The codes for the countries to which the price rule applies to. */
  countryCodes: Array<Shopify_CountryCode>;
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean'];
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines: Scalars['Boolean'];
};

export enum Shopify_PriceRuleSortKeys {
  CreatedAt = 'CREATED_AT',
  EndsAt = 'ENDS_AT',
  Id = 'ID',
  Relevance = 'RELEVANCE',
  StartsAt = 'STARTS_AT',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export enum Shopify_PriceRuleStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

export enum Shopify_PriceRuleTarget {
  LineItem = 'LINE_ITEM',
  ShippingLine = 'SHIPPING_LINE'
}

export enum Shopify_PriceRuleTrait {
  Bulk = 'BULK',
  BuyOneGetOne = 'BUY_ONE_GET_ONE',
  BuyOneGetOneWithAllocationLimit = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  QuantityDiscounts = 'QUANTITY_DISCOUNTS',
  SpecificCustomers = 'SPECIFIC_CUSTOMERS'
}

/** A time period during which a price rule is applicable. */
export type Shopify_PriceRuleValidityPeriod = {
  __typename?: 'Shopify_PriceRuleValidityPeriod';
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars['DateTime']>;
  /** The time after which the price rule is valid. */
  start: Scalars['DateTime'];
};

/** The type of the price rule value. The price rule value might be a percentage value, or a fixed amount. */
export type Shopify_PriceRuleValue = Shopify_PriceRuleFixedAmountValue | Shopify_PriceRulePercentValue;

/** The value of the percentage pricing object. */
export type Shopify_PricingPercentageValue = {
  __typename?: 'Shopify_PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The type of value given to a customer when a discount is applied to an order. For example, the application of the discount might give the customer a percentage off a specified item. Alternatively, the application of the discount might give the customer a monetary value in a given currency off an order. */
export type Shopify_PricingValue = Shopify_MoneyV2 | Shopify_PricingPercentageValue;

/**
 * Private metafields represent custom metadata that is attached to a resource.
 * Private metafields are accessible only by the application that created them and only from the GraphQL Admin API.
 *
 * An application can create a maximum of 10 private metafields per shop resource.
 */
export type Shopify_PrivateMetafield = {
  __typename?: 'Shopify_PrivateMetafield';
  /** The date and time when the private metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The id of the private metafield. */
  id: Scalars['ID'];
  /** The key name of the private metafield. */
  key: Scalars['String'];
  /** The namespace of the private metafield. */
  namespace: Scalars['String'];
  /** The date and time when the private metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a private metafield. */
  value: Scalars['String'];
  /** Represents the private metafield value type. */
  valueType: Shopify_PrivateMetafieldValueType;
};

/** An auto-generated type for paginating through multiple PrivateMetafields. */
export type Shopify_PrivateMetafieldConnection = {
  __typename?: 'Shopify_PrivateMetafieldConnection';
  /** A list of edges. */
  edges: Array<Shopify_PrivateMetafieldEdge>;
  /** A list of the nodes contained in PrivateMetafieldEdge. */
  nodes: Array<Shopify_PrivateMetafield>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one PrivateMetafield and a cursor during pagination. */
export type Shopify_PrivateMetafieldEdge = {
  __typename?: 'Shopify_PrivateMetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PrivateMetafieldEdge. */
  node: Shopify_PrivateMetafield;
};

/** The input fields for a private metafield. */
export type Shopify_PrivateMetafieldInput = {
  /** The key of the private metafield. */
  key: Scalars['String'];
  /** The namespace of the private metafield. */
  namespace: Scalars['String'];
  /** The resource that owns the metafield. If the field is blank, then the `Shop` resource owns the metafield. */
  owner?: InputMaybe<Scalars['ID']>;
  /** The `value` and `valueType` of the private metafield, wrapped in a `ValueInput` object. */
  valueInput: Shopify_PrivateMetafieldValueInput;
};

/** The value input contains the value and value type of the private metafield. */
export type Shopify_PrivateMetafieldValueInput = {
  /** The value of a private metafield. */
  value: Scalars['String'];
  /** Represents the private metafield value type. */
  valueType: Shopify_PrivateMetafieldValueType;
};

export enum Shopify_PrivateMetafieldValueType {
  Integer = 'INTEGER',
  JsonString = 'JSON_STRING',
  String = 'STRING'
}

export type Shopify_Product = TsSearchable & {
  __typename?: 'Shopify_Product';
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['String']>;
  /**
   * The description of the product, complete with HTML formatting.
   * @deprecated Use `descriptionHtml` instead
   */
  bodyHtml?: Maybe<Scalars['String']>;
  /** A list of the collections that include the product. */
  collections: Shopify_CollectionConnection;
  /** The pricing that applies for a customer in a given context. */
  contextualPricing: Shopify_ProductContextualPricing;
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
  createdAt: Scalars['DateTime'];
  /** The custom product type specified by the merchant. */
  customProductType?: Maybe<Scalars['String']>;
  /** A default cursor that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String'];
  /** A stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['Html'];
  /**
   * Stripped description of the product, single line with HTML tags removed.
   * Truncated to 60 characters.
   * @deprecated Use `description` instead
   */
  descriptionPlainSummary: Scalars['String'];
  /** The featured image for the product. */
  featuredImage?: Maybe<Shopify_Image>;
  /** The featured media for the product. */
  featuredMedia?: Maybe<Shopify_Media>;
  /** Information about the product that's provided through resource feedback. */
  feedback?: Maybe<Shopify_ResourceFeedback>;
  /** The theme template used when viewing the gift card in a store. */
  giftCardTemplateSuffix?: Maybe<Scalars['String']>;
  /** A unique human-friendly string of the product's title. */
  handle: Scalars['String'];
  /** Whether the product has only a single variant with the default option and value. */
  hasOnlyDefaultVariant: Scalars['Boolean'];
  /** Whether the product has out of stock variants. */
  hasOutOfStockVariants: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The images associated with the product. */
  images: Shopify_ImageConnection;
  /** Whether the product is in a given collection. */
  inCollection: Scalars['Boolean'];
  /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The media associated with the product. This can include images, 3D models, or videos. */
  media: Shopify_MediaConnection;
  /** Total count of media belonging to a product. */
  mediaCount: Scalars['Int'];
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafield definitions. */
  metafieldDefinitions: Shopify_MetafieldDefinitionConnection;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** The online store preview URL. */
  onlineStorePreviewUrl?: Maybe<Scalars['Url']>;
  /**
   * The online store URL for the product.
   * A value of `null` indicates that the product is not published to the Online Store sales channel.
   */
  onlineStoreUrl?: Maybe<Scalars['Url']>;
  /** A list of product options. The limit is specified by Shop.resourceLimits.maxProductOptions. */
  options: Array<Shopify_ProductOption>;
  /**
   * The price range of the product.
   * @deprecated Deprecated in API version 2020-10. Use `priceRangeV2` instead.
   */
  priceRange: Shopify_ProductPriceRange;
  /** The price range of the product with prices formatted as decimals. */
  priceRangeV2: Shopify_ProductPriceRangeV2;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /** The product type specified by the merchant. */
  productType: Scalars['String'];
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was published to the Online Store. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /**
   * Check to see whether the resource is published to a given channel.
   * @deprecated Use `publishedOnPublication` instead
   */
  publishedOnChannel: Scalars['Boolean'];
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'];
  /** Whether the product can only be purchased with a selling plan (subscription). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription only, then the product is unpublished from all channels except the online store. */
  requiresSellingPlan: Scalars['Boolean'];
  /** The resource that is either published or staged to be published to the calling app's publication. Requires the `read_product_listings` scope. */
  resourcePublicationOnCurrentPublication?: Maybe<Shopify_ResourcePublicationV2>;
  reviews?: Maybe<ReviewsIo_ListProductReviewsResponse>;
  searchSummary?: Maybe<Scalars['String']>;
  /** Count of selling plan groups associated with the product. */
  sellingPlanGroupCount: Scalars['Int'];
  /** A list of all selling plan groups defined in the current shop associated with the product either directly or through any of its variants. */
  sellingPlanGroups: Shopify_SellingPlanGroupConnection;
  /** SEO information of the product. */
  seo: Shopify_Seo;
  /** The standardized product type in the Shopify product taxonomy. */
  standardizedProductType?: Maybe<Shopify_StandardizedProductType>;
  /** The product status. This controls visibility across all channels. */
  status: Shopify_ProductStatus;
  /**
   * The Storefront GraphQL API ID of the `Product`.
   *
   * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
   * @deprecated Use `id` instead
   */
  storefrontId: Scalars['StorefrontId'];
  /**
   * A comma separated list of tags associated with the product. Updating `tags` overwrites
   * any existing tags that were previously added to the product. To add new tags without overwriting
   * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
   * mutation.
   */
  tags: Array<Scalars['String']>;
  takeshape?: Maybe<Product>;
  /** The theme template used when viewing the product in a store. */
  templateSuffix?: Maybe<Scalars['String']>;
  /** The title of the product. */
  title: Scalars['String'];
  /** The quantity of inventory in stock. */
  totalInventory: Scalars['Int'];
  /** The number of variants that are associated with the product. */
  totalVariants: Scalars['Int'];
  /** Whether inventory tracking has been enabled for the product. */
  tracksInventory: Scalars['Boolean'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: Scalars['DateTime'];
  /** A list of variants associated with the product. */
  variants: Shopify_ProductVariantConnection;
  /** The name of the product's vendor. */
  vendor: Scalars['String'];
};


export type Shopify_ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_CollectionSortKeys>;
};


export type Shopify_ProductContextualPricingArgs = {
  context: Shopify_ContextualPricingContextInput;
};


export type Shopify_ProductDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


export type Shopify_ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Shopify_CropRegion>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  scale?: InputMaybe<Scalars['Int']>;
  sortKey?: InputMaybe<Shopify_ProductImageSortKeys>;
};


export type Shopify_ProductInCollectionArgs = {
  id: Scalars['ID'];
};


export type Shopify_ProductMediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_ProductMediaSortKeys>;
};


export type Shopify_ProductMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


export type Shopify_ProductMetafieldDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  pinnedStatus?: InputMaybe<Shopify_MetafieldDefinitionPinnedStatus>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MetafieldDefinitionSortKeys>;
};


export type Shopify_ProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


export type Shopify_ProductOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type Shopify_ProductPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


export type Shopify_ProductPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


export type Shopify_ProductPublishedOnChannelArgs = {
  channelId: Scalars['ID'];
};


export type Shopify_ProductPublishedOnPublicationArgs = {
  publicationId: Scalars['ID'];
};


export type Shopify_ProductSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


export type Shopify_ProductTranslationsArgs = {
  locale: Scalars['String'];
};


export type Shopify_ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_ProductVariantSortKeys>;
};

export enum Shopify_ProductCollectionSortKeys {
  BestSelling = 'BEST_SELLING',
  CollectionDefault = 'COLLECTION_DEFAULT',
  Created = 'CREATED',
  Id = 'ID',
  Manual = 'MANUAL',
  Price = 'PRICE',
  Relevance = 'RELEVANCE',
  Title = 'TITLE'
}

/** An auto-generated type for paginating through multiple Products. */
export type Shopify_ProductConnection = {
  __typename?: 'Shopify_ProductConnection';
  /** A list of edges. */
  edges: Array<Shopify_ProductEdge>;
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<Shopify_Product>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/**
 * The price of a product in a specific country.
 * Prices vary between countries.
 */
export type Shopify_ProductContextualPricing = {
  __typename?: 'Shopify_ProductContextualPricing';
  /** The pricing of the variant with the highest price in the given context. */
  maxVariantPricing?: Maybe<Shopify_ProductVariantContextualPricing>;
  /** The pricing of the variant with the lowest price in the given context. */
  minVariantPricing?: Maybe<Shopify_ProductVariantContextualPricing>;
  /** The price range of the product with prices formatted as decimals. */
  priceRange: Shopify_ProductPriceRangeV2;
};

/** An auto-generated type which holds one Product and a cursor during pagination. */
export type Shopify_ProductEdge = {
  __typename?: 'Shopify_ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: Shopify_Product;
};

export enum Shopify_ProductImageSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Position = 'POSITION',
  Relevance = 'RELEVANCE'
}

/** Specifies the input fields required to create a product. */
export type Shopify_ProductInput = {
  /** A description of the product. Supports HTML formatting. This argument is deprecated: Use `descriptionHtml` instead. */
  bodyHtml?: InputMaybe<Scalars['String']>;
  /** The IDs of the collections that this product will be added to. */
  collectionsToJoin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The IDs of collections that will no longer include the product. */
  collectionsToLeave?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The custom product type specified by the merchant. */
  customProductType?: InputMaybe<Scalars['String']>;
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml?: InputMaybe<Scalars['String']>;
  /** Whether the product is a gift card. */
  giftCard?: InputMaybe<Scalars['Boolean']>;
  /** The theme template used when viewing the gift card in a store. */
  giftCardTemplateSuffix?: InputMaybe<Scalars['String']>;
  /** A unique human-friendly string for the product. Automatically generated from the product's title. */
  handle?: InputMaybe<Scalars['String']>;
  /** Specifies the product to update in productUpdate or creates a new product if absent in productCreate. */
  id?: InputMaybe<Scalars['ID']>;
  /** The images to associate with the product. */
  images?: InputMaybe<Array<InputMaybe<Shopify_ImageInput>>>;
  /** The metafields to associate with this product. */
  metafields?: InputMaybe<Array<InputMaybe<Shopify_MetafieldInput>>>;
  /** List of custom product options (maximum of 3 per product). */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The private metafields to associate with this product. */
  privateMetafields?: InputMaybe<Array<InputMaybe<Shopify_PrivateMetafieldInput>>>;
  /** The product type specified by the merchant. */
  productType?: InputMaybe<Scalars['String']>;
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  publishDate?: InputMaybe<Scalars['DateTime']>;
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  publishOn?: InputMaybe<Scalars['DateTime']>;
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  published?: InputMaybe<Scalars['Boolean']>;
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /**
   * Whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
   */
  redirectNewHandle?: InputMaybe<Scalars['Boolean']>;
  /** Whether the product can only be purchased with a selling plan (subscription). Products that are sold exclusively on subscription can only be created on online stores. If set to `true` on an already existing product, then the product will be marked unavailable on channels that don't support subscriptions. */
  requiresSellingPlan?: InputMaybe<Scalars['Boolean']>;
  /** The SEO information associated with the product. */
  seo?: InputMaybe<Shopify_SeoInput>;
  /** The standardized product type in the Shopify product taxonomy. */
  standardizedProductType?: InputMaybe<Shopify_StandardizedProductTypeInput>;
  /** The status of the product. */
  status?: InputMaybe<Shopify_ProductStatus>;
  /** A comma separated list tags that have been added to the product. */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The theme template used when viewing the product in a store. */
  templateSuffix?: InputMaybe<Scalars['String']>;
  /** The title of the product. */
  title?: InputMaybe<Scalars['String']>;
  /** A list of variants associated with the product. */
  variants?: InputMaybe<Array<InputMaybe<Shopify_ProductVariantInput>>>;
  /** The name of the product's vendor. */
  vendor?: InputMaybe<Scalars['String']>;
};

export enum Shopify_ProductMediaSortKeys {
  Id = 'ID',
  Position = 'POSITION',
  Relevance = 'RELEVANCE'
}

/**
 * Product property names like "Size", "Color", and "Material".
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export type Shopify_ProductOption = {
  __typename?: 'Shopify_ProductOption';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option's position. */
  position: Scalars['Int'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>;
};


/**
 * Product property names like "Size", "Color", and "Material".
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export type Shopify_ProductOptionTranslationsArgs = {
  locale: Scalars['String'];
};

/** The price range of the product. */
export type Shopify_ProductPriceRange = {
  __typename?: 'Shopify_ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: Shopify_MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: Shopify_MoneyV2;
};

/** The price range of the product. */
export type Shopify_ProductPriceRangeV2 = {
  __typename?: 'Shopify_ProductPriceRangeV2';
  /** The highest variant's price. */
  maxVariantPrice: Shopify_MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: Shopify_MoneyV2;
};

export enum Shopify_ProductSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  InventoryTotal = 'INVENTORY_TOTAL',
  ProductType = 'PRODUCT_TYPE',
  PublishedAt = 'PUBLISHED_AT',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  Vendor = 'VENDOR'
}

export enum Shopify_ProductStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT'
}

/** Represents a [Shopify product taxonomy](https://help.shopify.com/txt/product_taxonomy/en.txt) node. */
export type Shopify_ProductTaxonomyNode = {
  __typename?: 'Shopify_ProductTaxonomyNode';
  /** The full name of the product taxonomy node. For example,  Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds. */
  fullName: Scalars['String'];
  /** The ID of the product taxonomy node. */
  id: Scalars['ID'];
  /** Whether the node is a leaf node. */
  isLeaf: Scalars['Boolean'];
  /** Whether the node is a root node. */
  isRoot: Scalars['Boolean'];
  /** The name of the product taxonomy node. For example, Dog Beds. */
  name: Scalars['String'];
};

/** Represents a product variant. */
export type Shopify_ProductVariant = {
  __typename?: 'Shopify_ProductVariant';
  /** Whether the product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** The value of the barcode associated with the product. */
  barcode?: Maybe<Scalars['String']>;
  /** The compare-at price of the variant in the default shop currency. */
  compareAtPrice?: Maybe<Scalars['Money']>;
  /** The pricing that applies for a customer in a given context. */
  contextualPricing: Shopify_ProductVariantContextualPricing;
  /** The date and time when the variant was created. */
  createdAt: Scalars['DateTime'];
  /** A default cursor that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String'];
  /** The delivery profile for the variant. */
  deliveryProfile?: Maybe<Shopify_DeliveryProfile>;
  /** Display name of the variant, based on product's title + variant's title. */
  displayName: Scalars['String'];
  /**
   * The fulfillment service associated with the product.
   * @deprecated This field will no longer be supported. Fulfillment services will all be opted into SKU sharing in 2023-04. Use [FulfillmentOrder#assignedLocation](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder#field-fulfillmentorder-assignedlocation) instead.
   */
  fulfillmentService?: Maybe<Shopify_FulfillmentService>;
  /** Whether changes to the fulfillment service for the product variant are allowed. */
  fulfillmentServiceEditable: Shopify_EditableProperty;
  /**
   * The Harmonized System Code (or HS Tariff Code) for the variant.
   * @deprecated Use `InventoryItem.harmonizedSystemCode` instead.
   */
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The featured image for the variant. */
  image?: Maybe<Shopify_Image>;
  /** The inventory item, which is used to query for inventory information. */
  inventoryItem: Shopify_InventoryItem;
  /**
   * The fulfillment service that tracks the number of items in stock for the product variant.
   * @deprecated Use tracked attribute on `inventoryItem` instead.
   */
  inventoryManagement: Shopify_ProductVariantInventoryManagement;
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy: Shopify_ProductVariantInventoryPolicy;
  /** The total sellable quantity of the variant. */
  inventoryQuantity?: Maybe<Scalars['Int']>;
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The media associated with the product variant. */
  media: Shopify_MediaConnection;
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafield definitions. */
  metafieldDefinitions: Shopify_MetafieldDefinitionConnection;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position: Scalars['Int'];
  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   * @deprecated Use `contextualPricing` instead
   */
  presentmentPrices: Shopify_ProductVariantPricePairConnection;
  /** The price of the product variant in the default shop currency. */
  price: Scalars['Money'];
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /** The product that this variant belongs to. */
  product: Shopify_Product;
  /**
   * Whether a customer needs to provide a shipping address when placing an order for the product variant.
   * @deprecated Use `InventoryItem.requiresShipping` instead.
   */
  requiresShipping: Scalars['Boolean'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<Shopify_SelectedOption>;
  /**
   * The total sellable quantity of the variant for online channels.
   * This doesn't represent the total available inventory or capture
   * [limitations based on customer location](https://help.shopify.com/manual/markets/inventory_and_fulfillment).
   */
  sellableOnlineQuantity: Scalars['Int'];
  /** Count of selling plan groups associated with the product variant. */
  sellingPlanGroupCount: Scalars['Int'];
  /** A list of all selling plan groups defined in the current shop associated with the product variant. */
  sellingPlanGroups: Shopify_SellingPlanGroupConnection;
  /** An identifier for the product variant in the shop. Required in order to connect to a fulfillment service. */
  sku?: Maybe<Scalars['String']>;
  /**
   * The Storefront GraphQL API ID of the `ProductVariant`.
   *
   * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
   * @deprecated Use `id` instead
   */
  storefrontId: Scalars['StorefrontId'];
  /** The tax code for the product variant. */
  taxCode?: Maybe<Scalars['String']>;
  /** Whether a tax is charged when the product variant is sold. */
  taxable: Scalars['Boolean'];
  /** The title of the product variant. */
  title: Scalars['String'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /** The date and time (ISO 8601 format) when the product variant was last modified. */
  updatedAt: Scalars['DateTime'];
  /** The weight of the product variant in the unit system specified with weight_unit. */
  weight?: Maybe<Scalars['Float']>;
  /** The unit of measurement that applies to the product variant's weight. If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`. */
  weightUnit: Shopify_WeightUnit;
};


/** Represents a product variant. */
export type Shopify_ProductVariantContextualPricingArgs = {
  context: Shopify_ContextualPricingContextInput;
};


/** Represents a product variant. */
export type Shopify_ProductVariantImageArgs = {
  crop?: InputMaybe<Shopify_CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantMediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents a product variant. */
export type Shopify_ProductVariantMetafieldDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  pinnedStatus?: InputMaybe<Shopify_MetafieldDefinitionPinnedStatus>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MetafieldDefinitionSortKeys>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantPresentmentPricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  presentmentCurrencies?: InputMaybe<Array<InputMaybe<Shopify_CurrencyCode>>>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents a product variant. */
export type Shopify_ProductVariantPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a product variant. */
export type Shopify_ProductVariantTranslationsArgs = {
  locale: Scalars['String'];
};

/** An auto-generated type for paginating through multiple ProductVariants. */
export type Shopify_ProductVariantConnection = {
  __typename?: 'Shopify_ProductVariantConnection';
  /** A list of edges. */
  edges: Array<Shopify_ProductVariantEdge>;
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<Shopify_ProductVariant>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/**
 * The price of a product variant in a specific country.
 * Prices vary between countries.
 */
export type Shopify_ProductVariantContextualPricing = {
  __typename?: 'Shopify_ProductVariantContextualPricing';
  /** The final compare-at price after all adjustments are applied. */
  compareAtPrice?: Maybe<Shopify_MoneyV2>;
  /** The final price after all adjustments are applied. */
  price: Shopify_MoneyV2;
};

/** An auto-generated type which holds one ProductVariant and a cursor during pagination. */
export type Shopify_ProductVariantEdge = {
  __typename?: 'Shopify_ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantEdge. */
  node: Shopify_ProductVariant;
};

/** Specifies a product variant to create or update. */
export type Shopify_ProductVariantInput = {
  /** The value of the barcode associated with the product. */
  barcode?: InputMaybe<Scalars['String']>;
  /** The compare-at price of the variant. */
  compareAtPrice?: InputMaybe<Scalars['Money']>;
  /** The ID of the fulfillment service associated with the variant. This argument is deprecated: This field is no longer going to be supported. Fulfillment services will all be opted into SKU sharing in 2023-04. */
  fulfillmentServiceId?: InputMaybe<Scalars['ID']>;
  /** The Harmonized System Code (or HS Tariff Code) for the variant. */
  harmonizedSystemCode?: InputMaybe<Scalars['String']>;
  /** Specifies the product variant to update or create a new variant if absent. */
  id?: InputMaybe<Scalars['ID']>;
  /** The ID of the image that's associated with the variant. */
  imageId?: InputMaybe<Scalars['ID']>;
  /** The URL of an image to associate with the variant.  This field can only be used through mutations that create product images and must match one of the URLs being created on the product. */
  imageSrc?: InputMaybe<Scalars['String']>;
  /** Inventory Item associated with the variant, used for unit cost. */
  inventoryItem?: InputMaybe<Shopify_InventoryItemInput>;
  /**
   * The fulfillment service that tracks the number of items in stock for the product variant. If you track the inventory yourself using the admin, then set the value to `shopify`. Valid values: `shopify` or the handle of a fulfillment service that has inventory management enabled.
   *  This argument is deprecated: Use tracked attribute on `inventoryItem` instead.
   */
  inventoryManagement?: InputMaybe<Shopify_ProductVariantInventoryManagement>;
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy?: InputMaybe<Shopify_ProductVariantInventoryPolicy>;
  /** Create only field. The inventory quantities at each location where the variant is stocked. */
  inventoryQuantities?: InputMaybe<Array<InputMaybe<Shopify_InventoryLevelInput>>>;
  /** The URL of the media to associate with the variant. This field can only be used in mutations that create media images and must match one of the URLs being created on the product. This field only accepts one value. */
  mediaSrc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Additional customizable information about the product variant. */
  metafields?: InputMaybe<Array<InputMaybe<Shopify_MetafieldInput>>>;
  /** The custom properties that a shop owner uses to define product variants. */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position?: InputMaybe<Scalars['Int']>;
  /** The price of the variant. */
  price?: InputMaybe<Scalars['Money']>;
  /** The private metafields to associated with this product. */
  privateMetafields?: InputMaybe<Array<InputMaybe<Shopify_PrivateMetafieldInput>>>;
  /** Create only required field. Specifies the product on which to create the variant. */
  productId?: InputMaybe<Scalars['ID']>;
  /** Whether the variant requires shipping. */
  requiresShipping?: InputMaybe<Scalars['Boolean']>;
  /** The SKU for the variant. */
  sku?: InputMaybe<Scalars['String']>;
  /** The tax code associated with the variant. */
  taxCode?: InputMaybe<Scalars['String']>;
  /** Whether the variant is taxable. */
  taxable?: InputMaybe<Scalars['Boolean']>;
  /** This argument is deprecated: Variant title is not a writable field; it is generated from the selected variant options. */
  title?: InputMaybe<Scalars['String']>;
  /** The weight of the variant. */
  weight?: InputMaybe<Scalars['Float']>;
  /** The unit of weight that's used to measure the variant. */
  weightUnit?: InputMaybe<Shopify_WeightUnit>;
};

export enum Shopify_ProductVariantInventoryManagement {
  FulfillmentService = 'FULFILLMENT_SERVICE',
  NotManaged = 'NOT_MANAGED',
  Shopify = 'SHOPIFY'
}

export enum Shopify_ProductVariantInventoryPolicy {
  Continue = 'CONTINUE',
  Deny = 'DENY'
}

/** The compare-at price and price of a variant sharing a currency. */
export type Shopify_ProductVariantPricePair = {
  __typename?: 'Shopify_ProductVariantPricePair';
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<Shopify_MoneyV2>;
  /** The price of the variant with associated currency. */
  price: Shopify_MoneyV2;
};

/** An auto-generated type for paginating through multiple ProductVariantPricePairs. */
export type Shopify_ProductVariantPricePairConnection = {
  __typename?: 'Shopify_ProductVariantPricePairConnection';
  /** A list of edges. */
  edges: Array<Shopify_ProductVariantPricePairEdge>;
  /** A list of the nodes contained in ProductVariantPricePairEdge. */
  nodes: Array<Shopify_ProductVariantPricePair>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination. */
export type Shopify_ProductVariantPricePairEdge = {
  __typename?: 'Shopify_ProductVariantPricePairEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantPricePairEdge. */
  node: Shopify_ProductVariantPricePair;
};

export enum Shopify_ProductVariantSortKeys {
  FullTitle = 'FULL_TITLE',
  Id = 'ID',
  InventoryLevelsAvailable = 'INVENTORY_LEVELS_AVAILABLE',
  InventoryManagement = 'INVENTORY_MANAGEMENT',
  InventoryPolicy = 'INVENTORY_POLICY',
  InventoryQuantity = 'INVENTORY_QUANTITY',
  Name = 'NAME',
  Popular = 'POPULAR',
  Position = 'POSITION',
  Relevance = 'RELEVANCE',
  Sku = 'SKU',
  Title = 'TITLE'
}

export enum Shopify_ProfileItemSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  InventoryTotal = 'INVENTORY_TOTAL',
  ProductType = 'PRODUCT_TYPE',
  PublishedAt = 'PUBLISHED_AT',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  Vendor = 'VENDOR'
}

/** A publication is a group of products and collections that is published to an app. */
export type Shopify_Publication = {
  __typename?: 'Shopify_Publication';
  /** The app associated with the publication. */
  app: Shopify_App;
  /** The collection publications for the list of collections published to the publication. */
  collectionPublicationsV3: Shopify_ResourcePublicationConnection;
  /** The list of collections published to the publication. */
  collections: Shopify_CollectionConnection;
  /** Whether the collection is available to the publication. */
  hasCollection: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Name of the publication. */
  name: Scalars['String'];
  /** The product publications for the list of products published to the publication. */
  productPublicationsV3: Shopify_ResourcePublicationConnection;
  /** The list of products published to the publication. */
  products: Shopify_ProductConnection;
  /** Whether or not this publication supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean'];
};


/** A publication is a group of products and collections that is published to an app. */
export type Shopify_PublicationCollectionPublicationsV3Args = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A publication is a group of products and collections that is published to an app. */
export type Shopify_PublicationCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A publication is a group of products and collections that is published to an app. */
export type Shopify_PublicationHasCollectionArgs = {
  id: Scalars['ID'];
};


/** A publication is a group of products and collections that is published to an app. */
export type Shopify_PublicationProductPublicationsV3Args = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A publication is a group of products and collections that is published to an app. */
export type Shopify_PublicationProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type Shopify_Publishable = {
  __typename?: 'Shopify_Publishable';
  /**
   * Check to see whether the resource is published to a given channel.
   * @deprecated Use `publishedOnPublication` instead
   */
  publishedOnChannel: Scalars['Boolean'];
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'];
};


/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type Shopify_PublishablePublishedOnChannelArgs = {
  channelId: Scalars['ID'];
};


/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type Shopify_PublishablePublishedOnPublicationArgs = {
  publicationId: Scalars['ID'];
};

/** Published translation of a field of a resource. */
export type Shopify_PublishedTranslation = {
  __typename?: 'Shopify_PublishedTranslation';
  /** The resource field that is being translated. */
  key: Scalars['String'];
  /** The locale of this translation. */
  locale: Scalars['String'];
  /** The translation value. */
  value?: Maybe<Scalars['String']>;
};

/** The record of the line items and transactions that were refunded to a customer, along with restocking instructions for refunded line items. */
export type Shopify_Refund = {
  __typename?: 'Shopify_Refund';
  /** The date and time when the refund was created. */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** A list of the refunded duties as part of this refund. */
  duties?: Maybe<Array<Maybe<Shopify_RefundDuty>>>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The optional note associated with the refund. */
  note?: Maybe<Scalars['String']>;
  /** The order associated with the refund. */
  order: Shopify_Order;
  /** The `RefundLineItem` resources attached to the refund. */
  refundLineItems: Shopify_RefundLineItemConnection;
  /** The staff member who created the refund. */
  staffMember?: Maybe<Shopify_StaffMember>;
  /**
   * The total amount across all transactions for the refund.
   * @deprecated Use `totalRefundedSet` instead
   */
  totalRefunded: Shopify_MoneyV2;
  /** The total amount across all transactions for the refund, in shop and presentment currencies. */
  totalRefundedSet: Shopify_MoneyBag;
  /** The transactions associated with the refund. */
  transactions: Shopify_OrderTransactionConnection;
  /** The date and time when the refund was updated. */
  updatedAt: Scalars['DateTime'];
};


/** The record of the line items and transactions that were refunded to a customer, along with restocking instructions for refunded line items. */
export type Shopify_RefundRefundLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** The record of the line items and transactions that were refunded to a customer, along with restocking instructions for refunded line items. */
export type Shopify_RefundTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a refunded duty. */
export type Shopify_RefundDuty = {
  __typename?: 'Shopify_RefundDuty';
  /** The amount of a refunded duty in shop and presentment currencies. */
  amountSet: Shopify_MoneyBag;
  /** The duty associated with this refunded duty. */
  originalDuty?: Maybe<Shopify_Duty>;
};

/** The fields required to reimburse duties on a refund. */
export type Shopify_RefundDutyInput = {
  /** The ID of the duty in the refund. */
  dutyId: Scalars['ID'];
  /** The type of refund for this duty. */
  refundType?: InputMaybe<Shopify_RefundDutyRefundType>;
};

export enum Shopify_RefundDutyRefundType {
  Full = 'FULL',
  Proportional = 'PROPORTIONAL'
}

/** A line item that's included in a refund. */
export type Shopify_RefundLineItem = {
  __typename?: 'Shopify_RefundLineItem';
  /** The `LineItem` resource associated to the refunded line item. */
  lineItem: Shopify_LineItem;
  /** The inventory restock location. */
  location?: Maybe<Shopify_Location>;
  /**
   * The price of a refunded line item.
   * @deprecated Use `priceSet` instead
   */
  price: Scalars['Money'];
  /** The price of a refunded line item in shop and presentment currencies. */
  priceSet: Shopify_MoneyBag;
  /** The quantity of a refunded line item. */
  quantity: Scalars['Int'];
  /** The type of restock for the refunded line item. */
  restockType: Shopify_RefundLineItemRestockType;
  /** Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund. */
  restocked: Scalars['Boolean'];
  /**
   * The subtotal price of a refunded line item.
   * @deprecated Use `subtotalSet` instead
   */
  subtotal: Scalars['Money'];
  /** The subtotal price of a refunded line item in shop and presentment currencies. */
  subtotalSet: Shopify_MoneyBag;
  /**
   * The total tax charged on a refunded line item.
   * @deprecated Use `totalTaxSet` instead
   */
  totalTax: Scalars['Money'];
  /** The total tax charged on a refunded line item in shop and presentment currencies. */
  totalTaxSet: Shopify_MoneyBag;
};

/** An auto-generated type for paginating through multiple RefundLineItems. */
export type Shopify_RefundLineItemConnection = {
  __typename?: 'Shopify_RefundLineItemConnection';
  /** A list of edges. */
  edges: Array<Shopify_RefundLineItemEdge>;
  /** A list of the nodes contained in RefundLineItemEdge. */
  nodes: Array<Shopify_RefundLineItem>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one RefundLineItem and a cursor during pagination. */
export type Shopify_RefundLineItemEdge = {
  __typename?: 'Shopify_RefundLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of RefundLineItemEdge. */
  node: Shopify_RefundLineItem;
};

/** The fields required to reimburse line items on a refund. */
export type Shopify_RefundLineItemInput = {
  /** The ID of the line item in the refund. */
  lineItemId: Scalars['ID'];
  /** The intended location for restocking. If the `restockType` is set to `NO_RESTOCK`, then this value is empty.` */
  locationId?: InputMaybe<Scalars['ID']>;
  /** The quantity of the associated line item to be refunded. */
  quantity: Scalars['Int'];
  /** The type of restock for this line item. */
  restockType?: InputMaybe<Shopify_RefundLineItemRestockType>;
};

export enum Shopify_RefundLineItemRestockType {
  Cancel = 'CANCEL',
  LegacyRestock = 'LEGACY_RESTOCK',
  NoRestock = 'NO_RESTOCK',
  Return = 'RETURN'
}

/**
 * An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants.
 * They can optionally have a specific icon and be dismissed by merchants.
 */
export type Shopify_ResourceAlert = {
  __typename?: 'Shopify_ResourceAlert';
  /**
   * Buttons in the alert that link to related information.
   * For example, _Edit variants_.
   */
  actions: Array<Shopify_ResourceAlertAction>;
  /** The secondary text in the alert that includes further information or instructions about how to solve a problem. */
  content: Scalars['Html'];
  /**
   * Unique identifier that appears when an alert is manually closed by the merchant.
   * Most alerts cannot be manually closed.
   */
  dismissibleHandle?: Maybe<Scalars['String']>;
  /** An icon that is optionally displayed with the alert. */
  icon?: Maybe<Shopify_ResourceAlertIcon>;
  /** Indication of how important the alert is. */
  severity: Shopify_ResourceAlertSeverity;
  /** The primary text in the alert that includes information or describes the problem. */
  title: Scalars['String'];
};

/** An action associated to a resource alert, such as editing variants. */
export type Shopify_ResourceAlertAction = {
  __typename?: 'Shopify_ResourceAlertAction';
  /** Whether the action appears as a button or as a link. */
  primary: Scalars['Boolean'];
  /** Resource for the action to show. */
  show?: Maybe<Scalars['String']>;
  /** The text for the button in the alert. For example, _Edit variants_. */
  title: Scalars['String'];
  /** The target URL that the button links to. */
  url: Scalars['Url'];
};

export enum Shopify_ResourceAlertIcon {
  CheckmarkCircle = 'CHECKMARK_CIRCLE',
  InformationCircle = 'INFORMATION_CIRCLE'
}

export enum Shopify_ResourceAlertSeverity {
  Critical = 'CRITICAL',
  Default = 'DEFAULT',
  Error = 'ERROR',
  Info = 'INFO',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

/** Represents feedback from apps about a resource, and the steps required to set up the apps on the shop. */
export type Shopify_ResourceFeedback = {
  __typename?: 'Shopify_ResourceFeedback';
  /**
   * Feedback from an app about the steps a merchant needs to take to set up the app on their store.
   * @deprecated Use `details` instead
   */
  appFeedback: Array<Shopify_AppFeedback>;
  /** List of AppFeedback detailing issues regarding a resource. */
  details: Array<Shopify_AppFeedback>;
  /** Summary of resource feedback pertaining to the resource. */
  summary: Scalars['String'];
};

/** A resource limit represents the limits that the resource has. */
export type Shopify_ResourceLimit = {
  __typename?: 'Shopify_ResourceLimit';
  /** Whether or not the resource is available. */
  available: Scalars['Boolean'];
  /** Quantity available. If null the quantity available is unlimited. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Quantity limit of the resource. If null the quantity is unlimited. */
  quantityLimit?: Maybe<Scalars['Int']>;
  /** Quantity used of the resource. If null the quantity used cannot be retrieved. */
  quantityUsed?: Maybe<Scalars['Int']>;
};

/** A resource publication represents that a resource has been published to a publication. */
export type Shopify_ResourcePublication = {
  __typename?: 'Shopify_ResourcePublication';
  /**
   * The channel the resource publication is published to.
   * @deprecated Use `publication` instead
   */
  channel: Shopify_Channel;
  /**
   * Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
   * If false, then the resource publication is neither published nor scheduled to be published.
   */
  isPublished: Scalars['Boolean'];
  /** The publication the resource publication is published to. */
  publication: Shopify_Publication;
  /** The date that the resource publication was or is going to be published to the publication. */
  publishDate: Scalars['DateTime'];
  /** The resource published to the publication. */
  publishable: Shopify_Publishable;
};

/** An auto-generated type for paginating through multiple ResourcePublications. */
export type Shopify_ResourcePublicationConnection = {
  __typename?: 'Shopify_ResourcePublicationConnection';
  /** A list of edges. */
  edges: Array<Shopify_ResourcePublicationEdge>;
  /** A list of the nodes contained in ResourcePublicationEdge. */
  nodes: Array<Shopify_ResourcePublication>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one ResourcePublication and a cursor during pagination. */
export type Shopify_ResourcePublicationEdge = {
  __typename?: 'Shopify_ResourcePublicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ResourcePublicationEdge. */
  node: Shopify_ResourcePublication;
};

/** A resource publication represents that a resource either has been published or will be published to a publication. */
export type Shopify_ResourcePublicationV2 = {
  __typename?: 'Shopify_ResourcePublicationV2';
  /**
   * Whether the resource publication is published. If true, then the resource publication is published to the publication.
   * If false, then the resource publication is staged to be published to the publication.
   */
  isPublished: Scalars['Boolean'];
  /** The publication the resource publication is published to. */
  publication: Shopify_Publication;
  /** The date that the resource publication was or is going to be published to the publication. */
  publishDate?: Maybe<Scalars['DateTime']>;
  /** The resource published to the publication. */
  publishable: Shopify_Publishable;
};

/** SEO information. */
export type Shopify_Seo = {
  __typename?: 'Shopify_SEO';
  /** SEO Description. */
  description?: Maybe<Scalars['String']>;
  /** SEO Title. */
  title?: Maybe<Scalars['String']>;
};

/** SEO information. */
export type Shopify_SeoInput = {
  /** SEO description of the product. */
  description?: InputMaybe<Scalars['String']>;
  /** SEO title of the product. */
  title?: InputMaybe<Scalars['String']>;
};

/** An individual sale record associated with a sales agreement. */
export type Shopify_Sale = {
  __typename?: 'Shopify_Sale';
  /** The type of order action that the sale represents. */
  actionType: Shopify_SaleActionType;
  /** The unique identifier for the sale. */
  id: Scalars['ID'];
  /** The line type assocated with the sale. */
  lineType: Shopify_SaleLineType;
  /** The number of units either ordered or intended to be returned. */
  quantity?: Maybe<Scalars['Int']>;
  /** All individual taxes associated with the sale. */
  taxes: Array<Shopify_SaleTax>;
  /** The total sale amount after taxes and discounts. */
  totalAmount: Shopify_MoneyBag;
  /** The total discounts allocated to the sale after taxes. */
  totalDiscountAmountAfterTaxes: Shopify_MoneyBag;
  /** The total discounts allocated to the sale before taxes. */
  totalDiscountAmountBeforeTaxes: Shopify_MoneyBag;
  /** The total amount of taxes for the sale. */
  totalTaxAmount: Shopify_MoneyBag;
};

export enum Shopify_SaleActionType {
  Order = 'ORDER',
  Return = 'RETURN',
  Unknown = 'UNKNOWN',
  Update = 'UPDATE'
}

/** An auto-generated type for paginating through multiple Sales. */
export type Shopify_SaleConnection = {
  __typename?: 'Shopify_SaleConnection';
  /** A list of edges. */
  edges: Array<Shopify_SaleEdge>;
  /** A list of the nodes contained in SaleEdge. */
  nodes: Array<Shopify_Sale>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one Sale and a cursor during pagination. */
export type Shopify_SaleEdge = {
  __typename?: 'Shopify_SaleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SaleEdge. */
  node: Shopify_Sale;
};

export enum Shopify_SaleLineType {
  Adjustment = 'ADJUSTMENT',
  Duty = 'DUTY',
  GiftCard = 'GIFT_CARD',
  Product = 'PRODUCT',
  Shipping = 'SHIPPING',
  Tip = 'TIP',
  Unknown = 'UNKNOWN'
}

/** The tax allocated to a sale from a single tax line. */
export type Shopify_SaleTax = {
  __typename?: 'Shopify_SaleTax';
  /** The portion of the total tax amount on the related sale that comes from the associated tax line. */
  amount: Shopify_MoneyBag;
  /** The unique identifier for the sale tax. */
  id: Scalars['ID'];
  /** The tax line associated with the sale. */
  taxLine: Shopify_TaxLine;
};

/** An addition, removal, modification, or other sale commitment associated with an order. */
export type Shopify_SalesAgreement = {
  __typename?: 'Shopify_SalesAgreement';
  /** The application that created the agreement. */
  app?: Maybe<Shopify_App>;
  /** The date and time at which the agreement occured. */
  happenedAt: Scalars['DateTime'];
  /** The unique identifier for the agreement. */
  id: Scalars['ID'];
  /** The reason the agremeent was created. */
  reason: Shopify_OrderActionType;
  /** The sales associated with the agreement. */
  sales: Shopify_SaleConnection;
  /** The staff member associated with the agreement. */
  user?: Maybe<Shopify_StaffMember>;
};


/** An addition, removal, modification, or other sale commitment associated with an order. */
export type Shopify_SalesAgreementSalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple SalesAgreements. */
export type Shopify_SalesAgreementConnection = {
  __typename?: 'Shopify_SalesAgreementConnection';
  /** A list of edges. */
  edges: Array<Shopify_SalesAgreementEdge>;
  /** A list of the nodes contained in SalesAgreementEdge. */
  nodes: Array<Shopify_SalesAgreement>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SalesAgreement and a cursor during pagination. */
export type Shopify_SalesAgreementEdge = {
  __typename?: 'Shopify_SalesAgreementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SalesAgreementEdge. */
  node: Shopify_SalesAgreement;
};

/** A saved search is a representation of a search query saved in the admin. */
export type Shopify_SavedSearch = {
  __typename?: 'Shopify_SavedSearch';
  /** The filters of a saved search. */
  filters: Array<Shopify_SearchFilter>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The name of a saved search. */
  name: Scalars['String'];
  /** The query string of a saved search. This includes search terms and filters. */
  query: Scalars['String'];
  /** The type of resource this saved search is searching in. */
  resourceType: Shopify_SearchResultType;
  /** The search terms of a saved search. */
  searchTerms: Scalars['String'];
};

/** An auto-generated type for paginating through multiple SavedSearches. */
export type Shopify_SavedSearchConnection = {
  __typename?: 'Shopify_SavedSearchConnection';
  /** A list of edges. */
  edges: Array<Shopify_SavedSearchEdge>;
  /** A list of the nodes contained in SavedSearchEdge. */
  nodes: Array<Shopify_SavedSearch>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SavedSearch and a cursor during pagination. */
export type Shopify_SavedSearchEdge = {
  __typename?: 'Shopify_SavedSearchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SavedSearchEdge. */
  node: Shopify_SavedSearch;
};

/** A filter in a search query represented by a key value pair. */
export type Shopify_SearchFilter = {
  __typename?: 'Shopify_SearchFilter';
  /** The key of the search filter. */
  key: Scalars['String'];
  /** The value of the search filter. */
  value: Scalars['String'];
};

/** A list of search filters along with their specific options in value and label pair for filtering. */
export type Shopify_SearchFilterOptions = {
  __typename?: 'Shopify_SearchFilterOptions';
  /** A list of options that can be use to filter product availability. */
  productAvailability: Array<Shopify_FilterOption>;
};

/** Represents an individual result returned from a search. */
export type Shopify_SearchResult = {
  __typename?: 'Shopify_SearchResult';
  /** Returns the search result description text. */
  description?: Maybe<Scalars['String']>;
  /** Returns the Image resource presented to accompany a search result. */
  image?: Maybe<Shopify_Image>;
  /** Returns the ID of the resource returned in the search result. */
  reference: Shopify_Node;
  /** Returns the resource title. */
  title: Scalars['String'];
  /** Returns the absolute URL to the resource in the search result. */
  url: Scalars['Url'];
};

/** The connection type for SearchResult. */
export type Shopify_SearchResultConnection = {
  __typename?: 'Shopify_SearchResultConnection';
  /** A list of edges. */
  edges: Array<Shopify_SearchResultEdge>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
  /**
   * Information to aid in pagination.
   * @deprecated The provided information is not accurate.
   */
  resultsAfterCount: Scalars['Int'];
};

/** An auto-generated type which holds one SearchResult and a cursor during pagination. */
export type Shopify_SearchResultEdge = {
  __typename?: 'Shopify_SearchResultEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SearchResultEdge. */
  node: Shopify_SearchResult;
};

export enum Shopify_SearchResultType {
  Collection = 'COLLECTION',
  Customer = 'CUSTOMER',
  DiscountRedeemCode = 'DISCOUNT_REDEEM_CODE',
  DraftOrder = 'DRAFT_ORDER',
  File = 'FILE',
  OnlineStoreArticle = 'ONLINE_STORE_ARTICLE',
  OnlineStoreBlog = 'ONLINE_STORE_BLOG',
  OnlineStorePage = 'ONLINE_STORE_PAGE',
  Order = 'ORDER',
  PriceRule = 'PRICE_RULE',
  Product = 'PRODUCT',
  UrlRedirect = 'URL_REDIRECT'
}

/** A dynamic collection of customers based on specific criteria. */
export type Shopify_Segment = {
  __typename?: 'Shopify_Segment';
  /** The date and time when the segment was added to the store. */
  creationDate: Scalars['DateTime'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The date and time when the segment was last updated. */
  lastEditDate: Scalars['DateTime'];
  /** The name of the segment. */
  name: Scalars['String'];
  /** A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers. */
  query: Scalars['String'];
};

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
export type Shopify_SelectedOption = {
  __typename?: 'Shopify_SelectedOption';
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/**
 * Represents how a product can be sold and purchased. Selling plans and associated records (selling plan groups
 * and policies) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing
 * up these records if you need to restore them later.
 *
 * For more information on selling plans, refer to
 * [*Creating and managing selling plans*](https://shopify.dev/apps/subscriptions/selling-plans).
 */
export type Shopify_SellingPlan = {
  __typename?: 'Shopify_SellingPlan';
  /** A selling plan policy which describes the recurring billing details. */
  billingPolicy: Shopify_SellingPlanBillingPolicy;
  /** The date and time when the selling plan was created. */
  createdAt: Scalars['DateTime'];
  /** A selling plan policy which describes the delivery details. */
  deliveryPolicy: Shopify_SellingPlanDeliveryPolicy;
  /** Buyer facing string which describes the selling plan commitment. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * A customer-facing description of the selling plan.
   *
   * If your store supports multiple currencies, then don't include country-specific pricing content, such as "Buy monthly, get 10$ CAD off". This field won't be converted to reflect different currencies.
   */
  name: Scalars['String'];
  /** The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they are created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values. */
  options: Array<Scalars['String']>;
  /** Relative position of the selling plan for display. A lower position will be displayed before a higher position. */
  position?: Maybe<Scalars['Int']>;
  /** Selling plan pricing details. */
  pricingPolicies: Array<Shopify_SellingPlanPricingPolicy>;
};

/** Represents a selling plan policy anchor. */
export type Shopify_SellingPlanAnchor = {
  __typename?: 'Shopify_SellingPlanAnchor';
  /**
   * The day of the anchor.
   *
   * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
   * the days of the week according to ISO 8601, where 1 is Monday.
   *
   * If `type` is not WEEKDAY, then the value must be between 1-31.
   */
  day: Scalars['Int'];
  /**
   * The month of the anchor. If type is different than YEARDAY, this field must be null, otherwise it must be
   * between 1-12.
   */
  month?: Maybe<Scalars['Int']>;
  /** Represents the anchor type, it can be one one of WEEKDAY, MONTHDAY, YEARDAY. */
  type: Shopify_SellingPlanAnchorType;
};

export enum Shopify_SellingPlanAnchorType {
  Monthday = 'MONTHDAY',
  Weekday = 'WEEKDAY',
  Yearday = 'YEARDAY'
}

/**
 * Represents the billing frequency associated to the selling plan (for example, bill every week, or bill every
 * three months). The selling plan billing policy and associated records (selling plan groups, selling plans, pricing
 * policies, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app.
 * We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanBillingPolicy = Shopify_SellingPlanRecurringBillingPolicy;

/** An auto-generated type for paginating through multiple SellingPlans. */
export type Shopify_SellingPlanConnection = {
  __typename?: 'Shopify_SellingPlanConnection';
  /** A list of edges. */
  edges: Array<Shopify_SellingPlanEdge>;
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<Shopify_SellingPlan>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/**
 * Represents the delivery frequency associated to the selling plan (for example, deliver every month, or deliver
 * every other week). The selling plan delivery policy and associated records (selling plan groups, selling plans,
 * pricing policies, and billing policy) are deleted 48 hours after a merchant uninstalls their subscriptions app.
 * We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanDeliveryPolicy = Shopify_SellingPlanRecurringDeliveryPolicy;

/** An auto-generated type which holds one SellingPlan and a cursor during pagination. */
export type Shopify_SellingPlanEdge = {
  __typename?: 'Shopify_SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanEdge. */
  node: Shopify_SellingPlan;
};

/** Represents a fixed selling plan pricing policy. */
export type Shopify_SellingPlanFixedPricingPolicy = {
  __typename?: 'Shopify_SellingPlanFixedPricingPolicy';
  /** The price adjustment type. */
  adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType;
  /** The price adjustment value. */
  adjustmentValue: Shopify_SellingPlanPricingPolicyAdjustmentValue;
  /** The date and time when the fixed selling plan pricing policy was created. */
  createdAt: Scalars['DateTime'];
};

/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroup = {
  __typename?: 'Shopify_SellingPlanGroup';
  /** The identifier for app, exposed in Liquid and product JSON. */
  appId?: Maybe<Scalars['String']>;
  /** Whether the given product is directly associated to the selling plan group. */
  appliesToProduct: Scalars['Boolean'];
  /** Whether the given product variant is directly associated to the selling plan group. */
  appliesToProductVariant: Scalars['Boolean'];
  /** Whether any of the product variants of the given product are associated to the selling plan group. */
  appliesToProductVariants: Scalars['Boolean'];
  /** The date and time when the selling plan group was created. */
  createdAt: Scalars['DateTime'];
  /** The merchant-facing description of the selling plan group. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The merchant-facing label of the selling plan group. */
  merchantCode: Scalars['String'];
  /** The buyer-facing label of the selling plan group. */
  name: Scalars['String'];
  /** The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they are created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values. */
  options: Array<Scalars['String']>;
  /** The relative position of the selling plan group for display. */
  position?: Maybe<Scalars['Int']>;
  /** A count of products associated to the selling plan group. */
  productCount: Scalars['Int'];
  /** A count of product variants associated to the selling plan group. */
  productVariantCount: Scalars['Int'];
  /** Product variants associated to the selling plan group. */
  productVariants: Shopify_ProductVariantConnection;
  /** Products associated to the selling plan group. */
  products: Shopify_ProductConnection;
  /** Selling plans associated to the selling plan group. */
  sellingPlans: Shopify_SellingPlanConnection;
  /** A summary of the policies associated to the selling plan group. */
  summary?: Maybe<Scalars['String']>;
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupAppliesToProductArgs = {
  productId: Scalars['ID'];
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupAppliesToProductVariantArgs = {
  productVariantId: Scalars['ID'];
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupAppliesToProductVariantsArgs = {
  productId: Scalars['ID'];
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupProductVariantCountArgs = {
  productId?: InputMaybe<Scalars['ID']>;
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['ID']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 */
export type Shopify_SellingPlanGroupSellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple SellingPlanGroups. */
export type Shopify_SellingPlanGroupConnection = {
  __typename?: 'Shopify_SellingPlanGroupConnection';
  /** A list of edges. */
  edges: Array<Shopify_SellingPlanGroupEdge>;
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<Shopify_SellingPlanGroup>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SellingPlanGroup and a cursor during pagination. */
export type Shopify_SellingPlanGroupEdge = {
  __typename?: 'Shopify_SellingPlanGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanGroupEdge. */
  node: Shopify_SellingPlanGroup;
};

export enum Shopify_SellingPlanInterval {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

/**
 * Represents the type of pricing associated to the selling plan (for example, a $10 or 20% discount that is set
 * for a limited period or that is fixed for the duration of the subscription). Selling plan pricing policies and
 * associated records (selling plan groups, selling plans, billing policy, and delivery policy) are deleted 48
 * hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need
 * to restore them later.
 */
export type Shopify_SellingPlanPricingPolicy = Shopify_SellingPlanFixedPricingPolicy | Shopify_SellingPlanRecurringPricingPolicy;

export enum Shopify_SellingPlanPricingPolicyAdjustmentType {
  FixedAmount = 'FIXED_AMOUNT',
  Percentage = 'PERCENTAGE',
  Price = 'PRICE'
}

/** Represents a selling plan pricing policy adjustment value type. */
export type Shopify_SellingPlanPricingPolicyAdjustmentValue = Shopify_MoneyV2 | Shopify_SellingPlanPricingPolicyPercentageValue;

/** The percentage value of a selling plan pricing policy percentage type. */
export type Shopify_SellingPlanPricingPolicyPercentageValue = {
  __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue';
  /** The percentage value. */
  percentage: Scalars['Float'];
};

/** Represents a recurring selling plan billing policy. */
export type Shopify_SellingPlanRecurringBillingPolicy = {
  __typename?: 'Shopify_SellingPlanRecurringBillingPolicy';
  /** Specific anchor dates upon which the billing interval calculations should be made. */
  anchors: Array<Shopify_SellingPlanAnchor>;
  /** The date and time when the selling plan billing policy was created. */
  createdAt: Scalars['DateTime'];
  /** The billing frequency, it can be either: day, week, month or year. */
  interval: Shopify_SellingPlanInterval;
  /** The number of intervals between billings. */
  intervalCount: Scalars['Int'];
  /** Maximum number of billing iterations. */
  maxCycles?: Maybe<Scalars['Int']>;
  /** Minimum number of billing iterations. */
  minCycles?: Maybe<Scalars['Int']>;
};

/** Represents a recurring selling plan delivery policy. */
export type Shopify_SellingPlanRecurringDeliveryPolicy = {
  __typename?: 'Shopify_SellingPlanRecurringDeliveryPolicy';
  /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<Shopify_SellingPlanAnchor>;
  /** The date and time when the selling plan delivery policy was created. */
  createdAt: Scalars['DateTime'];
  /** A buffer period for orders to be included in a cycle. */
  cutoff?: Maybe<Scalars['Int']>;
  /**
   * Whether the delivery policy is merchant or buyer-centric.
   * Buyer-centric delivery policies state the time when the buyer will receive the goods.
   * Merchant-centric delivery policies state the time when the fulfillment should be started.
   * Currently, only merchant-centric delivery policies are supported.
   */
  intent: Shopify_SellingPlanRecurringDeliveryPolicyIntent;
  /** The delivery frequency, it can be either: day, week, month or year. */
  interval: Shopify_SellingPlanInterval;
  /** The number of intervals between deliveries. */
  intervalCount: Scalars['Int'];
  /** The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`. */
  preAnchorBehavior: Shopify_SellingPlanRecurringDeliveryPolicyPreAnchorBehavior;
};

export enum Shopify_SellingPlanRecurringDeliveryPolicyIntent {
  FulfillmentBegin = 'FULFILLMENT_BEGIN'
}

export enum Shopify_SellingPlanRecurringDeliveryPolicyPreAnchorBehavior {
  Asap = 'ASAP',
  Next = 'NEXT'
}

/** Represents a recurring selling plan pricing policy. */
export type Shopify_SellingPlanRecurringPricingPolicy = {
  __typename?: 'Shopify_SellingPlanRecurringPricingPolicy';
  /** The price adjustment type. */
  adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType;
  /** The price adjustment value. */
  adjustmentValue: Shopify_SellingPlanPricingPolicyAdjustmentValue;
  /** Cycle after which this pricing policy applies. */
  afterCycle?: Maybe<Scalars['Int']>;
  /** The date and time when the recurring selling plan pricing policy was created. */
  createdAt: Scalars['DateTime'];
};

/** Represents the shipping details that the customer chose for their order. */
export type Shopify_ShippingLine = {
  __typename?: 'Shopify_ShippingLine';
  /**
   * A reference to the carrier service that provided the rate.
   * Present when the rate was computed by a third-party carrier service.
   */
  carrierIdentifier?: Maybe<Scalars['String']>;
  /** A reference to the shipping method. */
  code?: Maybe<Scalars['String']>;
  /** Whether the shipping line is custom or not. */
  custom: Scalars['Boolean'];
  /** The general classification of the delivery method. */
  deliveryCategory?: Maybe<Scalars['String']>;
  /** The discounts that have been allocated to the shipping line. */
  discountAllocations: Array<Shopify_DiscountAllocation>;
  /**
   * The pre-tax shipping price with discounts applied.
   * @deprecated Use `discountedPriceSet` instead
   */
  discountedPrice: Shopify_MoneyV2;
  /** The pre-tax shipping price with discounts applied. */
  discountedPriceSet: Shopify_MoneyBag;
  /** A globally-unique identifier. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The pre-tax shipping price without any discounts applied.
   * @deprecated Use `originalPriceSet` instead
   */
  originalPrice: Shopify_MoneyV2;
  /** The pre-tax shipping price without any discounts applied. */
  originalPriceSet: Shopify_MoneyBag;
  /** The phone number at the shipping address. */
  phone?: Maybe<Scalars['String']>;
  /**
   * Returns the price of the shipping line.
   * @deprecated Use `originalPriceSet` instead
   */
  price: Scalars['Money'];
  /**
   * The fulfillment service requested for the shipping method.
   * Present if the shipping method requires processing by a third party fulfillment service.
   */
  requestedFulfillmentService?: Maybe<Shopify_FulfillmentService>;
  /** A unique identifier for the shipping rate. The format can change without notice and is not meant to be shown to users. */
  shippingRateHandle?: Maybe<Scalars['String']>;
  /** Returns the rate source for the shipping line. */
  source?: Maybe<Scalars['String']>;
  /** The TaxLine objects connected to this shipping line. */
  taxLines: Array<Shopify_TaxLine>;
  /** Returns the title of the shipping line. */
  title: Scalars['String'];
};

/** An auto-generated type for paginating through multiple ShippingLines. */
export type Shopify_ShippingLineConnection = {
  __typename?: 'Shopify_ShippingLineConnection';
  /** A list of edges. */
  edges: Array<Shopify_ShippingLineEdge>;
  /** A list of the nodes contained in ShippingLineEdge. */
  nodes: Array<Shopify_ShippingLine>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one ShippingLine and a cursor during pagination. */
export type Shopify_ShippingLineEdge = {
  __typename?: 'Shopify_ShippingLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShippingLineEdge. */
  node: Shopify_ShippingLine;
};

/** The shipping method for the delivery. Customers will see applicable shipping methods in the shipping section of checkout. */
export type Shopify_ShippingMethod = {
  __typename?: 'Shopify_ShippingMethod';
  /** A unique code associated with the rate. For example: `expedited_mail` */
  code: Scalars['String'];
  /**
   * A description of the rate, which customers will see at checkout.
   * For example: `Local delivery`, `Free Express Worldwide`, `Includes tracking and insurance`.
   */
  label: Scalars['String'];
};

/** Represents the shipping costs refunded on the Refund. */
export type Shopify_ShippingRefund = {
  __typename?: 'Shopify_ShippingRefund';
  /**
   * The monetary value of the shipping fees to be refunded.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The monetary value of the shipping fees to be refunded in shop and presentment currencies. */
  amountSet: Shopify_MoneyBag;
  /**
   * The maximum amount of shipping fees currently refundable.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable: Scalars['Money'];
  /** The maximum amount of shipping fees currently refundable in shop and presentment currencies. */
  maximumRefundableSet: Shopify_MoneyBag;
  /**
   * The monetary value of the tax allocated to shipping fees to be refunded.
   * @deprecated Use `taxSet` instead
   */
  tax: Scalars['Money'];
  /** The monetary value of the tax allocated to shipping fees to be refunded in shop and presentment currencies. */
  taxSet: Shopify_MoneyBag;
};

/** Represents a collection of the general settings and information about the shop. */
export type Shopify_Shop = {
  __typename?: 'Shopify_Shop';
  /** A list of the shop's active alert messages that appear in the Shopify admin. */
  alerts: Array<Shopify_ShopAlert>;
  /**
   * The token required to query the shop's reports or dashboards.
   * @deprecated Not supported anymore.
   */
  analyticsToken: Scalars['String'];
  /** The paginated list of fulfillment orders assigned to fulfillment services. */
  assignedFulfillmentOrders: Shopify_FulfillmentOrderConnection;
  /** The list of sales channels not currently installed on the shop. */
  availableChannelApps: Shopify_AppConnection;
  /** The shop's billing address information. */
  billingAddress: Shopify_MailingAddress;
  /**
   * Exposes the number of channels.
   * @deprecated Use `publicationCount` instead
   */
  channelCount: Scalars['Int'];
  /** List of all channel definitions associated with a shop. */
  channelDefinitionsForInstalledChannels: Array<Shopify_AvailableChannelDefinitionsByChannel>;
  /**
   * List of the shop's active sales channels.
   * @deprecated Use `QueryRoot.channels` instead.
   */
  channels: Shopify_ChannelConnection;
  /** Specifies whether the shop supports checkouts via Checkout API. */
  checkoutApiSupported: Scalars['Boolean'];
  /**
   * Return a collection by its handle.
   * @deprecated Use `QueryRoot.collectionByHandle` instead.
   */
  collectionByHandle?: Maybe<Shopify_Collection>;
  /**
   * List of the shop's collection saved searches.
   * @deprecated Use `QueryRoot.collectionSavedSearches` instead.
   */
  collectionSavedSearches: Shopify_SavedSearchConnection;
  /**
   * List of the shop's collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: Shopify_CollectionConnection;
  /**
   * The public-facing contact email address for the shop.
   * Customers will use this email to communicate with the shop owner.
   */
  contactEmail: Scalars['String'];
  /** Countries that have been defined in shipping zones for the shop. */
  countriesInShippingZones: Shopify_CountriesInShippingZones;
  /** The three letter code for the shop's currency. */
  currencyCode: Shopify_CurrencyCode;
  /** How currencies are displayed on your store. */
  currencyFormats: Shopify_CurrencyFormats;
  /** The presentment currency settings for the shop excluding the shop's own currency. */
  currencySettings: Shopify_CurrencySettingConnection;
  /** Whether customer accounts are required, optional, or disabled for the shop. */
  customerAccounts: Shopify_ShopCustomerAccountsSetting;
  /**
   * List of the shop's customer saved searches.
   * @deprecated Use `QueryRoot.customerSavedSearches` instead.
   */
  customerSavedSearches: Shopify_SavedSearchConnection;
  /** A list of tags that have been added to customer accounts. */
  customerTags: Shopify_StringConnection;
  /**
   * Customer accounts associated to the shop.
   * @deprecated Use `QueryRoot.customers` instead.
   */
  customers: Shopify_CustomerConnection;
  /** The shop's meta description used in search engine results. */
  description?: Maybe<Scalars['String']>;
  /** The domains configured for the shop. */
  domains: Array<Shopify_Domain>;
  /**
   * List of the shop's draft order saved searches.
   * @deprecated Use `QueryRoot.draftOrderSavedSearches` instead.
   */
  draftOrderSavedSearches: Shopify_SavedSearchConnection;
  /** A list of tags that have been added to draft orders. */
  draftOrderTags: Shopify_StringConnection;
  /**
   * List of saved draft orders on the shop.
   * @deprecated Use `QueryRoot.draftOrders` instead.
   */
  draftOrders: Shopify_DraftOrderConnection;
  /**
   * The shop owner's email address.
   * Shopify will use this email address to communicate with the shop owner.
   */
  email: Scalars['String'];
  /** The presentment currencies enabled for the shop. */
  enabledPresentmentCurrencies: Array<Shopify_CurrencyCode>;
  /** The set of features enabled for the shop. */
  features: Shopify_ShopFeatures;
  /** The paginated list of merchant-managed and third-party fulfillment orders. */
  fulfillmentOrders: Shopify_FulfillmentOrderConnection;
  /** List of the shop's installed fulfillment services. */
  fulfillmentServices: Array<Shopify_FulfillmentService>;
  /** The shop's time zone as defined by the IANA. */
  ianaTimezone: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * List of the shop's inventory items.
   * @deprecated Use `QueryRoot.inventoryItems` instead.
   */
  inventoryItems: Shopify_InventoryItemConnection;
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   */
  limitedPendingOrderCount: Shopify_LimitedPendingOrderCount;
  /**
   * List of active locations of the shop.
   * @deprecated Use `QueryRoot.locations` instead.
   */
  locations: Shopify_LocationConnection;
  /**
   * List of a shop's marketing events.
   * @deprecated Use `QueryRoot.marketingEvents` instead.
   */
  marketingEvents: Shopify_MarketingEventConnection;
  /** The approval signals for a shop to support onboarding to channel apps. */
  merchantApprovalSignals?: Maybe<Shopify_MerchantApprovalSignals>;
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Shopify_Metafield>;
  /** List of metafields that belong to the resource. */
  metafields: Shopify_MetafieldConnection;
  /** The shop's .myshopify.com domain name. */
  myshopifyDomain: Scalars['String'];
  /** The shop's name. */
  name: Scalars['String'];
  /** The shop's settings related to navigation. */
  navigationSettings: Array<Shopify_NavigationItem>;
  /** The prefix that appears before order numbers. */
  orderNumberFormatPrefix: Scalars['String'];
  /** The suffix that appears after order numbers. */
  orderNumberFormatSuffix: Scalars['String'];
  /**
   * List of the shop's order saved searches.
   * @deprecated Use `QueryRoot.orderSavedSearches` instead.
   */
  orderSavedSearches: Shopify_SavedSearchConnection;
  /** A list of tags that have been added to orders. */
  orderTags: Shopify_StringConnection;
  /**
   * A list of the shop's orders.
   * @deprecated Use `QueryRoot.orders` instead.
   */
  orders: Shopify_OrderConnection;
  /** The shop's settings related to payments. */
  paymentSettings: Shopify_PaymentSettings;
  /**
   * Number of pending orders on the shop.
   * @deprecated Use `limitedPendingOrderCount` instead
   */
  pendingOrderCount: Scalars['Int'];
  /** The shop's billing plan. */
  plan: Shopify_ShopPlan;
  /**
   * List of the shop's price rule saved searches.
   * @deprecated Use `QueryRoot.priceRuleSavedSearches` instead.
   */
  priceRuleSavedSearches: Shopify_SavedSearchConnection;
  /**
   * List of the shop’s price rules.
   * @deprecated Use `QueryRoot.priceRules` instead.
   */
  priceRules: Shopify_PriceRuleConnection;
  /** The shop's primary domain name. */
  primaryDomain: Shopify_Domain;
  /** Returns a private metafield by namespace and key that belongs to the resource. */
  privateMetafield?: Maybe<Shopify_PrivateMetafield>;
  /** List of private metafields that belong to the resource. */
  privateMetafields: Shopify_PrivateMetafieldConnection;
  /**
   * Return a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle?: Maybe<Shopify_Product>;
  /** The list of all images of all products for the shop. */
  productImages: Shopify_ImageConnection;
  /**
   * List of the shop's product saved searches.
   * @deprecated Use `QueryRoot.productSavedSearches` instead.
   */
  productSavedSearches: Shopify_SavedSearchConnection;
  /** A list of tags that have been added to products. */
  productTags: Shopify_StringConnection;
  /** The list of types added to products. */
  productTypes: Shopify_StringConnection;
  /**
   * List of the shop's product variants.
   * @deprecated Use `QueryRoot.productVariants` instead.
   */
  productVariants: Shopify_ProductVariantConnection;
  /** The list of vendors added to products. */
  productVendors: Shopify_StringConnection;
  /**
   * List of the shop's products.
   * @deprecated Use `QueryRoot.products`.
   */
  products: Shopify_ProductConnection;
  /** The shop's limits for specific resources. For example, the maximum number ofvariants allowed per product, or the maximum number of locations allowed. */
  resourceLimits: Shopify_ShopResourceLimits;
  /** The URL of the rich text editor that can be used for mobile devices. */
  richTextEditorUrl: Scalars['Url'];
  /** Fetches a list of admin search results by a specified query. */
  search: Shopify_SearchResultConnection;
  /** The list of search filter options for the shop. These can be used to filter productvisibility for the shop. */
  searchFilters: Shopify_SearchFilterOptions;
  /** Whether the shop has outstanding setup steps. */
  setupRequired: Scalars['Boolean'];
  /** The list of countries that the shop ships to. */
  shipsToCountries: Array<Shopify_CountryCode>;
  /** The list of all legal policies associated with a shop. */
  shopPolicies: Array<Shopify_ShopPolicy>;
  /**
   * Shopify Payments account information, including balances and payouts.
   * @deprecated Use `QueryRoot.shopifyPaymentsAccount` instead.
   */
  shopifyPaymentsAccount?: Maybe<Shopify_ShopifyPaymentsAccount>;
  /** The paginated list of the shop's staff members. */
  staffMembers: Shopify_StaffMemberConnection;
  /** The storefront access token of a private application. These are scoped per-application. */
  storefrontAccessTokens: Shopify_StorefrontAccessTokenConnection;
  /**
   * The URL of the shop's storefront.
   * @deprecated Use `url` instead
   */
  storefrontUrl: Scalars['Url'];
  /** Whether the shop charges taxes for shipping. */
  taxShipping: Scalars['Boolean'];
  /** Whether applicable taxes are included in the shop's product prices. */
  taxesIncluded: Scalars['Boolean'];
  /** The shop's time zone abbreviation. */
  timezoneAbbreviation: Scalars['String'];
  /** The shop's time zone offset. */
  timezoneOffset: Scalars['String'];
  /** The shop's time zone offset expressed as a number of minutes. */
  timezoneOffsetMinutes: Scalars['Int'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /** The shop's unit system for weights and measures. */
  unitSystem: Shopify_UnitSystem;
  /** Fetches a list of images uploaded to the shop by their IDs. */
  uploadedImagesByIds: Array<Shopify_Image>;
  /** The URL of the shop's online store. */
  url: Scalars['Url'];
  /** The shop's primary unit of weight for products and shipping. */
  weightUnit: Shopify_WeightUnit;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopAssignedFulfillmentOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  assignmentStatus?: InputMaybe<Shopify_FulfillmentOrderAssignmentStatus>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_FulfillmentOrderSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopAvailableChannelAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopChannelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCollectionSavedSearchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_CollectionSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCurrencySettingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCustomerSavedSearchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_CustomerSavedSearchSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCustomerTagsArgs = {
  first: Scalars['Int'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_CustomerSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopDraftOrderSavedSearchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopDraftOrderTagsArgs = {
  first: Scalars['Int'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_DraftOrderSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopFulfillmentOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeClosed?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_FulfillmentOrderSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopInventoryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeInactive?: InputMaybe<Scalars['Boolean']>;
  includeLegacy?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_LocationSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopMarketingEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_MarketingEventSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopOrderSavedSearchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopOrderTagsArgs = {
  first: Scalars['Int'];
  sort?: InputMaybe<Shopify_ShopTagSort>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_OrderSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopPriceRuleSavedSearchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopPriceRulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_PriceRuleSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopPrivateMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopPrivateMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductByHandleArgs = {
  handle: Scalars['String'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Shopify_CropRegion>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  scale?: InputMaybe<Scalars['Int']>;
  sortKey?: InputMaybe<Shopify_ProductImageSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductSavedSearchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductTagsArgs = {
  first: Scalars['Int'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductTypesArgs = {
  first: Scalars['Int'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Shopify_ProductVariantSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductVendorsArgs = {
  first: Scalars['Int'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductSortKeys>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  query: Scalars['String'];
  types?: InputMaybe<Array<InputMaybe<Shopify_SearchResultType>>>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopStaffMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopStorefrontAccessTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopTranslationsArgs = {
  locale: Scalars['String'];
};


/** Represents a collection of the general settings and information about the shop. */
export type Shopify_ShopUploadedImagesByIdsArgs = {
  imageIds: Array<Scalars['ID']>;
};

/** An alert message that appears in the Shopify admin about a problem with a store setting, with an action to take. For example, you could show an alert to ask the merchant to enter their billing information to activate Shopify Plus. */
export type Shopify_ShopAlert = {
  __typename?: 'Shopify_ShopAlert';
  /** The text for the button in the alert that links to related information. For example, _Add credit card_. */
  action: Shopify_ShopAlertAction;
  /** A description of the alert and further information, such as whether the merchant will be charged. */
  description: Scalars['String'];
};

/** An action associated to a shop alert, such as adding a credit card. */
export type Shopify_ShopAlertAction = {
  __typename?: 'Shopify_ShopAlertAction';
  /** The text for the button in the alert. For example, _Add credit card_. */
  title: Scalars['String'];
  /** The target URL that the button links to. */
  url: Scalars['Url'];
};

export enum Shopify_ShopBranding {
  Rogers = 'ROGERS',
  Shopify = 'SHOPIFY',
  ShopifyGold = 'SHOPIFY_GOLD',
  ShopifyPlus = 'SHOPIFY_PLUS'
}

export enum Shopify_ShopCustomerAccountsSetting {
  Disabled = 'DISABLED',
  Optional = 'OPTIONAL',
  Required = 'REQUIRED'
}

/**
 * Represents the feature set available to the shop.
 * Most fields specify whether a feature is enabled for a shop, and some fields return information
 * related to specific features.
 */
export type Shopify_ShopFeatures = {
  __typename?: 'Shopify_ShopFeatures';
  /** Whether a shop has access to Avalara AvaTax. */
  avalaraAvatax: Scalars['Boolean'];
  /** The branding of the shop, which influences its look and feel in the Shopify admin. */
  branding: Shopify_ShopBranding;
  /** Whether a shop's online store can have CAPTCHA protection. */
  captcha: Scalars['Boolean'];
  /** Whether a shop's online store can have CAPTCHA protection for domains not managed by Shopify. */
  captchaExternalDomains: Scalars['Boolean'];
  /**
   * Whether the delivery profiles functionality is enabled for this shop.
   * @deprecated Delivery profiles are now 100% enabled across Shopify.
   */
  deliveryProfiles: Scalars['Boolean'];
  /** Whether a shop has access to the Google Analytics dynamic remarketing feature. */
  dynamicRemarketing: Scalars['Boolean'];
  /** Whether a shop can be migrated to use Shopify subscriptions. */
  eligibleForSubscriptionMigration: Scalars['Boolean'];
  /** Whether a shop is configured properly to sell subscriptions. */
  eligibleForSubscriptions: Scalars['Boolean'];
  /** Whether a shop can create gift cards. */
  giftCards: Scalars['Boolean'];
  /**
   * Whether a shop displays Harmonized System codes on products. This is used for customs when shipping
   * internationally.
   */
  harmonizedSystemCode: Scalars['Boolean'];
  /** Whether a shop can enable international domains. */
  internationalDomains: Scalars['Boolean'];
  /** Whether a shop can enable international price overrides. */
  internationalPriceOverrides: Scalars['Boolean'];
  /** Whether a shop can enable international price rules. */
  internationalPriceRules: Scalars['Boolean'];
  /** Whether a shop has enabled a legacy subscription gateway to handle older subscriptions. */
  legacySubscriptionGatewayEnabled: Scalars['Boolean'];
  /**
   * Whether to show the Live View metrics in the Shopify admin. Live view is hidden from merchants that are on a trial
   * or don't have a storefront.
   */
  liveView: Scalars['Boolean'];
  /**
   * Whether a shop has multi-location functionality.
   * @deprecated All shops support multi-location inventory. Use `QueryRoot.locations` to determine whether shop has more than one location.
   *
   */
  multiLocation: Scalars['Boolean'];
  /** Whether a shop has access to the onboarding visual. */
  onboardingVisual: Scalars['Boolean'];
  /** Whether a shop is configured to sell subscriptions with PayPal Express. */
  paypalExpressSubscriptionGatewayStatus: Shopify_PaypalExpressSubscriptionsGatewayStatus;
  /** Whether a shop has access to all reporting features. */
  reports: Scalars['Boolean'];
  /** Whether a shop has ever had subscription products. */
  sellsSubscriptions: Scalars['Boolean'];
  /**
   * Whether the shop has a Shopify Plus subscription.
   * @deprecated Use Shop.plan.shopifyPlus instead.
   */
  shopifyPlus: Scalars['Boolean'];
  /** Whether to show metrics in the Shopify admin. Metrics are hidden for new merchants until they become meaningful. */
  showMetrics: Scalars['Boolean'];
  /** Whether a shop has an online store. */
  storefront: Scalars['Boolean'];
  /** Whether a shop is using Shopify Balance. */
  usingShopifyBalance: Scalars['Boolean'];
};

/** Represents the billing plan of the shop. */
export type Shopify_ShopPlan = {
  __typename?: 'Shopify_ShopPlan';
  /** The name of the shop's billing plan. */
  displayName: Scalars['String'];
  /** Whether the shop is a partner development shop for testing purposes. */
  partnerDevelopment: Scalars['Boolean'];
  /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars['Boolean'];
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type Shopify_ShopPolicy = {
  __typename?: 'Shopify_ShopPolicy';
  /** The text of the policy. The maximum size is 512kb. */
  body: Scalars['Html'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The translations associated with the resource. */
  translations: Array<Shopify_PublishedTranslation>;
  /** The shop policy type. */
  type: Shopify_ShopPolicyType;
  /** The public URL of the policy. */
  url: Scalars['Url'];
};


/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type Shopify_ShopPolicyTranslationsArgs = {
  locale: Scalars['String'];
};

export enum Shopify_ShopPolicyType {
  LegalNotice = 'LEGAL_NOTICE',
  PrivacyPolicy = 'PRIVACY_POLICY',
  RefundPolicy = 'REFUND_POLICY',
  ShippingPolicy = 'SHIPPING_POLICY',
  SubscriptionPolicy = 'SUBSCRIPTION_POLICY',
  TermsOfSale = 'TERMS_OF_SALE',
  TermsOfService = 'TERMS_OF_SERVICE'
}

/** Resource limits of a shop. */
export type Shopify_ShopResourceLimits = {
  __typename?: 'Shopify_ShopResourceLimits';
  /** Maximum number of locations allowed. */
  locationLimit: Scalars['Int'];
  /** Maximum number of product options allowed. */
  maxProductOptions: Scalars['Int'];
  /** The maximum number of variants allowed per product. */
  maxProductVariants: Scalars['Int'];
  /** Whether the shop has reached the limit of the number of URL redirects it can make for resources. */
  redirectLimitReached: Scalars['Boolean'];
  /** The maximum number of variants allowed per shop. If the shop has unlimited SKUs, then the quantity used cannot be retrieved. */
  skuResourceLimits: Shopify_ResourceLimit;
};

export enum Shopify_ShopTagSort {
  Alphabetical = 'ALPHABETICAL',
  Popular = 'POPULAR'
}

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type Shopify_ShopifyPaymentsAccount = {
  __typename?: 'Shopify_ShopifyPaymentsAccount';
  /** Whether the Shopify Payments setup is completed. */
  activated: Scalars['Boolean'];
  /** Current balances in all currencies for the account. */
  balance: Array<Shopify_MoneyV2>;
  /** All bank accounts configured for the Shopify Payments account. */
  bankAccounts: Shopify_ShopifyPaymentsBankAccountConnection;
  /**
   * Statement descriptor used for charges.
   *
   * This is what buyers will see on their credit card or bank statements when making a purchase.
   * @deprecated Use `chargeStatementDescriptors` instead
   */
  chargeStatementDescriptor?: Maybe<Scalars['String']>;
  /**
   * Statement descriptors used for charges.
   *
   * This is what buyers will see on their credit card or bank statements when making a purchase.
   */
  chargeStatementDescriptors?: Maybe<Shopify_ShopifyPaymentsChargeStatementDescriptor>;
  /** The Shopify Payments account country. */
  country: Scalars['String'];
  /** The default payout currency for the Shopify Payments account. */
  defaultCurrency: Shopify_CurrencyCode;
  /** All disputes related to the Shopify Payments account. */
  disputes: Shopify_ShopifyPaymentsDisputeConnection;
  /** The fraud settings of the Shopify Payments account. */
  fraudSettings: Shopify_ShopifyPaymentsFraudSettings;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The notifications settings for the account. */
  notificationSettings: Shopify_ShopifyPaymentsNotificationSettings;
  /** Whether the Shopify Payments account can be onboarded. */
  onboardable: Scalars['Boolean'];
  /** Payout schedule for the account. */
  payoutSchedule: Shopify_ShopifyPaymentsPayoutSchedule;
  /**
   * Descriptor used for payouts.
   *
   * This is what merchants will see on their bank statement when receiving a payout.
   */
  payoutStatementDescriptor?: Maybe<Scalars['String']>;
  /** All current and previous payouts made between the account and the bank account. */
  payouts: Shopify_ShopifyPaymentsPayoutConnection;
  /** The permitted documents for identity verification. */
  permittedVerificationDocuments: Array<Shopify_ShopifyPaymentsVerificationDocument>;
  /** The verifications necessary for this account. */
  verifications: Array<Shopify_ShopifyPaymentsVerification>;
};


/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type Shopify_ShopifyPaymentsAccountBankAccountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type Shopify_ShopifyPaymentsAccountDisputesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type Shopify_ShopifyPaymentsAccountPayoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  transactionType?: InputMaybe<Shopify_ShopifyPaymentsPayoutTransactionType>;
};

/** A bank account that can receive payouts. */
export type Shopify_ShopifyPaymentsBankAccount = {
  __typename?: 'Shopify_ShopifyPaymentsBankAccount';
  /** The account number of the bank account. */
  accountNumber: Scalars['String'];
  /** The last digits of the account number (the rest is redacted). */
  accountNumberLastDigits: Scalars['String'];
  /** The name of the bank. */
  bankName?: Maybe<Scalars['String']>;
  /** The country of the bank. */
  country: Shopify_CountryCode;
  /** The date that the bank account was created. */
  createdAt: Scalars['DateTime'];
  /** The currency of the bank account. */
  currency: Shopify_CurrencyCode;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** All current and previous payouts made between the account and the bank account. */
  payouts: Shopify_ShopifyPaymentsPayoutConnection;
  /** The routing number of the bank account. */
  routingNumber: Scalars['String'];
  /** The status of the bank account. */
  status: Shopify_ShopifyPaymentsBankAccountStatus;
};


/** A bank account that can receive payouts. */
export type Shopify_ShopifyPaymentsBankAccountPayoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  transactionType?: InputMaybe<Shopify_ShopifyPaymentsPayoutTransactionType>;
};

/** An auto-generated type for paginating through multiple ShopifyPaymentsBankAccounts. */
export type Shopify_ShopifyPaymentsBankAccountConnection = {
  __typename?: 'Shopify_ShopifyPaymentsBankAccountConnection';
  /** A list of edges. */
  edges: Array<Shopify_ShopifyPaymentsBankAccountEdge>;
  /** A list of the nodes contained in ShopifyPaymentsBankAccountEdge. */
  nodes: Array<Shopify_ShopifyPaymentsBankAccount>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one ShopifyPaymentsBankAccount and a cursor during pagination. */
export type Shopify_ShopifyPaymentsBankAccountEdge = {
  __typename?: 'Shopify_ShopifyPaymentsBankAccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShopifyPaymentsBankAccountEdge. */
  node: Shopify_ShopifyPaymentsBankAccount;
};

export enum Shopify_ShopifyPaymentsBankAccountStatus {
  Errored = 'ERRORED',
  New = 'NEW',
  Validated = 'VALIDATED',
  Verified = 'VERIFIED'
}

/** The charge descriptors for a payments account. */
export type Shopify_ShopifyPaymentsChargeStatementDescriptor = {
  __typename?: 'Shopify_ShopifyPaymentsChargeStatementDescriptor';
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>;
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'];
};

/** A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution. */
export type Shopify_ShopifyPaymentsDispute = {
  __typename?: 'Shopify_ShopifyPaymentsDispute';
  /** The total amount disputed by the cardholder. */
  amount: Shopify_MoneyV2;
  /** The deadline for evidence submission. */
  evidenceDueBy?: Maybe<Scalars['Date']>;
  /** The date when evidence was sent. Returns null if evidence has not yet been sent. */
  evidenceSentOn?: Maybe<Scalars['Date']>;
  /** The date when this dispute was resolved. Returns null if the dispute is not yet resolved. */
  finalizedOn?: Maybe<Scalars['Date']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The date when this dispute was initiated. */
  initiatedAt: Scalars['DateTime'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The order that contains the charge that is under dispute. */
  order?: Maybe<Shopify_Order>;
  /** The reason of the dispute. */
  reasonDetails: Shopify_ShopifyPaymentsDisputeReasonDetails;
  /** The current state of the dispute. */
  status: Shopify_DisputeStatus;
  /** Indicates if this dispute is still in the inquiry phase or has turned into a chargeback. */
  type: Shopify_DisputeType;
};

/** An auto-generated type for paginating through multiple ShopifyPaymentsDisputes. */
export type Shopify_ShopifyPaymentsDisputeConnection = {
  __typename?: 'Shopify_ShopifyPaymentsDisputeConnection';
  /** A list of edges. */
  edges: Array<Shopify_ShopifyPaymentsDisputeEdge>;
  /** A list of the nodes contained in ShopifyPaymentsDisputeEdge. */
  nodes: Array<Shopify_ShopifyPaymentsDispute>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one ShopifyPaymentsDispute and a cursor during pagination. */
export type Shopify_ShopifyPaymentsDisputeEdge = {
  __typename?: 'Shopify_ShopifyPaymentsDisputeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShopifyPaymentsDisputeEdge. */
  node: Shopify_ShopifyPaymentsDispute;
};

export enum Shopify_ShopifyPaymentsDisputeReason {
  BankCannotProcess = 'BANK_CANNOT_PROCESS',
  CreditNotProcessed = 'CREDIT_NOT_PROCESSED',
  CustomerInitiated = 'CUSTOMER_INITIATED',
  DebitNotAuthorized = 'DEBIT_NOT_AUTHORIZED',
  Duplicate = 'DUPLICATE',
  Fraudulent = 'FRAUDULENT',
  General = 'GENERAL',
  IncorrectAccountDetails = 'INCORRECT_ACCOUNT_DETAILS',
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  ProductNotReceived = 'PRODUCT_NOT_RECEIVED',
  ProductUnacceptable = 'PRODUCT_UNACCEPTABLE',
  SubscriptionCancelled = 'SUBSCRIPTION_CANCELLED',
  Unrecognized = 'UNRECOGNIZED'
}

/** Details regarding a dispute reason. */
export type Shopify_ShopifyPaymentsDisputeReasonDetails = {
  __typename?: 'Shopify_ShopifyPaymentsDisputeReasonDetails';
  /** The raw code provided by the payment network. */
  networkReasonCode?: Maybe<Scalars['String']>;
  /** The reason for the dispute provided by the cardholder's banks. */
  reason: Shopify_ShopifyPaymentsDisputeReason;
};

/** Presents all Shopify Payments information related to an extended authorization. */
export type Shopify_ShopifyPaymentsExtendedAuthorization = {
  __typename?: 'Shopify_ShopifyPaymentsExtendedAuthorization';
  /** The time after which the extended authorization expires. After the expiry, the merchant is unable to capture the payment. */
  extendedAuthorizationExpiresAt: Scalars['DateTime'];
  /** The time after which capture will incur an additional fee. */
  standardAuthorizationExpiresAt: Scalars['DateTime'];
};

/** The fraud settings of a payments account. */
export type Shopify_ShopifyPaymentsFraudSettings = {
  __typename?: 'Shopify_ShopifyPaymentsFraudSettings';
  /** Decline a charge if there is an AVS failure. */
  declineChargeOnAvsFailure: Scalars['Boolean'];
  /** Decline a charge if there is an CVC failure. */
  declineChargeOnCvcFailure: Scalars['Boolean'];
};

/** The notification settings for the account. */
export type Shopify_ShopifyPaymentsNotificationSettings = {
  __typename?: 'Shopify_ShopifyPaymentsNotificationSettings';
  /** Receive email notifications when new payouts are sent or payouts fail. */
  payouts: Scalars['Boolean'];
};

/**
 * Payouts represent the movement of money between a merchant's Shopify
 * Payments balance and their bank account.
 */
export type Shopify_ShopifyPaymentsPayout = {
  __typename?: 'Shopify_ShopifyPaymentsPayout';
  /** The bank account for the payout. */
  bankAccount?: Maybe<Shopify_ShopifyPaymentsBankAccount>;
  /**
   * The total amount and currency of the payout.
   * @deprecated Use `net` instead
   */
  gross: Shopify_MoneyV2;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * The exact time when the payout was issued. The payout only contains
   * balance transactions that were available at this time.
   */
  issuedAt: Scalars['DateTime'];
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
  /** The total amount and currency of the payout. */
  net: Shopify_MoneyV2;
  /** The transfer status of the payout. */
  status: Shopify_ShopifyPaymentsPayoutStatus;
  /** The summary of the payout. */
  summary: Shopify_ShopifyPaymentsPayoutSummary;
  /** The direction of the payout. */
  transactionType: Shopify_ShopifyPaymentsPayoutTransactionType;
};

/** An auto-generated type for paginating through multiple ShopifyPaymentsPayouts. */
export type Shopify_ShopifyPaymentsPayoutConnection = {
  __typename?: 'Shopify_ShopifyPaymentsPayoutConnection';
  /** A list of edges. */
  edges: Array<Shopify_ShopifyPaymentsPayoutEdge>;
  /** A list of the nodes contained in ShopifyPaymentsPayoutEdge. */
  nodes: Array<Shopify_ShopifyPaymentsPayout>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one ShopifyPaymentsPayout and a cursor during pagination. */
export type Shopify_ShopifyPaymentsPayoutEdge = {
  __typename?: 'Shopify_ShopifyPaymentsPayoutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShopifyPaymentsPayoutEdge. */
  node: Shopify_ShopifyPaymentsPayout;
};

export enum Shopify_ShopifyPaymentsPayoutInterval {
  Daily = 'DAILY',
  Manual = 'MANUAL',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

/** The payment schedule for a payments account. */
export type Shopify_ShopifyPaymentsPayoutSchedule = {
  __typename?: 'Shopify_ShopifyPaymentsPayoutSchedule';
  /** The interval at which payouts are sent to the connected bank account. */
  interval: Shopify_ShopifyPaymentsPayoutInterval;
  /**
   * The day of the month funds will be paid out.
   *
   * The value can be any day of the month from the 1st to the 31st.
   * If the payment interval is set to monthly, this value will be used.
   * Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.
   */
  monthlyAnchor?: Maybe<Scalars['Int']>;
  /**
   * The day of the week funds will be paid out.
   *
   * The value can be any weekday from Monday to Friday.
   * If the payment interval is set to weekly, this value will be used.
   */
  weeklyAnchor?: Maybe<Shopify_DayOfTheWeek>;
};

export enum Shopify_ShopifyPaymentsPayoutStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  InTransit = 'IN_TRANSIT',
  Paid = 'PAID',
  Scheduled = 'SCHEDULED'
}

/**
 * Breakdown of the total fees and gross of each of the different types of transactions associated
 * with the payout.
 */
export type Shopify_ShopifyPaymentsPayoutSummary = {
  __typename?: 'Shopify_ShopifyPaymentsPayoutSummary';
  /** Total fees for all adjustments including disputes. */
  adjustmentsFee: Shopify_MoneyV2;
  /** Total gross amount for all adjustments including disputes. */
  adjustmentsGross: Shopify_MoneyV2;
  /** Total fees for all charges. */
  chargesFee: Shopify_MoneyV2;
  /** Total gross amount for all charges. */
  chargesGross: Shopify_MoneyV2;
  /** Total fees for all refunds. */
  refundsFee: Shopify_MoneyV2;
  /** Total gross amount for all refunds. */
  refundsFeeGross: Shopify_MoneyV2;
  /** Total fees for all reserved funds. */
  reservedFundsFee: Shopify_MoneyV2;
  /** Total gross amount for all reserved funds. */
  reservedFundsGross: Shopify_MoneyV2;
  /** Total fees for all retried payouts. */
  retriedPayoutsFee: Shopify_MoneyV2;
  /** Total gross amount for all retried payouts. */
  retriedPayoutsGross: Shopify_MoneyV2;
};

export enum Shopify_ShopifyPaymentsPayoutTransactionType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

/** Presents all Shopify Payments specific information related to an order refund. */
export type Shopify_ShopifyPaymentsRefundSet = {
  __typename?: 'Shopify_ShopifyPaymentsRefundSet';
  /** The acquirer reference number (ARN) code generated for Visa/Mastercard transactions. */
  acquirerReferenceNumber?: Maybe<Scalars['String']>;
};

/** Presents all Shopify Payments specific information related to an order transaction. */
export type Shopify_ShopifyPaymentsTransactionSet = {
  __typename?: 'Shopify_ShopifyPaymentsTransactionSet';
  /** Contains all fields related to an extended authorization. */
  extendedAuthorizationSet?: Maybe<Shopify_ShopifyPaymentsExtendedAuthorization>;
  /** Contains all fields related to a refund. */
  refundSet?: Maybe<Shopify_ShopifyPaymentsRefundSet>;
};

/**
 * Each subject (individual) of an account has a verification object giving
 *  information about the verification state.
 */
export type Shopify_ShopifyPaymentsVerification = {
  __typename?: 'Shopify_ShopifyPaymentsVerification';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The status of the verification. */
  status: Shopify_ShopifyPaymentsVerificationStatus;
  /** The subject/individual who has to be verified. */
  subject: Shopify_ShopifyPaymentsVerificationSubject;
};

/** A document which can be used to verify an individual. */
export type Shopify_ShopifyPaymentsVerificationDocument = {
  __typename?: 'Shopify_ShopifyPaymentsVerificationDocument';
  /** True if the back side of the document is required. */
  backRequired: Scalars['Boolean'];
  /** True if the front side of the document is required. */
  frontRequired: Scalars['Boolean'];
  /** The type of the document which can be used for verification. */
  type: Shopify_ShopifyPaymentsVerificationDocumentType;
};

export enum Shopify_ShopifyPaymentsVerificationDocumentType {
  DriversLicense = 'DRIVERS_LICENSE',
  GovernmentIdentification = 'GOVERNMENT_IDENTIFICATION',
  Passport = 'PASSPORT'
}

export enum Shopify_ShopifyPaymentsVerificationStatus {
  Pending = 'PENDING',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

/** The verification subject represents an individual that has to be verified. */
export type Shopify_ShopifyPaymentsVerificationSubject = {
  __typename?: 'Shopify_ShopifyPaymentsVerificationSubject';
  /** The family name of the individual to verify. */
  familyName: Scalars['String'];
  /** The given name of the individual to verify. */
  givenName: Scalars['String'];
};

/** Represents the data about a staff member's Shopify account. Merchants can use staff member data to get more information about the staff members in their store. */
export type Shopify_StaffMember = {
  __typename?: 'Shopify_StaffMember';
  /** Whether the staff member is active. */
  active: Scalars['Boolean'];
  /** The image used as the staff member's avatar in the Shopify admin. */
  avatar: Shopify_Image;
  /** The staff member's email address. */
  email: Scalars['String'];
  /** Whether the staff member's account exists. */
  exists: Scalars['Boolean'];
  /** The staff member's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The staff member's initials, if available. */
  initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether the staff member is the shop owner. */
  isShopOwner: Scalars['Boolean'];
  /** The staff member's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The staff member's preferred locale. Locale values use the format `language` or `language-COUNTRY`, where `language` is a two-letter language code, and `COUNTRY` is a two-letter country code. For example: `en` or `en-US` */
  locale: Scalars['String'];
  /** The staff member's full name. */
  name: Scalars['String'];
  /** The staff member's phone number. */
  phone?: Maybe<Scalars['String']>;
  /** The data used to customize the Shopify admin experience for the staff member. */
  privateData: Shopify_StaffMemberPrivateData;
};


/** Represents the data about a staff member's Shopify account. Merchants can use staff member data to get more information about the staff members in their store. */
export type Shopify_StaffMemberAvatarArgs = {
  fallback?: InputMaybe<Shopify_StaffMemberDefaultImage>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
};

/** An auto-generated type for paginating through multiple StaffMembers. */
export type Shopify_StaffMemberConnection = {
  __typename?: 'Shopify_StaffMemberConnection';
  /** A list of edges. */
  edges: Array<Shopify_StaffMemberEdge>;
  /** A list of the nodes contained in StaffMemberEdge. */
  nodes: Array<Shopify_StaffMember>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

export enum Shopify_StaffMemberDefaultImage {
  Default = 'DEFAULT',
  NotFound = 'NOT_FOUND',
  Transparent = 'TRANSPARENT'
}

/** An auto-generated type which holds one StaffMember and a cursor during pagination. */
export type Shopify_StaffMemberEdge = {
  __typename?: 'Shopify_StaffMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StaffMemberEdge. */
  node: Shopify_StaffMember;
};

export enum Shopify_StaffMemberPermission {
  Applications = 'APPLICATIONS',
  Channels = 'CHANNELS',
  Customers = 'CUSTOMERS',
  Dashboard = 'DASHBOARD',
  Domains = 'DOMAINS',
  DraftOrders = 'DRAFT_ORDERS',
  EditOrders = 'EDIT_ORDERS',
  Full = 'FULL',
  GiftCards = 'GIFT_CARDS',
  Links = 'LINKS',
  Locations = 'LOCATIONS',
  Marketing = 'MARKETING',
  MarketingSection = 'MARKETING_SECTION',
  Orders = 'ORDERS',
  Overviews = 'OVERVIEWS',
  Pages = 'PAGES',
  Preferences = 'PREFERENCES',
  Products = 'PRODUCTS',
  Reports = 'REPORTS',
  Themes = 'THEMES',
  Translations = 'TRANSLATIONS'
}

/** Represents the data used to customize the Shopify admin experience for a logged-in staff member. */
export type Shopify_StaffMemberPrivateData = {
  __typename?: 'Shopify_StaffMemberPrivateData';
  /** The URL to the staff member's account settings page. */
  accountSettingsUrl: Scalars['Url'];
  /** The date and time when the staff member was created. */
  createdAt: Scalars['DateTime'];
  /**
   * Access permissions for the staff member.
   * @deprecated Use StaffMember.permissions.userPermissions instead
   */
  permissions: Array<Shopify_StaffMemberPermission>;
};

/**
 * Standard metafield definition templates provide preset configurations to create metafield definitions.
 * Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.
 *
 * Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).
 */
export type Shopify_StandardMetafieldDefinitionTemplate = {
  __typename?: 'Shopify_StandardMetafieldDefinitionTemplate';
  /** The description of the standard metafield definition. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key owned by the definition after the definition has been activated. */
  key: Scalars['String'];
  /** The human-readable name for the standard metafield definition. */
  name: Scalars['String'];
  /** The namespace owned by the definition after the definition has been activated. */
  namespace: Scalars['String'];
  /** The list of resource types that the standard metafield definition can be applied to. */
  ownerTypes: Array<Shopify_MetafieldOwnerType>;
  /** The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores. */
  type: Shopify_MetafieldDefinitionType;
  /** The configured validations for the standard metafield definition. */
  validations: Array<Shopify_MetafieldDefinitionValidation>;
  /** Whether metafields for the definition are by default visible using the Storefront API. */
  visibleToStorefrontApi: Scalars['Boolean'];
};

/** Represents the details of a specific type of product within the [Shopify product taxonomy](https://help.shopify.com/txt/product_taxonomy/en.txt). */
export type Shopify_StandardizedProductType = {
  __typename?: 'Shopify_StandardizedProductType';
  /** The product taxonomy node associated with the standardized product type. */
  productTaxonomyNode?: Maybe<Shopify_ProductTaxonomyNode>;
};

/** Provides the fields and values to use when adding a standard product type to a product. The [Shopify product taxonomy](https://help.shopify.com/txt/product_taxonomy/en.txt) contains the full list of available values. */
export type Shopify_StandardizedProductTypeInput = {
  /** The id of the node in the Shopify taxonomy that represents the product type. */
  productTaxonomyNodeId: Scalars['ID'];
};

/** Token used to delegate unauthenticated access scopes to clients that need to access the unautheticated Storefront API. */
export type Shopify_StorefrontAccessToken = {
  __typename?: 'Shopify_StorefrontAccessToken';
  /** List of permissions associated with the token. */
  accessScopes: Array<Shopify_AccessScope>;
  /** The issued public access token. */
  accessToken: Scalars['String'];
  /** The date and time when the public access token was created. */
  createdAt: Scalars['DateTime'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** An arbitrary title for each token determined by the developer, used for reference         purposes. */
  title: Scalars['String'];
  /** The date and time when the storefront access token was updated. */
  updatedAt: Scalars['DateTime'];
};

/** An auto-generated type for paginating through multiple StorefrontAccessTokens. */
export type Shopify_StorefrontAccessTokenConnection = {
  __typename?: 'Shopify_StorefrontAccessTokenConnection';
  /** A list of edges. */
  edges: Array<Shopify_StorefrontAccessTokenEdge>;
  /** A list of the nodes contained in StorefrontAccessTokenEdge. */
  nodes: Array<Shopify_StorefrontAccessToken>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one StorefrontAccessToken and a cursor during pagination. */
export type Shopify_StorefrontAccessTokenEdge = {
  __typename?: 'Shopify_StorefrontAccessTokenEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StorefrontAccessTokenEdge. */
  node: Shopify_StorefrontAccessToken;
};

/** An auto-generated type for paginating through a list of Strings. */
export type Shopify_StringConnection = {
  __typename?: 'Shopify_StringConnection';
  /** A list of edges. */
  edges: Array<Shopify_StringEdge>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one String and a cursor during pagination. */
export type Shopify_StringEdge = {
  __typename?: 'Shopify_StringEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/** Represents an applied code discount. */
export type Shopify_SubscriptionAppliedCodeDiscount = {
  __typename?: 'Shopify_SubscriptionAppliedCodeDiscount';
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The redeem code of the discount that applies on the subscription. */
  redeemCode: Scalars['String'];
  /** The reason that the discount on the subscription draft is rejected. */
  rejectionReason?: Maybe<Shopify_SubscriptionDiscountRejectionReason>;
};

/**
 * A record of an execution of the subscription billing process. Billing attempts use
 * idempotency keys to avoid duplicate order creation. A successful billing attempt
 * will create an order.
 */
export type Shopify_SubscriptionBillingAttempt = {
  __typename?: 'Shopify_SubscriptionBillingAttempt';
  /** The date and time when the billing attempt was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the billing attempt was created. */
  createdAt: Scalars['DateTime'];
  /** A code corresponding to a payment error during processing. */
  errorCode?: Maybe<Shopify_SubscriptionBillingAttemptErrorCode>;
  /** A message describing a payment error during processing. */
  errorMessage?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A unique key generated by the client to avoid duplicate payments. */
  idempotencyKey: Scalars['String'];
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['Url']>;
  /** The result of this billing attempt if completed successfully. */
  order?: Maybe<Shopify_Order>;
  /**
   * The date and time used to calculate fulfillment intervals for a billing attempt that
   * successfully completed after the current anchor date. To prevent fulfillment from being
   * pushed to the next anchor date, this field can override the billing attempt date.
   */
  originTime?: Maybe<Scalars['DateTime']>;
  /** Whether or not the billing attempt is still processing. */
  ready: Scalars['Boolean'];
  /** The subscription contract. */
  subscriptionContract: Shopify_SubscriptionContract;
};

/** An auto-generated type for paginating through multiple SubscriptionBillingAttempts. */
export type Shopify_SubscriptionBillingAttemptConnection = {
  __typename?: 'Shopify_SubscriptionBillingAttemptConnection';
  /** A list of edges. */
  edges: Array<Shopify_SubscriptionBillingAttemptEdge>;
  /** A list of the nodes contained in SubscriptionBillingAttemptEdge. */
  nodes: Array<Shopify_SubscriptionBillingAttempt>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SubscriptionBillingAttempt and a cursor during pagination. */
export type Shopify_SubscriptionBillingAttemptEdge = {
  __typename?: 'Shopify_SubscriptionBillingAttemptEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SubscriptionBillingAttemptEdge. */
  node: Shopify_SubscriptionBillingAttempt;
};

export enum Shopify_SubscriptionBillingAttemptErrorCode {
  AuthenticationError = 'AUTHENTICATION_ERROR',
  BuyerCanceledPaymentMethod = 'BUYER_CANCELED_PAYMENT_METHOD',
  CustomerInvalid = 'CUSTOMER_INVALID',
  CustomerNotFound = 'CUSTOMER_NOT_FOUND',
  ExpiredPaymentMethod = 'EXPIRED_PAYMENT_METHOD',
  InvalidCustomerBillingAgreement = 'INVALID_CUSTOMER_BILLING_AGREEMENT',
  InvalidPaymentMethod = 'INVALID_PAYMENT_METHOD',
  InvalidShippingAddress = 'INVALID_SHIPPING_ADDRESS',
  InvoiceAlreadyPaid = 'INVOICE_ALREADY_PAID',
  PaymentMethodDeclined = 'PAYMENT_METHOD_DECLINED',
  PaymentMethodNotFound = 'PAYMENT_METHOD_NOT_FOUND',
  PaymentProviderIsNotEnabled = 'PAYMENT_PROVIDER_IS_NOT_ENABLED',
  TestMode = 'TEST_MODE',
  UnexpectedError = 'UNEXPECTED_ERROR'
}

/** Represents a Subscription Billing Policy. */
export type Shopify_SubscriptionBillingPolicy = {
  __typename?: 'Shopify_SubscriptionBillingPolicy';
  /** Specific anchor dates upon which the billing interval calculations should be made. */
  anchors: Array<Shopify_SellingPlanAnchor>;
  /** The kind of interval that is associated with this schedule (e.g. Monthly, Weekly, etc). */
  interval: Shopify_SellingPlanInterval;
  /** The number of billing intervals between invoices. */
  intervalCount: Scalars['Int'];
  /** Maximum amount of cycles after which the subscription ends. */
  maxCycles?: Maybe<Scalars['Int']>;
  /** Minimum amount of cycles required in the subscription. */
  minCycles?: Maybe<Scalars['Int']>;
};

/** Represents a Subscription Contract. */
export type Shopify_SubscriptionContract = {
  __typename?: 'Shopify_SubscriptionContract';
  /** The subscription app that this subscription contract is registered to. */
  app?: Maybe<Shopify_App>;
  /** URL of the subscription contract page on the subscription app. */
  appAdminUrl?: Maybe<Scalars['Url']>;
  /** The list of billing attempts associated with the subscription contract. */
  billingAttempts: Shopify_SubscriptionBillingAttemptConnection;
  /** The billing policy associated with the subscription contract. */
  billingPolicy: Shopify_SubscriptionBillingPolicy;
  /** The date and time when the subscription contract was created. */
  createdAt: Scalars['DateTime'];
  /** The currency used for the subscription contract. */
  currencyCode: Shopify_CurrencyCode;
  /** A list of the custom attributes to be added to the generated orders. */
  customAttributes: Array<Shopify_Attribute>;
  /** The customer to whom the subscription contract belongs. */
  customer?: Maybe<Shopify_Customer>;
  /** The customer payment method used for the subscription contract. */
  customerPaymentMethod?: Maybe<Shopify_CustomerPaymentMethod>;
  /** The delivery method for each billing of the subscription contract. */
  deliveryMethod?: Maybe<Shopify_SubscriptionDeliveryMethod>;
  /** The delivery policy associated with the subscription contract. */
  deliveryPolicy: Shopify_SubscriptionDeliveryPolicy;
  /** The delivery price for each billing of the subscription contract. */
  deliveryPrice: Shopify_MoneyV2;
  /** The list of subscription discounts associated with the subscription contract. */
  discounts: Shopify_SubscriptionManualDiscountConnection;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The current status of the last payment. */
  lastPaymentStatus?: Maybe<Shopify_SubscriptionContractLastPaymentStatus>;
  /** The number of lines associated with the subscription contract. */
  lineCount: Scalars['Int'];
  /** The list of subscription lines associated with the subscription contract. */
  lines: Shopify_SubscriptionLineConnection;
  /** The next billing date for the subscription contract. */
  nextBillingDate?: Maybe<Scalars['DateTime']>;
  /** The note field that will be applied to the generated orders. */
  note?: Maybe<Scalars['String']>;
  /** A list of the subscription contract's orders. */
  orders: Shopify_OrderConnection;
  /** The order from which this contract originated. */
  originOrder?: Maybe<Shopify_Order>;
  /** The current status of the subscription contract. */
  status: Shopify_SubscriptionContractSubscriptionStatus;
  /** The date and time when the subscription contract was updated. */
  updatedAt: Scalars['DateTime'];
};


/** Represents a Subscription Contract. */
export type Shopify_SubscriptionContractBillingAttemptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a Subscription Contract. */
export type Shopify_SubscriptionContractCustomerPaymentMethodArgs = {
  showRevoked?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a Subscription Contract. */
export type Shopify_SubscriptionContractDiscountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a Subscription Contract. */
export type Shopify_SubscriptionContractLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a Subscription Contract. */
export type Shopify_SubscriptionContractOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple SubscriptionContracts. */
export type Shopify_SubscriptionContractConnection = {
  __typename?: 'Shopify_SubscriptionContractConnection';
  /** A list of edges. */
  edges: Array<Shopify_SubscriptionContractEdge>;
  /** A list of the nodes contained in SubscriptionContractEdge. */
  nodes: Array<Shopify_SubscriptionContract>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SubscriptionContract and a cursor during pagination. */
export type Shopify_SubscriptionContractEdge = {
  __typename?: 'Shopify_SubscriptionContractEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SubscriptionContractEdge. */
  node: Shopify_SubscriptionContract;
};

export enum Shopify_SubscriptionContractLastPaymentStatus {
  Failed = 'FAILED',
  Succeeded = 'SUCCEEDED'
}

export enum Shopify_SubscriptionContractSubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Paused = 'PAUSED'
}

/** Represents a Subscription Line Pricing Cycle Adjustment. */
export type Shopify_SubscriptionCyclePriceAdjustment = {
  __typename?: 'Shopify_SubscriptionCyclePriceAdjustment';
  /** Price adjustment type. */
  adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType;
  /** Price adjustment value. */
  adjustmentValue: Shopify_SellingPlanPricingPolicyAdjustmentValue;
  /** The number of cycles required before this pricing policy applies. */
  afterCycle: Scalars['Int'];
  /** The computed price after the adjustments applied. */
  computedPrice: Shopify_MoneyV2;
};

/** Describes the delivery method to use to get the physical goods to the customer. */
export type Shopify_SubscriptionDeliveryMethod = Shopify_SubscriptionDeliveryMethodShipping;

/** Represents a shipping delivery method: a mailing address and a shipping option. */
export type Shopify_SubscriptionDeliveryMethodShipping = {
  __typename?: 'Shopify_SubscriptionDeliveryMethodShipping';
  /** The address to ship to. */
  address: Shopify_SubscriptionMailingAddress;
  /** The details of the shipping method to use. */
  shippingOption: Shopify_SubscriptionDeliveryMethodShippingOption;
};

/** Represents the selected shipping option on a subscription contract. */
export type Shopify_SubscriptionDeliveryMethodShippingOption = {
  __typename?: 'Shopify_SubscriptionDeliveryMethodShippingOption';
  /** The carrier service of the shipping option. */
  carrierService?: Maybe<Shopify_DeliveryCarrierService>;
  /** The code of the shipping option. */
  code?: Maybe<Scalars['String']>;
  /** The description of the shipping option. */
  description?: Maybe<Scalars['String']>;
  /** The presentment title of the shipping option. */
  presentmentTitle?: Maybe<Scalars['String']>;
  /** The title of the shipping option. */
  title?: Maybe<Scalars['String']>;
};

/** Represents a Subscription Delivery Policy. */
export type Shopify_SubscriptionDeliveryPolicy = {
  __typename?: 'Shopify_SubscriptionDeliveryPolicy';
  /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<Shopify_SellingPlanAnchor>;
  /** The kind of interval that is associated with this schedule (e.g. Monthly, Weekly, etc). */
  interval: Shopify_SellingPlanInterval;
  /** The number of delivery intervals between deliveries. */
  intervalCount: Scalars['Int'];
};

/** Subscription draft discount types. */
export type Shopify_SubscriptionDiscount = Shopify_SubscriptionAppliedCodeDiscount | Shopify_SubscriptionManualDiscount;

/** Represents what a particular discount reduces from a line price. */
export type Shopify_SubscriptionDiscountAllocation = {
  __typename?: 'Shopify_SubscriptionDiscountAllocation';
  /** Allocation amount. */
  amount: Shopify_MoneyV2;
  /** Discount that created the allocation. */
  discount: Shopify_SubscriptionDiscount;
};

/** Represents the subscription lines the discount applies on. */
export type Shopify_SubscriptionDiscountEntitledLines = {
  __typename?: 'Shopify_SubscriptionDiscountEntitledLines';
  /** Specify whether the subscription discount will apply on all subscription lines. */
  all: Scalars['Boolean'];
  /** The list of subscription lines associated with the subscription discount. */
  lines: Shopify_SubscriptionLineConnection;
};


/** Represents the subscription lines the discount applies on. */
export type Shopify_SubscriptionDiscountEntitledLinesLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** The value of the discount and how it will be applied. */
export type Shopify_SubscriptionDiscountFixedAmountValue = {
  __typename?: 'Shopify_SubscriptionDiscountFixedAmountValue';
  /** The fixed amount value of the discount. */
  amount: Shopify_MoneyV2;
  /** Whether the amount is applied per item. */
  appliesOnEachItem: Scalars['Boolean'];
};

/** The percentage value of the discount. */
export type Shopify_SubscriptionDiscountPercentageValue = {
  __typename?: 'Shopify_SubscriptionDiscountPercentageValue';
  /** The percentage value of the discount. */
  percentage: Scalars['Int'];
};

export enum Shopify_SubscriptionDiscountRejectionReason {
  CurrentlyInactive = 'CURRENTLY_INACTIVE',
  CustomerNotEligible = 'CUSTOMER_NOT_ELIGIBLE',
  CustomerUsageLimitReached = 'CUSTOMER_USAGE_LIMIT_REACHED',
  IncompatiblePurchaseType = 'INCOMPATIBLE_PURCHASE_TYPE',
  InternalError = 'INTERNAL_ERROR',
  NotFound = 'NOT_FOUND',
  NoEntitledLineItems = 'NO_ENTITLED_LINE_ITEMS',
  NoEntitledShippingLines = 'NO_ENTITLED_SHIPPING_LINES',
  PurchaseNotInRange = 'PURCHASE_NOT_IN_RANGE',
  QuantityNotInRange = 'QUANTITY_NOT_IN_RANGE',
  UsageLimitReached = 'USAGE_LIMIT_REACHED'
}

/** The value of the discount and how it will be applied. */
export type Shopify_SubscriptionDiscountValue = Shopify_SubscriptionDiscountFixedAmountValue | Shopify_SubscriptionDiscountPercentageValue;

/** Represents a Subscription Line. */
export type Shopify_SubscriptionLine = {
  __typename?: 'Shopify_SubscriptionLine';
  /** The price per unit for the subscription line in the contract's currency. */
  currentPrice: Shopify_MoneyV2;
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Shopify_Attribute>;
  /** Discount allocations. */
  discountAllocations: Array<Shopify_SubscriptionDiscountAllocation>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Total line price including all discounts. */
  lineDiscountedPrice: Shopify_MoneyV2;
  /** Describe the price changes of the line over time. */
  pricingPolicy?: Maybe<Shopify_SubscriptionPricingPolicy>;
  /** The product id associated with the subscription line. */
  productId?: Maybe<Scalars['ID']>;
  /** The quantity of the unit selected for the subscription line. */
  quantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /**
   * The selling plan ID associated to the line.
   *
   * Indicates which selling plan was used to create this
   * contract line initially. The selling plan ID is also used to
   * find the associated delivery profile.
   *
   * The subscription contract, subscription line, or selling plan might have
   * changed. As a result, the selling plan's attributes might not
   * match the information on the contract.
   */
  sellingPlanId?: Maybe<Scalars['ID']>;
  /**
   * The selling plan name associated to the line. This name describes
   * the order line items created from this subscription line
   * for both merchants and customers.
   *
   * The value can be different from the selling plan's name, because both
   * the selling plan's name and the subscription line's selling_plan_name
   * attribute can be updated independently.
   */
  sellingPlanName?: Maybe<Scalars['String']>;
  /** Variant SKU number of the item associated with the subscription line. */
  sku?: Maybe<Scalars['String']>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** Product title of the item associated with the subscription line. */
  title: Scalars['String'];
  /** The product variant id associated with the subscription line. */
  variantId?: Maybe<Scalars['ID']>;
  /** The image associated with the line item's variant or product. */
  variantImage?: Maybe<Shopify_Image>;
  /** Product variant title of the item associated with the subscription line. */
  variantTitle?: Maybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple SubscriptionLines. */
export type Shopify_SubscriptionLineConnection = {
  __typename?: 'Shopify_SubscriptionLineConnection';
  /** A list of edges. */
  edges: Array<Shopify_SubscriptionLineEdge>;
  /** A list of the nodes contained in SubscriptionLineEdge. */
  nodes: Array<Shopify_SubscriptionLine>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SubscriptionLine and a cursor during pagination. */
export type Shopify_SubscriptionLineEdge = {
  __typename?: 'Shopify_SubscriptionLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SubscriptionLineEdge. */
  node: Shopify_SubscriptionLine;
};

/** Represents a Mailing Address on a Subscription. */
export type Shopify_SubscriptionMailingAddress = {
  __typename?: 'Shopify_SubscriptionMailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCode?: Maybe<Shopify_CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>;
  /** A unique phone number for the customer. Formatted using E.164 standard. For example, _+16135551111_. */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};

/** Custom subscription discount. */
export type Shopify_SubscriptionManualDiscount = {
  __typename?: 'Shopify_SubscriptionManualDiscount';
  /** Entitled line items used to apply the subscription discount on. */
  entitledLines: Shopify_SubscriptionDiscountEntitledLines;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The maximum number of times the subscription discount will be applied on orders. */
  recurringCycleLimit?: Maybe<Scalars['Int']>;
  /** The reason that the discount on the subscription draft is rejected. */
  rejectionReason?: Maybe<Shopify_SubscriptionDiscountRejectionReason>;
  /** Type of line the discount applies on. */
  targetType: Shopify_DiscountTargetType;
  /** The title associated with the subscription discount. */
  title?: Maybe<Scalars['String']>;
  /** The type of the subscription discount. */
  type: Shopify_DiscountType;
  /** The number of times the discount was applied. */
  usageCount: Scalars['Int'];
  /** The value of the subscription discount. */
  value: Shopify_SubscriptionDiscountValue;
};

/** An auto-generated type for paginating through multiple SubscriptionManualDiscounts. */
export type Shopify_SubscriptionManualDiscountConnection = {
  __typename?: 'Shopify_SubscriptionManualDiscountConnection';
  /** A list of edges. */
  edges: Array<Shopify_SubscriptionManualDiscountEdge>;
  /** A list of the nodes contained in SubscriptionManualDiscountEdge. */
  nodes: Array<Shopify_SubscriptionManualDiscount>;
  /** Information to aid in pagination. */
  pageInfo: Shopify_PageInfo;
};

/** An auto-generated type which holds one SubscriptionManualDiscount and a cursor during pagination. */
export type Shopify_SubscriptionManualDiscountEdge = {
  __typename?: 'Shopify_SubscriptionManualDiscountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SubscriptionManualDiscountEdge. */
  node: Shopify_SubscriptionManualDiscount;
};

/** Represents a Subscription Line Pricing Policy. */
export type Shopify_SubscriptionPricingPolicy = {
  __typename?: 'Shopify_SubscriptionPricingPolicy';
  /** The base price per unit for the subscription line in the contract's currency. */
  basePrice: Shopify_MoneyV2;
  /** The adjustments per cycle for the subscription line. */
  cycleDiscounts: Array<Shopify_SubscriptionCyclePriceAdjustment>;
};

/**
 * A suggested transaction. Suggested transaction are usually used in the context of refunds
 * and exchanges.
 */
export type Shopify_SuggestedOrderTransaction = {
  __typename?: 'Shopify_SuggestedOrderTransaction';
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>;
  /**
   * The amount of the transaction.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The amount and currency of the suggested order transaction in shop and presentment currencies. */
  amountSet: Shopify_MoneyBag;
  /** The human-readable payment gateway name suggested to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>;
  /** The suggested payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>;
  /** Specifies the kind of the suggested order transaction. */
  kind: Shopify_SuggestedOrderTransactionKind;
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable?: Maybe<Scalars['Money']>;
  /** Specifies the available amount to refund on the gateway in shop and presentment currencies. Only available within SuggestedRefund. */
  maximumRefundableSet?: Maybe<Shopify_MoneyBag>;
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<Shopify_OrderTransaction>;
};

export enum Shopify_SuggestedOrderTransactionKind {
  SuggestedRefund = 'SUGGESTED_REFUND'
}

/** Represents a refund suggested by Shopify based on the items being reimbursed. You can then use the suggested refund object to generate an actual refund. */
export type Shopify_SuggestedRefund = {
  __typename?: 'Shopify_SuggestedRefund';
  /**
   * The total monetary value to be refunded.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The total monetary value to be refunded in shop and presentment currencies. */
  amountSet: Shopify_MoneyBag;
  /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotalSet: Shopify_MoneyBag;
  /**
   * The total monetary value available to refund.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable: Scalars['Money'];
  /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundableSet: Shopify_MoneyBag;
  /** A list of duties to be refunded from the order. */
  refundDuties: Array<Shopify_RefundDuty>;
  /** A list of line items to be refunded, along with restock instructions. */
  refundLineItems: Array<Shopify_RefundLineItem>;
  /** The shipping costs to be refunded from the order. */
  shipping: Shopify_ShippingRefund;
  /**
   * The sum of all the prices of the line items being refunded.
   * @deprecated Use `subtotalSet` instead
   */
  subtotal: Scalars['Money'];
  /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotalSet: Shopify_MoneyBag;
  /** A list of suggested order transactions. */
  suggestedTransactions: Array<Shopify_SuggestedOrderTransaction>;
  /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmountSet: Shopify_MoneyBag;
  /** The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalDutiesSet: Shopify_MoneyBag;
  /** The sum of the taxes being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalTaxSet: Shopify_MoneyBag;
  /**
   * The sum of the taxes being refunded from the order. The value must be positive.
   * @deprecated Use `totalTaxSet` instead
   */
  totalTaxes: Scalars['Money'];
};

export enum Shopify_TaxExemption {
  CaBcCommercialFisheryExemption = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION',
  CaBcContractorExemption = 'CA_BC_CONTRACTOR_EXEMPTION',
  CaBcProductionAndMachineryExemption = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION',
  CaBcResellerExemption = 'CA_BC_RESELLER_EXEMPTION',
  CaBcSubContractorExemption = 'CA_BC_SUB_CONTRACTOR_EXEMPTION',
  CaDiplomatExemption = 'CA_DIPLOMAT_EXEMPTION',
  CaMbCommercialFisheryExemption = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION',
  CaMbFarmerExemption = 'CA_MB_FARMER_EXEMPTION',
  CaMbResellerExemption = 'CA_MB_RESELLER_EXEMPTION',
  CaNsCommercialFisheryExemption = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION',
  CaNsFarmerExemption = 'CA_NS_FARMER_EXEMPTION',
  CaOnPurchaseExemption = 'CA_ON_PURCHASE_EXEMPTION',
  CaPeCommercialFisheryExemption = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION',
  CaSkCommercialFisheryExemption = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION',
  CaSkContractorExemption = 'CA_SK_CONTRACTOR_EXEMPTION',
  CaSkFarmerExemption = 'CA_SK_FARMER_EXEMPTION',
  CaSkProductionAndMachineryExemption = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION',
  CaSkResellerExemption = 'CA_SK_RESELLER_EXEMPTION',
  CaSkSubContractorExemption = 'CA_SK_SUB_CONTRACTOR_EXEMPTION',
  CaStatusCardExemption = 'CA_STATUS_CARD_EXEMPTION'
}

/** Represents a single tax applied to the associated line item. */
export type Shopify_TaxLine = {
  __typename?: 'Shopify_TaxLine';
  /** Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for this tax line. */
  channelLiable?: Maybe<Scalars['Boolean']>;
  /**
   * The amount of tax, in shop currency, after discounts and before returns.
   * @deprecated Use `priceSet` instead
   */
  price: Scalars['Money'];
  /** The amount of tax, in shop and presentment currencies, after discounts and before returns. */
  priceSet: Shopify_MoneyBag;
  /** The proportion of the line item price that the tax represents as a decimal. */
  rate?: Maybe<Scalars['Float']>;
  /** The proportion of the line item price that the tax represents as a percentage. */
  ratePercentage?: Maybe<Scalars['Float']>;
  /** The name of the tax. */
  title: Scalars['String'];
};

/** Transaction fee related to an order transaction. */
export type Shopify_TransactionFee = {
  __typename?: 'Shopify_TransactionFee';
  /** Amount of the fee. */
  amount: Shopify_MoneyV2;
  /** Flat rate charge for a transaction. */
  flatFee: Shopify_MoneyV2;
  /** Name of the credit card flat fee. */
  flatFeeName?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Percentage charge. */
  rate: Scalars['Decimal'];
  /** Name of the credit card rate. */
  rateName?: Maybe<Scalars['String']>;
  /** Tax amount charged on the fee. */
  taxAmount: Shopify_MoneyV2;
  /** Name of the type of fee. */
  type: Scalars['String'];
};

/** Represents a set of UTM parameters. */
export type Shopify_UtmParameters = {
  __typename?: 'Shopify_UTMParameters';
  /** The name of a marketing campaign. */
  campaign?: Maybe<Scalars['String']>;
  /** Identifies specific content in a marketing campaign. Used to differentiate between similar content or links in a marketing campaign to determine which is the most effective. */
  content?: Maybe<Scalars['String']>;
  /** The medium of a marketing campaign, such as a banner or email newsletter. */
  medium?: Maybe<Scalars['String']>;
  /** The source of traffic to the merchant's store, such as Google or an email newsletter. */
  source?: Maybe<Scalars['String']>;
  /** Paid search terms used by a marketing campaign. */
  term?: Maybe<Scalars['String']>;
};

export enum Shopify_UnitSystem {
  ImperialSystem = 'IMPERIAL_SYSTEM',
  MetricSystem = 'METRIC_SYSTEM'
}

/** Represents an error in the input of a mutation. */
export type Shopify_UserError = {
  __typename?: 'Shopify_UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a Shopify hosted video. */
export type Shopify_Video = {
  __typename?: 'Shopify_Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
  createdAt: Scalars['DateTime'];
  /** The duration of the video. Only available when `status` is READY. */
  duration?: Maybe<Scalars['Int']>;
  /** Any errors that have occurred on the file. */
  fileErrors: Array<Shopify_FileError>;
  /** The status of the file. */
  fileStatus: Shopify_FileStatus;
  /** The filename of the video. */
  filename: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: Shopify_MediaContentType;
  /** Any errors which have occurred on the media. */
  mediaErrors: Array<Shopify_MediaError>;
  /** The warnings attached to the media. */
  mediaWarnings: Array<Shopify_MediaWarning>;
  /** The original source for a video. Value is `null` when `status` is PROCESSING. */
  originalSource?: Maybe<Shopify_VideoSource>;
  /** The preview image for the media. */
  preview?: Maybe<Shopify_MediaPreviewImage>;
  /** The sources for a video. Sources are only available when `status` is READY. */
  sources: Array<Shopify_VideoSource>;
  /** Current status of the media. */
  status: Shopify_MediaStatus;
};

/** Represents a source for a Shopify hosted video. */
export type Shopify_VideoSource = {
  __typename?: 'Shopify_VideoSource';
  /** The size of the video file in bytes. */
  fileSize?: Maybe<Scalars['Int']>;
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
};

/** A weight, which includes a numeric value and a unit of measurement. */
export type Shopify_Weight = {
  __typename?: 'Shopify_Weight';
  /** The unit of measurement for `value`. */
  unit: Shopify_WeightUnit;
  /** The weight value using the unit system specified with `unit`. */
  value: Scalars['Float'];
};

export enum Shopify_WeightUnit {
  Grams = 'GRAMS',
  Kilograms = 'KILOGRAMS',
  Ounces = 'OUNCES',
  Pounds = 'POUNDS'
}

export type Storefront = TsSearchable & {
  __typename?: 'Storefront';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  components?: Maybe<Array<Maybe<StorefrontComponentsProperty>>>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type StorefrontComponentsProperty = BackgroundImageComponent | CollectionsComponent | HeroComponent | OffersComponent | SaleComponent | TestimonialsComponent | TrendingProductsComponent;

export type TsFile = {
  name: Scalars['String'];
  type: Scalars['String'];
};

export type TsImagesConfig = {
  /** Default image parameters. See https://docs.imgix.com/apis/url  */
  default?: InputMaybe<Scalars['JSON']>;
  /** Large image parameters. See https://docs.imgix.com/apis/url  */
  large?: InputMaybe<Scalars['JSON']>;
  /** Medium image parameters. See https://docs.imgix.com/apis/url  */
  medium?: InputMaybe<Scalars['JSON']>;
  /** Small image parameters. See https://docs.imgix.com/apis/url  */
  small?: InputMaybe<Scalars['JSON']>;
};

export enum TsmdxSerializationFormat {
  Html = 'html',
  Mdx = 'mdx'
}

export type TsProjectMember = {
  __typename?: 'TSProjectMember';
  avatarPath?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
};

export type TsRelationshipInput = {
  contentTypeId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  shapeId?: InputMaybe<Scalars['String']>;
  shapeName?: InputMaybe<Scalars['String']>;
};

export type TsSearchSort = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsSearchSortInput = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsSearchable = {
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

/** TSSearchable search results */
export type TsSearchableSearchResults = {
  __typename?: 'TSSearchableSearchResults';
  results: Array<TsSearchable>;
  total: Scalars['Int'];
};

export type TsShallowWhereProductPageDetailsDetailsInput = {
  description?: InputMaybe<TsWhereDraftjsInput>;
};

export type TsShallowWhereProductPageDetailsTextInput = {
  primary?: InputMaybe<TsWhereDraftjsInput>;
  secondary?: InputMaybe<TsWhereDraftjsInput>;
};

export type TsShallowWhereProductPagePoliciesPoliciesInput = {
  description?: InputMaybe<TsWhereDraftjsInput>;
  name?: InputMaybe<TsWhereDraftjsInput>;
};

export type TsSuggestion = {
  __typename?: 'TSSuggestion';
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['ID']>;
  _shapeName?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TsSuggestionPaginatedList = {
  __typename?: 'TSSuggestionPaginatedList';
  items?: Maybe<Array<Maybe<TsSuggestion>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsUser = {
  __typename?: 'TSUser';
  avatarPath?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
};

export type TsVersion = {
  __typename?: 'TSVersion';
  color?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  item?: Maybe<TsVersionResponse>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<TsProjectMember>;
  version?: Maybe<Scalars['Int']>;
};


export type TsVersionItemArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type TsVersionResponse = {
  __typename?: 'TSVersionResponse';
  content?: Maybe<Scalars['JSONObject']>;
  schema?: Maybe<Scalars['JSONObject']>;
};

export type TsVersionsPaginatedList = {
  __typename?: 'TSVersionsPaginatedList';
  from?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<TsVersion>>>;
  size?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWhereAssetInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetInput>>>;
  NOT?: InputMaybe<TsWhereAssetInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereAssetRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereBackgroundImageComponentComponentsInput = {
  buttonText?: InputMaybe<TsWhereStringInput>;
  collections?: InputMaybe<TsWhereCollectionsComponentCollectionsInput>;
  components?: InputMaybe<TsWhereBackgroundImageComponentComponentsInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  offers?: InputMaybe<TsWhereOffersComponentOffersInput>;
  primaryText?: InputMaybe<TsWhereStringInput>;
  secondaryText?: InputMaybe<TsWhereStringInput>;
  testimonials?: InputMaybe<TsWhereTestimonialsComponentTestimonialsInput>;
};

export type TsWhereBooleanInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Boolean']>;
};

export type TsWhereCollectionInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereCollectionInput>>>;
  NOT?: InputMaybe<TsWhereCollectionInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereCollectionInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  breadcrumbTitle?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  parent?: InputMaybe<TsWhereCollectionRelationshipInput>;
  shopifyCollectionId?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereCollectionRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  breadcrumbTitle?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  shopifyCollectionId?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereCollectionsComponentCollectionsInput = {
  description?: InputMaybe<TsWhereStringInput>;
  href?: InputMaybe<TsWhereStringInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereDateInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']>;
};

export type TsWhereDraftjsInput = {
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
};

export type TsWhereFooterNavigationInput = {
  sections?: InputMaybe<TsWhereFooterSectionsInput>;
};

export type TsWhereFooterNavigationSectionsItemsInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereFooterNewsletterInput = {
  text?: InputMaybe<TsWhereTextInput>;
};

export type TsWhereFooterSectionsInput = {
  items?: InputMaybe<TsWhereFooterNavigationSectionsItemsInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereIdInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TsWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereInput>>>;
  NOT?: InputMaybe<TsWhereInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereInput>>>;
  ProductPageDetails_details?: InputMaybe<TsWhereProductPageDetailsDetailsInput>;
  ProductPagePolicies_policies?: InputMaybe<TsWhereProductPagePoliciesPoliciesInput>;
  Product_details?: InputMaybe<TsWhereProductPageDetailsRelationshipInput>;
  Product_policies?: InputMaybe<TsWhereProductPagePoliciesRelationshipInput>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  bodyHtml?: InputMaybe<TsWhereStringInput>;
  breadcrumbTitle?: InputMaybe<TsWhereStringInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  collections?: InputMaybe<TsWhereShopify_CollectionConnectionInput>;
  components?: InputMaybe<TsWhereStorefrontComponentsInput>;
  contextualPricing?: InputMaybe<TsWhereShopify_ProductContextualPricingInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  customProductType?: InputMaybe<TsWhereStringInput>;
  defaultCursor?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  descriptionHtml?: InputMaybe<TsWhereInput>;
  descriptionPlainSummary?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  featuredImage?: InputMaybe<TsWhereShopify_ImageInput>;
  featuredMedia?: InputMaybe<TsWhereShopify_MediaInput>;
  feedback?: InputMaybe<TsWhereShopify_ResourceFeedbackInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  giftCardTemplateSuffix?: InputMaybe<TsWhereStringInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  hasOnlyDefaultVariant?: InputMaybe<TsWhereBooleanInput>;
  hasOutOfStockVariants?: InputMaybe<TsWhereBooleanInput>;
  hideBreadcrumbs?: InputMaybe<TsWhereBooleanInput>;
  hideRelatedProducts?: InputMaybe<TsWhereBooleanInput>;
  hideReviews?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  images?: InputMaybe<TsWhereShopify_ImageConnectionInput>;
  inCollection?: InputMaybe<TsWhereBooleanInput>;
  isGiftCard?: InputMaybe<TsWhereBooleanInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  links?: InputMaybe<TsWhereNavigationLinksInput>;
  media?: InputMaybe<TsWhereShopify_MediaConnectionInput>;
  mediaCount?: InputMaybe<TsWhereIntegerInput>;
  message?: InputMaybe<TsWhereDraftjsInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafieldDefinitions?: InputMaybe<TsWhereShopify_MetafieldDefinitionConnectionInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  navigation?: InputMaybe<TsWhereFooterNavigationInput>;
  newsletter?: InputMaybe<TsWhereFooterNewsletterInput>;
  onlineStorePreviewUrl?: InputMaybe<TsWhereInput>;
  onlineStoreUrl?: InputMaybe<TsWhereInput>;
  options?: InputMaybe<TsWhereShopify_ProductOptionInput>;
  parent?: InputMaybe<TsWhereCollectionRelationshipInput>;
  path?: InputMaybe<TsWhereStringInput>;
  priceRange?: InputMaybe<TsWhereShopify_ProductPriceRangeInput>;
  priceRangeV2?: InputMaybe<TsWhereShopify_ProductPriceRangeV2Input>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  productComponent?: InputMaybe<TsWhereStringInput>;
  productType?: InputMaybe<TsWhereStringInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  publishedAt?: InputMaybe<TsWhereInput>;
  publishedOnChannel?: InputMaybe<TsWhereBooleanInput>;
  publishedOnPublication?: InputMaybe<TsWhereBooleanInput>;
  relationship?: InputMaybe<TsWhereCollectionRelationshipInput>;
  requiresSellingPlan?: InputMaybe<TsWhereBooleanInput>;
  resourcePublicationOnCurrentPublication?: InputMaybe<TsWhereShopify_ResourcePublicationV2Input>;
  reviews?: InputMaybe<TsWhereReviewsIo_ListProductReviewsResponseInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sections?: InputMaybe<TsWherePageSectionsInput>;
  sellingPlanGroupCount?: InputMaybe<TsWhereIntegerInput>;
  sellingPlanGroups?: InputMaybe<TsWhereShopify_SellingPlanGroupConnectionInput>;
  seo?: InputMaybe<TsWhereShopify_SeoInput>;
  shopifyCollectionId?: InputMaybe<TsWhereStringInput>;
  shopifyProductId?: InputMaybe<TsWhereStringInput>;
  showDetails?: InputMaybe<TsWhereBooleanInput>;
  showPolicies?: InputMaybe<TsWhereBooleanInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  standardizedProductType?: InputMaybe<TsWhereShopify_StandardizedProductTypeInput>;
  status?: InputMaybe<TsWhereStringInput>;
  storefrontId?: InputMaybe<TsWhereInput>;
  tags?: InputMaybe<TsWhereShopify_ProductTagsInput>;
  takeshape?: InputMaybe<TsWhereProductInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  templateSuffix?: InputMaybe<TsWhereStringInput>;
  text?: InputMaybe<TsWhereProductPageDetailsTextInput>;
  title?: InputMaybe<TsWhereStringInput>;
  totalInventory?: InputMaybe<TsWhereIntegerInput>;
  totalVariants?: InputMaybe<TsWhereIntegerInput>;
  tracksInventory?: InputMaybe<TsWhereBooleanInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
  variants?: InputMaybe<TsWhereShopify_ProductVariantConnectionInput>;
  vendor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereIntegerInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Int']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Int']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Int']>;
};

export type TsWhereMdxInput = {
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
};

export type TsWhereNavigationLinksCategoriesBrandsInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationLinksCategoriesCategoriesInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationLinksCategoriesCollectionInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationLinksCategoriesFeaturedInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationLinksCategoriesInput = {
  brands?: InputMaybe<TsWhereNavigationLinksCategoriesBrandsInput>;
  categories?: InputMaybe<TsWhereNavigationLinksCategoriesCategoriesInput>;
  collection?: InputMaybe<TsWhereNavigationLinksCategoriesCollectionInput>;
  featured?: InputMaybe<TsWhereNavigationLinksCategoriesFeaturedInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationLinksInput = {
  categories?: InputMaybe<TsWhereNavigationLinksCategoriesInput>;
  pages?: InputMaybe<TsWhereNavigationLinksPagesInput>;
};

export type TsWhereNavigationLinksPagesInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNumberInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Float']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Float']>;
};

export type TsWhereOffersComponentOffersInput = {
  description?: InputMaybe<TsWhereStringInput>;
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWherePageInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWherePageInput>>>;
  NOT?: InputMaybe<TsWherePageInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWherePageInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  relationship?: InputMaybe<TsWhereCollectionRelationshipInput>;
  sections?: InputMaybe<TsWherePageSectionsInput>;
  slug?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWherePageSectionsInput = {
  content?: InputMaybe<TsWhereMdxInput>;
  heading?: InputMaybe<TsWhereStringInput>;
  label?: InputMaybe<TsWhereStringInput>;
  subheading?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereProductInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereProductInput>>>;
  NOT?: InputMaybe<TsWhereProductInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereProductInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  details?: InputMaybe<TsWhereProductPageDetailsRelationshipInput>;
  hideBreadcrumbs?: InputMaybe<TsWhereBooleanInput>;
  hideRelatedProducts?: InputMaybe<TsWhereBooleanInput>;
  hideReviews?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
  policies?: InputMaybe<TsWhereProductPagePoliciesRelationshipInput>;
  productComponent?: InputMaybe<TsWhereStringInput>;
  shopifyProductId?: InputMaybe<TsWhereStringInput>;
  showDetails?: InputMaybe<TsWhereBooleanInput>;
  showPolicies?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereProductPageDetailsDetailsInput = {
  description?: InputMaybe<TsWhereDraftjsInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
};

export type TsWhereProductPageDetailsInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereProductPageDetailsInput>>>;
  NOT?: InputMaybe<TsWhereProductPageDetailsInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereProductPageDetailsInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  details?: InputMaybe<TsWhereProductPageDetailsDetailsInput>;
  name?: InputMaybe<TsWhereStringInput>;
  text?: InputMaybe<TsWhereProductPageDetailsTextInput>;
};

export type TsWhereProductPageDetailsRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  details?: InputMaybe<TsShallowWhereProductPageDetailsDetailsInput>;
  name?: InputMaybe<TsWhereStringInput>;
  text?: InputMaybe<TsShallowWhereProductPageDetailsTextInput>;
};

export type TsWhereProductPageDetailsTextInput = {
  primary?: InputMaybe<TsWhereDraftjsInput>;
  secondary?: InputMaybe<TsWhereDraftjsInput>;
};

export type TsWhereProductPagePoliciesInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereProductPagePoliciesInput>>>;
  NOT?: InputMaybe<TsWhereProductPagePoliciesInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereProductPagePoliciesInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  name?: InputMaybe<TsWhereStringInput>;
  policies?: InputMaybe<TsWhereProductPagePoliciesPoliciesInput>;
};

export type TsWhereProductPagePoliciesPoliciesInput = {
  description?: InputMaybe<TsWhereDraftjsInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  name?: InputMaybe<TsWhereDraftjsInput>;
};

export type TsWhereProductPagePoliciesRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  name?: InputMaybe<TsWhereStringInput>;
  policies?: InputMaybe<TsShallowWhereProductPagePoliciesPoliciesInput>;
};

export type TsWhereReviewsIo_ListProductReviewsResponseInput = {
  products?: InputMaybe<TsWhereShopify_ProductProductsInput>;
  reviews?: InputMaybe<TsWhereShopify_ProductReviewsInput>;
  stats?: InputMaybe<TsWhereShopify_ProductStatsInput>;
  store?: InputMaybe<TsWhereShopify_ProductStoreInput>;
  word?: InputMaybe<TsWhereStringInput>;
  write_review_link?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereReviewsIo_ProductInput = {
  brand?: InputMaybe<TsWhereStringInput>;
  category?: InputMaybe<TsWhereStringInput>;
  custom?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  gtin?: InputMaybe<TsWhereStringInput>;
  image_url?: InputMaybe<TsWhereStringInput>;
  link?: InputMaybe<TsWhereStringInput>;
  mpn?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  pageUrl?: InputMaybe<TsWhereStringInput>;
  sku?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereReviewsIo_ProductReviewInput = {
  author?: InputMaybe<TsWhereShopify_ProductAuthorInput>;
  date_created?: InputMaybe<TsWhereStringInput>;
  date_formatted?: InputMaybe<TsWhereStringInput>;
  flags?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  order_id?: InputMaybe<TsWhereStringInput>;
  product?: InputMaybe<TsWhereReviewsIo_ProductInput>;
  product_make?: InputMaybe<TsWhereStringInput>;
  product_review_id?: InputMaybe<TsWhereIntegerInput>;
  rating?: InputMaybe<TsWhereIntegerInput>;
  review?: InputMaybe<TsWhereStringInput>;
  reviewer?: InputMaybe<TsWhereReviewsIo_ReviewerInput>;
  sku?: InputMaybe<TsWhereStringInput>;
  tags?: InputMaybe<TsWhereShopify_ProductTagsInput>;
  timeago?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  votes?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereReviewsIo_ReviewerInput = {
  address?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  first_name?: InputMaybe<TsWhereStringInput>;
  gravatar?: InputMaybe<TsWhereStringInput>;
  last_name?: InputMaybe<TsWhereStringInput>;
  name_formatted?: InputMaybe<TsWhereStringInput>;
  profile_picture?: InputMaybe<TsWhereStringInput>;
  user_id?: InputMaybe<TsWhereIntegerInput>;
  verified_buyer?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_AccessScopeInput = {
  description?: InputMaybe<TsWhereStringInput>;
  handle?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_AppCreditConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_AppCreditEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_AppCreditInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_AppCreditEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_AppCreditInput>;
};

export type TsWhereShopify_AppCreditInput = {
  amount?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  createdAt?: InputMaybe<TsWhereInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  test?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_AppFeedbackInput = {
  app?: InputMaybe<TsWhereShopify_AppInput>;
  link?: InputMaybe<TsWhereShopify_LinkInput>;
  messages?: InputMaybe<TsWhereShopify_UserErrorInput>;
};

export type TsWhereShopify_AppInput = {
  apiKey?: InputMaybe<TsWhereStringInput>;
  appStoreAppUrl?: InputMaybe<TsWhereInput>;
  appStoreDeveloperUrl?: InputMaybe<TsWhereInput>;
  availableAccessScopes?: InputMaybe<TsWhereShopify_AccessScopeInput>;
  banner?: InputMaybe<TsWhereShopify_ImageInput>;
  description?: InputMaybe<TsWhereStringInput>;
  developerName?: InputMaybe<TsWhereStringInput>;
  developerType?: InputMaybe<TsWhereStringInput>;
  developerUrl?: InputMaybe<TsWhereInput>;
  embedded?: InputMaybe<TsWhereBooleanInput>;
  failedRequirements?: InputMaybe<TsWhereShopify_FailedRequirementInput>;
  features?: InputMaybe<TsWhereShopify_ProductFeaturesInput>;
  feedback?: InputMaybe<TsWhereShopify_AppFeedbackInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  icon?: InputMaybe<TsWhereShopify_ImageInput>;
  id?: InputMaybe<TsWhereStringInput>;
  installUrl?: InputMaybe<TsWhereInput>;
  installation?: InputMaybe<TsWhereShopify_AppInstallationInput>;
  isPostPurchaseAppInUse?: InputMaybe<TsWhereBooleanInput>;
  launchUrl?: InputMaybe<TsWhereInput>;
  navigationItems?: InputMaybe<TsWhereShopify_NavigationItemInput>;
  previouslyInstalled?: InputMaybe<TsWhereBooleanInput>;
  pricingDetails?: InputMaybe<TsWhereStringInput>;
  pricingDetailsSummary?: InputMaybe<TsWhereStringInput>;
  privacyPolicyUrl?: InputMaybe<TsWhereInput>;
  publicCategory?: InputMaybe<TsWhereStringInput>;
  published?: InputMaybe<TsWhereBooleanInput>;
  requestedAccessScopes?: InputMaybe<TsWhereShopify_AccessScopeInput>;
  screenshots?: InputMaybe<TsWhereShopify_ImageInput>;
  shopifyDeveloped?: InputMaybe<TsWhereBooleanInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uninstallMessage?: InputMaybe<TsWhereStringInput>;
  uninstallUrl?: InputMaybe<TsWhereInput>;
  webhookApiVersion?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_AppInstallationInput = {
  accessScopes?: InputMaybe<TsWhereShopify_AccessScopeInput>;
  activeSubscriptions?: InputMaybe<TsWhereShopify_AppSubscriptionInput>;
  allSubscriptions?: InputMaybe<TsWhereShopify_AppSubscriptionConnectionInput>;
  app?: InputMaybe<TsWhereShopify_AppInput>;
  channel?: InputMaybe<TsWhereShopify_ChannelInput>;
  credits?: InputMaybe<TsWhereShopify_AppCreditConnectionInput>;
  id?: InputMaybe<TsWhereStringInput>;
  launchUrl?: InputMaybe<TsWhereInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  oneTimePurchases?: InputMaybe<TsWhereShopify_AppPurchaseOneTimeConnectionInput>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  publication?: InputMaybe<TsWhereShopify_PublicationInput>;
  revenueAttributionRecords?: InputMaybe<TsWhereShopify_AppRevenueAttributionRecordConnectionInput>;
  subscriptions?: InputMaybe<TsWhereShopify_AppSubscriptionInput>;
  uninstallUrl?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_AppPlanV2Input = {
  pricingDetails?: InputMaybe<TsWhereShopify_AppPricingDetailsInput>;
};

export type TsWhereShopify_AppPricingDetailsInput = {
  balanceUsed?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  cappedAmount?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  discount?: InputMaybe<TsWhereShopify_AppSubscriptionDiscountInput>;
  interval?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  terms?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_AppPurchaseOneTimeConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_AppPurchaseOneTimeEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_AppPurchaseOneTimeInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_AppPurchaseOneTimeEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_AppPurchaseOneTimeInput>;
};

export type TsWhereShopify_AppPurchaseOneTimeInput = {
  createdAt?: InputMaybe<TsWhereInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  status?: InputMaybe<TsWhereStringInput>;
  test?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_AppRevenueAttributionRecordConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_AppRevenueAttributionRecordEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_AppRevenueAttributionRecordInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_AppRevenueAttributionRecordEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_AppRevenueAttributionRecordInput>;
};

export type TsWhereShopify_AppRevenueAttributionRecordInput = {
  amount?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  capturedAt?: InputMaybe<TsWhereInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  id?: InputMaybe<TsWhereStringInput>;
  idempotencyKey?: InputMaybe<TsWhereStringInput>;
  test?: InputMaybe<TsWhereBooleanInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_AppSubscriptionConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_AppSubscriptionEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_AppSubscriptionInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_AppSubscriptionDiscountInput = {
  durationLimitInIntervals?: InputMaybe<TsWhereIntegerInput>;
  priceAfterDiscount?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  remainingDurationInIntervals?: InputMaybe<TsWhereIntegerInput>;
  value?: InputMaybe<TsWhereShopify_AppSubscriptionDiscountValueInput>;
};

export type TsWhereShopify_AppSubscriptionDiscountValueInput = {
  amount?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  percentage?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereShopify_AppSubscriptionEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_AppSubscriptionInput>;
};

export type TsWhereShopify_AppSubscriptionInput = {
  createdAt?: InputMaybe<TsWhereInput>;
  currentPeriodEnd?: InputMaybe<TsWhereInput>;
  id?: InputMaybe<TsWhereStringInput>;
  lineItems?: InputMaybe<TsWhereShopify_AppSubscriptionLineItemInput>;
  name?: InputMaybe<TsWhereStringInput>;
  returnUrl?: InputMaybe<TsWhereInput>;
  status?: InputMaybe<TsWhereStringInput>;
  test?: InputMaybe<TsWhereBooleanInput>;
  trialDays?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_AppSubscriptionLineItemInput = {
  id?: InputMaybe<TsWhereStringInput>;
  plan?: InputMaybe<TsWhereShopify_AppPlanV2Input>;
  usageRecords?: InputMaybe<TsWhereShopify_AppUsageRecordConnectionInput>;
};

export type TsWhereShopify_AppUsageRecordConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_AppUsageRecordEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_AppUsageRecordInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_AppUsageRecordEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_AppUsageRecordInput>;
};

export type TsWhereShopify_AppUsageRecordInput = {
  createdAt?: InputMaybe<TsWhereInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  price?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  subscriptionLineItem?: InputMaybe<TsWhereShopify_AppSubscriptionLineItemInput>;
};

export type TsWhereShopify_ChannelInput = {
  app?: InputMaybe<TsWhereShopify_AppInput>;
  collectionPublicationsV3?: InputMaybe<TsWhereShopify_ResourcePublicationConnectionInput>;
  collections?: InputMaybe<TsWhereShopify_CollectionConnectionInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  hasCollection?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  navigationItems?: InputMaybe<TsWhereShopify_NavigationItemInput>;
  overviewPath?: InputMaybe<TsWhereInput>;
  productPublicationsV3?: InputMaybe<TsWhereShopify_ResourcePublicationConnectionInput>;
  products?: InputMaybe<TsWhereShopify_ProductConnectionInput>;
  supportsFuturePublishing?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_CollectionConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_CollectionEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_CollectionInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_CollectionEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_CollectionInput>;
};

export type TsWhereShopify_CollectionInput = {
  description?: InputMaybe<TsWhereStringInput>;
  descriptionHtml?: InputMaybe<TsWhereInput>;
  feedback?: InputMaybe<TsWhereShopify_ResourceFeedbackInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  hasProduct?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  image?: InputMaybe<TsWhereShopify_ImageInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafieldDefinitions?: InputMaybe<TsWhereShopify_MetafieldDefinitionConnectionInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  products?: InputMaybe<TsWhereShopify_ProductConnectionInput>;
  productsCount?: InputMaybe<TsWhereIntegerInput>;
  publishedOnChannel?: InputMaybe<TsWhereBooleanInput>;
  publishedOnPublication?: InputMaybe<TsWhereBooleanInput>;
  ruleSet?: InputMaybe<TsWhereShopify_CollectionRuleSetInput>;
  seo?: InputMaybe<TsWhereShopify_SeoInput>;
  sortOrder?: InputMaybe<TsWhereStringInput>;
  storefrontId?: InputMaybe<TsWhereInput>;
  takeshape?: InputMaybe<TsWhereCollectionInput>;
  templateSuffix?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_CollectionRuleInput = {
  column?: InputMaybe<TsWhereStringInput>;
  condition?: InputMaybe<TsWhereStringInput>;
  relation?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_CollectionRuleSetInput = {
  appliedDisjunctively?: InputMaybe<TsWhereBooleanInput>;
  rules?: InputMaybe<TsWhereShopify_CollectionRuleInput>;
};

export type TsWhereShopify_CountryHarmonizedSystemCodeConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_CountryHarmonizedSystemCodeEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_CountryHarmonizedSystemCodeInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_CountryHarmonizedSystemCodeEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_CountryHarmonizedSystemCodeInput>;
};

export type TsWhereShopify_CountryHarmonizedSystemCodeInput = {
  countryCode?: InputMaybe<TsWhereStringInput>;
  harmonizedSystemCode?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryAvailableServiceInput = {
  countries?: InputMaybe<TsWhereShopify_DeliveryCountryCodesOrRestOfWorldInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryCarrierServiceInput = {
  availableServicesForCountries?: InputMaybe<TsWhereShopify_DeliveryAvailableServiceInput>;
  formattedName?: InputMaybe<TsWhereStringInput>;
  icon?: InputMaybe<TsWhereShopify_ImageInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryConditionCriteriaInput = {
  amount?: InputMaybe<TsWhereInput>;
  currencyCode?: InputMaybe<TsWhereStringInput>;
  unit?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereShopify_DeliveryConditionInput = {
  conditionCriteria?: InputMaybe<TsWhereShopify_DeliveryConditionCriteriaInput>;
  field?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  operator?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryCountryAndZoneInput = {
  country?: InputMaybe<TsWhereShopify_DeliveryCountryInput>;
  zone?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryCountryCodeOrRestOfWorldInput = {
  countryCode?: InputMaybe<TsWhereStringInput>;
  restOfWorld?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_DeliveryCountryCodesOrRestOfWorldInput = {
  restOfWorld?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_DeliveryCountryInput = {
  code?: InputMaybe<TsWhereShopify_DeliveryCountryCodeOrRestOfWorldInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  provinces?: InputMaybe<TsWhereShopify_DeliveryProvinceInput>;
  translatedName?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryLocationGroupInput = {
  id?: InputMaybe<TsWhereStringInput>;
  locations?: InputMaybe<TsWhereShopify_LocationConnectionInput>;
};

export type TsWhereShopify_DeliveryLocationGroupZoneConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_DeliveryLocationGroupZoneEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_DeliveryLocationGroupZoneInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_DeliveryLocationGroupZoneEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_DeliveryLocationGroupZoneInput>;
};

export type TsWhereShopify_DeliveryLocationGroupZoneInput = {
  methodDefinitionCounts?: InputMaybe<TsWhereShopify_DeliveryMethodDefinitionCountsInput>;
  methodDefinitions?: InputMaybe<TsWhereShopify_DeliveryMethodDefinitionConnectionInput>;
  zone?: InputMaybe<TsWhereShopify_DeliveryZoneInput>;
};

export type TsWhereShopify_DeliveryMethodDefinitionConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_DeliveryMethodDefinitionEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_DeliveryMethodDefinitionInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_DeliveryMethodDefinitionCountsInput = {
  participantDefinitionsCount?: InputMaybe<TsWhereIntegerInput>;
  rateDefinitionsCount?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_DeliveryMethodDefinitionEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_DeliveryMethodDefinitionInput>;
};

export type TsWhereShopify_DeliveryMethodDefinitionInput = {
  active?: InputMaybe<TsWhereBooleanInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  methodConditions?: InputMaybe<TsWhereShopify_DeliveryConditionInput>;
  name?: InputMaybe<TsWhereStringInput>;
  rateProvider?: InputMaybe<TsWhereShopify_DeliveryRateProviderInput>;
};

export type TsWhereShopify_DeliveryParticipantServiceInput = {
  active?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryProductVariantsCountInput = {
  capped?: InputMaybe<TsWhereBooleanInput>;
  count?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_DeliveryProfileInput = {
  activeMethodDefinitionsCount?: InputMaybe<TsWhereIntegerInput>;
  default?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  legacyMode?: InputMaybe<TsWhereBooleanInput>;
  locationsWithoutRatesCount?: InputMaybe<TsWhereIntegerInput>;
  name?: InputMaybe<TsWhereStringInput>;
  originLocationCount?: InputMaybe<TsWhereIntegerInput>;
  productVariantsCount?: InputMaybe<TsWhereIntegerInput>;
  productVariantsCountV2?: InputMaybe<TsWhereShopify_DeliveryProductVariantsCountInput>;
  profileItems?: InputMaybe<TsWhereShopify_DeliveryProfileItemConnectionInput>;
  profileLocationGroups?: InputMaybe<TsWhereShopify_DeliveryProfileLocationGroupInput>;
  sellingPlanGroups?: InputMaybe<TsWhereShopify_SellingPlanGroupConnectionInput>;
  unassignedLocations?: InputMaybe<TsWhereShopify_LocationInput>;
  zoneCountryCount?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_DeliveryProfileItemConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_DeliveryProfileItemEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_DeliveryProfileItemInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_DeliveryProfileItemEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_DeliveryProfileItemInput>;
};

export type TsWhereShopify_DeliveryProfileItemInput = {
  id?: InputMaybe<TsWhereStringInput>;
  product?: InputMaybe<TsWhereShopify_ProductInput>;
  variants?: InputMaybe<TsWhereShopify_ProductVariantConnectionInput>;
};

export type TsWhereShopify_DeliveryProfileLocationGroupInput = {
  countriesInAnyZone?: InputMaybe<TsWhereShopify_DeliveryCountryAndZoneInput>;
  locationGroup?: InputMaybe<TsWhereShopify_DeliveryLocationGroupInput>;
  locationGroupZones?: InputMaybe<TsWhereShopify_DeliveryLocationGroupZoneConnectionInput>;
};

export type TsWhereShopify_DeliveryProvinceInput = {
  code?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  translatedName?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_DeliveryRateProviderInput = {
  adaptToNewServicesFlag?: InputMaybe<TsWhereBooleanInput>;
  carrierService?: InputMaybe<TsWhereShopify_DeliveryCarrierServiceInput>;
  fixedFee?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  id?: InputMaybe<TsWhereStringInput>;
  participantServices?: InputMaybe<TsWhereShopify_DeliveryParticipantServiceInput>;
  percentageOfRateFee?: InputMaybe<TsWhereNumberInput>;
  price?: InputMaybe<TsWhereShopify_MoneyV2Input>;
};

export type TsWhereShopify_DeliveryZoneInput = {
  countries?: InputMaybe<TsWhereShopify_DeliveryCountryInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_EditablePropertyInput = {
  locked?: InputMaybe<TsWhereBooleanInput>;
  reason?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_FailedRequirementInput = {
  action?: InputMaybe<TsWhereShopify_NavigationItemInput>;
  message?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_FileErrorInput = {
  code?: InputMaybe<TsWhereStringInput>;
  details?: InputMaybe<TsWhereStringInput>;
  message?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_FulfillmentServiceInput = {
  callbackUrl?: InputMaybe<TsWhereInput>;
  fulfillmentOrdersOptIn?: InputMaybe<TsWhereBooleanInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  inventoryManagement?: InputMaybe<TsWhereBooleanInput>;
  location?: InputMaybe<TsWhereShopify_LocationInput>;
  productBased?: InputMaybe<TsWhereBooleanInput>;
  serviceName?: InputMaybe<TsWhereStringInput>;
  shippingMethods?: InputMaybe<TsWhereShopify_ShippingMethodInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_HasMetafieldsInput = {
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
};

export type TsWhereShopify_ImageConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_ImageEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_ImageInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_ImageEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_ImageInput>;
};

export type TsWhereShopify_ImageInput = {
  altText?: InputMaybe<TsWhereStringInput>;
  height?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  originalSrc?: InputMaybe<TsWhereInput>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  src?: InputMaybe<TsWhereInput>;
  transformedSrc?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereInput>;
  width?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_InventoryItemInput = {
  countryCodeOfOrigin?: InputMaybe<TsWhereStringInput>;
  countryHarmonizedSystemCodes?: InputMaybe<TsWhereShopify_CountryHarmonizedSystemCodeConnectionInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  duplicateSkuCount?: InputMaybe<TsWhereIntegerInput>;
  harmonizedSystemCode?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  inventoryHistoryUrl?: InputMaybe<TsWhereInput>;
  inventoryLevel?: InputMaybe<TsWhereShopify_InventoryLevelInput>;
  inventoryLevels?: InputMaybe<TsWhereShopify_InventoryLevelConnectionInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  locationsCount?: InputMaybe<TsWhereIntegerInput>;
  provinceCodeOfOrigin?: InputMaybe<TsWhereStringInput>;
  requiresShipping?: InputMaybe<TsWhereBooleanInput>;
  sku?: InputMaybe<TsWhereStringInput>;
  tracked?: InputMaybe<TsWhereBooleanInput>;
  trackedEditable?: InputMaybe<TsWhereShopify_EditablePropertyInput>;
  unitCost?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  updatedAt?: InputMaybe<TsWhereInput>;
  variant?: InputMaybe<TsWhereShopify_ProductVariantInput>;
};

export type TsWhereShopify_InventoryLevelConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_InventoryLevelEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_InventoryLevelInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_InventoryLevelEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_InventoryLevelInput>;
};

export type TsWhereShopify_InventoryLevelInput = {
  available?: InputMaybe<TsWhereIntegerInput>;
  canDeactivate?: InputMaybe<TsWhereBooleanInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  deactivationAlert?: InputMaybe<TsWhereStringInput>;
  deactivationAlertHtml?: InputMaybe<TsWhereInput>;
  id?: InputMaybe<TsWhereStringInput>;
  incoming?: InputMaybe<TsWhereIntegerInput>;
  item?: InputMaybe<TsWhereShopify_InventoryItemInput>;
  location?: InputMaybe<TsWhereShopify_LocationInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_LinkInput = {
  label?: InputMaybe<TsWhereStringInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  url?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_LocationAddressInput = {
  address1?: InputMaybe<TsWhereStringInput>;
  address2?: InputMaybe<TsWhereStringInput>;
  city?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  countryCode?: InputMaybe<TsWhereStringInput>;
  formatted?: InputMaybe<TsWhereShopify_ProductVariantFormattedInput>;
  latitude?: InputMaybe<TsWhereNumberInput>;
  longitude?: InputMaybe<TsWhereNumberInput>;
  phone?: InputMaybe<TsWhereStringInput>;
  province?: InputMaybe<TsWhereStringInput>;
  provinceCode?: InputMaybe<TsWhereStringInput>;
  zip?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_LocationConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_LocationEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_LocationInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_LocationEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_LocationInput>;
};

export type TsWhereShopify_LocationInput = {
  activatable?: InputMaybe<TsWhereBooleanInput>;
  address?: InputMaybe<TsWhereShopify_LocationAddressInput>;
  addressVerified?: InputMaybe<TsWhereBooleanInput>;
  deactivatable?: InputMaybe<TsWhereBooleanInput>;
  deactivatedAt?: InputMaybe<TsWhereStringInput>;
  deletable?: InputMaybe<TsWhereBooleanInput>;
  fulfillmentService?: InputMaybe<TsWhereShopify_FulfillmentServiceInput>;
  fulfillsOnlineOrders?: InputMaybe<TsWhereBooleanInput>;
  hasActiveInventory?: InputMaybe<TsWhereBooleanInput>;
  hasUnfulfilledOrders?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  inventoryLevel?: InputMaybe<TsWhereShopify_InventoryLevelInput>;
  inventoryLevels?: InputMaybe<TsWhereShopify_InventoryLevelConnectionInput>;
  isActive?: InputMaybe<TsWhereBooleanInput>;
  isPrimary?: InputMaybe<TsWhereBooleanInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  metafieldDefinitions?: InputMaybe<TsWhereShopify_MetafieldDefinitionConnectionInput>;
  name?: InputMaybe<TsWhereStringInput>;
  shipsInventory?: InputMaybe<TsWhereBooleanInput>;
  suggestedAddresses?: InputMaybe<TsWhereShopify_LocationSuggestedAddressInput>;
};

export type TsWhereShopify_LocationSuggestedAddressInput = {
  address1?: InputMaybe<TsWhereStringInput>;
  address2?: InputMaybe<TsWhereStringInput>;
  city?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  countryCode?: InputMaybe<TsWhereStringInput>;
  formatted?: InputMaybe<TsWhereShopify_ProductVariantFormattedInput>;
  province?: InputMaybe<TsWhereStringInput>;
  provinceCode?: InputMaybe<TsWhereStringInput>;
  zip?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MediaConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_MediaEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_MediaInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_MediaEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_MediaInput>;
};

export type TsWhereShopify_MediaErrorInput = {
  code?: InputMaybe<TsWhereStringInput>;
  details?: InputMaybe<TsWhereStringInput>;
  message?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MediaInput = {
  alt?: InputMaybe<TsWhereStringInput>;
  mediaContentType?: InputMaybe<TsWhereStringInput>;
  mediaErrors?: InputMaybe<TsWhereShopify_MediaErrorInput>;
  mediaWarnings?: InputMaybe<TsWhereShopify_MediaWarningInput>;
  preview?: InputMaybe<TsWhereShopify_MediaPreviewImageInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MediaPreviewImageInput = {
  image?: InputMaybe<TsWhereShopify_ImageInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MediaWarningInput = {
  code?: InputMaybe<TsWhereStringInput>;
  message?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MetafieldConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_MetafieldEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_MetafieldInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_MetafieldDefinitionConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_MetafieldDefinitionEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_MetafieldDefinitionInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_MetafieldDefinitionEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_MetafieldDefinitionInput>;
};

export type TsWhereShopify_MetafieldDefinitionInput = {
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  metafieldsCount?: InputMaybe<TsWhereIntegerInput>;
  name?: InputMaybe<TsWhereStringInput>;
  namespace?: InputMaybe<TsWhereStringInput>;
  ownerType?: InputMaybe<TsWhereStringInput>;
  pinnedPosition?: InputMaybe<TsWhereIntegerInput>;
  standardTemplate?: InputMaybe<TsWhereShopify_StandardMetafieldDefinitionTemplateInput>;
  type?: InputMaybe<TsWhereShopify_MetafieldDefinitionTypeInput>;
  validationStatus?: InputMaybe<TsWhereStringInput>;
  validations?: InputMaybe<TsWhereShopify_MetafieldDefinitionValidationInput>;
  visibleToStorefrontApi?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_MetafieldDefinitionSupportedValidationInput = {
  name?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MetafieldDefinitionTypeInput = {
  category?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  supportedValidations?: InputMaybe<TsWhereShopify_MetafieldDefinitionSupportedValidationInput>;
  supportsDefinitionMigrations?: InputMaybe<TsWhereBooleanInput>;
  valueType?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MetafieldDefinitionValidationInput = {
  name?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MetafieldEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_MetafieldInput>;
};

export type TsWhereShopify_MetafieldInput = {
  createdAt?: InputMaybe<TsWhereInput>;
  definition?: InputMaybe<TsWhereShopify_MetafieldDefinitionInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  namespace?: InputMaybe<TsWhereStringInput>;
  owner?: InputMaybe<TsWhereShopify_HasMetafieldsInput>;
  ownerType?: InputMaybe<TsWhereStringInput>;
  reference?: InputMaybe<TsWhereShopify_MetafieldReferenceInput>;
  type?: InputMaybe<TsWhereStringInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MetafieldReferenceInput = {
  _id?: InputMaybe<TsWhereIdInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  alt?: InputMaybe<TsWhereStringInput>;
  availableForSale?: InputMaybe<TsWhereBooleanInput>;
  barcode?: InputMaybe<TsWhereStringInput>;
  bodyHtml?: InputMaybe<TsWhereStringInput>;
  collections?: InputMaybe<TsWhereShopify_CollectionConnectionInput>;
  compareAtPrice?: InputMaybe<TsWhereInput>;
  contextualPricing?: InputMaybe<TsWhereShopify_ProductVariantContextualPricingInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  customProductType?: InputMaybe<TsWhereStringInput>;
  defaultCursor?: InputMaybe<TsWhereStringInput>;
  deliveryProfile?: InputMaybe<TsWhereShopify_DeliveryProfileInput>;
  description?: InputMaybe<TsWhereStringInput>;
  descriptionHtml?: InputMaybe<TsWhereInput>;
  descriptionPlainSummary?: InputMaybe<TsWhereStringInput>;
  displayName?: InputMaybe<TsWhereStringInput>;
  duration?: InputMaybe<TsWhereIntegerInput>;
  featuredImage?: InputMaybe<TsWhereShopify_ImageInput>;
  featuredMedia?: InputMaybe<TsWhereShopify_MediaInput>;
  feedback?: InputMaybe<TsWhereShopify_ResourceFeedbackInput>;
  fileErrors?: InputMaybe<TsWhereShopify_FileErrorInput>;
  fileStatus?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  fulfillmentService?: InputMaybe<TsWhereShopify_FulfillmentServiceInput>;
  fulfillmentServiceEditable?: InputMaybe<TsWhereShopify_EditablePropertyInput>;
  giftCardTemplateSuffix?: InputMaybe<TsWhereStringInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  harmonizedSystemCode?: InputMaybe<TsWhereStringInput>;
  hasOnlyDefaultVariant?: InputMaybe<TsWhereBooleanInput>;
  hasOutOfStockVariants?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  image?: InputMaybe<TsWhereShopify_ImageInput>;
  images?: InputMaybe<TsWhereShopify_ImageConnectionInput>;
  inCollection?: InputMaybe<TsWhereBooleanInput>;
  inventoryItem?: InputMaybe<TsWhereShopify_InventoryItemInput>;
  inventoryManagement?: InputMaybe<TsWhereStringInput>;
  inventoryPolicy?: InputMaybe<TsWhereStringInput>;
  inventoryQuantity?: InputMaybe<TsWhereIntegerInput>;
  isGiftCard?: InputMaybe<TsWhereBooleanInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  media?: InputMaybe<TsWhereShopify_MediaConnectionInput>;
  mediaContentType?: InputMaybe<TsWhereStringInput>;
  mediaCount?: InputMaybe<TsWhereIntegerInput>;
  mediaErrors?: InputMaybe<TsWhereShopify_MediaErrorInput>;
  mediaWarnings?: InputMaybe<TsWhereShopify_MediaWarningInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafieldDefinitions?: InputMaybe<TsWhereShopify_MetafieldDefinitionConnectionInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  onlineStorePreviewUrl?: InputMaybe<TsWhereInput>;
  onlineStoreUrl?: InputMaybe<TsWhereInput>;
  options?: InputMaybe<TsWhereShopify_ProductOptionInput>;
  originalFileSize?: InputMaybe<TsWhereIntegerInput>;
  originalSource?: InputMaybe<TsWhereShopify_VideoSourceInput>;
  position?: InputMaybe<TsWhereIntegerInput>;
  presentmentPrices?: InputMaybe<TsWhereShopify_ProductVariantPricePairConnectionInput>;
  preview?: InputMaybe<TsWhereShopify_MediaPreviewImageInput>;
  price?: InputMaybe<TsWhereInput>;
  priceRange?: InputMaybe<TsWhereShopify_ProductPriceRangeInput>;
  priceRangeV2?: InputMaybe<TsWhereShopify_ProductPriceRangeV2Input>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  product?: InputMaybe<TsWhereShopify_ProductInput>;
  productType?: InputMaybe<TsWhereStringInput>;
  publishedAt?: InputMaybe<TsWhereInput>;
  publishedOnChannel?: InputMaybe<TsWhereBooleanInput>;
  publishedOnPublication?: InputMaybe<TsWhereBooleanInput>;
  requiresSellingPlan?: InputMaybe<TsWhereBooleanInput>;
  requiresShipping?: InputMaybe<TsWhereBooleanInput>;
  resourcePublicationOnCurrentPublication?: InputMaybe<TsWhereShopify_ResourcePublicationV2Input>;
  reviews?: InputMaybe<TsWhereReviewsIo_ListProductReviewsResponseInput>;
  selectedOptions?: InputMaybe<TsWhereShopify_SelectedOptionInput>;
  sellableOnlineQuantity?: InputMaybe<TsWhereIntegerInput>;
  sellingPlanGroupCount?: InputMaybe<TsWhereIntegerInput>;
  sellingPlanGroups?: InputMaybe<TsWhereShopify_SellingPlanGroupConnectionInput>;
  seo?: InputMaybe<TsWhereShopify_SeoInput>;
  sku?: InputMaybe<TsWhereStringInput>;
  sources?: InputMaybe<TsWhereShopify_VideoSourceInput>;
  standardizedProductType?: InputMaybe<TsWhereShopify_StandardizedProductTypeInput>;
  status?: InputMaybe<TsWhereStringInput>;
  storefrontId?: InputMaybe<TsWhereInput>;
  tags?: InputMaybe<TsWhereShopify_ProductTagsInput>;
  takeshape?: InputMaybe<TsWhereProductInput>;
  taxCode?: InputMaybe<TsWhereStringInput>;
  taxable?: InputMaybe<TsWhereBooleanInput>;
  templateSuffix?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  totalInventory?: InputMaybe<TsWhereIntegerInput>;
  totalVariants?: InputMaybe<TsWhereIntegerInput>;
  tracksInventory?: InputMaybe<TsWhereBooleanInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereInput>;
  variants?: InputMaybe<TsWhereShopify_ProductVariantConnectionInput>;
  vendor?: InputMaybe<TsWhereStringInput>;
  weight?: InputMaybe<TsWhereNumberInput>;
  weightUnit?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_MoneyV2Input = {
  amount?: InputMaybe<TsWhereInput>;
  currencyCode?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_NavigationItemInput = {
  id?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_PageInfoInput = {
  endCursor?: InputMaybe<TsWhereStringInput>;
  hasNextPage?: InputMaybe<TsWhereBooleanInput>;
  hasPreviousPage?: InputMaybe<TsWhereBooleanInput>;
  startCursor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_PrivateMetafieldConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_PrivateMetafieldEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_PrivateMetafieldEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
};

export type TsWhereShopify_PrivateMetafieldInput = {
  createdAt?: InputMaybe<TsWhereInput>;
  id?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  namespace?: InputMaybe<TsWhereStringInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
  value?: InputMaybe<TsWhereStringInput>;
  valueType?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductAuthorInput = {
  email?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_ProductEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_ProductInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_ProductContextualPricingInput = {
  maxVariantPricing?: InputMaybe<TsWhereShopify_ProductVariantContextualPricingInput>;
  minVariantPricing?: InputMaybe<TsWhereShopify_ProductVariantContextualPricingInput>;
  priceRange?: InputMaybe<TsWhereShopify_ProductPriceRangeV2Input>;
};

export type TsWhereShopify_ProductEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_ProductInput>;
};

export type TsWhereShopify_ProductFeaturesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereShopify_ProductFieldInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereShopify_ProductInput = {
  _id?: InputMaybe<TsWhereIdInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  bodyHtml?: InputMaybe<TsWhereStringInput>;
  collections?: InputMaybe<TsWhereShopify_CollectionConnectionInput>;
  contextualPricing?: InputMaybe<TsWhereShopify_ProductContextualPricingInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  customProductType?: InputMaybe<TsWhereStringInput>;
  defaultCursor?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  descriptionHtml?: InputMaybe<TsWhereInput>;
  descriptionPlainSummary?: InputMaybe<TsWhereStringInput>;
  featuredImage?: InputMaybe<TsWhereShopify_ImageInput>;
  featuredMedia?: InputMaybe<TsWhereShopify_MediaInput>;
  feedback?: InputMaybe<TsWhereShopify_ResourceFeedbackInput>;
  giftCardTemplateSuffix?: InputMaybe<TsWhereStringInput>;
  handle?: InputMaybe<TsWhereStringInput>;
  hasOnlyDefaultVariant?: InputMaybe<TsWhereBooleanInput>;
  hasOutOfStockVariants?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  images?: InputMaybe<TsWhereShopify_ImageConnectionInput>;
  inCollection?: InputMaybe<TsWhereBooleanInput>;
  isGiftCard?: InputMaybe<TsWhereBooleanInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  media?: InputMaybe<TsWhereShopify_MediaConnectionInput>;
  mediaCount?: InputMaybe<TsWhereIntegerInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafieldDefinitions?: InputMaybe<TsWhereShopify_MetafieldDefinitionConnectionInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  onlineStorePreviewUrl?: InputMaybe<TsWhereInput>;
  onlineStoreUrl?: InputMaybe<TsWhereInput>;
  options?: InputMaybe<TsWhereShopify_ProductOptionInput>;
  priceRange?: InputMaybe<TsWhereShopify_ProductPriceRangeInput>;
  priceRangeV2?: InputMaybe<TsWhereShopify_ProductPriceRangeV2Input>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  productType?: InputMaybe<TsWhereStringInput>;
  publishedAt?: InputMaybe<TsWhereInput>;
  publishedOnChannel?: InputMaybe<TsWhereBooleanInput>;
  publishedOnPublication?: InputMaybe<TsWhereBooleanInput>;
  requiresSellingPlan?: InputMaybe<TsWhereBooleanInput>;
  resourcePublicationOnCurrentPublication?: InputMaybe<TsWhereShopify_ResourcePublicationV2Input>;
  reviews?: InputMaybe<TsWhereReviewsIo_ListProductReviewsResponseInput>;
  sellingPlanGroupCount?: InputMaybe<TsWhereIntegerInput>;
  sellingPlanGroups?: InputMaybe<TsWhereShopify_SellingPlanGroupConnectionInput>;
  seo?: InputMaybe<TsWhereShopify_SeoInput>;
  standardizedProductType?: InputMaybe<TsWhereShopify_StandardizedProductTypeInput>;
  status?: InputMaybe<TsWhereStringInput>;
  storefrontId?: InputMaybe<TsWhereInput>;
  tags?: InputMaybe<TsWhereShopify_ProductTagsInput>;
  takeshape?: InputMaybe<TsWhereProductInput>;
  templateSuffix?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  totalInventory?: InputMaybe<TsWhereIntegerInput>;
  totalVariants?: InputMaybe<TsWhereIntegerInput>;
  tracksInventory?: InputMaybe<TsWhereBooleanInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
  variants?: InputMaybe<TsWhereShopify_ProductVariantConnectionInput>;
  vendor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductOptionInput = {
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  position?: InputMaybe<TsWhereIntegerInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  values?: InputMaybe<TsWhereShopify_ProductValuesInput>;
};

export type TsWhereShopify_ProductOptionsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereShopify_ProductPriceRangeInput = {
  maxVariantPrice?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  minVariantPrice?: InputMaybe<TsWhereShopify_MoneyV2Input>;
};

export type TsWhereShopify_ProductPriceRangeV2Input = {
  maxVariantPrice?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  minVariantPrice?: InputMaybe<TsWhereShopify_MoneyV2Input>;
};

export type TsWhereShopify_ProductProductsInput = {
  name?: InputMaybe<TsWhereStringInput>;
  sku?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductReviewsInput = {
  current_page?: InputMaybe<TsWhereIntegerInput>;
  data?: InputMaybe<TsWhereReviewsIo_ProductReviewInput>;
  from?: InputMaybe<TsWhereIntegerInput>;
  last_page?: InputMaybe<TsWhereIntegerInput>;
  per_page?: InputMaybe<TsWhereIntegerInput>;
  to?: InputMaybe<TsWhereIntegerInput>;
  total?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_ProductStatsInput = {
  average?: InputMaybe<TsWhereNumberInput>;
  count?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_ProductStoreInput = {
  logo?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductTagsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereShopify_ProductTaxonomyNodeInput = {
  fullName?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  isLeaf?: InputMaybe<TsWhereBooleanInput>;
  isRoot?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductValuesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereShopify_ProductVariantConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_ProductVariantEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_ProductVariantInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_ProductVariantContextualPricingInput = {
  compareAtPrice?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  price?: InputMaybe<TsWhereShopify_MoneyV2Input>;
};

export type TsWhereShopify_ProductVariantEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_ProductVariantInput>;
};

export type TsWhereShopify_ProductVariantFormattedInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereShopify_ProductVariantInput = {
  availableForSale?: InputMaybe<TsWhereBooleanInput>;
  barcode?: InputMaybe<TsWhereStringInput>;
  compareAtPrice?: InputMaybe<TsWhereInput>;
  contextualPricing?: InputMaybe<TsWhereShopify_ProductVariantContextualPricingInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  defaultCursor?: InputMaybe<TsWhereStringInput>;
  deliveryProfile?: InputMaybe<TsWhereShopify_DeliveryProfileInput>;
  displayName?: InputMaybe<TsWhereStringInput>;
  fulfillmentService?: InputMaybe<TsWhereShopify_FulfillmentServiceInput>;
  fulfillmentServiceEditable?: InputMaybe<TsWhereShopify_EditablePropertyInput>;
  harmonizedSystemCode?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  image?: InputMaybe<TsWhereShopify_ImageInput>;
  inventoryItem?: InputMaybe<TsWhereShopify_InventoryItemInput>;
  inventoryManagement?: InputMaybe<TsWhereStringInput>;
  inventoryPolicy?: InputMaybe<TsWhereStringInput>;
  inventoryQuantity?: InputMaybe<TsWhereIntegerInput>;
  legacyResourceId?: InputMaybe<TsWhereInput>;
  media?: InputMaybe<TsWhereShopify_MediaConnectionInput>;
  metafield?: InputMaybe<TsWhereShopify_MetafieldInput>;
  metafieldDefinitions?: InputMaybe<TsWhereShopify_MetafieldDefinitionConnectionInput>;
  metafields?: InputMaybe<TsWhereShopify_MetafieldConnectionInput>;
  position?: InputMaybe<TsWhereIntegerInput>;
  presentmentPrices?: InputMaybe<TsWhereShopify_ProductVariantPricePairConnectionInput>;
  price?: InputMaybe<TsWhereInput>;
  privateMetafield?: InputMaybe<TsWhereShopify_PrivateMetafieldInput>;
  privateMetafields?: InputMaybe<TsWhereShopify_PrivateMetafieldConnectionInput>;
  product?: InputMaybe<TsWhereShopify_ProductInput>;
  requiresShipping?: InputMaybe<TsWhereBooleanInput>;
  selectedOptions?: InputMaybe<TsWhereShopify_SelectedOptionInput>;
  sellableOnlineQuantity?: InputMaybe<TsWhereIntegerInput>;
  sellingPlanGroupCount?: InputMaybe<TsWhereIntegerInput>;
  sellingPlanGroups?: InputMaybe<TsWhereShopify_SellingPlanGroupConnectionInput>;
  sku?: InputMaybe<TsWhereStringInput>;
  storefrontId?: InputMaybe<TsWhereInput>;
  taxCode?: InputMaybe<TsWhereStringInput>;
  taxable?: InputMaybe<TsWhereBooleanInput>;
  title?: InputMaybe<TsWhereStringInput>;
  translations?: InputMaybe<TsWhereShopify_PublishedTranslationInput>;
  updatedAt?: InputMaybe<TsWhereInput>;
  weight?: InputMaybe<TsWhereNumberInput>;
  weightUnit?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ProductVariantPricePairConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_ProductVariantPricePairEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_ProductVariantPricePairInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_ProductVariantPricePairEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_ProductVariantPricePairInput>;
};

export type TsWhereShopify_ProductVariantPricePairInput = {
  compareAtPrice?: InputMaybe<TsWhereShopify_MoneyV2Input>;
  price?: InputMaybe<TsWhereShopify_MoneyV2Input>;
};

export type TsWhereShopify_PublicationInput = {
  app?: InputMaybe<TsWhereShopify_AppInput>;
  collectionPublicationsV3?: InputMaybe<TsWhereShopify_ResourcePublicationConnectionInput>;
  collections?: InputMaybe<TsWhereShopify_CollectionConnectionInput>;
  hasCollection?: InputMaybe<TsWhereBooleanInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  productPublicationsV3?: InputMaybe<TsWhereShopify_ResourcePublicationConnectionInput>;
  products?: InputMaybe<TsWhereShopify_ProductConnectionInput>;
  supportsFuturePublishing?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_PublishableInput = {
  publishedOnChannel?: InputMaybe<TsWhereBooleanInput>;
  publishedOnPublication?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_PublishedTranslationInput = {
  key?: InputMaybe<TsWhereStringInput>;
  locale?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ResourceFeedbackInput = {
  appFeedback?: InputMaybe<TsWhereShopify_AppFeedbackInput>;
  details?: InputMaybe<TsWhereShopify_AppFeedbackInput>;
  summary?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_ResourcePublicationConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_ResourcePublicationEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_ResourcePublicationInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_ResourcePublicationEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_ResourcePublicationInput>;
};

export type TsWhereShopify_ResourcePublicationInput = {
  channel?: InputMaybe<TsWhereShopify_ChannelInput>;
  isPublished?: InputMaybe<TsWhereBooleanInput>;
  publication?: InputMaybe<TsWhereShopify_PublicationInput>;
  publishDate?: InputMaybe<TsWhereInput>;
  publishable?: InputMaybe<TsWhereShopify_PublishableInput>;
};

export type TsWhereShopify_ResourcePublicationV2Input = {
  isPublished?: InputMaybe<TsWhereBooleanInput>;
  publication?: InputMaybe<TsWhereShopify_PublicationInput>;
  publishDate?: InputMaybe<TsWhereInput>;
  publishable?: InputMaybe<TsWhereShopify_PublishableInput>;
};

export type TsWhereShopify_SeoInput = {
  description?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_SelectedOptionInput = {
  name?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_SellingPlanAnchorInput = {
  day?: InputMaybe<TsWhereIntegerInput>;
  month?: InputMaybe<TsWhereIntegerInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_SellingPlanBillingPolicyInput = {
  anchors?: InputMaybe<TsWhereShopify_SellingPlanAnchorInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  interval?: InputMaybe<TsWhereStringInput>;
  intervalCount?: InputMaybe<TsWhereIntegerInput>;
  maxCycles?: InputMaybe<TsWhereIntegerInput>;
  minCycles?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereShopify_SellingPlanConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_SellingPlanEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_SellingPlanInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_SellingPlanDeliveryPolicyInput = {
  anchors?: InputMaybe<TsWhereShopify_SellingPlanAnchorInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  cutoff?: InputMaybe<TsWhereIntegerInput>;
  intent?: InputMaybe<TsWhereStringInput>;
  interval?: InputMaybe<TsWhereStringInput>;
  intervalCount?: InputMaybe<TsWhereIntegerInput>;
  preAnchorBehavior?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_SellingPlanEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_SellingPlanInput>;
};

export type TsWhereShopify_SellingPlanGroupConnectionInput = {
  edges?: InputMaybe<TsWhereShopify_SellingPlanGroupEdgeInput>;
  nodes?: InputMaybe<TsWhereShopify_SellingPlanGroupInput>;
  pageInfo?: InputMaybe<TsWhereShopify_PageInfoInput>;
};

export type TsWhereShopify_SellingPlanGroupEdgeInput = {
  cursor?: InputMaybe<TsWhereStringInput>;
  node?: InputMaybe<TsWhereShopify_SellingPlanGroupInput>;
};

export type TsWhereShopify_SellingPlanGroupInput = {
  appId?: InputMaybe<TsWhereStringInput>;
  appliesToProduct?: InputMaybe<TsWhereBooleanInput>;
  appliesToProductVariant?: InputMaybe<TsWhereBooleanInput>;
  appliesToProductVariants?: InputMaybe<TsWhereBooleanInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  merchantCode?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  options?: InputMaybe<TsWhereShopify_ProductOptionsInput>;
  position?: InputMaybe<TsWhereIntegerInput>;
  productCount?: InputMaybe<TsWhereIntegerInput>;
  productVariantCount?: InputMaybe<TsWhereIntegerInput>;
  productVariants?: InputMaybe<TsWhereShopify_ProductVariantConnectionInput>;
  products?: InputMaybe<TsWhereShopify_ProductConnectionInput>;
  sellingPlans?: InputMaybe<TsWhereShopify_SellingPlanConnectionInput>;
  summary?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_SellingPlanInput = {
  billingPolicy?: InputMaybe<TsWhereShopify_SellingPlanBillingPolicyInput>;
  createdAt?: InputMaybe<TsWhereInput>;
  deliveryPolicy?: InputMaybe<TsWhereShopify_SellingPlanDeliveryPolicyInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  options?: InputMaybe<TsWhereShopify_ProductOptionsInput>;
  position?: InputMaybe<TsWhereIntegerInput>;
  pricingPolicies?: InputMaybe<TsWhereShopify_SellingPlanPricingPolicyInput>;
};

export type TsWhereShopify_SellingPlanPricingPolicyAdjustmentValueInput = {
  amount?: InputMaybe<TsWhereInput>;
  currencyCode?: InputMaybe<TsWhereStringInput>;
  percentage?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereShopify_SellingPlanPricingPolicyInput = {
  adjustmentType?: InputMaybe<TsWhereStringInput>;
  adjustmentValue?: InputMaybe<TsWhereShopify_SellingPlanPricingPolicyAdjustmentValueInput>;
  afterCycle?: InputMaybe<TsWhereIntegerInput>;
  createdAt?: InputMaybe<TsWhereInput>;
};

export type TsWhereShopify_ShippingMethodInput = {
  code?: InputMaybe<TsWhereStringInput>;
  label?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_StandardMetafieldDefinitionTemplateInput = {
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  namespace?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereShopify_MetafieldDefinitionTypeInput>;
  validations?: InputMaybe<TsWhereShopify_MetafieldDefinitionValidationInput>;
  visibleToStorefrontApi?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereShopify_StandardizedProductTypeInput = {
  productTaxonomyNode?: InputMaybe<TsWhereShopify_ProductTaxonomyNodeInput>;
};

export type TsWhereShopify_UserErrorInput = {
  field?: InputMaybe<TsWhereShopify_ProductFieldInput>;
  message?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShopify_VideoSourceInput = {
  fileSize?: InputMaybe<TsWhereIntegerInput>;
  format?: InputMaybe<TsWhereStringInput>;
  height?: InputMaybe<TsWhereIntegerInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
  width?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStorefrontComponentsInput = {
  buttonText?: InputMaybe<TsWhereStringInput>;
  collections?: InputMaybe<TsWhereCollectionsComponentCollectionsInput>;
  components?: InputMaybe<TsWhereBackgroundImageComponentComponentsInput>;
  image?: InputMaybe<TsWhereAssetRelationshipInput>;
  offers?: InputMaybe<TsWhereOffersComponentOffersInput>;
  primaryText?: InputMaybe<TsWhereStringInput>;
  secondaryText?: InputMaybe<TsWhereStringInput>;
  testimonials?: InputMaybe<TsWhereTestimonialsComponentTestimonialsInput>;
  trendingProducts?: InputMaybe<TsWhereTrendingProductsComponentTrendingProductsInput>;
};

export type TsWhereStringInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereTestimonialsComponentTestimonialsInput = {
  attribution?: InputMaybe<TsWhereStringInput>;
  quote?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTextInput = {
  button?: InputMaybe<TsWhereStringInput>;
  primary?: InputMaybe<TsWhereStringInput>;
  secondary?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTrendingProductsComponentTrendingProductsInput = {
  shopifyProductId?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTsStaticSiteInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
};

export type TsWhereTsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereWorkflowInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']>;
};

export type TestimonialsComponent = {
  __typename?: 'TestimonialsComponent';
  testimonials: Array<TestimonialsComponentTestimonials>;
};

export type TestimonialsComponentInput = {
  testimonials: Array<TestimonialsComponentTestimonialsInput>;
};

export type TestimonialsComponentTestimonials = {
  __typename?: 'TestimonialsComponentTestimonials';
  attribution: Scalars['String'];
  quote: Scalars['String'];
};

export type TestimonialsComponentTestimonialsInput = {
  attribution: Scalars['String'];
  quote: Scalars['String'];
};

/** Reusable text shape */
export type Text = {
  __typename?: 'Text';
  button?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
};

export type TextInput = {
  button?: InputMaybe<Scalars['String']>;
  primary?: InputMaybe<Scalars['String']>;
  secondary?: InputMaybe<Scalars['String']>;
};

export type TextInputUnion = {
  text?: InputMaybe<TextInput>;
};

export type TrendingProductsComponent = {
  __typename?: 'TrendingProductsComponent';
  trendingProducts: Array<TrendingProductsComponentTrendingProducts>;
};

export type TrendingProductsComponentInput = {
  trendingProducts: Array<TrendingProductsComponentTrendingProductsInput>;
};

export type TrendingProductsComponentTrendingProducts = {
  __typename?: 'TrendingProductsComponentTrendingProducts';
  shopifyProduct?: Maybe<Shopify_Product>;
  shopifyProductId: Scalars['String'];
};

export type TrendingProductsComponentTrendingProductsInput = {
  shopifyProductId: Scalars['String'];
};

export type TsStaticSite = TsSearchable & {
  __typename?: 'TsStaticSite';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  baseUrl?: Maybe<Scalars['String']>;
  destination: Scalars['String'];
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariables>>>;
  idKey?: Maybe<Scalars['String']>;
  privateAcl?: Maybe<Scalars['Boolean']>;
  provider: Scalars['String'];
  searchSummary?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  templateHash?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggers>>>;
};

export type TsStaticSiteEnvironmentVariables = {
  __typename?: 'TsStaticSiteEnvironmentVariables';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type TsStaticSitePaginatedList = {
  __typename?: 'TsStaticSitePaginatedList';
  items: Array<TsStaticSite>;
  total: Scalars['Int'];
};

/** TsStaticSite search results */
export type TsStaticSiteSearchResults = {
  __typename?: 'TsStaticSiteSearchResults';
  results: Array<TsStaticSite>;
  total: Scalars['Int'];
};

export type TsStaticSiteTriggers = {
  __typename?: 'TsStaticSiteTriggers';
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** update Asset input */
export type UpdateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
};

export type UpdateAssetResult = {
  __typename?: 'UpdateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** update CollectionInterface input */
export type UpdateCollectionInterfaceInput = {
  _id: Scalars['ID'];
  _status?: InputMaybe<DefaultWorkflow>;
  _version?: InputMaybe<Scalars['Float']>;
  /** An optional title to override the regular title in breadcrumbs */
  breadcrumbTitle?: InputMaybe<Scalars['String']>;
  /** Initialized with title from shopify */
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<TsRelationshipInput>;
  shopifyCollection?: InputMaybe<Shopify_CollectionInput>;
  shopifyCollectionId?: InputMaybe<Scalars['String']>;
};

export type UpdateCollectionResult = {
  __typename?: 'UpdateCollectionResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Collection>;
};

/** update Footer input */
export type UpdateFooterInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  navigation?: InputMaybe<FooterNavigationInput>;
  newsletter?: InputMaybe<FooterNewsletterInput>;
};

export type UpdateFooterResult = {
  __typename?: 'UpdateFooterResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Footer>;
};

/** update Navigation input */
export type UpdateNavigationInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  links?: InputMaybe<NavigationLinksInput>;
  message?: InputMaybe<Scalars['JSON']>;
};

export type UpdateNavigationResult = {
  __typename?: 'UpdateNavigationResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Navigation>;
};

/** update Page input */
export type UpdatePageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  relationship?: InputMaybe<Array<InputMaybe<TsRelationshipInput>>>;
  sections?: InputMaybe<Array<InputMaybe<PageSectionMdxPageSectionTitleInputUnion>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePageResult = {
  __typename?: 'UpdatePageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Page>;
};

/** update ProductInterface input */
export type UpdateProductInterfaceInput = {
  _id: Scalars['ID'];
  _status?: InputMaybe<DefaultWorkflow>;
  _version?: InputMaybe<Scalars['Float']>;
  details?: InputMaybe<TsRelationshipInput>;
  hideBreadcrumbs?: InputMaybe<Scalars['Boolean']>;
  hideRelatedProducts?: InputMaybe<Scalars['Boolean']>;
  hideReviews?: InputMaybe<Scalars['Boolean']>;
  /** Initialized with title from shopify */
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<TsRelationshipInput>;
  productComponent?: InputMaybe<Scalars['String']>;
  shopifyProduct?: InputMaybe<Shopify_ProductInput>;
  shopifyProductId?: InputMaybe<Scalars['String']>;
  showDetails?: InputMaybe<Scalars['Boolean']>;
  showPolicies?: InputMaybe<Scalars['Boolean']>;
};

/** update ProductPageDetails input */
export type UpdateProductPageDetailsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  details?: InputMaybe<Array<InputMaybe<ProductPageDetailsDetailsInput>>>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<ProductPageDetailsTextInput>;
};

export type UpdateProductPageDetailsResult = {
  __typename?: 'UpdateProductPageDetailsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<ProductPageDetails>;
};

/** update ProductPagePolicies input */
export type UpdateProductPagePoliciesInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<Array<InputMaybe<ProductPagePoliciesPoliciesInput>>>;
};

export type UpdateProductPagePoliciesResult = {
  __typename?: 'UpdateProductPagePoliciesResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<ProductPagePolicies>;
};

export type UpdateProductResult = {
  __typename?: 'UpdateProductResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Product>;
};

/** update Storefront input */
export type UpdateStorefrontInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  components?: InputMaybe<Array<InputMaybe<BackgroundImageComponentCollectionsComponentHeroComponentOffersComponentSaleComponentTestimonialsComponentTrendingProductsComponentInputUnion>>>;
};

export type UpdateStorefrontResult = {
  __typename?: 'UpdateStorefrontResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Storefront>;
};

/** update TsStaticSite input */
export type UpdateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  idKey?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  templateHash?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type UpdateTsStaticSiteResult = {
  __typename?: 'UpdateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** A project file stored on s3 */
export type Upload = {
  __typename?: 'Upload';
  asset?: Maybe<Asset>;
  uploadUrl?: Maybe<Scalars['ID']>;
};

export type Voucherify_LoyaltyCard = {
  __typename?: 'Voucherify_LoyaltyCard';
  active?: Maybe<Scalars['Boolean']>;
  assets?: Maybe<Voucherify_LoyaltyCardAssets>;
  campaign?: Maybe<Scalars['String']>;
  campaign_id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loyalty_card?: Maybe<Voucherify_LoyaltyCardStats>;
  type?: Maybe<Scalars['String']>;
};

export type Voucherify_LoyaltyCardAsset = {
  __typename?: 'Voucherify_LoyaltyCardAsset';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Voucherify_LoyaltyCardAssets = {
  __typename?: 'Voucherify_LoyaltyCardAssets';
  barcode?: Maybe<Voucherify_LoyaltyCardAsset>;
  qr?: Maybe<Voucherify_LoyaltyCardAsset>;
};

export type Voucherify_LoyaltyCardStats = {
  __typename?: 'Voucherify_LoyaltyCardStats';
  balance?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
};

export type Voucherify_Order = {
  __typename?: 'Voucherify_Order';
  id?: Maybe<Scalars['String']>;
};

export type Voucherify_OrderItemInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** This query allow you to pass context to your queries */
export type WithContext = {
  __typename?: 'WithContext';
  ReviewsIo_listProductReviews?: Maybe<ReviewsIo_ListProductReviewsResponse>;
  ShopifyStorefront_customer?: Maybe<ShopifyStorefront_Customer>;
  ShopifyStorefront_productTypes?: Maybe<ShopifyStorefront_StringConnection>;
  Shopify_collection?: Maybe<Shopify_Collection>;
  Shopify_collectionByHandle?: Maybe<Shopify_Collection>;
  Shopify_collections?: Maybe<Shopify_CollectionConnection>;
  Shopify_customer?: Maybe<Shopify_Customer>;
  Shopify_customerPaymentMethod?: Maybe<Shopify_CustomerPaymentMethod>;
  Shopify_product?: Maybe<Shopify_Product>;
  Shopify_productByHandle?: Maybe<Shopify_Product>;
  Shopify_productVariants?: Maybe<Shopify_ProductVariantConnection>;
  Shopify_products?: Maybe<Shopify_ProductConnection>;
  Shopify_shop?: Maybe<Shopify_Shop>;
  collectionByHandleWithTtl?: Maybe<Shopify_Collection>;
  collectionsWithTtl?: Maybe<Shopify_CollectionConnection>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a Collection by ID */
  getCollection?: Maybe<Collection>;
  /** Returns a list Collection in natural order. */
  getCollectionList?: Maybe<CollectionPaginatedList>;
  /** Returns a list Collection in natural order. */
  getCollectionListWithTtl?: Maybe<CollectionPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Footer by ID */
  getFooter?: Maybe<Footer>;
  getMyAdminCustomer?: Maybe<Shopify_Customer>;
  getMyCustomer?: Maybe<ShopifyStorefront_Customer>;
  /** Get a loyalty card from Voucherify */
  getMyLoyaltyCard?: Maybe<Voucherify_LoyaltyCard>;
  getMyNewsletterSubscriptions?: Maybe<Array<Maybe<ProfileNewsletterStatus>>>;
  /** Get a Navigation by ID */
  getNavigation?: Maybe<Navigation>;
  /** Get a Page by ID */
  getPage?: Maybe<Page>;
  /** Returns a list Page in natural order. */
  getPageList?: Maybe<PagePaginatedList>;
  /** Get a Product by ID */
  getProduct?: Maybe<Product>;
  /** Returns a list Product in natural order. */
  getProductList?: Maybe<ProductPaginatedList>;
  /** Returns a list Product in natural order. */
  getProductListWithTtl?: Maybe<ProductPaginatedList>;
  /** Get a ProductPageDetails by ID */
  getProductPageDetails?: Maybe<ProductPageDetails>;
  /** Returns a list ProductPageDetails in natural order. */
  getProductPageDetailsList?: Maybe<ProductPageDetailsPaginatedList>;
  /** Get a ProductPagePolicies by ID */
  getProductPagePolicies?: Maybe<ProductPagePolicies>;
  /** Returns a list ProductPagePolicies in natural order. */
  getProductPagePoliciesList?: Maybe<ProductPagePoliciesPaginatedList>;
  /** Get a Storefront by ID */
  getStorefront?: Maybe<Storefront>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  productByHandleWithTtl?: Maybe<Shopify_Product>;
  productWithTtl?: Maybe<Shopify_Product>;
  productsWithTtl?: Maybe<Shopify_ProductConnection>;
  search?: Maybe<TsSearchableSearchResults>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchCollectionIndex?: Maybe<CollectionSearchResults>;
  searchPageIndex?: Maybe<PageSearchResults>;
  searchProductIndex?: Maybe<ProductSearchResults>;
  searchProductPageDetailsIndex?: Maybe<ProductPageDetailsSearchResults>;
  searchProductPagePoliciesIndex?: Maybe<ProductPagePoliciesSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
};


/** This query allow you to pass context to your queries */
export type WithContextReviewsIo_ListProductReviewsArgs = {
  comments_only?: InputMaybe<Scalars['Int']>;
  include_moderated?: InputMaybe<Scalars['Int']>;
  include_unpublished_images?: InputMaybe<Scalars['Int']>;
  max_date?: InputMaybe<Scalars['String']>;
  minRating?: InputMaybe<Scalars['Int']>;
  min_date?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  per_page?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  verified_only?: InputMaybe<Scalars['Int']>;
};


/** This query allow you to pass context to your queries */
export type WithContextShopifyStorefront_CustomerArgs = {
  customerAccessToken: Scalars['String'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopifyStorefront_ProductTypesArgs = {
  first: Scalars['Int'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_CollectionArgs = {
  id: Scalars['ID'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_CollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_CollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_CollectionSortKeys>;
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_CustomerArgs = {
  id: Scalars['ID'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_CustomerPaymentMethodArgs = {
  id: Scalars['ID'];
  showRevoked?: InputMaybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_ProductArgs = {
  id: Scalars['ID'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_ProductByHandleArgs = {
  handle: Scalars['String'];
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductVariantSortKeys>;
};


/** This query allow you to pass context to your queries */
export type WithContextShopify_ProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductSortKeys>;
};


/** This query allow you to pass context to your queries */
export type WithContextCollectionByHandleWithTtlArgs = {
  handle: Scalars['String'];
};


/** This query allow you to pass context to your queries */
export type WithContextCollectionsWithTtlArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_CollectionSortKeys>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetCollectionArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetCollectionListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereCollectionInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetCollectionListWithTtlArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereCollectionInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  version: Scalars['Int'];
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionListArgs = {
  from?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  size?: InputMaybe<Scalars['Int']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetFooterArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetNavigationArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetPageArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetPageListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWherePageInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductListWithTtlArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductPageDetailsArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductPageDetailsListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPageDetailsInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductPagePoliciesArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProductPagePoliciesListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPagePoliciesInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetStorefrontArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextProductByHandleWithTtlArgs = {
  handle: Scalars['String'];
};


/** This query allow you to pass context to your queries */
export type WithContextProductWithTtlArgs = {
  id: Scalars['ID'];
};


/** This query allow you to pass context to your queries */
export type WithContextProductsWithTtlArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  savedSearchId?: InputMaybe<Scalars['ID']>;
  sortKey?: InputMaybe<Shopify_ProductSortKeys>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchAssetIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchCollectionIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereCollectionInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchPageIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWherePageInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchProductIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchProductPageDetailsIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPageDetailsInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchProductPagePoliciesIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereProductPagePoliciesInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchTsStaticSiteIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextTaxonomySuggestArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
};

export type GetCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerQueryResponse = { __typename?: 'Query', customer?: { __typename?: 'ShopifyStorefront_Customer', firstName?: string | null, lastName?: string | null, id: string, phone?: string | null, email?: string | null, displayName: string, acceptsMarketing: boolean, defaultAddress?: { __typename?: 'ShopifyStorefront_MailingAddress', id: string, firstName?: string | null, lastName?: string | null, address1?: string | null, address2?: string | null, city?: string | null, country?: string | null, countryCodeV2?: ShopifyStorefront_CountryCode | null, province?: string | null, provinceCode?: string | null, zip?: string | null } | null } | null };

export type UpdateCustomerMutationVariables = Exact<{
  customer: ShopifyStorefront_CustomerUpdateInput;
}>;


export type UpdateCustomerMutationResponse = { __typename?: 'Mutation', customerUpdate?: { __typename?: 'ShopifyStorefront_CustomerUpdatePayload', customer?: { __typename?: 'ShopifyStorefront_Customer', id: string } | null, customerUserErrors: Array<{ __typename?: 'ShopifyStorefront_CustomerUserError', code?: ShopifyStorefront_CustomerErrorCode | null, field?: Array<string | null> | null, message: string }> } | null };

export type UpdateCustomerAddressMutationVariables = Exact<{
  address: ShopifyStorefront_MailingAddressInput;
  id: Scalars['ID'];
}>;


export type UpdateCustomerAddressMutationResponse = { __typename?: 'Mutation', customerAddressUpdate?: { __typename?: 'ShopifyStorefront_CustomerAddressUpdatePayload', customerAddress?: { __typename?: 'ShopifyStorefront_MailingAddress', id: string } | null, customerUserErrors: Array<{ __typename?: 'ShopifyStorefront_CustomerUserError', code?: ShopifyStorefront_CustomerErrorCode | null, field?: Array<string | null> | null, message: string }> } | null };

export type GetMyNewsletterSubscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyNewsletterSubscriptionsQueryResponse = { __typename?: 'Query', newsletters?: Array<{ __typename?: 'ProfileNewsletterStatus', listId?: string | null, listName?: string | null, subscribed?: boolean | null } | null> | null };

export type SubscribeMyEmailToNewsletterMutationVariables = Exact<{
  list_id: Scalars['String'];
}>;


export type SubscribeMyEmailToNewsletterMutationResponse = { __typename?: 'Mutation', result?: { __typename?: 'Klaviyo_AddMembersResponse', items?: Array<{ __typename?: 'Klaviyo_AddMembersResponseItemsProperty', id?: string | null } | null> | null } | null };

export type UnsubscribeMyEmailFromNewsletterMutationVariables = Exact<{
  list_id: Scalars['String'];
}>;


export type UnsubscribeMyEmailFromNewsletterMutationResponse = { __typename?: 'Mutation', result?: { __typename?: 'Klaviyo_200Ok', result?: any | null } | null };

export type GetMyLoyaltyCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyLoyaltyCardQueryResponse = { __typename?: 'Query', loyaltyCard?: { __typename?: 'Voucherify_LoyaltyCard', id?: string | null, code?: string | null, campaign?: string | null, loyalty_card?: { __typename?: 'Voucherify_LoyaltyCardStats', points?: number | null, balance?: number | null } | null, assets?: { __typename?: 'Voucherify_LoyaltyCardAssets', qr?: { __typename?: 'Voucherify_LoyaltyCardAsset', id?: string | null, url?: string | null } | null } | null } | null };

export type LineItem = { __typename?: 'Shopify_LineItem', id: string, name: string, quantity: number, image?: { __typename?: 'Shopify_Image', url: any, height?: number | null, width?: number | null, altText?: string | null } | null, product?: { __typename?: 'Shopify_Product', id: string, handle: string } | null, originalTotalSet: { __typename?: 'Shopify_MoneyBag', shopMoney: { __typename?: 'Shopify_MoneyV2', amount: any, currencyCode: Shopify_CurrencyCode } } };

export type GetMyAdminCustomerOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyAdminCustomerOrdersQueryResponse = { __typename?: 'Query', customer?: { __typename?: 'Shopify_Customer', orders: { __typename?: 'Shopify_OrderConnection', edges: Array<{ __typename?: 'Shopify_OrderEdge', node: { __typename?: 'Shopify_Order', id: string, createdAt: any, displayFulfillmentStatus: Shopify_OrderDisplayFulfillmentStatus, totalPriceSet: { __typename?: 'Shopify_MoneyBag', shopMoney: { __typename?: 'Shopify_MoneyV2', amount: any, currencyCode: Shopify_CurrencyCode } }, lineItems: { __typename?: 'Shopify_LineItemConnection', edges: Array<{ __typename?: 'Shopify_LineItemEdge', node: { __typename?: 'Shopify_LineItem', id: string, name: string, quantity: number, image?: { __typename?: 'Shopify_Image', url: any, height?: number | null, width?: number | null, altText?: string | null } | null, product?: { __typename?: 'Shopify_Product', id: string, handle: string } | null, originalTotalSet: { __typename?: 'Shopify_MoneyBag', shopMoney: { __typename?: 'Shopify_MoneyV2', amount: any, currencyCode: Shopify_CurrencyCode } } } }> }, fulfillments: Array<{ __typename?: 'Shopify_Fulfillment', id: string, displayStatus?: Shopify_FulfillmentDisplayStatus | null, deliveredAt?: any | null, estimatedDeliveryAt?: any | null, inTransitAt?: any | null, updatedAt: any, trackingInfo: Array<{ __typename?: 'Shopify_FulfillmentTrackingInfo', company?: string | null, number?: string | null }>, fulfillmentLineItems: { __typename?: 'Shopify_FulfillmentLineItemConnection', edges: Array<{ __typename?: 'Shopify_FulfillmentLineItemEdge', node: { __typename?: 'Shopify_FulfillmentLineItem', lineItem: { __typename?: 'Shopify_LineItem', id: string, name: string, quantity: number, image?: { __typename?: 'Shopify_Image', url: any, height?: number | null, width?: number | null, altText?: string | null } | null, product?: { __typename?: 'Shopify_Product', id: string, handle: string } | null, originalTotalSet: { __typename?: 'Shopify_MoneyBag', shopMoney: { __typename?: 'Shopify_MoneyV2', amount: any, currencyCode: Shopify_CurrencyCode } } } } }> } }> } }> } } | null };

export type CreateCustomerMutationVariables = Exact<{
  input: CreateCustomerPropertiesPropertyInput;
}>;


export type CreateCustomerMutationResponse = { __typename?: 'Mutation', customerCreate?: { __typename?: 'CreateCustomerPayload', customer?: { __typename?: 'CreateCustomerPayloadCustomerProperty', id?: string | null } | null } | null };

export type RecoverCustomerPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  recaptchaToken: Scalars['String'];
}>;


export type RecoverCustomerPasswordMutationResponse = { __typename?: 'Mutation', customerRecover?: { __typename?: 'ShopifyStorefront_CustomerRecoverPayload', customerUserErrors: Array<{ __typename?: 'ShopifyStorefront_CustomerUserError', code?: ShopifyStorefront_CustomerErrorCode | null, field?: Array<string | null> | null, message: string }> } | null };

export type CreateCustomerAccessTokenMutationVariables = Exact<{
  input: ShopifyStorefront_CustomerAccessTokenCreateInput;
}>;


export type CreateCustomerAccessTokenMutationResponse = { __typename?: 'Mutation', accessTokenCreate?: { __typename?: 'ShopifyStorefront_CustomerAccessTokenCreatePayload', customerAccessToken?: { __typename?: 'ShopifyStorefront_CustomerAccessToken', expiresAt: any, accessToken: string } | null, customerUserErrors: Array<{ __typename?: 'ShopifyStorefront_CustomerUserError', code?: ShopifyStorefront_CustomerErrorCode | null, field?: Array<string | null> | null, message: string }> } | null };

export type GetCustomerTokenDataQueryVariables = Exact<{
  customerAccessToken: Scalars['String'];
}>;


export type GetCustomerTokenDataQueryResponse = { __typename?: 'Query', customer?: { __typename?: 'ShopifyStorefront_Customer', firstName?: string | null, lastName?: string | null, id: string, phone?: string | null, email?: string | null, displayName: string } | null };

export type CreateCartMutationVariables = Exact<{
  input?: InputMaybe<ShopifyStorefront_CartInput>;
}>;


export type CreateCartMutationResponse = { __typename?: 'Mutation', cart?: { __typename?: 'ShopifyStorefront_CartCreatePayload', cart?: { __typename?: 'ShopifyStorefront_Cart', checkoutUrl: any } | null } | null };

export type CreateTicketMutationVariables = Exact<{
  email: Scalars['String'];
  message: Scalars['String'];
  recaptchaToken: Scalars['String'];
}>;


export type CreateTicketMutationResponse = { __typename?: 'Mutation', createTicket?: { __typename?: 'CreateTicketResponse', id: number } | null };

export type FooterVariables = Exact<{ [key: string]: never; }>;


export type FooterResponse = { __typename?: 'Query', footer?: { __typename?: 'Footer', navigation?: { __typename?: 'FooterNavigation', sections?: Array<{ __typename?: 'FooterNavigationSections', name?: string | null, items?: Array<{ __typename?: 'NavigationLink', name?: string | null, href?: string | null } | null> | null } | null> | null } | null, newsletter?: { __typename?: 'FooterNewsletter', text?: { __typename?: 'Text', primary?: string | null, secondary?: string | null, button?: string | null } | null } | null } | null };

export type NewsletterEmailSubmissionVariables = Exact<{
  listId: Scalars['String'];
  email: Scalars['String'];
  recaptchaToken: Scalars['String'];
}>;


export type NewsletterEmailSubmissionResponse = { __typename?: 'Mutation', addMembers?: { __typename?: 'Klaviyo_AddMembersResponse', items?: Array<{ __typename?: 'Klaviyo_AddMembersResponseItemsProperty', id?: string | null } | null> | null } | null };

export type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQueryResponse = { __typename?: 'Query', navigation?: { __typename?: 'Navigation', _id?: string | null, messageHtml?: string | null, links?: { __typename?: 'NavigationLinks', categories: Array<{ __typename?: 'NavigationLinksCategories', name: string, brands: Array<{ __typename?: 'NavigationLinksCategoriesBrands', href: string, name: string }>, categories: Array<{ __typename?: 'NavigationLinksCategoriesCategories', href: string, name: string }>, collection: Array<{ __typename?: 'NavigationLinksCategoriesCollection', href: string, name: string }>, featured: Array<{ __typename?: 'NavigationLinksCategoriesFeatured', href: string, name: string }> }>, pages: Array<{ __typename?: 'NavigationLinksPages', href: string, name: string }> } | null } | null };

export type GetPageSlugsVariables = Exact<{ [key: string]: never; }>;


export type GetPageSlugsResponse = { __typename?: 'Query', pageList?: { __typename?: 'PagePaginatedList', items: Array<{ __typename?: 'Page', _id?: string | null, slug: string }> } | null };

export type PageGetPageVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageGetPageResponse = { __typename?: 'Query', pageList?: { __typename?: 'PagePaginatedList', items: Array<{ __typename?: 'Page', _id?: string | null, title: string, sections?: Array<{ __typename?: 'PageSectionMdx', content?: string | null } | { __typename?: 'PageSectionTitle', heading?: string | null, label?: string | null, subheading?: string | null } | null> | null }> } | null };

export type ProductCategoryShopifyCollectionHandlesVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type ProductCategoryShopifyCollectionHandlesResponse = { __typename?: 'Query', collections?: { __typename?: 'Shopify_CollectionConnection', pageInfo: { __typename?: 'Shopify_PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Shopify_Collection', id: string, handle: string }> } | null };

export type ProductCategoryCollection = { __typename?: 'Shopify_Collection', id: string, handle: string, title: string, description: string, descriptionHtml: any, seo: { __typename?: 'Shopify_SEO', title?: string | null, description?: string | null } };

export type ProductCategoryProduct = { __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, reviews?: { __typename?: 'ReviewsIo_ListProductReviewsResponse', stats?: { __typename?: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average?: number | null, count?: number | null } | null } | null };

export type ProductCategoryShopifyCollectionQueryVariables = Exact<{
  handle: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type ProductCategoryShopifyCollectionQueryResponse = { __typename?: 'Query', collection?: { __typename?: 'Shopify_Collection', id: string, handle: string, title: string, description: string, descriptionHtml: any, products: { __typename?: 'Shopify_ProductConnection', pageInfo: { __typename?: 'Shopify_PageInfo', endCursor?: string | null, startCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, nodes: Array<{ __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, reviews?: { __typename?: 'ReviewsIo_ListProductReviewsResponse', stats?: { __typename?: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average?: number | null, count?: number | null } | null } | null }> }, seo: { __typename?: 'Shopify_SEO', title?: string | null, description?: string | null } } | null };

export type ProductPageShopifyProductHandlesQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type ProductPageShopifyProductHandlesQueryResponse = { __typename?: 'Query', products?: { __typename?: 'Shopify_ProductConnection', pageInfo: { __typename?: 'Shopify_PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes: Array<{ __typename?: 'Shopify_Product', id: string, handle: string }> } | null };

export type ProductPageProduct = { __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, takeshape?: { __typename?: 'Product', _id?: string | null, productComponent?: string | null, hideReviews?: boolean | null, hideRelatedProducts?: boolean | null, showDetails?: boolean | null, showPolicies?: boolean | null, policies?: { __typename?: 'ProductPagePolicies', _id?: string | null, policies: Array<{ __typename?: 'ProductPagePoliciesPolicies', nameHtml?: string | null, descriptionHtml?: string | null, image?: { __typename?: 'Asset', path: string, description?: string | null } | null }> } | null, details?: { __typename?: 'ProductPageDetails', _id?: string | null, text: { __typename?: 'ProductPageDetailsText', primaryHtml?: string | null, secondaryHtml?: string | null }, details: Array<{ __typename?: 'ProductPageDetailsDetails', descriptionHtml?: string | null, image?: { __typename?: 'Asset', path: string, description?: string | null } | null }> } | null } | null, reviews?: { __typename?: 'ReviewsIo_ListProductReviewsResponse', stats?: { __typename?: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average?: number | null, count?: number | null } | null, reviews?: { __typename?: 'ReviewsIo_ListProductReviewsResponseReviewsProperty', per_page?: number | null, current_page?: number | null, total?: number | null, data?: Array<{ __typename?: 'ReviewsIo_ProductReview', product_review_id?: number | null, rating?: number | null, title?: string | null, review?: string | null, date_created?: string | null, timeago?: string | null, reviewer?: { __typename?: 'ReviewsIo_Reviewer', first_name?: string | null, last_name?: string | null, verified_buyer?: ReviewsIo_ReviewerVerifiedBuyerProperty | null, address?: string | null, profile_picture?: string | null, gravatar?: string | null } | null } | null> | null } | null } | null, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, images: { __typename?: 'Shopify_ImageConnection', edges: Array<{ __typename?: 'Shopify_ImageEdge', node: { __typename?: 'Shopify_Image', width?: number | null, height?: number | null, url: any, altText?: string | null } }> }, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, seo: { __typename?: 'Shopify_SEO', title?: string | null, description?: string | null }, variants: { __typename?: 'Shopify_ProductVariantConnection', edges: Array<{ __typename?: 'Shopify_ProductVariantEdge', node: { __typename?: 'Shopify_ProductVariant', id: string, availableForSale: boolean, compareAtPrice?: any | null, price: any, inventoryPolicy: Shopify_ProductVariantInventoryPolicy, sellableOnlineQuantity: number, sku?: string | null, title: string, image?: { __typename?: 'Shopify_Image', width?: number | null, height?: number | null, url: any } | null, selectedOptions: Array<{ __typename?: 'Shopify_SelectedOption', name: string, value: string }> } }> }, options: Array<{ __typename?: 'Shopify_ProductOption', name: string, position: number, id: string, values: Array<string> }>, sellingPlanGroups: { __typename?: 'Shopify_SellingPlanGroupConnection', edges: Array<{ __typename?: 'Shopify_SellingPlanGroupEdge', node: { __typename?: 'Shopify_SellingPlanGroup', sellingPlans: { __typename?: 'Shopify_SellingPlanConnection', edges: Array<{ __typename?: 'Shopify_SellingPlanEdge', node: { __typename?: 'Shopify_SellingPlan', id: string, options: Array<string>, pricingPolicies: Array<{ __typename?: 'Shopify_SellingPlanFixedPricingPolicy', adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType, adjustmentValue: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } | { __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue', percentage: number } } | { __typename?: 'Shopify_SellingPlanRecurringPricingPolicy', adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType, adjustmentValue: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } | { __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue', percentage: number } }>, billingPolicy: { __typename?: 'Shopify_SellingPlanRecurringBillingPolicy', maxCycles?: number | null, minCycles?: number | null, intervalCount: number, interval: Shopify_SellingPlanInterval, anchors: Array<{ __typename?: 'Shopify_SellingPlanAnchor', day: number, month?: number | null, type: Shopify_SellingPlanAnchorType }> } } }> } } }> } };

export type ProductPageShopifyProductVariables = Exact<{
  handle: Scalars['String'];
}>;


export type ProductPageShopifyProductResponse = { __typename?: 'Query', product?: { __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, takeshape?: { __typename?: 'Product', _id?: string | null, productComponent?: string | null, hideReviews?: boolean | null, hideRelatedProducts?: boolean | null, showDetails?: boolean | null, showPolicies?: boolean | null, policies?: { __typename?: 'ProductPagePolicies', _id?: string | null, policies: Array<{ __typename?: 'ProductPagePoliciesPolicies', nameHtml?: string | null, descriptionHtml?: string | null, image?: { __typename?: 'Asset', path: string, description?: string | null } | null }> } | null, details?: { __typename?: 'ProductPageDetails', _id?: string | null, text: { __typename?: 'ProductPageDetailsText', primaryHtml?: string | null, secondaryHtml?: string | null }, details: Array<{ __typename?: 'ProductPageDetailsDetails', descriptionHtml?: string | null, image?: { __typename?: 'Asset', path: string, description?: string | null } | null }> } | null } | null, reviews?: { __typename?: 'ReviewsIo_ListProductReviewsResponse', stats?: { __typename?: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average?: number | null, count?: number | null } | null, reviews?: { __typename?: 'ReviewsIo_ListProductReviewsResponseReviewsProperty', per_page?: number | null, current_page?: number | null, total?: number | null, data?: Array<{ __typename?: 'ReviewsIo_ProductReview', product_review_id?: number | null, rating?: number | null, title?: string | null, review?: string | null, date_created?: string | null, timeago?: string | null, reviewer?: { __typename?: 'ReviewsIo_Reviewer', first_name?: string | null, last_name?: string | null, verified_buyer?: ReviewsIo_ReviewerVerifiedBuyerProperty | null, address?: string | null, profile_picture?: string | null, gravatar?: string | null } | null } | null> | null } | null } | null, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, images: { __typename?: 'Shopify_ImageConnection', edges: Array<{ __typename?: 'Shopify_ImageEdge', node: { __typename?: 'Shopify_Image', width?: number | null, height?: number | null, url: any, altText?: string | null } }> }, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, seo: { __typename?: 'Shopify_SEO', title?: string | null, description?: string | null }, variants: { __typename?: 'Shopify_ProductVariantConnection', edges: Array<{ __typename?: 'Shopify_ProductVariantEdge', node: { __typename?: 'Shopify_ProductVariant', id: string, availableForSale: boolean, compareAtPrice?: any | null, price: any, inventoryPolicy: Shopify_ProductVariantInventoryPolicy, sellableOnlineQuantity: number, sku?: string | null, title: string, image?: { __typename?: 'Shopify_Image', width?: number | null, height?: number | null, url: any } | null, selectedOptions: Array<{ __typename?: 'Shopify_SelectedOption', name: string, value: string }> } }> }, options: Array<{ __typename?: 'Shopify_ProductOption', name: string, position: number, id: string, values: Array<string> }>, sellingPlanGroups: { __typename?: 'Shopify_SellingPlanGroupConnection', edges: Array<{ __typename?: 'Shopify_SellingPlanGroupEdge', node: { __typename?: 'Shopify_SellingPlanGroup', sellingPlans: { __typename?: 'Shopify_SellingPlanConnection', edges: Array<{ __typename?: 'Shopify_SellingPlanEdge', node: { __typename?: 'Shopify_SellingPlan', id: string, options: Array<string>, pricingPolicies: Array<{ __typename?: 'Shopify_SellingPlanFixedPricingPolicy', adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType, adjustmentValue: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } | { __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue', percentage: number } } | { __typename?: 'Shopify_SellingPlanRecurringPricingPolicy', adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType, adjustmentValue: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } | { __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue', percentage: number } }>, billingPolicy: { __typename?: 'Shopify_SellingPlanRecurringBillingPolicy', maxCycles?: number | null, minCycles?: number | null, intervalCount: number, interval: Shopify_SellingPlanInterval, anchors: Array<{ __typename?: 'Shopify_SellingPlanAnchor', day: number, month?: number | null, type: Shopify_SellingPlanAnchorType }> } } }> } } }> } } | null };

export type RelatedProductsShopifyCollectionQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type RelatedProductsShopifyCollectionQueryResponse = { __typename?: 'Query', collection?: { __typename?: 'Shopify_Collection', products: { __typename?: 'Shopify_ProductConnection', edges: Array<{ __typename?: 'Shopify_ProductEdge', node: { __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } } } }> } } | null };

export type QuickAddQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type QuickAddQueryResponse = { __typename?: 'Query', product?: { __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, variants: { __typename?: 'Shopify_ProductVariantConnection', edges: Array<{ __typename?: 'Shopify_ProductVariantEdge', node: { __typename?: 'Shopify_ProductVariant', id: string, availableForSale: boolean, compareAtPrice?: any | null, price: any, inventoryPolicy: Shopify_ProductVariantInventoryPolicy, sellableOnlineQuantity: number, sku?: string | null, title: string, selectedOptions: Array<{ __typename?: 'Shopify_SelectedOption', name: string, value: string }> } }> }, options: Array<{ __typename?: 'Shopify_ProductOption', name: string, position: number, id: string, values: Array<string> }>, sellingPlanGroups: { __typename?: 'Shopify_SellingPlanGroupConnection', edges: Array<{ __typename?: 'Shopify_SellingPlanGroupEdge', node: { __typename?: 'Shopify_SellingPlanGroup', sellingPlans: { __typename?: 'Shopify_SellingPlanConnection', edges: Array<{ __typename?: 'Shopify_SellingPlanEdge', node: { __typename?: 'Shopify_SellingPlan', id: string, options: Array<string>, pricingPolicies: Array<{ __typename?: 'Shopify_SellingPlanFixedPricingPolicy', adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType, adjustmentValue: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } | { __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue', percentage: number } } | { __typename?: 'Shopify_SellingPlanRecurringPricingPolicy', adjustmentType: Shopify_SellingPlanPricingPolicyAdjustmentType, adjustmentValue: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } | { __typename?: 'Shopify_SellingPlanPricingPolicyPercentageValue', percentage: number } }>, billingPolicy: { __typename?: 'Shopify_SellingPlanRecurringBillingPolicy', maxCycles?: number | null, minCycles?: number | null, intervalCount: number, interval: Shopify_SellingPlanInterval, anchors: Array<{ __typename?: 'Shopify_SellingPlanAnchor', day: number, month?: number | null, type: Shopify_SellingPlanAnchorType }> } } }> } } }> } } | null };

export type SearchShopifyProductsVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchShopifyProductsResponse = { __typename?: 'Query', search?: { __typename?: 'TSSearchableSearchResults', results: Array<{ __typename: 'Asset' } | { __typename: 'Collection' } | { __typename: 'Footer' } | { __typename: 'Navigation' } | { __typename: 'Page' } | { __typename: 'Product' } | { __typename: 'ProductPageDetails' } | { __typename: 'ProductPagePolicies' } | { __typename: 'Shopify_Product', id: string, handle: string, title: string, description: string, featuredImage?: { __typename?: 'Shopify_Image', url: any, altText?: string | null, height?: number | null, width?: number | null } | null } | { __typename: 'Storefront' } | { __typename: 'TsStaticSite' }> } | null };

export type GetStorefrontQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStorefrontQueryResponse = { __typename?: 'Query', storefront?: { __typename?: 'Storefront', components?: Array<{ __typename: 'BackgroundImageComponent', image?: { __typename?: 'Asset', path: string, description?: string | null } | null, components: Array<{ __typename: 'BackgroundImageComponent' } | { __typename: 'CollectionsComponent' } | { __typename: 'HeroComponent' } | { __typename: 'OffersComponent' } | { __typename: 'SaleComponent', primaryText: string, secondaryText: string, buttonText: string } | { __typename: 'TestimonialsComponent', testimonials: Array<{ __typename?: 'TestimonialsComponentTestimonials', quote: string, attribution: string }> }> } | { __typename: 'CollectionsComponent', collections: Array<{ __typename?: 'CollectionsComponentCollections', name: string, description: string, href: string, image?: { __typename?: 'Asset', path: string, description?: string | null } | null }> } | { __typename: 'HeroComponent', primaryText: string, secondaryText: string, buttonText: string, image?: { __typename?: 'Asset', path: string, description?: string | null } | null } | { __typename: 'OffersComponent', offers: Array<{ __typename?: 'OffersComponentOffers', href: string, name: string, description: string }> } | { __typename: 'SaleComponent' } | { __typename: 'TestimonialsComponent' } | { __typename: 'TrendingProductsComponent' } | null> | null } | null };

export type StorefrontCollection = { __typename?: 'Shopify_Collection', id: string, handle: string, title: string, description: string, descriptionHtml: any };

export type StorefrontProduct = { __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, options: Array<{ __typename?: 'Shopify_ProductOption', name: string, position: number, id: string, values: Array<string> }> };

export type StorefrontShopifyCollectionByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type StorefrontShopifyCollectionByHandleQueryResponse = { __typename?: 'Query', collection?: { __typename?: 'Shopify_Collection', id: string, handle: string, title: string, description: string, descriptionHtml: any, products: { __typename?: 'Shopify_ProductConnection', pageInfo: { __typename?: 'Shopify_PageInfo', endCursor?: string | null, startCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, nodes: Array<{ __typename?: 'Shopify_Product', id: string, handle: string, title: string, description: string, descriptionHtml: any, requiresSellingPlan: boolean, publishedAt?: any | null, totalVariants: number, totalInventory: number, sellingPlanGroupCount: number, featuredImage?: { __typename?: 'Shopify_Image', id?: string | null, width?: number | null, height?: number | null, url: any, altText?: string | null } | null, priceRangeV2: { __typename?: 'Shopify_ProductPriceRangeV2', maxVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any }, minVariantPrice: { __typename?: 'Shopify_MoneyV2', currencyCode: Shopify_CurrencyCode, amount: any } }, options: Array<{ __typename?: 'Shopify_ProductOption', name: string, position: number, id: string, values: Array<string> }> }> } } | null };
