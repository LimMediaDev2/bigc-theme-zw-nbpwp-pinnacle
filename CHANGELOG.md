# **Pinnacle Release Notes**

## February 19, 2021 Version 1.1.2
* BIGCOMMERCE BUG REPORT ITEMS:
  * [THEME-2056] Pinnacle 1.1.1 – Variant Bulk Pricing Does not Display Properly on PDP: Bulk Pricing within modal on product page will now dynamically adjust when options are selected on the frontend that have varying price list bulk pricing set up in the control panel.
    * Updated Files:
      * updated: templates/components/products/product-view.html
      * added file: assets/js/theme/common/product-details-base.js
      * updated: assets/scss/pinnacle.scss
      * replaced directory with Cornerstone 5.1.0: templates/components/cart/modals
      * replaced file with Cornerston 5.1.0: templates/components/cart/item-options.html
      * added directory from Cornerstone 5.1.0:: assets/js/theme/common/utils
      * added directory from Cornerstone 5.1.0: templates/components/common/alert
      * added directory from Cornerstone 5.1.0: templates/components/common/modal
      * added file from Cornerstone 5.1.0: templates/components/common/requireness-msg.html
      * added file from Cornerstone 5.1.0: templates/components/products/product-aria-label.html

* CUSTOMER SUPPORT ITEMS:
  * Fix for: Blog images on single post page within the body stretching to 100%. Those images will now be auto width and not distort.
    * Updated Files:
      * assets/scss/pinnacle.scss
  * Fix for: not being able to click first thumbnail when a default product option is set to show on load.
  * Fix for: setting fancybox image on load to the default option image if set. Main image was setting to default variant image, but when clicked, fancybox was loading the main default image instead of the variant image. This has been corrected.
    * Updated Files:
      * templates/components/common/footer-product.html


## February 5, 2021 Version 1.1.1
* BigCommerce Bug Report
  * THEME-2039: Pinnacle – Lonestar Templates – Theme Vertical Reassignments Completed. Industries have been adjusted according to the recommendations provided by BigCommerce as follows:
    * Euro – “automotive_industrial”, “electronics_computers”
    * Impact – “automotive_industrial”, “electronics_computers”, “home_garden”
    * Sport – “automotive_industrial”, “electronics_computers”, “sports_recreation”
    * Tech – “automotive_industrial”, “electronics_computers”

    * "optimized_for” also updated on all variations to:
      * “multi_purpose”
      * “mobile_tablet_desktop”
      * “sales_discounts”
      * “large_catalog”

    * Updated Files:
      * config.json

* CUSTOMER SUPPORT ITEMS:
  * Fix for font sizes & colors not adjusting within page builder widgets on content pages.
    * Updated Files:
      * assets/scss/pinnacle.scss

  * Fix wishlist button on product page jumping on click.
    * Updated Files:
      * assets/scss/pinnacle.scss

  * Theme Editor option added for adjustments to Footer header font-families.
    * Updated Files:
      * schema.json


## October 27, 2020 Version 1.1.0
* NEW FEATURES:
  * Global Page Builder Elements Added Throughout Theme! Using the global regions in the header & footer areas will be visible throughout your site. Adding content to the global regions within the product, category, brand, or content pages will add that content to the respective pages throughout your site. That is, if you add content to a Global Widget on a product page, that content will be visible within that area on ALL product pages, etc…
    * Updated Files:
      * templates/components/common/header.html
      * templates/components/common/footer-product.html
      * templates/components/common/footer.html
      * templates/components/page/content-page-no-sidenav.html
      * templates/components/page/content-page-with-sidenav.html
      * templates/components/products/product-quick-view.html
      * templates/components/products/product-view.html
      * templates/pages/brand.html
      * templates/pages/category.html
      * templates/pages/product.html
      * templates/pages/page.html
      * assets/scss/pinnacle.scss

  * Added Persistent Admin Bar when logged in.

  * Updated all sprite references to use latest Cornerstone functionality. Removed StumbleUpon svg, generating unnecessary code in the DOM.

  * Added Files:
      * all required files to generate persistent admin bar, when logged in including, js, scss, schema, and config
  * Updated Files:
      * templates/layout/base.html
      * templates/layout/home-layout.html
      * templates/layout/product-new.html
      * templates/layout/product.html


