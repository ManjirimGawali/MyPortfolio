"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, User, Quote, Trash2, Edit3, X, Check, ShieldCheck } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import {
  PageTransition,
  ScrollReveal,
  HoverCard,
  StaggerContainer,
} from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  addReview,
  getReviews,
  deleteReview,
  updateReview,
  ADMIN_EMAIL,
  type Review,
} from "@/lib/firebase";
import { Footer } from "@/components/footer";

// Sample reviews for when Firebase is not configured
const sampleReviews: Review[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    message:
      "Manjiri is an exceptional developer with great attention to detail. Her code is clean and well-documented.",
    rating: 5,
    date: "2024-01-15",
    createdAt: { seconds: 1705276800, nanoseconds: 0 } as any,
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya@example.com",
    message:
      "Working with Manjiri was a great experience. She delivered the project on time and exceeded expectations.",
    rating: 5,
    date: "2024-02-20",
    createdAt: { seconds: 1708387200, nanoseconds: 0 } as any,
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit@example.com",
    message:
      "Highly skilled in both frontend and backend development. Would definitely recommend for any web project.",
    rating: 5,
    date: "2024-03-10",
    createdAt: { seconds: 1710028800, nanoseconds: 0 } as any,
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [editMessage, setEditMessage] = useState("");
  const [editRating, setEditRating] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [useFirebase, setUseFirebase] = useState(false);

  // Check if Firebase is configured
  useEffect(() => {
    const firebaseConfigured = !!(
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    );
    setUseFirebase(firebaseConfigured);

    if (firebaseConfigured) {
      loadReviews();
    } else {
      setIsLoading(false);
    }
  }, []);

  const loadReviews = async () => {
    setIsLoading(true);
    const fetchedReviews = await getReviews();
    if (fetchedReviews.length > 0) {
      setReviews(fetchedReviews);
    }
    setIsLoading(false);
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 0;

  const handleAdminLogin = () => {
    if (adminEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminEmail("");
    } else {
      alert("Invalid admin email");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const newReview = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      rating,
      date: new Date().toISOString().split("T")[0],
    };

    if (useFirebase) {
      const result = await addReview(newReview);
      if (result.success) {
        await loadReviews();
      }
    } else {
      // Local state update for demo
      setReviews([
        {
          ...newReview,
          id: Date.now().toString(),
          createdAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as any,
        },
        ...reviews,
      ]);
    }

    setName("");
    setEmail("");
    setMessage("");
    setRating(5);
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDelete = async (reviewId: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    if (useFirebase) {
      const result = await deleteReview(reviewId);
      if (result.success) {
        await loadReviews();
      }
    } else {
      setReviews(reviews.filter((r) => r.id !== reviewId));
    }
  };

  const handleEdit = (review: Review) => {
    setEditingReview(review);
    setEditMessage(review.message);
    setEditRating(review.rating);
  };

  const handleSaveEdit = async () => {
    if (!editingReview) return;

    if (useFirebase) {
      const result = await updateReview(editingReview.id, {
        message: editMessage,
        rating: editRating,
      });
      if (result.success) {
        await loadReviews();
      }
    } else {
      setReviews(
        reviews.map((r) =>
          r.id === editingReview.id
            ? { ...r, message: editMessage, rating: editRating }
            : r
        )
      );
    }

    setEditingReview(null);
    setEditMessage("");
    setEditRating(5);
  };

  return (
    <PortfolioLayout>
      <PageTransition>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold mb-4"
            >
              Reviews
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              What colleagues and collaborators say about working with me.
            </motion.p>

            {/* Admin Toggle */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              {isAdmin ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">Admin Mode</span>
                  <button
                    onClick={() => setIsAdmin(false)}
                    className="ml-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAdminLogin(true)}
                  className="text-muted-foreground"
                >
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Admin Login
                </Button>
              )}
            </motion.div>
          </div>

          {/* Admin Login Modal */}
          <AnimatePresence>
            {showAdminLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setShowAdminLogin(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-card rounded-3xl border border-border p-8 max-w-md w-full shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    Admin Login
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Enter the admin email to manage reviews.
                  </p>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="Enter admin email"
                      className="rounded-xl"
                      onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                    />
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setShowAdminLogin(false)}
                        className="flex-1 rounded-full"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleAdminLogin}
                        className="flex-1 rounded-full"
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rating Summary */}
          <ScrollReveal>
            <div className="bg-card rounded-3xl border border-border p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-8 h-8 ${
                      i < Math.round(averageRating)
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-4xl font-bold text-primary mb-2">
                {averageRating.toFixed(1)}
              </p>
              <p className="text-muted-foreground">
                Based on {reviews.length} reviews
              </p>
              {!useFirebase && (
                <p className="text-xs text-muted-foreground mt-2">
                  (Demo mode - connect Firebase to persist reviews)
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Write Review Form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-3xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6">Write a Review</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            star <= (hoveredRating || rating)
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your experience..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !name.trim() ||
                    !email.trim() ||
                    !message.trim()
                  }
                  className="w-full rounded-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Review
                    </span>
                  )}
                </Button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 text-center"
                  >
                    Thank you for your review!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Reviews List */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-xl font-semibold mb-6">All Reviews</h2>
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
                  />
                </div>
              ) : (
                <StaggerContainer className="space-y-4">
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <HoverCard>
                        <div className="bg-card rounded-2xl border border-border p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <User className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <h3 className="font-semibold">{review.name}</h3>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < review.rating
                                            ? "fill-primary text-primary"
                                            : "text-muted"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  {isAdmin && (
                                    <div className="flex items-center gap-1 ml-2">
                                      <button
                                        onClick={() => handleEdit(review)}
                                        className="p-1.5 rounded-lg hover:bg-accent transition-colors"
                                        title="Edit review"
                                      >
                                        <Edit3 className="w-4 h-4 text-muted-foreground" />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(review.id)}
                                        className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"
                                        title="Delete review"
                                      >
                                        <Trash2 className="w-4 h-4 text-destructive" />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="relative">
                                <Quote className="absolute -left-1 -top-1 w-4 h-4 text-primary/30" />
                                <p className="text-muted-foreground pl-4">
                                  {review.message}
                                </p>
                              </div>
                              <p className="text-xs text-muted-foreground mt-3">
                                {new Date(review.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </HoverCard>
                    </motion.div>
                  ))}
                </StaggerContainer>
              )}
            </div>
          </ScrollReveal>

          <Footer />
        </div>

        {/* Edit Review Modal */}
        <AnimatePresence>
          {editingReview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setEditingReview(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-3xl border border-border p-8 max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-primary" />
                  Edit Review
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Editing review by {editingReview.name}
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setEditRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= editRating
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setEditingReview(null)}
                      className="flex-1 rounded-full"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSaveEdit}
                      className="flex-1 rounded-full"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </PortfolioLayout>
  );
}
