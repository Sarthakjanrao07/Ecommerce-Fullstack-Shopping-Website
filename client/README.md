# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


PS D:\project_ecom_site\mern-ecommerce-2024> git init 
Reinitialized existing Git repository in D:/project_ecom_site/mern-ecommerce-2024/.git/
PS D:\project_ecom_site\mern-ecommerce-2024> git add README.md
fatal: pathspec 'README.md' did not match any files
PS D:\project_ecom_site\mern-ecommerce-2024> git commit -m "first commit"
On branch main

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        client/
        server/

nothing added to commit but untracked files present (use "git add" to track)
PS D:\project_ecom_site\mern-ecommerce-2024> echo "# FullStack Website" > README.md
>> git add README.md
>> 
PS D:\project_ecom_site\mern-ecommerce-2024> git branch -M main
PS D:\project_ecom_site\mern-ecommerce-2024> git remote add origin https://github.com/Sarthakjanrao07/Ecommerce-Fullstack-Shopping-Website.git
PS D:\project_ecom_site\mern-ecommerce-2024> git add .      
PS D:\project_ecom_site\mern-ecommerce-2024> git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
        new file:   client/.gitignore
        new file:   client/README.md
        new file:   client/components.json
        new file:   client/eslint.config.js
        new file:   client/index.html
        new file:   client/jsconfig.json
        new file:   client/package-lock.json
        new file:   client/package.json
        new file:   client/postcss.config.js
        new file:   client/public/vite.svg
        new file:   client/src/App.css
        new file:   client/src/App.jsx
        new file:   client/src/assets/account.jpg
        new file:   client/src/assets/banner-1.webp
        new file:   client/src/assets/banner-2.webp
        new file:   client/src/assets/banner-3.webp
        new file:   client/src/assets/react.svg
        new file:   client/src/components/admin-view/header.jsx
        new file:   client/src/components/admin-view/image-upload.jsx
        new file:   client/src/components/admin-view/layout.jsx
        new file:   client/src/components/admin-view/order-details.jsx
        new file:   client/src/components/admin-view/orders.jsx
        new file:   client/src/components/admin-view/product-tile.jsx
        new file:   client/src/components/admin-view/sidebar.jsx
        new file:   client/src/components/auth/layout.jsx   
        new file:   client/src/components/common/check-auth.jsx
        new file:   client/src/components/common/form.jsx   
        new file:   client/src/components/common/star-rating.jsx
        new file:   client/src/components/shopping-view/address-card.jsx
        new file:   client/src/components/shopping-view/address.jsx
        new file:   client/src/components/shopping-view/cart-items-content.jsx
        new file:   client/src/components/shopping-view/cart-wrapper.jsx
        new file:   client/src/components/shopping-view/filter.jsx
        new file:   client/src/components/shopping-view/header.jsx
        new file:   client/src/components/shopping-view/layout.jsx
        new file:   client/src/components/shopping-view/order-details.jsx
        new file:   client/src/components/shopping-view/orders.jsx
        new file:   client/src/components/shopping-view/product-details.jsx
        new file:   client/src/components/shopping-view/product-tile.jsx
        new file:   client/src/components/ui/avatar.jsx     
        new file:   client/src/components/ui/badge.jsx      
        new file:   client/src/components/ui/button.jsx     
        new file:   client/src/components/ui/card.jsx       
        new file:   client/src/components/ui/checkbox.jsx   
        new file:   client/src/components/ui/dialog.jsx     
        new file:   client/src/components/ui/dropdown-menu.jsx
        new file:   client/src/components/ui/input.jsx      
        new file:   client/src/components/ui/label.jsx      
        new file:   client/src/components/ui/select.jsx     
        new file:   client/src/components/ui/separator.jsx  
        new file:   client/src/components/ui/sheet.jsx      
        new file:   client/src/components/ui/skeleton.jsx   
        new file:   client/src/components/ui/table.jsx      
        new file:   client/src/components/ui/tabs.jsx       
        new file:   client/src/components/ui/textarea.jsx   
        new file:   client/src/components/ui/toast.jsx      
        new file:   client/src/components/ui/toaster.jsx    
        new file:   client/src/components/ui/use-toast.js   
        new file:   client/src/config/index.js
        new file:   client/src/index.css
        new file:   client/src/lib/utils.js
        new file:   client/src/main.jsx
        new file:   client/src/pages/admin-view/dashboard.jsx
        new file:   client/src/pages/admin-view/features.jsx
        new file:   client/src/pages/admin-view/orders.jsx  
        new file:   client/src/pages/admin-view/products.jsx
        new file:   client/src/pages/auth/login.jsx
        new file:   client/src/pages/auth/register.jsx      
        new file:   client/src/pages/not-found/index.jsx    
        new file:   client/src/pages/shopping-view/account.jsx
        new file:   client/src/pages/shopping-view/checkout.jsx
        new file:   client/src/pages/shopping-view/home.jsx 
        new file:   client/src/pages/shopping-view/listing.jsx
        new file:   client/src/pages/shopping-view/payment-success.jsx
        new file:   client/src/pages/shopping-view/paypal-return.jsx
        new file:   client/src/pages/shopping-view/search.jsx
        new file:   client/src/pages/unauth-page/index.jsx  
        new file:   client/src/store/admin/order-slice/index.js
        new file:   client/src/store/admin/products-slice/index.js
        new file:   client/src/store/auth-slice/index.js    
        new file:   client/src/store/common-slice/index.js  
        new file:   client/src/store/shop/address-slice/index.js
        new file:   client/src/store/shop/cart-slice/index.js
        new file:   client/src/store/shop/order-slice/index.js
        new file:   client/src/store/shop/products-slice/index.js
        new file:   client/src/store/shop/review-slice/index.js
        new file:   client/src/store/shop/search-slice/index.js
        new file:   client/src/store/store.js
        new file:   client/tailwind.config.js
        new file:   client/vite.config.js
        new file:   server/.gitignore
        new file:   server/controllers/admin/order-controller.js
        new file:   server/controllers/admin/products-controller.js
        new file:   server/controllers/auth/auth-controller.js
        new file:   server/controllers/common/feature-controller.js
        new file:   server/controllers/shop/address-controller.js
        new file:   server/controllers/shop/cart-controller.js
        new file:   server/controllers/shop/order-controller.js
        new file:   server/controllers/shop/product-review-controller.js
        new file:   server/controllers/shop/products-controller.js
        new file:   server/controllers/shop/search-controller.js
        new file:   server/helpers/cloudinary.js
        new file:   server/helpers/paypal.js
        new file:   server/models/Address.js
        new file:   server/models/Cart.js
        new file:   server/models/Feature.js
        new file:   server/models/Order.js
        new file:   server/models/Product.js
        new file:   server/models/Review.js
        new file:   server/models/User.js
        new file:   server/package-lock.json
        new file:   server/package.json
        new file:   server/routes/admin/order-routes.js     
        new file:   server/routes/admin/products-routes.js  
        new file:   server/routes/auth/auth-routes.js       
        new file:   server/routes/common/feature-routes.js  
        new file:   server/routes/shop/address-routes.js    
        new file:   server/routes/shop/cart-routes.js       
        new file:   server/routes/shop/order-routes.js      
        new file:   server/routes/shop/products-routes.js   
        new file:   server/routes/shop/review-routes.js     
        new file:   server/routes/shop/search-routes.js     
        new file:   server/server.js

