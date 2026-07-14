import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, User } from 'lucide-react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ali Raza",
      role: "Student - COMSATS University Vehari Campus",
      rating: 5,
      comment: "Aftab is an incredible MERN stack developer! His skills and dedication to his projects at COMSATS are truly inspiring. Highly recommended for any web development work.",
      date: new Date().toLocaleDateString()
    }
  ]);

  const [newReview, setNewReview] = useState({ name: '', role: '', comment: '', rating: 5 });

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('portfolio_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const review = {
      ...newReview,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };

    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('portfolio_reviews', JSON.stringify(updatedReviews));
    
    // Reset form
    setNewReview({ name: '', role: '', comment: '', rating: 5 });
  };

  return (
    <section id="reviews" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Client & Peer <span className="text-primary">Reviews</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Add Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role / University (Optional)</label>
                <input
                  type="text"
                  value={newReview.role}
                  onChange={(e) => setNewReview({...newReview, role: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="e.g. Student - COMSATS Vehari"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReview({...newReview, rating: star})}
                      className={`transition-colors ${newReview.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      <Star fill={newReview.rating >= star ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Review</label>
                <textarea
                  required
                  rows="4"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Share your experience working with me..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Submit Review
              </button>
            </form>
          </motion.div>

          {/* Display Reviews */}
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{review.comment}"</p>
                <p className="text-xs text-gray-400 mt-4 text-right">{review.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
