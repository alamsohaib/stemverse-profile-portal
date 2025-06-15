
import React, { useEffect, useState } from "react";
import { CalendarRange, MapPin, Zap, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type FeaturedHighlight = {
  id: string;
  title: string;
  start_date: string;
  location: string;
  duration: string;
  description: string;
  button_text: string | null;
  button_url: string | null;
  is_active: boolean;
  display_order: number;
};

const FeaturedHighlight = () => {
  const [highlights, setHighlights] = useState<FeaturedHighlight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHighlights();
  }, []);

  const fetchHighlights = async () => {
    try {
      const { data, error } = await supabase
        .from("featured_highlights")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) {
        console.error("Error fetching highlights:", error);
      } else {
        setHighlights(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section className="w-full flex justify-center py-12 px-4 bg-gradient-to-r from-[#fdf6e4] via-white to-blue-50">
        <div className="max-w-2xl w-full bg-white/90 rounded-2xl p-8 border border-accent/40 shadow-lg flex flex-col items-center gap-4 text-center animate-fade-in">
          <div className="animate-pulse">Loading highlights...</div>
        </div>
      </section>
    );
  }

  if (highlights.length === 0) {
    return null;
  }

  return (
    <section className="w-full flex justify-center py-12 px-4 bg-gradient-to-r from-[#fdf6e4] via-white to-blue-50">
      <div className="max-w-4xl w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {highlights.map((highlight) => (
              <CarouselItem key={highlight.id}>
                <div className="flex justify-center">
                  <div className="max-w-2xl w-full bg-white/90 rounded-2xl p-8 border border-accent/40 shadow-lg flex flex-col items-center gap-4 text-center animate-fade-in">
                    <span className="uppercase text-xs tracking-widest text-[#FFCE27] font-bold">Featured Highlight</span>
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-stemblue">
                      {highlight.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6 text-stemblue font-semibold text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <CalendarRange className="w-5 h-5" /> 
                        Start: {formatDate(highlight.start_date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-5 h-5" /> 
                        {highlight.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-5 h-5" /> 
                        {highlight.duration}
                      </span>
                    </div>
                    <div className="text-stemblue font-medium text-base mb-2 max-w-lg">
                      {highlight.description}
                    </div>
                    {highlight.button_url && (
                      <Button
                        size="lg"
                        className="mt-3 px-5 py-3 rounded-xl bg-stemblue text-accent font-bold shadow hover:scale-110 transition-all flex items-center gap-1"
                        onClick={() => window.open(highlight.button_url!, "_blank")}
                      >
                        {highlight.button_text || "Learn More"} <ArrowRight className="ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {highlights.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedHighlight;