## July 17, 2020 Version 1.0.8/1.0.9 - 1.0.8 had bundling issues
* BIGCOMMERCE BUG REPORT ITEMS:
  * THEME-1981 – Pinnacle theme – Lonestar Templates – Update jQuery in Theme. jQuery version updated to 3.5.1
    * Updated Files:
      * templates/components/common/footer-product.html
      * templates/components/common/footer.html
      * All root-level files updated with latest Cornerstone version 4.7.0, including package.json, package-lock.json, babel.config.js, Gemfile, Gemfile.lock, jest-eventemitter2-transformer.js, jest.config.js, jest.setup.js, lighthouse-config.js, schemaTranslations.json, stencil.conf.js, webpack.common.js, webpack.sev.js, webpack.prod.js
      * All amp files replaced with latest Cornerstone version 4.7.0
      * Complete js directory replaced with latest Cornerstone version 4.7.0

* CUSTOMER SUPPORT ITEMS:
  * Fix for thumbnail images not all displaying on the product page.
  * Fix for z-index of bulk pricing modal on product page
  * Fix for image swap rules in quick-view. When there was no image swap rules, selecting an option would attempt to load a new image and was breaking the image link.


* NEW FEATURES & DESIGN IMPROVEMENTS:
  * Theme editor option for displaying thumbnail images beneath main image on product page in grid (no carousel), or with carousel. Found here: Product Page > Enable product thumbnail carousel.
  * Theme editor option for global arrow color controls for both background and arrow colors. This setting will impact Hero Carousel arrows, Main product image arrows on product page, thumbnail carousel arrows, and Fancybox arrows. Setting Found here: Global > Arrow color & Arrow background color. In addtion arrows will now be visible when hovering over the main product page image or thumbnails. Disabled arrows are dimmed and pointer-events have been disabled when beginning or ending images are reached.
  * Active thumbnail beneath main product image on product page, will have a light border around it to help illustrate it is active.
  * Main product images will now be centered both vertically and horizontally for images with varying heights.
  * Thumbnail carousel images will be centered beneath the main product image.
  * Addtional Page Builder widgets added to product page and content page.
  * Fancybox zoom will now work in quickview just as it does on the product page.
  * Fancybox zoom will now work on mobile.
  * Fancybox options on mobile for users to hide/show arrows.

* DEPRECATED FEATURES
  * Instagram Feed Removal
    * We have removed the Instagram settings from the schema.json file. As of June 29, 2020 the API that was used to create this feature was disabled by Facebook/Instagram. We have found a nice alternative that is fairly simple to set up: https://www.bigcommerce.com/apps/elfsight-instagram-feed/. This can easily be styled & setup one the app has been installed within your store’s control panel. There is a free version that can be self-installed, and paid version have support and free set up.


## June 22, 2020 Version 1.0.7
* CUSTOMER SUPPORT ITEMS:
  * Fix for arrow alignment of Showcase Products on Homepage when using “No Tabs, In Carousels” Theme Editor setting.
Updated Files:
assets/scss/pinnacle.scss
Removed duplicate “Sitemap” link from “Accounts & Orders” column within the footer. There is a “Sitemap” link within the copyright section at the bottom of the footer.
    * Updated Files:
      * templates/components/common/footer.html

  * Special Characters such as ampersands, quotes, and apostrophes will render as intended and not as HTML within the compare table product cards.
    * Updated Files:
      * templates/pages/compare.html. Replaced all instances of {{summary}} with {{{ sanitize summary }}}. Also added style rule to include line entered line breaks. .compare-page .card-text .normal-text {
        white-space: pre-line;
      }
      * assets/scss/pinnacle.scss
  * Fix for Search Results Server Error
    * Updated Files:
      * templates/components/custom/search-results-sidenav.html

  * Coming Soon Image is now working on product page when no image has been uploaded.
    * Updated Files:
      * templates/components/products/product-view.html

  * 2nd Hover image functionality corrected when active and there is no 2nd hover image.
    * Updated Files:
      * templates/components/products/card.html
      * assets/scss/pinnacle.scss

  * Height Adjustment for Product Title line settings on cards.
    * Updated Files:
      * assets/scss/pinnacle.scss

  * Alt text for Review Image added
  * Updated Files:
    * templates/components/products/modals/writeReview.html


