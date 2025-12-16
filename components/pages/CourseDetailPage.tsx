"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";
import { User, Check, ChevronDown, ChevronUp } from "lucide-react";
import type { CourseDetail } from "@/data/courseDetails";

interface CourseDetailPageProps {
  course: CourseDetail;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course }) => {
  const [selectedBatch, setSelectedBatch] = useState(
    course.batches[0]?.id ?? ""
  );
  const firstModuleId = course.curriculum[0]?.id ?? null;
  const [openModule, setOpenModule] = useState<string | null>(firstModuleId);

  const selectedBatchData = useMemo(() => {
    if (!selectedBatch) {
      return course.batches[0];
    }
    return course.batches.find((b) => b.id === selectedBatch);
  }, [course.batches, selectedBatch]);

  const handleEnroll = () => {
    if (!selectedBatchData) {
      return;
    }

    window.location.href = "/payment";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{course.subtitle}</p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {course.instructor.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {course.instructor.credentials}
                    </p>
                  </div>
                  <StarRating
                    rating={course.instructor.rating}
                    size="sm"
                    showNumber
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Choose Your Batch
                  </h2>
                  <div className="space-y-4">
                    {course.batches.map((batch) => (
                      <div
                        key={batch.id}
                        onClick={() => setSelectedBatch(batch.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedBatch === batch.id
                            ? "border-primary-600 bg-primary-50"
                            : "border-gray-200 hover:border-primary-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {batch.name}
                          </h3>
                          <div className="text-right">
                            <span className="text-lg font-bold text-primary-600">
                              ₹{batch.price.toLocaleString()}
                            </span>
                            {batch.originalPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">
                                ₹{batch.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Duration: {batch.duration}
                        </p>
                        <Button
                          variant="primary"
                          size="sm"
                          className="mt-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEnroll();
                          }}
                        >
                          Enroll Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Course Curriculum
                  </h2>
                  <div className="space-y-2">
                    {course.curriculum.map((module) => (
                      <div key={module.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() =>
                            setOpenModule(
                              openModule === module.id ? null : module.id
                            )
                          }
                          className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900">
                            {module.title}
                          </span>
                          {openModule === module.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                        {openModule === module.id && (
                          <div className="p-4 pt-0 space-y-2">
                            {module.topics.map((topic, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-gray-700"
                              >
                                <Check className="w-4 h-4 text-green-600" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Student Reviews
                  </h2>
                  <div className="space-y-4">
                    {course.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {review.name}
                            </p>
                            <StarRating rating={review.rating} size="sm" />
                          </div>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    View All Reviews
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary-600">
                        ₹{selectedBatchData?.price.toLocaleString()}
                      </span>
                      {selectedBatchData?.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          ₹{selectedBatchData.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      15% OFF
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      What&apos;s Included:
                    </h3>
                    <ul className="space-y-2">
                      {course.tags.map((tag, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mb-4"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </Button>

                  <div className="text-center space-y-2 text-sm text-gray-600">
                    <p>EMI available from ₹1,833/month</p>
                    <p className="flex items-center justify-center gap-1">
                      <span>🔒</span> Secure Payment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;

