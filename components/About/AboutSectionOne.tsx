import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About Us"
                paragraph="Empowering businesses with innovative FinTech and digital solutions across South Asia."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Who We Are
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color">
                    Kernel Encode Pvt Ltd is a Sri Lankan-based technology company specializing in 
                    FinTech, ERP, and digital business solutions. With over one year of industry 
                    experience, we empower businesses with intelligent systems that simplify 
                    financial operations, enhance data accuracy, and drive growth.
                  </p>
                </div>

                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="FinTech Solutions" />
                    <List text="ERP Systems" />
                    <List text="Data Accuracy" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Digital Solutions" />
                    <List text="Secure Systems" />
                    <List text="Business Growth" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-8 dark:from-primary/20 dark:to-secondary/20">
                  <div className="mb-8">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                      <svg
                        className="h-8 w-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      Our Vision
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      To be the leading FinTech innovation partner for businesses in South Asia.
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                      <svg
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      Our Mission
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      To deliver secure, user-friendly, and efficient financial software that 
                      transforms how companies manage money and data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;