## June 16, 2020 Version 1.0.6
* NEW FEATURES:
  * Page Builder Functionality Added.
    * Updated Files:
      * templates/components/page/home-page-no-sidenav.html
      * templates/components/page/home-page-with-sidenav-float-carousel.html
      * templates/components/page/home-page-with-sidenav.html
      * templates/components/pages/brand.html
      * templates/components/pages/brands.html
      * templates/components/pages/category.html
      * templates/components/pages/product.html
      * templates/components/products/product-view.html
      * templates/components/pages/search.html

  * Price Range checkbox added to Theme Editor found here: Products > Product Prices
    * Updated Files:
      * config.json
      * schema.json
      * templates/components/products/price.html
      * templates/components/products/price-range.html
      * assets/scss/pinnacle.scss

  * Pricing Labels options added to Theme Editor for product page only, for now. Coming soon on product cards as well.
    * Updated Files:
      * config.json
      * schema.json
      * templates/components/products/price.html
      * templates/components/products/price-range.html
      * assets/scss/pinnacle.scss

  * Added Theme Editor settings for number of lines allowed for product titles on product cards, found here: Products > Card Title > Limit Card Title Number of Lines
    * Updated Files:
      * config.json
      * schema.json
      * templates/components/products/card.html
      * assets/scss/pinnacle.scss

  * Added Theme Editor settings for font-size of product titles on product cards, found here: Products > Card Title > Card Title Font size
    * Updated Files:
      * config.json
      * schema.json
      * templates/components/products/card.html
      * assets/scss/pinnacle.scss

* DESIGN REVISIONS:
  * Centered product thumbnails in carousel beneath main image on product page.

* CUSTOMER SUPPORT ITEMS:
  * FIX for Duplicate Sidenav Banners
    * Updated Files:
      * templates/components/category/sidebar.html
      * templates/components/brand/sidebar.html
      * templates/components/search/sidebar.html
      * templates/components/custom/category-sidenav.html
      * templates/components/custom/brand-sidenav.html
      * templates/components/custom/search-results-sidenav.html
      * templates/components/custom/sidenav.html

  * QuickSearch layout re-styled to bring buttons back into view.

  * Special Characters in Reviews will now render correctly.

  * Product options containing special characters such as ampersands and quotes should render as entered on cart page and cart preview modal. This was corrected by using triple braces instead of double for everywhere the {{value}} expression appears in the templates/cart/content.html and templates/cart/preview.html files.

  * Special Characters – faceted Search. Fixed using: https://github.com/bigcommerce/cornerstone/commit/a19e13eacffa53deef2a4bce80528dc38dc6652e.
    * Files edited replacing {{ title }} with {{{ sanitize title }}}
      * templates/components/faceted-search/facets/hierarchy-children.html
      * templates/components/faceted-search/facets/hierarchy-children.html
      * templates/components/faceted-search/facets/multi.html
      * templates/components/faceted-search/selected-facets.html

  * Fix for Compare button visibility when disabled/enabled
    * Updated Files:
      * templates/components/products/card.html
      * templates/components/products/list-item.html

  * Fix for products.you_save_opening_text, products.you_save_closing_bracket – on product page after options are selected.
    * Updated Files:
      * lang/en.json

  * Style fix for: Main product image not full-width at 800px & below when sidenav is active on product page.
    * Updated Files:
      * assets/scss/pinnacle.scss

  * Fix for styling of Stripe checkbox “vaulting” (saving credit card for future transactions).
    * Updated Files:
      * assets/scss/optimized-checkout.scss

* BIGCOMMERCE BUG REPORT ITEMS:
  * FIX FOR: THEME-1877 – Pinnacle theme – coupon box misaligned and out of proportion when screen width less than 1200px: GC field/button alignment are now fully repsonive.
    * Updated Files:
      * assets/scss/optimized-checkout.scss

  * FIX FOR: THEME-1924 Pinnacle 1.0.5 – Product Page > Add to Cart Button Hover Text Color not reflected: The hover text color in buttons on product page will now be impacted by adjusting using the Theme Editor found here: Product Page > Add to Cart Button Hover Text Color.
    * Updated Files:
      * config.json
      * schema.json
      * assets/scss/pinnacle.scss

  * FIX FOR: THEME-1856 – Pinnacle 1.0.4 – Checkout country/state selector styling hides text
    * Updated Files:
      * assets/scss/optimized-checkout.scss
