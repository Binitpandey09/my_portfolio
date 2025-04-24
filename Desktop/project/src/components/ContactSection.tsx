import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github as GitHub, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      className={`py-20 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-lg shadow-lg ${
              darkMode ? 'bg-slate-800' : 'bg-white'
            }`}>
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-slate-700' : 'bg-blue-100'
                  }`}>
                    <Mail size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:vnitpandey05@gmail.com" 
                      className="text-blue-500 hover:underline"
                    >
                      vnitpandey05@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-slate-700' : 'bg-green-100'
                  }`}>
                    <Phone size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+919507442952" 
                      className="text-green-500 hover:underline"
                    >
                      +91-95074-42952
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-slate-700' : 'bg-purple-100'
                  }`}>
                    <MapPin size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>Lovely Professional University</p>
                    <p>Phagwara, Punjab, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-slate-700' : 'bg-gray-100'
                  }`}>
                    <GitHub size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/BinItpandey09" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline"
                    >
                      github.com/BinItpandey09
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-slate-700' : 'bg-blue-100'
                  }`}>
                    <Linkedin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/binit-pandey" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline"
                    >
                      linkedin.com/in/binit-pandey
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-lg shadow-lg ${
              darkMode ? 'bg-slate-800' : 'bg-white'
            }`}>
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;