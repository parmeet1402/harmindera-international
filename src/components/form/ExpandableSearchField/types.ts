export type SearchResult = {
  icon: React.ReactNode;
  label: string;
  redirectURL: string;
  type: "category" | "product" | "search";
  category?: string;
};

/* Redirect URL SCHEME
category -> /products/${category}
product -> /products/${category}/${product}
search -> /search-results?query=${text-input}
*/

export type SearchResults = Array<SearchResult>;
