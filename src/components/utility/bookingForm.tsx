"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuX } from "react-icons/lu";

interface BookingFormProps {setFormVisible: React.Dispatch<React.SetStateAction<boolean>>}

function BookingForm({ setFormVisible }: BookingFormProps) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => { 
      document.body.style.overflow = originalOverflow;
      previousActiveElement.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setFormVisible(false);
        return;
      }

      if (event.key !== "Tab") { return }
      if (!modalRef.current) { return }

      const focusableElements =
        modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      if (focusableElements.length === 0) { return }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey && document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => { document.removeEventListener("keydown", handleKeyDown) };
  }, [setFormVisible]);

  const submitMail = async ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append( "access_key", "c21a6802-8cce-4709-b512-fd58463490ba" );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult( "Thank you for contacting us! We'll reach out to you as soon as possible." );

        form.reset();
      } else {
        setResult( "Your message was not sent. Please try again later." );
      }
    } catch (error) {
      console.error("Submission error:", error);

      setResult( "Something went wrong. Please check your connection and try again." );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) { setFormVisible(false) }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-form-title"
        className=" relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl scrollbar-width-none sm:px-10 sm:py-12 "
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1
            id="booking-form-title"
            className=" font-serif text-3xl font-bold text-[var(--primary)] sm:text-4xl "
          >
            Book an Appointment
          </h1>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close booking form"
            onClick={() => setFormVisible(false)}
            className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--primary)]/60 transition-colors hover:bg-[var(--primary)]/10 hover:text-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 "
          >
            <LuX size={24} aria-hidden="true" />
          </button>
        </div>

        <form className="flex flex-col gap-4 text-black" onSubmit={submitMail} >
          <div>
            <label htmlFor="booking-name" className="mb-1 block text-sm font-medium text-gray-700" >
              Full Name
            </label>

            <input
              id="booking-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              className=" w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
            />
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="booking-email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="booking-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className=" w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label
                htmlFor="booking-phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="booking-phone"
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                className=" w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
              />
            </div>
          </div>

          {/* Date + Time */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="preferred-date"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Preferred Date
              </label>

              <input
                id="preferred-date"
                type="date"
                name="preferred_date"
                required
                className=" w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label
                htmlFor="preferred-time"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Preferred Time
              </label>

              <input
                id="preferred-time"
                type="time"
                name="preferred_time"
                required
                className=" w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="booking-service"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Service
            </label>

            <select
              id="booking-service"
              name="service"
              required
              defaultValue=""
              className=" w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
            >
              <option value="" disabled>
                Select Service
              </option>

              <optgroup label="Insurance">
                <option value="motor-insurance">
                  Motor Insurance
                </option>

                <option value="health-insurance">
                  Health Insurance
                </option>
              </optgroup>

              <optgroup label="Investments">
                <option value="wealth-investment-management">
                  Wealth & Investment Management
                </option>

                <option value="capital-growth-investments">
                  Capital Growth Investments
                </option>
              </optgroup>

              <optgroup label="Pension">
                <option value="personal-pension-plan">
                  Personal Pension Plan
                </option>

                <option value="retirement-investment-plan">
                  Retirement Investment Plan
                </option>
              </optgroup>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="booking-message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="booking-message"
              name="message"
              placeholder="Tell us how we can help you..."
              rows={5}
              required
              className=" w-full resize-none rounded-lg border border-gray-300 p-3 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 "
            />
          </div>

          {result && (
            <div role="status" aria-live="polite"
              className={` rounded-lg p-4 text-sm
                ${ result.includes("Thank you") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700" }
              `}
            >
              {result}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className=" w-full rounded-lg bg-[var(--accent)] p-3 font-semibold text-white transition hover:bg-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 "
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;