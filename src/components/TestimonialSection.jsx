
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Student Success Stories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Hear from our graduates who have achieved their dreams through quality education at AIRADS College.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <div className="text-6xl mb-6">"</div>
            <blockquote className="text-2xl mb-8 leading-relaxed italic">
              I studied in AIRADS Kericho Campus in 2016. Indeed it is where my dreams were hatched and 
              ultimately I am who I am today because of this institution. I will live to remember this college.
            </blockquote>
            <div className="border-t border-white/20 pt-6">
              <cite className="text-xl font-semibold not-italic">Janeth Chepkorir</cite>
              <p className="text-blue-200 mt-2">Class of 2016, Kericho Campus</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-2">5000+</h3>
            <p className="text-blue-200">Graduates</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-2">90-100%</h3>
            <p className="text-blue-200">Pass Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-2">7</h3>
            <p className="text-blue-200">Campuses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
