
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Heart Attack Survivor",
    image: "https://i.pravatar.cc/150?img=32",
    quote: "The system detected my heart attack even before I felt severe symptoms. It alerted emergency services while I was alone at home, and a nearby nurse received the alert and came to help. I'm alive today because of this technology.",
    stars: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Emergency Physician",
    image: "https://i.pravatar.cc/150?img=60",
    quote: "As a doctor, I've seen how critical those first few minutes are in an emergency. This system not only alerts us faster but provides vital information before we even reach the patient, allowing us to prepare the right response.",
    stars: 5,
  },
  {
    name: "Robert Williams",
    role: "Volunteer First Responder",
    image: "https://i.pravatar.cc/150?img=53",
    quote: "I joined the first responder network after retiring from nursing. Last month, I received an alert about someone having a seizure just a block away. I was able to provide care until paramedics arrived. This system makes volunteering my medical skills easy and effective.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-safety-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lives <span className="text-safety-600">Saved</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people whose lives were impacted by our emergency response system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <div className="mb-4 relative">
                  <Quote className="w-8 h-8 text-gray-200 absolute -left-1 -top-3 transform -scale-x-100" />
                  <p className="text-gray-600 relative z-10 pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-safety-600 text-white text-lg font-medium rounded-full">
            10,000+ users already protected
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
