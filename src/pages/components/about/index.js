
import Head from 'next/head';

const index = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>About Us - Fashion Blog</title>
        <meta name="description" content="Learn more about Fashion Blog, dedicated to exploring fashion and beauty trends." />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          About Fashion Blog
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-800 mb-4">
            Welcome to Fashion Blog, your go-to source for the latest insights and trends in fashion and beauty. 
            Founded in [Year Founded], our mission is to [Brief Mission Statement].
          </p>

          <p className="text-lg text-gray-800 mb-4">
            At Fashion Blog, we believe in [Core Belief or Vision]. Our dedicated team of writers and editors bring 
            you engaging content covering everything from seasonal fashion trends to skincare routines and celebrity looks.
          </p>

          <p className="text-lg text-gray-800 mb-4">
            Whether your looking for expert beauty advice or inspiration for your next outfit, we strive to empower our 
            readers with the knowledge and confidence to express their unique style.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-lg text-gray-800">
            Meet the passionate individuals behind Fashion Blog who work tirelessly to bring you fresh, 
            informative, and inspiring content:
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2">[Founder/Editor Name] - Founder & Editor-in-Chief</li>
            <li className="mb-2">[Writer Name] - Fashion Trends Contributor</li>
            <li className="mb-2">[Beauty Expert Name] - Beauty Editor</li>
            {/* Add more team members as applicable */}
          </ul>
        </section>

        <section>
          <p className="text-lg text-gray-800">
            Thank you for being a part of our community. We look forward to continuing our journey with you 
            as we explore the ever-evolving world of fashion and beauty together.
          </p>
        </section>
      </div>
    </div>
  );
};

export default index;
