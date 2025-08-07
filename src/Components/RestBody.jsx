import { useState } from 'react';

const faqData = [
    {
        question: "When Should I take MediNova?",
        answer: [
            {
                title: "Any Time you are Stressed:",
                text: "MediNova can be used anytime you’re feeling overwhelmed or mentally fatigued — helping you regain clarity, calm, and a refreshed sense of focus.",
            },
            {
                title: "Anytime you need to be Focused:",
                text: "MediNova’s active compounds help you stay calm and sharply focused, so you can power through your work, studies, or daily responsibilities with ease.",
            },
            {
                title: "After a workout:",
                text: "MediNova combines antioxidant support with relaxed focus, making it an ideal post-workout boost to calm the mind and stay productive.",
            },
        ],
    },
    {
        question: "How Quick Will I feel the effects of MediNova Renew?",
        answer: [
            {
                text: "While some users may begin to feel the effects of MediNova within 20 minutes, it may take up to 2 hours for others to experience the full benefits. For optimal results, consistent use is key — many individuals notice the most significant impact after 2 to 3 days, as the formula’s ingredients compound and become more effective over time.",
            },
        ],
    },
    {
        question: "How to use / When should I take Glow?",
        answer: [
            {
                text: "Glow fits easily into your day — take it in the morning or with lunch to help your body fight stressors like sun, pollution, and oxidative damage. Learn more about its science-backed ingredients on our Learn page.",
            },
        ],
    },
    {
        question: "How soon will I see the effects of Glow?",
        answer: [
            {
                text: "Glow works gradually — while it may not deliver instant results like our nootropic products, you can expect to notice positive changes within two weeks. Continued use enhances the benefits over time as the formula supports your body from within.",
            },
        ],
    },
];

const blogPosts = [
    {
        img: "/MediNova-frontend/image 1.png",
        title: "The Vicious Cycle of Stress And How to Get Out of it",
        date: "June 20, 2025",
        desc: "We can’t stress enough about stress but don’t get stressed about it Don’t let stress ruin your ...",
        link: "#",
    },
    {
        img: "/MediNova-frontend/image2.png",
        title: "5 Anti Inflammatory Food Sources",
        date: "June 23, 2025",
        desc: "Let’s address the 500 lb. Gorilla in the room: If inflammation is so bad why do our bodies resort...",
        link: "#",
    },
    {
        img: "/MediNova-frontend/image3.png",
        title: "Collagen: What is it and why should I take it",
        date: "July 02, 2025",
        desc: "You have probably heard of collagen in lotions and creams designed to help your skin stay health...",
        link: "#",
    },
];

const instagramImages = [
    "MediNova-frontend/111.jpg",
    "MediNova-frontend/444(1).jpg",
    "MediNova-frontend/333(1).jpg",
    "MediNova-frontend/22.jpg",
    "MediNova-frontend/555.jpg",
    "MediNova-frontend/666.jpg",
];

