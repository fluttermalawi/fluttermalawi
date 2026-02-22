import ContactusButton from './ContactusButton';

const CTASection = () => {
  return (
    <div className="relative w-full text-white  bg-navy px-4 sm:px-6 lg:px-8 my-14 h-fit flex flex-row items-center ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-8 items-center py-8">
          {/* Text Content */}
          <div className="py-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Do you love Technology?
                <div className="mt-2 text-2xl font-medium">
                  Join our list of speakers and experts!
                </div>
              </h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Share your knowledge and experience with our
                community. We&#39;re looking for speakers who are
                passionate about technology and want to make a
                difference.
              </p>
              {/* <button onClick={()=>{

                            }}
                                className="bg-white text-[#0F1729] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                                Apply now
                            </button> */}
              <ContactusButton />
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/Coding.png"
                alt="Student illustration"
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
