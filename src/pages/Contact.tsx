
import NavBar from "@/components/NavBar";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

const Contact = () => {
  const { register, handleSubmit, formState, reset } = useForm<{ name: string; email: string; message: string }>();
  const onSubmit = (data: any) => {
    alert("Thank you for contacting STEMverse! We'll be in touch soon.");
    reset();
  };
  return (
    <main className="w-full flex flex-col items-center bg-background min-h-screen">
      <NavBar />
      <section id="contact" className="w-full py-14 md:py-20 bg-yellow-50">
        <div className="max-w-lg mx-auto px-4 bg-white/80 rounded-2xl shadow-md border border-stemblue/20 py-10">
          <h2 className="text-2xl font-playfair font-bold text-center text-stemblue mb-2">Have Questions? Reach Out!</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input 
              type="text"
              placeholder="Name"
              className="py-2 px-4 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-blue-200 outline-none"
              {...register("name", { required: true })}
            />
            <input 
              type="email"
              placeholder="Email"
              className="py-2 px-4 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-blue-200 outline-none"
              {...register("email", { required: true })}
            />
            <textarea
              placeholder="Your message"
              className="py-2 px-4 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-blue-200 outline-none min-h-[90px] resize-y"
              {...register("message", { required: true })}
            />
            <Button type="submit" size="lg" className="bg-stemblue hover:bg-yellow-400 text-white font-semibold mt-4">Send <MousePointerClick className="ml-1" /></Button>
          </form>
          <div className="flex flex-col items-center mt-6 text-xs text-gray-500 gap-1">
            <span>Email: <a className="underline text-blue-800" href="mailto:stemsverse@gmail.com">stemsverse@gmail.com</a></span>
            <span>WhatsApp: <a className="underline text-green-700" href="https://wa.me/923020558423" target="_blank" rel="noopener noreferrer">+92‑302‑0558423</a></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
