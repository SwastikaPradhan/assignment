import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";

const ProductModel = ({ closeProductModel }) => {
    const [isOpenModel, setIsOpenModel] = useState(true);
    const [amount, setAmount] = useState(1);
    const [activeImg, setActiveImage] = useState("https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png");
    const images = {
        img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    };

    const handleAmountChange = (type) => {
        setAmount((prev) => (type === "decrease" ? Math.max(1, prev - 1) : prev + 1));
    };

    const handleClose = () => {
        setIsOpenModel(false);
        closeProductModel();
    };

    return (
        <Dialog
            className="productModel"
            open={isOpenModel}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
        >
            {/* Close Button */}
            <Button
                className="p-3 absolute top-2 right-2"
                onClick={handleClose}
            >
                <MdClose />
            </Button>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 p-8">
                {/* Image Section */}
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img src={activeImg} alt="Product" className="w-full h-full aspect-square object-cover rounded-xl" />
                    <div className="flex flex-row justify-between h-24">
                        {Object.values(images).map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-24 h-24 rounded-md cursor-pointer ${activeImg === imgSrc ? 'border-2 border-violet-600' : 'border border-gray-300'}`}
                                onClick={() => setActiveImage(imgSrc)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                        <span className="text-violet-600 font-semibold">Special Sneaker</span>
                        <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
                    </div>
                    <p className="text-gray-700">
                        Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                    </p>
                    <h6 className="text-2xl font-semibold">$ 199.00</h6>
                    <div className="flex flex-row items-center gap-6 lg:gap-12">
                        {/* Quantity Selector */}
                        <div className="flex flex-row items-center">
                            <button
                                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                                onClick={() => handleAmountChange("decrease")}
                            >
                                -
                            </button>
                            <span className="py-4 px-6 rounded-lg">{amount}</span>
                            <button
                                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                                onClick={() => handleAmountChange("increase")}
                            >
                                +
                            </button>
                        </div>
                        {/* Add to Cart Button */}
                        <button className="bg-violet-800 text-white font-semibold py-3 px-8 lg:px-16 rounded-xl">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductModel;




