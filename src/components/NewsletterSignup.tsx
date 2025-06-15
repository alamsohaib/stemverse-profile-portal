
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
    <section className="w-full flex justify-center py-12 px-4 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      <Card className="max-w-2xl w-full bg-purple-400/90 border-none shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Send Message
            </h2>
            <p className="text-black/80 text-lg">
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
              className="w-full py-4 px-6 rounded-full border-2 border-black/20 bg-purple-300/50 placeholder:text-black/60 text-black text-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent"
            />
            
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full py-4 px-6 rounded-full border-2 border-black/20 bg-purple-300/50 placeholder:text-black/60 text-black text-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent"
            />
            
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full py-4 px-6 rounded-3xl border-2 border-black/20 bg-purple-300/50 placeholder:text-black/60 text-black text-lg focus:ring-2 focus:ring-purple-700 focus:border-transparent resize-none"
            />
            
            <Button
              type="submit"
              className="w-full py-4 px-8 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-colors shadow-lg"
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
