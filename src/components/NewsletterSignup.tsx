
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:quratulain@mystemverse.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full flex justify-center py-12 px-4 bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7]">
      <Card className="max-w-2xl w-full bg-white/90 border-2 border-[#ffce27]/30 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#263868] mb-4">
              Send Message
            </h2>
            <p className="text-[#263868]/80 text-lg">
              Have Questions? Reach out. We'd love to assist!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full py-4 px-6 rounded-full border-2 border-[#ffce27]/40 bg-[#f3f6fb]/70 placeholder:text-[#263868]/60 text-[#263868] text-lg focus:ring-2 focus:ring-[#263868] focus:border-[#263868]"
            />
            
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full py-4 px-6 rounded-full border-2 border-[#ffce27]/40 bg-[#f3f6fb]/70 placeholder:text-[#263868]/60 text-[#263868] text-lg focus:ring-2 focus:ring-[#263868] focus:border-[#263868]"
            />
            
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full py-4 px-6 rounded-3xl border-2 border-[#ffce27]/40 bg-[#f3f6fb]/70 placeholder:text-[#263868]/60 text-[#263868] text-lg focus:ring-2 focus:ring-[#263868] focus:border-[#263868] resize-none"
            />
            
            <Button
              type="submit"
              className="w-full py-4 px-8 bg-[#263868] text-[#ffce27] font-bold text-lg rounded-full hover:bg-[#3851a6] hover:text-white transition-colors shadow-lg"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default NewsletterSignup;
