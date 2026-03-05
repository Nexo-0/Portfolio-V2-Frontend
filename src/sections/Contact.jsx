import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'; // Added Linkedin

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary">04.</span> Contact
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-secondary text-lg mb-8">
            I am available for freelance work and collaboration. Send me a message and I'll do my best to get back to you soon!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <div className="p-3 bg-surface rounded-full"><Mail className="text-primary" size={20} /></div>
              <div>
                <div className="font-medium text-white">Email</div>
                <a href="mailto:kunalpetare123@gmail.com" className="block hover:text-primary">contact@kunalpetare.in</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <div className="p-3 bg-surface rounded-full"><Phone className="text-primary" size={20} /></div>
              <div>
                <div className="font-medium text-white">Phone</div>
                <span>+91 9373805186</span>
              </div>
            </div>

            {/* NEW LINKEDIN SECTION */}
            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <div className="p-3 bg-surface rounded-full"><Linkedin className="text-primary" size={20} /></div>
              <div>
                <div className="font-medium text-white">LinkedIn</div>
                <a href="https://www.linkedin.com/in/kunal-petare" target="_blank" rel="noreferrer" className="block hover:text-primary">Connect on LinkedIn</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-secondary">
              <div className="p-3 bg-surface rounded-full"><MapPin className="text-primary" size={20} /></div>
              <div>
                <div className="font-medium text-white">Location</div>
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4 bg-surface/30 p-8 rounded-2xl border border-white/5">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="bg-background border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white" />
            <input type="email" placeholder="Email" className="bg-background border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-background border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white" />
          <textarea rows="4" placeholder="Message" className="w-full bg-background border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"></textarea>
          <button className="bg-primary text-background font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all w-full">
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};