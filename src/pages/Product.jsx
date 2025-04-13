import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa"; // Import FaRegHeart (outlined heart)
import { addCard, removeCard } from "../Action";
import { useDispatch, useSelector } from "react-redux";


const Product = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

    // Product data (replace with your actual data source)
    const products = [
        { id: 1, name: t("collection.1"), image: "Images/winter/1.jpg", category: t("category.w") },
        { id: 2, name: t("collection.2"), image: "Images/winter/2.jpg", category: t("category.w") },
        { id: 3, name: t("collection.3"), image: "Images/winter/3.jpg", category: t("category.w") },
        { id: 4, name: t("collection.4"), image: "Images/winter/4.jpg", category: t("category.w") },
        { id: 5, name: t("collection.5"), image: "Images/winter/5.jpg", category: t("collection.5") },
        { id: 6, name: t("collection.6"), image: "Images/winter/6.jpg", category: t("collection.6") },
        { id: 7, name: t("collection.7"), image: "Images/winter/7.jpg", category: t("collection.7") },
        { id: 8, name: t("collection.8"), image: "Images/winter/8.jpg", category: t("collection.8") },
        { id: 9, name: t("collection.9"), image: "Images/winter/9.jpg", category: t("collection.9") },
        { id: 10, name: t("collection.10"), image: "Images/winter/10.jpg", category: t("category.w") },
        { id: 11, name: t("autumn.1"), image: "Images/autm/1.jpg", category: t("category.a") },
        { id: 12, name: t("autumn.2"), image: "Images/autm/2.jpg", category: t("category.a") },
        { id: 13, name: t("autumn.3"), image: "Images/autm/3.jpg", category: t("category.a") },
        { id: 14, name: t("autumn.4"), image: "Images/autm/4.jpg", category: t("category.a") },
        { id: 15, name: t("autumn.5"), image: "Images/autm/5.jpg", category: t("category.a") },
        { id: 16, name: t("autumn.6"), image: "Images/autm/6.jpg", category: t("category.a") },
        { id: 17, name: t("autumn.7"), image: "Images/autm/7.jpg", category: t("category.a") },
        { id: 18, name: t("autumn.8"), image: "Images/autm/8.jpg", category: t("category.a") },
        { id: 19, name: t("autumn.9"), image: "Images/autm/9.jpg", category: t("category.a") },
        { id: 20, name: t("autumn.10"), image: "Images/autm/10.jpg", category: t("category.s") },
        { id: 23, name: t("summer.3"), image: "Images/summer/3.jpg", category: t("category.s") },
        { id: 22, name: t("summer.2"), image: "Images/summer/2.jpg", category: t("category.s") },
        { id: 24, name: t("summer.4"), image: "Images/summer/4.jpg", category: t("category.s") },
        { id: 21, name: t("summer.1"), image: "Images/summer/1.jpg", category: t("category.s") },
        { id: 25, name: t("summer.5"), image: "Images/summer/5.jpg", category: t("category.s") },
        { id: 26, name: t("summer.6"), image: "Images/summer/6.jpg", category: t("category.s") },
        { id: 27, name: t("summer.7"), image: "Images/summer/7.jpg", category: t("category.s") },
        { id: 28, name: t("summer.8"), image: "Images/summer/8.jpg", category: t("category.s") },
        { id: 29, name: t("summer.9"), image: "Images/summer/9.jpg", category: t("category.s") },
        { id: 30, name: t("summer.10"), image: "Images/summer/10.jpg", category: t("category.s") },
    ];
    const items = [
      { id: 1, name: t("collection.1"), image: "Images/winter/1.jpg", category: t("category.w") },
      { id: 2, name: t("collection.2"), image: "Images/winter/2.jpg", category: t("category.w") },
      { id: 3, name: t("collection.3"), image: "Images/winter/3.jpg", category: t("category.w") },
      { id: 4, name: t("collection.4"), image: "Images/winter/4.jpg", category: t("category.w") },
    ];

    const params = useParams();
    const filtered = products.filter((item) => item?.id == params?.id);

    // State for contact form
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    // State for review form
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [email, setEmail] = useState("");

    // State for liked products
    const [likedProducts, setLikedProducts] = useState([]);

    // Validation for contact form
    const validateInputs = () => {
        if (!name.trim()) {
            setError("Ismingizni kiriting.");
            return false;
        }
        if (!phone.trim()) {
            setError("Telefon raqamini kiriting.");
            return false;
        }
        return true;
    };

    // Send message to Telegram (replace with your actual API call)
    const sendMessage = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError("");

        if (!validateInputs()) return;

        const token = "7881902618:AAFNdckmXTfKa10-fnCW530OQuph6mpWles";
        const chat_id = 5327836577;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const messageText = `Ism: ${name}\nTelefon: ${phone}\nXabar: ${message}`;

        try {
            await axios.post(url, {
                chat_id: chat_id,
                text: messageText,
            });
            toast.success("Muvaffaqiyatli");
            setName("");
            setPhone("");

        } catch (error) {
            setError("Xabar yuborishda xatolik yuz berdi. Keyinroq urinib ko'ring.");
            console.error("Xatolik yuz berdi", error);
        }
    };

    // Submit a review
    const submitReview = async (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || rating === 0 || !message.trim()) {
            toast.error("Iltimos, ism, email, reyting va sharhni to'ldiring.");
            return;
        }

        const newReview = {
            name: name,
            email: email,
            rating: rating,
            text: message,
        };

        // Telegram Bot API details (replace with your own)
        const botToken = '7881902618:AAFNdckmXTfKa10-fnCW530OQuph6mpWles'; // Replace with your bot token
        const chatId = 5327836577; // Replace with your chat ID
        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const telegramMessage = `Yangi sharh:\n\nIsm: ${name}\nEmail: ${email}\nReyting: ${rating} yulduz\nSharh: ${message}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                }),
            });

            if (response.ok) {
                toast.success("Sharhingiz qabul qilindi va yuborildi!");
                // Update the reviews state (in a real app, you'd send this to a server)
                setReviews([...reviews, newReview]);
                setName("");
                setEmail("");
                setMessage("");
                setRating(0);
            } else {
                toast.error("Sharhingiz qabul qilindi, lekin yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
                console.error('Telegramga sharh yuborishda xatolik:', response.status);
            }

        } catch (error) {
            toast.error("Sharhingiz qabul qilindi, lekin yuborishda tarmoq xatoligi yuz berdi. Iltimos, keyinroq urinib ko'ring.");
            console.error('Telegramga sharh yuborishda tarmoq xatoligi:', error);
        }

    };

    // Get similar products (replace with your actual logic)
    const similarProducts = products.slice(0, 4);

    // Function to toggle the liked status of a product
    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    return (
        <div className="flex flex-col md:pt-28 m-auto max-w-[85rem] px-5 pt-16 mb-20">
            {/* Product Image and Details */}
            <div className="flex flex-col gap-8 md:items-start md:flex-row">
                {/* Product Image (Left Side) */}
                <div className="md:w-1/2">
                    <img
                        src={filtered[0].image}
                        alt="Product"
                        className="w-full rounded-3xl"
                    />
                </div>

                {/* Product Details (Right Side) */}
                <div className="md:w-1/2">
                    <h1 className="font-bold text-[1.5em]">{t("wish.Circles")}</h1>
                    <table className="w-full mt-5">
                        <tbody>
                            <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                                <td className="py-3 pl-5 border-r">{t("wish.Material")}</td>
                                <td className="pl-5">{t("wish.100%")}</td>
                            </tr>
                            <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                                <td className="py-3 pl-5 border-r">{t("wish.Pillowcase")}</td>
                                <td className="pl-5">{t("wish.50x70")}</td>
                            </tr>
                            <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                                <td className="py-3 pl-5 border-r">{t("wish.Bedding")}</td>
                                <td className="pl-5">{t("wish.260×280")}</td>
                            </tr>
                            <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                                <td className="py-3 pl-5 border-r">{t("wish.Bed")}</td>
                                <td className="pl-5">{t("wish.160x220")}</td>
                            </tr>
                            <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                                <td className="py-3 pl-5 border-r">{t("wish.Size")}</td>
                                <td className="pl-5">{t("wish.Custom")}</td>
                            </tr>
                            <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                                <td className="py-3 pl-5 border-r">{t("wish.Manufacturer")}</td>
                                <td className="pl-5">{t("wish.Environmental")}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="mt-4 text-sm font-medium text-red-500 md:text-base">
                        <span>{t("wish.Category")}</span> {filtered[0].category}
                    </h1>

                 
                    
                </div>
            </div>

          
            <div className="mt-12">
                <div className="flex justify-between flex-wrap">
                    <div className="w-full md:w-[40%]">
                        <h1 className="text-4xl font-bold mt-10">{t("wish.Product")}</h1>
                        {reviews.length === 0 ? (
                            <p className="mt-4 text-base font-semibold text-gray-400">{t("wish.No")}</p>
                        ) : (
                            reviews.map((review, index) => (
                                <div key={index} className="mb-6 p-4 border rounded-md">
                                    <div className="flex items-center mb-2">
                                        <strong className="mr-2">{review.name}</strong>
                                        {[...Array(5)].map((star, i) => (
                                            <FaStar
                                                key={i}
                                                color={i < review.rating ? "#ffc107" : "#e4e4e4"}
                                                size={20}
                                            />
                                        ))}
                                    </div>
                                    <p>{review.text}</p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Review Form Section (Right - 55%) */}
                    <div className="w-full md:w-[55%]">
                        <div className="mb-12">
                            <h2 className="font-bold text-4xl mt-10 mb-4">{t("wish.Leave")}</h2>
                            {/* Placeholder for existing reviews (if any) */}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">{t("wish.Your")}</label>
                            <div className="flex items-center">
                                {[...Array(5)].map((star, i) => (
                                    <FaStar
                                        key={i}
                                        color={i < (hover || rating) ? "#ffc107" : "#e4e4e4"}
                                        size={30}
                                        onClick={() => setRating(i + 1)}
                                        onMouseOver={() => setHover(i + 1)}
                                        onMouseLeave={() => setHover(rating)}
                                        className="cursor-pointer"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Review form */}
                        <div>
                            <h2 className="font-bold text-2xl mb-4"></h2>
                            <form onSubmit={submitReview}>
                                {/* Name */}
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    {t("wish.Name")} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="shadow appearance-none border rounded-[15px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                {/* Email */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    {t("wish.Email")} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="shadow appearance-none border rounded-[15px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>


                                {/* Review Text */}
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                    {t("wish.Your review")} *
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows="4"
                                        className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                                        placeholder= {t("wish.Your review")}
                                        required
                                    />
                                </div>
                                {/* Button */}
                                <div className="flex items-center justify-start">
                                    <button
                                        type="submit"
                                        className="bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        {t("wish.Submit")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="flex flex-col  items-center mt-20">
  <h1 className="text-xl md:text-[35px] font-bold">
    {t("wish.Reviews")}
  </h1>
  <p className="mt-4 text-base"></p>
  <div className="grid  items-center justify-center grid-cols-2 gap-10 mt-10 md:justify-between md:gap-3 md:grid-cols-3 lg:grid-cols-5">
    {products
      .filter(item => item.id <= 5) // Mana filtratsiya qismi!
      .map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="relative overflow-hidden rounded-xl group">
            <Link to={`/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                width={269}
                height={202}
                className="md:w-[185px] cursor-default md:h-[139px] lg:w-[250px] lg:h-[188px] transform transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div
              onClick={() => card.some((cardItem) => cardItem.id === item.id) ? dispatch(removeCard(item.id)) : dispatch(addCard(item))}
              className="absolute z-10 p-1 text-white transition-transform duration-300 bg-gray-300 rounded-full cursor-pointer top-1 right-1 group-hover:scale-110"
            >
              {card.some((cardItem) => cardItem.id === item.id) ? (
                <svg
                  stroke="currentColor"
                  fill="red"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="red"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                </svg>
              )}
            </div>
          </div>

          <h1 className="mt-2 font-medium text-black transition-colors duration-300 group-hover:text-red-500">
            {item.name}
          </h1>
        </div>
      ))}
  </div>
</div>
        </div>
    );
};

export default Product;