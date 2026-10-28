import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Phone, MapPin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mblyyygr", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Something went wrong!",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Network error!",
        description: "Please check your connection.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white mb-3">
            Connect & <span className="text-red-500">Collaborate</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            {[{
              icon: Mail,
              title: "Email Address",
              desc: "Drop me a line anytime",
              value: "saurabhlakhan4545@gmail.com"
            }, {
              icon: Phone,
              title: "Phone Number",
              desc: "Call for urgent queries",
              value: "+91 8530587167"
            }, {
              icon: MapPin,
              title: "Location",
              desc: "Based in tech hub",
              value: "Pune, Maharashtra, India"
            }].map((item, idx) => (
              <div key={idx} className="glassmorphism p-6 rounded-xl hover-glow group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500 transition-colors">
                    <item.icon className="w-6 h-6 text-red-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
                <p className="text-red-400 font-medium break-words">{item.value}</p>
              </div>
            ))}

            {/* Socials */}
            <div className="glassmorphism p-6 rounded-xl hover-glow">
              <h3 className="text-lg font-semibold text-white mb-4">Follow My Journey On</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/saurabh-lakhan-015777327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-red-500/20 rounded-lg hover:bg-blue-600 group hover:scale-105 transition-all"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/Saurabh-1435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-red-500/20 rounded-lg hover:bg-gray-800 group hover:scale-105 transition-all"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/iam_dev45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-red-500/20 rounded-lg hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:via-[#962fbf] hover:to-[#4f5bd5] group hover:scale-105 transition-all"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-6 sm:p-8 rounded-xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Send Message</h3>
              <p className="text-gray-400 text-sm sm:text-base">Tell me about your project and let's make it happen!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-1">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 h-11"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-1">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 h-11"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-1">Project Details</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 text-base font-semibold hover-glow transition-transform hover:scale-105"
              >
                Send Message ☺️
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
