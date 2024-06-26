

import Head from 'next/head';

const index = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Write for Us - Contribute Your Fashion and Beauty Insights</title>
        <meta name="description" content="Write for Us page for fashion and beauty insights." />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Write for Us - Contribute Your Fashion and Beauty Insights
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Write for Us?</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Exposure to a global audience passionate about fashion and beauty.</li>
            <li className="mb-2">Recognition for your expertise and industry insights.</li>
            <li className="mb-2">Networking opportunities with professionals in the field.</li>
            <li className="mb-2">Contribution to our community by sharing your knowledge.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Topics We Cover:</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Fashion trends (seasonal, street style, runway reviews)</li>
            <li className="mb-2">Beauty tips and tutorials (skincare, makeup, haircare)</li>
            <li className="mb-2">Lifestyle and fashion industry news</li>
            <li className="mb-2">Celebrity fashion and beauty trends</li>
            <li className="mb-2">Personal style stories and transformations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submission Guidelines:</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Submit original, well-researched content.</li>
            <li className="mb-2">Articles should be between 800-1500 words.</li>
            <li className="mb-2">Use clear headings, subheadings, and bullet points.</li>
            <li className="mb-2">Include high-quality, copyright-free images.</li>
            <li className="mb-2">Ensure your submission is free of grammatical errors.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Submit:</h2>
          <p className="mb-4">To submit your article or pitch an idea, please email us at <a href="mailto:usamamir.profession@gmail.com" className="text-blue-600 hover:underline">usamamir.profession@gmail.com</a>. Include your article as a Word document or Google Doc attachment. Our editorial team will review your submission and get back to you within [timeframe] with feedback or publication details.</p>
        </section>

        <section>
          <p className="text-gray-800 mb-4">
            Become a part of our community of fashion and beauty enthusiasts. Start sharing your insights and making an impact today!
          </p>
        </section>
      </div>
    </div>
  );
};

export default index;
