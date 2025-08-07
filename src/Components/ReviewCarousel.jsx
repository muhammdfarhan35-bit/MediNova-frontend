import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    title: 'Calm & Focused',
    text: '“Stress Free! Keeps me focused and calm when work or life is stressing me out! ”',
    name: 'Alex',
  },
  {
    title: 'Great Size, Felt it Quickly',
    text: '“Perfect Size! Easy to drink, and I felt the effects within a few minutes.”',
    name: 'Natalie',
  },
  {
    title: 'Awesome Product',
    text: '"MediNova has really helped wipe the brain fog and the stress away, allowing me to be so much more productive!"',
    name: 'Steve W.',
  },
  {
    title: 'Use it Every Day',
    text: '"It definitely works, stress decreases within minutes. A must add to daily work / life routine."',
    name: 'Maureen L.',
  },
  {
    title: 'Calm Focus',
    text: '"Takes that stress level from a 9/10 to a 3/10, allowing me to be a productive person again."',
    name: 'Sam G.',
  },
  {
    title: 'Unbelievable Results',
    text: '"So surprised on how fast this changed my mood! I also slept like a baby that night, and I woke up feeling refreshed early the next morning."',
    name: 'Denise M.',
  },
  {
    title: 'Results After 1 Bottle',
    text: '“I saw results in the first 2 weeks, my skin looked better than it has in years."',
    name: 'Steph R.',
  },
  {
    title: 'See a Difference',
    text: '“It has been about a month, and I really feel and see a difference in my skin. Will definitely buy again!”',
    name: 'Jill C.',
  },
];

export default function ReviewCarousel() {
  return (
    <>
      {/* Responsive Image Sections */}
      <div className="block md:hidden w-full h-[50vh]">
        <img
          src="/MediNova-frontend/back22.png"
          alt="Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block w-full h-[75vh]">
        <img
          src="/MediNova-frontend/back1.jpg"
          alt="Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Review Carousel */}
      <div className="bg-[#f8f8f8] py-10 w-full overflow-hidden">
        <div className="max-w-7xl px-4 mx-auto">
          <h2 className="text-3xl md:hidden font-bold text-center pb-5 leading-[42px]">
            Calm, Clear Focus
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 w-[322px] text-center flex flex-col">
                  <div className="text-[#ffde2f] flex justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{review.title}</h4>
                  <p className="text-sm italic text-gray-600 mt-2 mb-4">{review.text}</p>
                  <h3 className="text-sm font-bold mt-4">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
