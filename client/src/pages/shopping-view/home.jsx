import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

// const categoriesWithIcon = [
//   { id: "men", label: "Men", icon: ShirtIcon },
//   { id: "women", label: "Women", icon: CloudLightning },
//   { id: "kids", label: "Kids", icon: BabyIcon },
//   { id: "accessories", label: "Accessories", icon: WatchIcon },
//   { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
// ];


const categoriesWithIcon = [
  { id: "men", label: "Men", image: "https://buyer-user-frontend2.vercel.app/men_images/quick_picks/image_1.png" },
  { id: "women", label: "Women", image: "https://buyer-user-frontend2.vercel.app/women_images/quick_picks/1.png" },
  { id: "kids", label: "Kids", image: "https://sdmntpritalynorth.oaiusercontent.com/files/00000000-0434-6246-a180-b8ce8c40fa3d/raw?se=2025-07-11T22%3A35%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=56a870e5-1a42-557b-ba72-3646fcb708cd&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T20%3A02%3A24Z&ske=2025-07-12T20%3A02%3A24Z&sks=b&skv=2024-08-04&sig=TWl0h6J59VLHhki5qD9NlRjnrIKJRSPhB84bT32%2BNl4%3D" },
  { id: "accessories", label: "Accessories", image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-4624-61f9-a88d-d2383a529644/raw?se=2025-07-11T22%3A35%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=e1f00fa2-b6fb-5eb5-ac19-4d62e80d6b79&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T20%3A02%3A07Z&ske=2025-07-12T20%3A02%3A07Z&sks=b&skv=2024-08-04&sig=teV6iqdx0YTcrUACwqPEZPnQUxR0v3lqqvvqKIPq5RE%3D" },
  { id: "footwear", label: "Footwear", image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-e90c-61f5-983d-da97d0990157/raw?se=2025-07-11T22%3A35%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=5cc756d6-6330-5bb8-90f1-233f95c92636&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T20%3A02%3A12Z&ske=2025-07-12T20%3A02%3A12Z&sks=b&skv=2024-08-04&sig=B4PF2MA%2BT7ItYMAODPJ2UZHUtxq0o6bhWW0WhVMhXBY%3D" },
];


const brandsWithIcon = [
  { id: "nike", label: "Nike", image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-b468-622f-a57c-0bcf9568244e/raw?se=2025-07-11T22%3A31%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=7aec30df-deb4-5cfd-ac10-93a0e90ccea1&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T18%3A47%3A42Z&ske=2025-07-12T18%3A47%3A42Z&sks=b&skv=2024-08-04&sig=hJrOP3kd1W98XRgA2Im0uuUGbeolzHkvBjvcdDPW/UM%3D" },
  { id: "adidas", label: "Adidas", image: "https://sdmntprwestus3.oaiusercontent.com/files/00000000-2d64-61fd-9f0c-07fbabdf4c44/raw?se=2025-07-11T21%3A40%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=aeb6b9d7-c78f-50d4-8a76-35d71dad4a12&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T18%3A29%3A17Z&ske=2025-07-12T18%3A29%3A17Z&sks=b&skv=2024-08-04&sig=pGgyFl5%2BeINaVKI3/qZMsehREjTmkutNs%2B1mgHgUMpM%3D" },
  { id: "puma", label: "Puma", image: "https://sdmntprwestus.oaiusercontent.com/files/00000000-43dc-6230-a84b-b2d933699a22/raw?se=2025-07-11T21%3A41%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=783f937a-89ce-5542-91d7-460f3310da35&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T18%3A18%3A03Z&ske=2025-07-12T18%3A18%3A03Z&sks=b&skv=2024-08-04&sig=lox3KltfU8TSqnFIEh/eK4X7gXBVN092Xr5MC1Px9FQ%3D" },
  { id: "levi", label: "Levi's",image: "https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-d2c8-620a-a46d-bc4137083aa5/raw?se=2025-07-11T21%3A43%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=2581042c-7c4d-525b-b4b3-acfa454df65b&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T20%3A33%3A30Z&ske=2025-07-12T20%3A33%3A30Z&sks=b&skv=2024-08-04&sig=NFkswdE6XxtEwH55Z1htav0eRcHLzRersj7w8Krw7fY%3D" },
  { id: "zara", label: "Zara", image: "https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-9224-620a-90c9-3eaa85a46fec/raw?se=2025-07-11T21%3A45%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=cca4876d-dec1-507a-90fb-b56124486486&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T18%3A30%3A39Z&ske=2025-07-12T18%3A30%3A39Z&sks=b&skv=2024-08-04&sig=K4Vg1bJkml8HaEFgGCMJAHc%2Bl/Ecx1A7CejIspbCu3Q%3D" },
  { id: "h&m", label: "H&M",image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-4814-61f9-90f9-4e0014ef8967/raw?se=2025-07-11T21%3A47%3A26Z&sp=r&sv=2024-08-04&sr=b&scid=d6ce5d1d-6e13-5a23-af06-3b6b308af3a0&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-11T18%3A30%3A49Z&ske=2025-07-12T18%3A30%3A49Z&sks=b&skv=2024-08-04&sig=UMWeu5ypFjq8Hu2hkez1PNEzJZxsjW2hJ5Jx4g2QLjo%3D"},
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full max-w-5xl mx-auto mt-6 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))} */}

            {categoriesWithIcon.map((categoryItem) => (
  <Card
    key={categoryItem.id}
    onClick={() => handleNavigateToListingPage(categoryItem, "category")}
    className="cursor-pointer hover:shadow-lg transition-shadow"
  >
    <CardContent className="flex flex-col items-center justify-center p-6">
      <img
        src={categoryItem.image}
        alt={categoryItem.label}
        className="w-40 h-40 mb-4 object-contain"
      />
      <span className="font-bold">{categoryItem.label}</span>
    </CardContent>
  </Card>
))}

          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {brandsWithIcon.map((brandItem) => (
        <Card
          key={brandItem.id}
          onClick={() => handleNavigateToListingPage(brandItem, "brand")}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        >
          <CardContent className="flex flex-col items-center justify-center p-6">
            <img
              src={brandItem.image}
              alt={brandItem.label}
              className="w-24 h-24 object-contain mb-4 rounded-full border"
            />
            <span className="font-bold text-lg">{brandItem.label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