PS D:\project_ecom_site\mern-ecommerce-2024> git commit -m "all files added now"
[main (root-commit) 3bf0b37] all files added now
 124 files changed, 15451 insertions(+)
 create mode 100644 README.md
 create mode 100644 client/.gitignore
 create mode 100644 client/README.md
 create mode 100644 client/components.json
 create mode 100644 client/eslint.config.js
 create mode 100644 client/index.html
 create mode 100644 client/jsconfig.json
 create mode 100644 client/package-lock.json
 create mode 100644 client/package.json
 create mode 100644 client/postcss.config.js
 create mode 100644 client/public/vite.svg
 create mode 100644 client/src/App.css
 create mode 100644 client/src/App.jsx
 create mode 100644 client/src/assets/account.jpg
 create mode 100644 client/src/assets/banner-1.webp
 create mode 100644 client/src/assets/banner-2.webp
 create mode 100644 client/src/assets/banner-3.webp
 create mode 100644 client/src/assets/react.svg
 create mode 100644 client/src/components/admin-view/header.jsx
 create mode 100644 client/src/components/admin-view/image-upload.jsx
 create mode 100644 client/src/components/admin-view/layout.jsx
 create mode 100644 client/src/components/admin-view/order-details.jsx
 create mode 100644 client/src/components/admin-view/orders.jsx
 create mode 100644 client/src/components/admin-view/product-tile.jsx
 create mode 100644 client/src/components/admin-view/sidebar.jsx
 create mode 100644 client/src/components/auth/layout.jsx   
 create mode 100644 client/src/components/common/check-auth.jsx
 create mode 100644 client/src/components/common/form.jsx   
 create mode 100644 client/src/components/common/star-rating.jsx
 create mode 100644 client/src/components/shopping-view/address-card.jsx
 create mode 100644 client/src/components/shopping-view/address.jsx
 create mode 100644 client/src/components/shopping-view/cart-items-content.jsx
 create mode 100644 client/src/components/shopping-view/cart-wrapper.jsx
 create mode 100644 client/src/components/shopping-view/filter.jsx
 create mode 100644 client/src/components/shopping-view/header.jsx
 create mode 100644 client/src/components/shopping-view/layout.jsx
 create mode 100644 client/src/components/shopping-view/order-details.jsx
 create mode 100644 client/src/components/shopping-view/orders.jsx
 create mode 100644 client/src/components/shopping-view/product-details.jsx
 create mode 100644 client/src/components/shopping-view/product-tile.jsx
 create mode 100644 client/src/components/ui/avatar.jsx     
 create mode 100644 client/src/components/ui/badge.jsx      
 create mode 100644 client/src/components/ui/button.jsx     
 create mode 100644 client/src/components/ui/card.jsx       
 create mode 100644 client/src/components/ui/checkbox.jsx   
 create mode 100644 client/src/components/ui/dialog.jsx     
 create mode 100644 client/src/components/ui/dropdown-menu.jsx
 create mode 100644 client/src/components/ui/input.jsx      
 create mode 100644 client/src/components/ui/label.jsx      
 create mode 100644 client/src/components/ui/select.jsx     
 create mode 100644 client/src/components/ui/separator.jsx  
 create mode 100644 client/src/components/ui/sheet.jsx      
 create mode 100644 client/src/components/ui/skeleton.jsx   
 create mode 100644 client/src/components/ui/table.jsx      
 create mode 100644 client/src/components/ui/tabs.jsx       
 create mode 100644 client/src/components/ui/textarea.jsx   
 create mode 100644 client/src/components/ui/toast.jsx      
 create mode 100644 client/src/components/ui/toaster.jsx    
 create mode 100644 client/src/components/ui/use-toast.js   
 create mode 100644 client/src/config/index.js
 create mode 100644 client/src/index.css
 create mode 100644 client/src/lib/utils.js
 create mode 100644 client/src/main.jsx
 create mode 100644 client/src/pages/admin-view/dashboard.jsx
 create mode 100644 client/src/pages/admin-view/features.jsx
 create mode 100644 client/src/pages/admin-view/orders.jsx  
 create mode 100644 client/src/pages/admin-view/products.jsx
 create mode 100644 client/src/pages/auth/login.jsx
 create mode 100644 client/src/pages/auth/register.jsx      
 create mode 100644 client/src/pages/not-found/index.jsx    
 create mode 100644 client/src/pages/shopping-view/account.jsx
 create mode 100644 client/src/pages/shopping-view/checkout.jsx
 create mode 100644 client/src/pages/shopping-view/home.jsx 
 create mode 100644 client/src/pages/shopping-view/listing.jsx
 create mode 100644 client/src/pages/shopping-view/payment-success.jsx
 create mode 100644 client/src/pages/shopping-view/paypal-return.jsx
 create mode 100644 client/src/pages/shopping-view/search.jsx
 create mode 100644 client/src/pages/unauth-page/index.jsx  
 create mode 100644 client/src/store/admin/order-slice/index.js
 create mode 100644 client/src/store/admin/products-slice/index.js
 create mode 100644 client/src/store/auth-slice/index.js    
 create mode 100644 client/src/store/common-slice/index.js  
 create mode 100644 client/src/store/shop/address-slice/index.js
 create mode 100644 client/src/store/shop/cart-slice/index.js
 create mode 100644 client/src/store/shop/order-slice/index.js
 create mode 100644 client/src/store/shop/products-slice/index.js
 create mode 100644 client/src/store/shop/review-slice/index.js
 create mode 100644 client/src/store/shop/search-slice/index.js
 create mode 100644 client/src/store/store.js
 create mode 100644 client/tailwind.config.js
 create mode 100644 client/vite.config.js
 create mode 100644 server/.gitignore
 create mode 100644 server/controllers/admin/order-controller.js
 create mode 100644 server/controllers/admin/products-controller.js
 create mode 100644 server/controllers/auth/auth-controller.js
 create mode 100644 server/controllers/common/feature-controller.js
 create mode 100644 server/controllers/shop/address-controller.js
 create mode 100644 server/controllers/shop/cart-controller.js
 create mode 100644 server/controllers/shop/order-controller.js
 create mode 100644 server/controllers/shop/product-review-controller.js
 create mode 100644 server/controllers/shop/products-controller.js
 create mode 100644 server/controllers/shop/search-controller.js
 create mode 100644 server/helpers/cloudinary.js
 create mode 100644 server/helpers/paypal.js
 create mode 100644 server/models/Address.js
 create mode 100644 server/models/Cart.js
 create mode 100644 server/models/Feature.js
 create mode 100644 server/models/Order.js
 create mode 100644 server/models/Product.js
 create mode 100644 server/models/Review.js
 create mode 100644 server/models/User.js
 create mode 100644 server/package-lock.json
 create mode 100644 server/package.json
 create mode 100644 server/routes/admin/order-routes.js     
 create mode 100644 server/routes/admin/products-routes.js  
 create mode 100644 server/routes/auth/auth-routes.js       
 create mode 100644 server/routes/common/feature-routes.js  
 create mode 100644 server/routes/shop/address-routes.js    
 create mode 100644 server/routes/shop/cart-routes.js       
 create mode 100644 server/routes/shop/order-routes.js      
 create mode 100644 server/routes/shop/products-routes.js   
 create mode 100644 server/routes/shop/review-routes.js     
 create mode 100644 server/routes/shop/search-routes.js     
 create mode 100644 server/server.js
PS D:\project_ecom_site\mern-ecommerce-2024> git add .
PS D:\project_ecom_site\mern-ecommerce-2024> git status
On branch main
nothing to commit, working tree clean
PS D:\project_ecom_site\mern-ecommerce-2024> git push -u origin main
>>
Enumerating objects: 170, done.
Counting objects: 100% (170/170), done.
Delta compression using up to 8 threads
Compressing objects: 100% (148/148), done.
Writing objects: 100% (170/170), 1.05 MiB | 1.27 MiB/s, done.
Total 170 (delta 16), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (16/16), done.
To https://github.com/Sarthakjanrao07/Ecommerce-Fullstack-Shopping-Website.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS D:\project_ecom_site\mern-ecommerce-2024> 
