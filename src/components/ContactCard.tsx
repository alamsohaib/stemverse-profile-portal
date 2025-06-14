
const ContactCard = () => (
  <section className="w-full flex justify-center py-8 animate-fade-in">
    <div className="bg-white/80 px-10 py-7 rounded-2xl shadow-lg border border-border flex flex-col items-center gap-2 w-full max-w-lg">
      <h3 className="heading text-2xl font-bold text-stemblue mb-2">Connect with STEMverse</h3>
      <p className="mb-2 text-gray-700 text-center">
        Interested in collaborating or learning more? We'd love to hear from you!
      </p>
      <a
        href="mailto:info@stemverse.com"
        className="inline-block mt-3 px-6 py-2 bg-stemblue text-white rounded-lg font-semibold transition hover:bg-primary animate-scale-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        info@stemverse.com
      </a>
    </div>
  </section>
);

export default ContactCard;