const RestBody = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleCollapsible = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };
    return (
        <>
            <div className="bg-[#92d6e3] w-full px-4 py-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-nowrap justify-between items-center overflow-x-auto gap-4">
                        {[
                            { src: "/MediNova-frontend/logo3.png", alt: "logo3" },
                            { src: "/MediNova-frontend/logo5.png", alt: "logo5" },
                            { src: "/MediNova-frontend/logo4.png", alt: "logo4" },
                            { src: "/MediNova-frontend/logo2.png", alt: "logo2" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-1/6 min-w-[80px]"
                            >
                                <div className="w-full max-w-[100px] sm:max-w-[120px]">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <p className="text-sm mt-4 font-semibold font-sans text-center">
                                    Non-GMO
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Portion 5 - Backed by Science */}
            <div className="bg-[#f8f8f8] w-full py-16 px-4">
                <div className="flex flex-wrap items-center max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/MediNova-frontend/left.png"
                            alt="Backed by Science"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pl-16 mt-10 md:mt-0">
                        <h2 className="text-3xl font-semibold text-[#13171a]">Backed by Science</h2>
                        <p className="text-base text-[#13171a] leading-relaxed">
                            At MediNova, every formula begins with a purpose-driven approach. We thoughtfully
                            select each active compound based on clinical evidence, ensuring that our ingredients
                            work in harmony to deliver maximum results. Beyond efficacy, we focus on the science
                            of absorption, taste profile, and real-world compatibility to create products that
                            truly support your well-being.
                        </p>
                        <p className="text-base text-[#13171a] leading-relaxed">
                            We believe in full transparency—explore the details behind our formulations on the
                            Learn and Science pages, and don’t hesitate to reach out with your questions.
                        </p>
                        <button className="bg-[#94d0a8] border-2 border-[#94d0a8] rounded-full py-3 px-6 w-1/2 hover:bg-white hover:border-black transition">
                            <a href="#" className="text-black font-semibold text-sm">Learn More</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Portion 6 - Ingredient Sourcing */}
            <div className="bg-[#f8f8f8] w-full py-16 px-4">
                <div className="flex flex-wrap-reverse md:flex-nowrap items-center max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-12 mt-10 md:mt-0">
                        <h2 className="text-3xl font-semibold text-[#13171a]">Ingredient Sourcing</h2>
                        <p className="text-base text-[#13171a] leading-relaxed">
                            At MediNova, we go beyond borders to find the finest ingredients—sourcing globally
                            with a strong commitment to purity, sustainability, and traceability. Every component
                            we use is thoughtfully selected, often backed by patents and clinical research, to
                            ensure exceptional quality and proven results in every product we offer.
                        </p>
                        <button className="bg-[#94d0a8] border-2 border-[#94d0a8] rounded-full py-3 px-6 w-1/2 hover:bg-white hover:border-black transition">
                            <a href="#" className="text-black font-semibold text-sm">Learn More</a>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/MediNova-frontend/right.jpg"
                            alt="Ingredient Sourcing"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#92d6e3] py-20 w-full">
                <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#13171a] text-center mb-6 font-['Juana']">
                        Subscribe <span className="font-sans">&</span> Save
                    </h2>

                    <div className="flex flex-wrap justify-center w-full py-10 gap-y-8">
                        {[
                            {
                                img: "/MediNova-frontend/logo6.png",
                                title: "Ships Every Month",
                                desc:
                                    "Choose your flavors, upgrade your subscription, or hit pause if you want. You're in control.",
                            },
                            {
                                img: "/MediNova-frontend/logo7.png",
                                title: "Fast and Easy Delivery",
                                desc:
                                    "Subscribe once and relax. We'll take care of everything else. Delivery of your products is now fast and easy.",
                            },
                            {
                                img: "/MediNova-frontend/logo8.png",
                                title: "Exclusive Benefits",
                                desc:
                                    "Gain exclusive, subscriber-only benefits. Enjoy early access to new products, sales, and promotions!",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 lg:w-1/3 px-6 flex flex-col items-center text-center"
                            >
                                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                                <h4 className="text-lg font-semibold text-[#13171a] mb-2">{item.title}</h4>
                                <p className="text-sm text-[#13171a] leading-relaxed max-w-xs">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#13171A] text-white font-bold text-sm px-12 py-4 rounded-full border-2 border-[#13171A] hover:bg-transparent hover:text-black transition">
                        Subscribe <span className="font-sans">&</span> Save
                    </button>
                </div>
            </div>
            <div className="bg-[#f8f8f8] py-12 w-full">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#13171a] mb-12 font-['Juana']">
                        We Love Your Questions
                    </h3>

                    {faqData.map((item, i) => (
                        <div
                            key={i}
                            className={`w-full md:w-[70%] mx-auto text-left mb-4 border rounded-md ${activeIndex === i ? "border-blue-500" : "border-[#C9C9C9]"
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center bg-white px-5 py-4 cursor-pointer text-left focus:outline-none"
                                onClick={() => toggleCollapsible(i)}
                            >
                                <h3 className="text-base md:text-lg font-semibold text-[#13171a] font-['Juana']">
                                    {item.question}
                                </h3>
                                <span
                                    className={`font-sans ${activeIndex === i
                                        ? "text-[45px] relative -top-[15px]"
                                        : "text-[28px] relative top-0"
                                        } text-black`}
                                >
                                    {activeIndex === i ? "-" : "+"}
                                </span>
                            </button>

                            <div
                                className={`px-5 bg-white overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === i ? "max-h-[1000px] py-4" : "max-h-0"
                                    }`}
                            >
                                {item.answer.map((ans, j) => (
                                    <div key={j} className="mb-3">
                                        {ans.title && (
                                            <strong className="block text-sm font-semibold mb-1 text-[#13171a]">
                                                {ans.title}
                                            </strong>
                                        )}
                                        <p className="text-sm text-[#13171a]">{ans.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button className="mt-10 bg-[#13171A] text-white font-semibold py-3 px-8 rounded-full w-[60%] sm:w-[30%] md:w-[20%] hover:bg-transparent hover:text-black border-2 border-[#13171A] transition">
                        <a href="#">View Full FAQS</a>
                    </button>
                </div>
            </div>
            <div className="bg-[#f8f8f8] py-12 w-full">
                <div className="container mx-auto flex flex-wrap justify-around gap-8 px-4">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full sm:w-[47%] md:w-[30%] scroll-part"
                        >
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                            <h3 className="text-lg font-semibold mt-5">{post.title}</h3>
                            <div className="text-xs mt-2 font-['Lab Grotesque']">{post.date}</div>
                            <div className="text-base mt-3 font-['Lab Grotesque'] leading-relaxed">
                                {post.desc}
                            </div>
                            <div className="mt-5">
                                <a
                                    href={post.link}
                                    className="text-[#94d0a8] text-xs font-bold uppercase underline"
                                >
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex justify-center mt-10">
                        <button className="main-btn bg-black text-white py-3 px-8 font-bold rounded-full hover:bg-transparent hover:text-black border-2 border-black transition w-[80%] sm:w-[50%] md:w-[25%]">
                            <a href="#">Check Out Our Blog</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#f8f8f8] pt-12 pb-0 w-full">
                <h3 className="text-center mb-8 font-sans text-lg font-semibold">
                    Follow us on Instagram
                </h3>
                <div className="flex flex-wrap justify-around px-4 gap-y-4">
                    {instagramImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-[30%] sm:w-[22%] md:w-[16.4%] hover:opacity-50 transition-opacity duration-200 cursor-pointer"
                        >
                            <a href="#">
                                <img src={src} alt={`Instagram post ${idx + 1}`} className="w-full h-auto object-cover" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RestBody;
